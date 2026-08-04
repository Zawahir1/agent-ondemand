"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagicRings from "@/components/MagicRings";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, User, Check, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogPostData {
  title: string;
  publishedAt: string;
  author: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string | null;
  keyTakeaways: readonly string[];
  faqs: readonly FAQItem[];
  schemaOverride?: string;
  translations: Record<string, string>;
}

interface BlogContentClientProps {
  post: BlogPostData;
  content: any; // AST nodes from Keystatic content()
  slug: string;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export default function BlogContentClient({ post, content, slug }: BlogContentClientProps) {
  const { t, registerBlogTranslations } = useLanguage();
  const [activeHeading, setActiveHeading] = useState<string>("");

  useEffect(() => {
    if (post.translations) {
      registerBlogTranslations(post.translations as any);
    }
    return () => {
      registerBlogTranslations(null);
    };
  }, [post.translations, registerBlogTranslations]);

  // Extract H2 headings from the content AST nodes for the ToC
  const headings = useMemo(() => {
    const list: { id: string; text: string }[] = [];
    const traverse = (node: any) => {
      if (node.type === 'heading' && node.level === 2) {
        const text = node.children?.map((c: any) => c.text || '').join('') || '';
        if (text) {
          list.push({ id: slugify(text), text });
        }
      }
      if (node.children) {
        node.children.forEach(traverse);
      }
    };
    if (Array.isArray(content)) {
      content.forEach(traverse);
    }
    return list;
  }, [content]);

  // Track page scroll to highlight active ToC link
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + 120; // offset

      let currentActive = "";
      for (const el of headingElements) {
        if (el.offsetTop <= scrollPosition) {
          currentActive = el.id;
        } else {
          break;
        }
      }
      if (currentActive) {
        setActiveHeading(currentActive);
      } else if (headings.length > 0) {
        setActiveHeading(headings[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Init status
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  // Build the automated SEO JSON-LD schemas
  const schemas = useMemo(() => {
    // If a custom JSON-LD schema block override is provided by developers, parse and return it
    if (post.schemaOverride && post.schemaOverride.trim()) {
      try {
        return JSON.parse(post.schemaOverride);
      } catch (e) {
        console.error("Failed to parse custom schema override JSON, falling back to auto schema:", e);
      }
    }

    // Auto-generate standard schema
    const articleJson = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.metaDescription,
      "image": post.ogImage ? `https://www.agent-ondemand.com${post.ogImage}` : undefined,
      "datePublished": post.publishedAt,
      "author": {
        "@type": "Organization",
        "name": "Agent On Demand",
        "url": "https://www.agent-ondemand.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Agent On Demand",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.agent-ondemand.com/images/agent.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.agent-ondemand.com/blog/${slug}`
      }
    };

    if (post.faqs && post.faqs.length > 0) {
      const faqJson = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
      return [articleJson, faqJson];
    }

    return articleJson;
  }, [post, slug]);

  // Custom styling for rendering Keystatic rich document blocks
  const customRenderers = useMemo(() => ({
    block: {
      heading: ({ level, children }: any) => {
        const text = children.map((c: any) => c.text || '').join('');
        const id = level === 2 ? slugify(text) : undefined;
        
        switch (level) {
          case 1:
            return (
              <h1 className="text-3xl md:text-5xl font-intrinseca text-[#fbf9f7] mb-6 mt-12 leading-tight">
                {children}
              </h1>
            );
          case 2:
            return (
              <h2
                id={id}
                className="text-2xl md:text-4xl font-intrinseca text-[#fbf9f7] mb-6 mt-16 scroll-mt-28 border-b border-[#00ff66]/10 pb-3"
              >
                {children}
              </h2>
            );
          case 3:
            return (
              <h3 className="text-xl md:text-2xl font-intrinseca text-[#fbf9f7] mb-4 mt-10 leading-snug">
                {children}
              </h3>
            );
          default:
            return (
              <h4 className="text-lg font-intrinseca text-[#fbf9f7] mb-4 mt-8">
                {children}
              </h4>
            );
        }
      },
      paragraph: ({ children }: any) => (
        <p className="text-[#fbf9f7]/80 font-helvetica text-base md:text-lg leading-relaxed mb-6">
          {children}
        </p>
      ),
      list: ({ type, children }: any) => {
        const Tag = type === 'ordered' ? 'ol' : 'ul';
        return (
          <Tag className={`list-outside pl-6 mb-8 ${type === 'ordered' ? 'list-decimal' : 'list-disc'} text-[#fbf9f7]/80 space-y-3 text-base md:text-lg`}>
            {children}
          </Tag>
        );
      },
      divider: () => <hr className="border-[#00ff66]/10 my-12" />,
      table: ({ children }: any) => (
        <div className="overflow-x-auto my-8 border border-white/10 rounded-[1.5rem] bg-white/5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <table className="w-full text-left border-collapse min-w-[500px]">
            {children}
          </table>
        </div>
      ),
      tableHeader: ({ children }: any) => (
        <thead className="bg-[#00ff66]/10 border-b border-white/10 text-[#00ff66] font-semibold text-sm md:text-base">
          {children}
        </thead>
      ),
      tableBody: ({ children }: any) => (
        <tbody className="divide-y divide-white/5 text-sm md:text-base text-[#fbf9f7]/90 font-helvetica">
          {children}
        </tbody>
      ),
      tableRow: ({ children }: any) => (
        <tr className="hover:bg-white/5 transition-colors duration-150">{children}</tr>
      ),
      tableCell: ({ children, header }: any) => {
        const Tag = header ? 'th' : 'td';
        return (
          <Tag className="p-4 border border-white/5 leading-relaxed">
            {children}
          </Tag>
        );
      }
    }
  }), []);

  const formattedDate = useMemo(() => {
    return new Date(post.publishedAt).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }, [post.publishedAt]);

  return (
    <main className="min-h-screen bg-black text-[#fbf9f7] relative overflow-hidden flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Navbar />

      {/* Decorative Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ height: "100%", width: "100%" }}>
        <MagicRings
          color="#00ff66"
          colorTwo="#006227"
          ringCount={6}
          speed={1}
          attenuation={30}
          lineThickness={1}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={0.15}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={2}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 w-full flex-grow">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#00ff66] hover:text-[#00dd55] transition-colors mb-8 font-semibold font-helvetica"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Article Header (H1) */}
        <header className="max-w-4xl mb-12">
          <h1 className="text-4xl md:text-6xl font-intrinseca text-[#fbf9f7] leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#fbf9f7]/45 font-helvetica border-y border-[#00ff66]/10 py-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#00ff66]" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#00ff66]" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.ogImage && (
          <div className="w-full aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <img
              src={post.ogImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Two-Column Content Layout (Sidebar ToC + Article Body) */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Table of Contents Sticky Sidebar (Desktop only) */}
          {headings.length > 0 && (
            <aside className="hidden lg:block w-72 shrink-0 sticky top-28 bg-white/5 border border-white/10 p-6 rounded-[1.5rem] backdrop-blur-xl">
              <h2 className="text-lg font-intrinseca text-[#fbf9f7] mb-4 border-b border-[#00ff66]/15 pb-2">
                {t("blog.toc.heading" as any, "Table of Contents")}
              </h2>
              <nav className="space-y-3 text-sm font-helvetica">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`block leading-relaxed transition-colors duration-150 ${
                      activeHeading === heading.id
                        ? "text-[#00ff66] font-semibold"
                        : "text-[#fbf9f7]/60 hover:text-[#fbf9f7]"
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </aside>
          )}

          {/* Core Post Article Content */}
          <article className="flex-grow max-w-4xl w-full">
            {/* Key Takeaways Highlight Box */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <section className="mb-12 bg-gradient-to-br from-[#00ff66]/10 to-[#006227]/5 border border-[#00ff66]/20 p-6 md:p-8 rounded-[1.5rem] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,255,102,0.05)]">
                <h2 className="text-xl md:text-2xl font-intrinseca text-[#fbf9f7] mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#00ff66] shrink-0" />
                  {t("blog.takeaways.heading" as any, "Key Takeaways")}
                </h2>
                <ul className="space-y-3 font-helvetica text-[#fbf9f7]/90 text-base md:text-lg">
                  {post.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] mt-2.5 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Rendered Keystatic AST content */}
            <div className="blog-content-body">
              <DocumentRenderer document={content} renderers={customRenderers} />
            </div>

            {/* Dynamic FAQs Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-16 border-t border-[#00ff66]/10 pt-12">
                <h2 className="text-2xl md:text-3xl font-intrinseca mb-8 text-[#fbf9f7]">
                  {t("blog.faq.heading" as any, "Frequently Asked Questions")}
                </h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white/5 border border-white/10 rounded-[1.2rem] p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer backdrop-blur-md transition-all duration-300 hover:border-[#00ff66]/20"
                    >
                      <summary className="flex justify-between items-center font-intrinseca text-lg text-[#fbf9f7] hover:text-[#00ff66] transition-colors focus:outline-none select-none">
                        <span>{faq.question}</span>
                        <ChevronDown className="w-5 h-5 text-[#00ff66] transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <p className="mt-4 text-sm md:text-base text-[#fbf9f7]/70 leading-relaxed font-helvetica border-t border-[#00ff66]/5 pt-4">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
}

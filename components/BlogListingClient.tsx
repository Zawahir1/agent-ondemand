"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagicRings from "@/components/MagicRings";
import Link from "next/link";
import { useMemo } from "react";

interface BlogPost {
  slug: string;
  entry: {
    title: string;
    publishedAt: string;
    author: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    ogImage: string | null;
    language: string;
  };
}

interface BlogListingClientProps {
  posts: BlogPost[];
}

export default function BlogListingClient({ posts }: BlogListingClientProps) {
  const { t, language: currentLang } = useLanguage();

  // Filter posts by active language, fallback to English if none exist for active language
  const { filteredPosts, isFallback } = useMemo(() => {
    let list = posts.filter((post) => post.entry.language === currentLang);
    let fallback = false;

    if (list.length === 0 && currentLang !== "en") {
      list = posts.filter((post) => post.entry.language === "en");
      fallback = true;
    }

    const sorted = [...list].sort((a, b) => {
      const dateA = new Date(a.entry.publishedAt).getTime();
      const dateB = new Date(b.entry.publishedAt).getTime();
      return dateB - dateA;
    });

    return { filteredPosts: sorted, isFallback: fallback };
  }, [posts, currentLang]);

  // Generate metadata JSON-LD dynamically for the blog listing page
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": t("blog.heading" as any, "Our Blog"),
    "description": t("blog.meta.desc" as any, "Read our latest articles about Vocal AI and Voice Automation"),
    "publisher": {
      "@type": "Organization",
      "name": "Agent On Demand",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.agent-ondemand.com/images/agent.png"
      }
    },
    "blogPost": filteredPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.entry.title,
      "description": post.entry.description,
      "datePublished": post.entry.publishedAt,
      "author": {
        "@type": "Person",
        "name": post.entry.author
      },
      "url": `https://www.agent-ondemand.com/blog/${post.slug}`
    }))
  };

  return (
    <main className="min-h-screen bg-black text-[#fbf9f7] relative overflow-hidden flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
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
          opacity={0.2}
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
        {/* Page Title & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-intrinseca text-[#fbf9f7] mb-6 tracking-normal">
            {t("blog.heading" as any, "Our Blog")}
          </h1>
          <p className="text-lg md:text-xl text-[#fbf9f7]/60 leading-relaxed font-helvetica">
            {t("blog.paragraph" as any, "The future of vocal AI is changing how businesses connect with customers.")}
          </p>
        </div>

        {isFallback && (
          <div className="max-w-xl mx-auto mb-10 bg-[#00ff66]/10 border border-[#00ff66]/20 p-4 rounded-xl text-center text-sm text-[#fbf9f7]/85 font-helvetica backdrop-blur-md">
            Showing articles in English as there are no translations available in your selected language.
          </div>
        )}

        {/* Blog Post Grid: 3 columns on large screen, 1 on mobile */}
        {filteredPosts.length === 0 ? (
          <div className="text-center text-[#fbf9f7]/40 py-20 font-helvetica">
            No articles published yet. Stay tuned!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const imageSrc = post.entry.ogImage || "/images/homepage-hero-graphic.jpg";
              const formattedDate = new Date(post.entry.publishedAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              return (
                <article
                  key={post.slug}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.5rem] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#00ff66]/40 hover:shadow-[0_10px_30px_rgba(0,255,102,0.1)] group"
                >
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative aspect-[16/10]">
                    <img
                      src={imageSrc}
                      alt={post.entry.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Meta Date and Author Info */}
                      <div className="flex items-center gap-4 text-xs text-[#fbf9f7]/45 mb-3 font-helvetica">
                        <span>{formattedDate}</span>
                        <span>•</span>
                        <span>{post.entry.author}</span>
                      </div>

                      {/* Blog Post H1 - visually truncated but fully in DOM for SEO */}
                      <h2 className="text-xl md:text-2xl font-intrinseca text-[#fbf9f7] mb-3 group-hover:text-[#00ff66] transition-colors duration-200">
                        <Link href={`/blog/${post.slug}`} className="line-clamp-2">
                          {post.entry.title}
                        </Link>
                      </h2>

                      {/* Excerpt/First Paragraph - visually truncated but fully in DOM for SEO */}
                      <p className="text-sm text-[#fbf9f7]/60 leading-relaxed font-helvetica line-clamp-3 mb-6">
                        {post.entry.description}
                      </p>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00ff66] hover:text-[#00dd55] transition-colors duration-200"
                    >
                      Read Article <span className="text-xs">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

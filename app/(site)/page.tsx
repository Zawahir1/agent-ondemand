'use client';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import ProblemSolution from "@/components/ProblemSolution";
import FeatureCarousel from "@/components/FeatureCarousel";
import Features from "@/components/Features";
import MeetReceptionist from "@/components/MeetReceptionist";
import AgentsAvailable from "@/components/AgentsAvailable";
import TestAgent from "@/components/TestAgent";
import CallAutomationFeatures from "@/components/CallAutomationFeatures";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import MeetAvaCTA from "@/components/MeetAvaCTA";
import ExpandedCapabilities from "@/components/ExpandedCapabilities";
import Integration from "@/components/Integration";
import ActionableConversations from "@/components/ActionableConversations";
import FaqSection from "@/components/FaqSection";
import Press from "@/components/Press";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MagicRings from "@/components/MagicRings";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.agent-ondemand.com/#organization",
        "name": "Agent On Demand",
        "url": "https://www.agent-ondemand.com/",
        "logo": "https://www.agent-ondemand.com/images/agent.png",
        "description": "Agent On Demand is an AI call agent platform that answers calls, books appointments, and qualifies leads 24/7 for businesses across real estate, healthcare, automotive, fitness, and more.",
        "sameAs": [
          "https://www.linkedin.com/company/agent-on-demand",
          "https://twitter.com/agentondemand"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-888-321-4321",
          "contactType": "sales",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Italian"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.agent-ondemand.com/#website",
        "url": "https://www.agent-ondemand.com/",
        "name": "Agent On Demand",
        "publisher": { "@id": "https://www.agent-ondemand.com/#organization" }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.agent-ondemand.com/#software",
        "name": "Agent On Demand",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "AI Call Agent / AI Receptionist Software",
        "operatingSystem": "Web",
        "url": "https://www.agent-ondemand.com/",
        "description": "An AI call agent that answers every incoming call instantly, books appointments into Google Calendar and Outlook, qualifies leads by intent and urgency, and transfers priority calls to staff — 24/7, in 30+ languages.",
        "publisher": { "@id": "https://www.agent-ondemand.com/#organization" },
        "offers": {
          "@type": "Offer",
          "url": "https://www.agent-ondemand.com/pricing",
          "priceCurrency": "USD",
          "price": "499",
          "priceValidUntil": "2026-12-31"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-transparent px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

<div style={{ width: '100%', height: '100%', position: 'absolute' }}>
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
    opacity={0.3}
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
      <section id="hero">
        <Hero />
      </section>

      <section id="test-agent">
        <TestAgent />
      </section>

      <section id="logos">
        <LogoMarquee />
      </section>

      <section id="problem">
        <ProblemSolution />
      </section>

      <section id="receptionist">
        <MeetReceptionist />
      </section>

      <section id="features">
        <FeatureCarousel />
        <Features />
      </section>

      <section id="agents">
        <AgentsAvailable />
      </section>

      <section id="toolbox">
        <CallAutomationFeatures />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <MeetAvaCTA />
      </section>

      <section id="capabilities">
        <ExpandedCapabilities />
      </section>

      <section id="integrations">
        <Integration />
      </section>

      <section id="actionable">
        <ActionableConversations />
      </section>

      <section id="faq">
        <FaqSection />
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
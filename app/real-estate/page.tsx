"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RealEstateMockup from "@/components/RealEstateMockup";
import MeetAvaCTA from "@/components/MeetAvaCTA";
import ProductsHero from "@/components/ProductsHero";
import MeetProduct from "@/components/MeetProduct";
import TestAgent from "@/components/TestAgent";
import WhyProduct from "@/components/WhyProduct";
import ProductFeatures from "@/components/ProductFeatures";
import ProductAutomationFeatures from "@/components/ProductAutomationFeatures";
import ProductUseCases from "@/components/ProductUseCases";
import KeyProductFeatures from "@/components/KeyProductFeatures";
import ProductAgentVsHuman from "@/components/ProductAgentVsHuman";
import WhyChooseProduct from "@/components/WhyChooseProduct";
import ProductStructuredData from "@/components/ProductStructuredData";
import ProductCTA from "@/components/ProductCTA";
import ProductsFAQ from "@/components/ProductsFAQ";
import ProductFinalCTA from "@/components/ProductFinalCTA";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";
import { Home, Key, Calendar, PhoneIncoming, Users, UserCheck, Clock, AlertTriangle, User, Sliders, Euro, Compass, CalendarDays, Building2, Construction, Database, FileText, Brain, Sparkles } from "lucide-react";

export default function RealEstatePage() {
    const { t } = useLanguage();

    const calendarCard1 = {
        name: "Markus Schmidt",
        role: "Physical Tour - 124 Oak Drive",
        status: t("realestate.mockup.confirmedTour")
    };

    const calendarCard2 = {
        name: "Sarah Jenkins",
        role: "Listing Consultation",
        status: t("realestate.mockup.confirmedTour")
    };

    const features = [
        {
            id: 0,
            title: t("realestate.features.step1.title"),
            description: t("realestate.features.step1.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    {/* Traditional Way */}
                    <div className="bg-red-950/15 backdrop-blur-md p-4 rounded-xl border border-red-500/15 shadow-[0_0_15px_rgba(239,68,68,0.03)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 block mb-2">{t("slides.works.1.trad.title")}</span>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold mb-1">{t("realestate.features.step1.trad.1")}</p>
                        <p className="text-[11px] text-[#fbf9f7]/45 font-medium">{t("realestate.features.step1.trad.2")}</p>
                    </div>
                    {/* AI Way */}
                    <div className="bg-emerald-950/35 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/25 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff66] block mb-2">{t("slides.works.1.ai.title")}</span>
                        <p className="text-sm text-white font-bold mb-1.5">{t("realestate.features.step1.ai.1")}</p>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold">{t("realestate.features.step1.ai.2")}</p>
                    </div>
                </div>
            )
        },
        {
            id: 1,
            title: t("realestate.features.step2.title"),
            description: t("realestate.features.step2.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    {/* Traditional Way */}
                    <div className="bg-red-950/15 backdrop-blur-md p-4 rounded-xl border border-red-500/15 shadow-[0_0_15px_rgba(239,68,68,0.03)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 block mb-2">{t("slides.works.1.trad.title")}</span>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold mb-1">{t("realestate.features.step2.trad.1")}</p>
                        <p className="text-[11px] text-[#fbf9f7]/45 font-medium">{t("realestate.features.step2.trad.2")}</p>
                    </div>
                    {/* AI Way */}
                    <div className="bg-emerald-950/35 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/25 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff66] block mb-2">{t("slides.works.1.ai.title")}</span>
                        <p className="text-sm text-white font-bold mb-1.5">{t("realestate.features.step2.ai.1")}</p>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold">{t("realestate.features.step2.ai.2")}</p>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: t("realestate.features.step3.title"),
            description: t("realestate.features.step3.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    {/* Traditional Way */}
                    <div className="bg-red-950/15 backdrop-blur-md p-4 rounded-xl border border-red-500/15 shadow-[0_0_15px_rgba(239,68,68,0.03)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 block mb-2">{t("slides.works.1.trad.title")}</span>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold mb-1">{t("realestate.features.step3.trad.1")}</p>
                        <p className="text-[11px] text-[#fbf9f7]/45 font-medium">{t("realestate.features.step3.trad.2")}</p>
                    </div>
                    {/* AI Way */}
                    <div className="bg-emerald-950/35 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/25 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff66] block mb-2">{t("slides.works.1.ai.title")}</span>
                        <p className="text-sm text-white font-bold mb-1.5">{t("realestate.features.step3.ai.1")}</p>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold">{t("realestate.features.step3.ai.2")}</p>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: t("realestate.features.step4.title"),
            description: t("realestate.features.step4.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    {/* Traditional Way */}
                    <div className="bg-red-950/15 backdrop-blur-md p-4 rounded-xl border border-red-500/15 shadow-[0_0_15px_rgba(239,68,68,0.03)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 block mb-2">{t("slides.works.1.trad.title")}</span>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold mb-1">{t("realestate.features.step4.trad.1")}</p>
                        <p className="text-[11px] text-[#fbf9f7]/45 font-medium">{t("realestate.features.step4.trad.2")}</p>
                    </div>
                    {/* AI Way */}
                    <div className="bg-emerald-950/35 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/25 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff66] block mb-2">{t("slides.works.1.ai.title")}</span>
                        <p className="text-sm text-white font-bold mb-1.5">{t("realestate.features.step4.ai.1")}</p>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold">{t("realestate.features.step4.ai.2")}</p>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: t("realestate.features.step5.title"),
            description: t("realestate.features.step5.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    {/* Traditional Way */}
                    <div className="bg-red-950/15 backdrop-blur-md p-4 rounded-xl border border-red-500/15 shadow-[0_0_15px_rgba(239,68,68,0.03)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 block mb-2">{t("slides.works.1.trad.title")}</span>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold mb-1">{t("realestate.features.step5.trad.1")}</p>
                        <p className="text-[11px] text-[#fbf9f7]/45 font-medium">{t("realestate.features.step5.trad.2")}</p>
                    </div>
                    {/* AI Way */}
                    <div className="bg-emerald-950/35 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/25 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#00ff66] block mb-2">{t("slides.works.1.ai.title")}</span>
                        <p className="text-sm text-white font-bold mb-1.5">{t("realestate.features.step5.ai.1")}</p>
                        <p className="text-xs text-[#fbf9f7]/70 font-semibold">{t("realestate.features.step5.ai.2")}</p>
                    </div>
                </div>
            )
        }
    ];

    const automationFeatures = [
        {
            id: "contact",
            icon: User,
            title: t("realestate.automation.item1.title"),
            description: t("realestate.automation.item1.desc")
        },
        {
            id: "preferences",
            icon: Sliders,
            title: t("realestate.automation.item2.title"),
            description: t("realestate.automation.item2.desc")
        },
        {
            id: "budget",
            icon: Euro,
            title: t("realestate.automation.item3.title"),
            description: t("realestate.automation.item3.desc")
        },
        {
            id: "intent",
            icon: Compass,
            title: t("realestate.automation.item4.title"),
            description: t("realestate.automation.item4.desc")
        },
        {
            id: "viewings",
            icon: CalendarDays,
            title: t("realestate.automation.item5.title"),
            description: t("realestate.automation.item5.desc")
        },
        {
            id: "qualification",
            icon: UserCheck,
            title: t("realestate.automation.item6.title"),
            description: t("realestate.automation.item6.desc")
        }
    ];

    const useCases = [
        {
            id: "agencies",
            title: t("realestate.usecases.item1.title"),
            description: t("realestate.usecases.item1.desc"),
            image: "/images/re_agency_usecase.png",
            icon: Building2
        },
        {
            id: "brokers",
            title: t("realestate.usecases.item2.title"),
            description: t("realestate.usecases.item2.desc"),
            image: "/images/re_broker_usecase.png",
            icon: UserCheck
        },
        {
            id: "rental",
            title: t("realestate.usecases.item3.title"),
            description: t("realestate.usecases.item3.desc"),
            image: "/images/re_rental_usecase.png",
            icon: Key
        },
        {
            id: "managers",
            title: t("realestate.usecases.item4.title"),
            description: t("realestate.usecases.item4.desc"),
            image: "/images/re_manager_usecase.png",
            icon: Home
        },
        {
            id: "developers",
            title: t("realestate.usecases.item5.title"),
            description: t("realestate.usecases.item5.desc"),
            image: "/images/re_developer_usecase.png",
            icon: Construction
        }
    ];

    const keyFeatures = [
        {
            id: "answering",
            title: t("realestate.keyfeatures.item1.title"),
            description: t("realestate.keyfeatures.item1.desc"),
            icon: Clock
        },
        {
            id: "scheduler",
            title: t("realestate.keyfeatures.item2.title"),
            description: t("realestate.keyfeatures.item2.desc"),
            icon: Calendar
        },
        {
            id: "qualification",
            title: t("realestate.keyfeatures.item3.title"),
            description: t("realestate.keyfeatures.item3.desc"),
            icon: UserCheck
        },
        {
            id: "integration",
            title: t("realestate.keyfeatures.item4.title"),
            description: t("realestate.keyfeatures.item4.desc"),
            icon: Database
        },
        {
            id: "transcripts",
            title: t("realestate.keyfeatures.item5.title"),
            description: t("realestate.keyfeatures.item5.desc"),
            icon: FileText
        },
        {
            id: "learning",
            title: t("realestate.keyfeatures.item6.title"),
            description: t("realestate.keyfeatures.item6.desc"),
            icon: Brain
        }
    ];

    const beforeComparisonItems = [
        t("realestate.agentvshuman.traditional.1"),
        t("realestate.agentvshuman.traditional.2"),
        t("realestate.agentvshuman.traditional.3"),
        t("realestate.agentvshuman.traditional.4"),
        t("realestate.agentvshuman.traditional.5")
    ];

    const afterComparisonItems = [
        t("realestate.agentvshuman.agent.1"),
        t("realestate.agentvshuman.agent.2"),
        t("realestate.agentvshuman.agent.3"),
        t("realestate.agentvshuman.agent.4"),
        t("realestate.agentvshuman.agent.5")
    ];

    const whyChooseBenefits = [
        { 
            id: "inquiry", 
            title: t("realestate.whychoose.item1"),
            description: t("why.experience.desc"),
            icon: Clock
        },
        { 
            id: "viewings", 
            title: t("realestate.whychoose.item2"),
            description: t("why.booking.desc"),
            icon: Calendar
        },
        { 
            id: "quality", 
            title: t("realestate.whychoose.item3"),
            description: t("toolbox.qualification.desc"),
            icon: UserCheck
        },
        { 
            id: "workload", 
            title: t("realestate.whychoose.item4"),
            description: t("why.admin.desc"),
            icon: Users
        },
        { 
            id: "seconds", 
            title: t("realestate.whychoose.item5"),
            description: t("why.lead.desc"),
            icon: PhoneIncoming
        },
        { 
            id: "scale", 
            title: t("realestate.whychoose.item6"),
            description: t("why.scale.desc"),
            icon: Building2
        }
    ];

    const structuredDataItems = [
        {
            id: 0,
            icon: User,
            title: t("realestate.structured.item1.title"),
            description: t("realestate.structured.item1.desc"),
            widgetTitle: t("realestate.structured.item1.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1">
                    <div className="text-sm font-bold text-white">Markus Schmidt</div>
                    <div className="text-xs text-[#00ff66]/90 font-semibold">{t("realestate.mockup.tab1")}</div>
                    <div className="text-[11px] text-[#fbf9f7]/60 mt-1">Phone: +49 152 901234</div>
                    <div className="text-[10px] text-[#fbf9f7]/40">Email: m.schmidt@domain.de</div>
                </div>
            )
        },
        {
            id: 1,
            icon: Euro,
            title: t("realestate.structured.item3.title"),
            description: t("realestate.structured.item3.desc"),
            widgetTitle: t("realestate.structured.item3.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1">
                    <div className="text-sm font-bold text-[#00ff66]">€450,000 - €500,000</div>
                    <div className="text-xs text-[#fbf9f7]/60">{t("realestate.mockup.mortgage")}</div>
                    <div className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 w-fit mt-1.5 uppercase tracking-wider">
                        Vetted
                    </div>
                </div>
            )
        },
        {
            id: 2,
            icon: Home,
            title: t("realestate.structured.item2.title"),
            description: t("realestate.structured.item2.desc"),
            widgetTitle: t("realestate.structured.item2.title"),
            colSpan: 2,
            widgetContent: (
                <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl px-3.5 py-2">
                        <span className="text-[11px] text-[#fbf9f7]/50 font-bold uppercase tracking-wider">{t("realestate.mockup.targetProperty")}</span>
                        <span className="text-xs font-bold text-white">{t("realestate.mockup.address")}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                        <span className="text-[10px] bg-emerald-950/40 border border-emerald-900/30 text-emerald-350 px-2.5 py-1 rounded-lg font-semibold">{t("realestate.mockup.tag1")}</span>
                        <span className="text-[10px] bg-emerald-950/40 border border-emerald-900/30 text-emerald-350 px-2.5 py-1 rounded-lg font-semibold">{t("realestate.mockup.tag2")}</span>
                        <span className="text-[10px] bg-emerald-950/40 border border-emerald-900/30 text-emerald-350 px-2.5 py-1 rounded-lg font-semibold">{t("realestate.mockup.tag3")}</span>
                        <span className="text-[10px] bg-emerald-950/40 border border-emerald-900/30 text-emerald-350 px-2.5 py-1 rounded-lg font-semibold">{t("realestate.mockup.tag4")}</span>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            icon: Calendar,
            title: t("realestate.structured.item4.title"),
            description: t("realestate.structured.item4.desc"),
            widgetTitle: t("realestate.structured.item4.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1">
                    <div className="text-sm font-bold text-white">{t("realestate.mockup.confirmedTour")}</div>
                    <div className="text-xs text-emerald-400 font-bold">{t("realestate.mockup.viewingTime")}</div>
                    <div className="text-[9px] text-[#fbf9f7]/40 mt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {t("realestate.mockup.calendarSynced")}
                    </div>
                </div>
            )
        },
        {
            id: 4,
            icon: Sparkles,
            title: t("realestate.structured.item5.title"),
            description: t("realestate.structured.item5.desc"),
            widgetTitle: t("realestate.structured.item5.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                        <span className="text-2xl font-black text-[#00ff66]">98</span>
                        <span className="text-xs text-[#fbf9f7]/40">/ 100</span>
                    </div>
                    <div className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded text-emerald-450 font-bold uppercase tracking-wider w-fit">
                        Hot Lead
                    </div>
                </div>
            )
        },
        {
            id: 5,
            icon: FileText,
            title: t("realestate.structured.item6.title"),
            description: t("realestate.structured.item6.desc"),
            widgetTitle: t("realestate.structured.item6.title"),
            colSpan: 2,
            widgetContent: (
                <div className="space-y-3">
                    <p className="text-xs text-[#fbf9f7]/70 leading-relaxed italic">
                        &ldquo;{t("realestate.mockup.summaryText")}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 text-[10px] border-t border-[#00ff66]/10 pt-2 text-[#fbf9f7]/45 font-medium">
                        <span className="flex items-center gap-1"><span className="text-emerald-450">✓</span> Audio recorded</span>
                        <span className="flex items-center gap-1"><span className="text-emerald-450">✓</span> CRM updated</span>
                    </div>
                </div>
            )
        }
    ];

    const faqItems = [
        {
            id: 1,
            question: t("realestate.faq.q1"),
            answer: t("realestate.faq.a1")
        },
        {
            id: 2,
            question: t("realestate.faq.q2"),
            answer: t("realestate.faq.a2")
        },
        {
            id: 3,
            question: t("realestate.faq.q3"),
            answer: t("realestate.faq.a3")
        },
        {
            id: 4,
            question: t("realestate.faq.q4"),
            answer: t("realestate.faq.a4")
        },
        {
            id: 5,
            question: t("realestate.faq.q5"),
            answer: t("realestate.faq.a5")
        },
        {
            id: 6,
            question: t("realestate.faq.q6"),
            answer: t("realestate.faq.a6")
        },
        {
            id: 7,
            question: t("realestate.faq.q7"),
            answer: t("realestate.faq.a7")
        },
        {
            id: 8,
            question: t("realestate.faq.q8"),
            answer: t("realestate.faq.a8")
        },
        {
            id: 9,
            question: t("realestate.faq.q9"),
            answer: t("realestate.faq.a9")
        },
        {
            id: 10,
            question: t("realestate.faq.q10"),
            answer: t("realestate.faq.a10")
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "AI Call Agent for Real Estate",
                "serviceType": "AI Call Handling for Real Estate Agencies",
                "provider": { "@id": "https://www.agent-ondemand.com/#software" },
                "url": "https://www.agent-ondemand.com/real-estate",
                "description": "A 24/7 AI call agent for real estate agencies that answers buyer and seller calls, qualifies leads by budget and requirements, and books property viewings directly into agents' calendars.",
                "areaServed": "Worldwide",
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Real estate agencies, property managers, brokers"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can the AI call agent book property viewings automatically?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It checks agent availability in real time and schedules property viewings directly into the calendar, confirming with the caller instantly."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can it qualify buyer and seller leads?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It captures budget range, mortgage pre-approval status, property requirements, and timeline, then scores each lead by intent."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does it keep listing information up to date?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. The agent learns from connected listing sources and updates property details on an ongoing basis."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does it work outside office hours?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It answers buyer and seller calls 24/7, including evenings and weekends when most home searches happen."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-transparent px-4">
            <title>{t("realestate.meta.title" as TranslationKey)}</title>
            <meta name="description" content={t("realestate.meta.desc" as TranslationKey)} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navbar />

            {/* ── HERO SECTION ── */}
            <ProductsHero
                titleLine1={t("realestate.hero.titleLine1")}
                titleGradient={t("realestate.hero.titleGradient")}
                subtitle={t("realestate.hero.subtitle")}
                description={t("realestate.hero.description")}
                detailParagraphs={[
                    t("realestate.hero.para1"),
                    t("realestate.hero.para2")
                ]}
                bulletPoints={[
                    t("realestate.hero.bullet1"),
                    t("realestate.hero.bullet2"),
                    t("realestate.hero.bullet3")
                ]}
            />

            {/* ── INTERACTIVE TESTING SANDBOX ── */}
            <TestAgent 
                initialAgentId="realestate" 
                allowedAgents={["realestate"]} 
                allowedTabs={["call"]} 
            />

            {/* ── MEET PRODUCT SECTION ── */}
            <MeetProduct
                titleLine1={t("realestate.meet.titleLine1")}
                titleGradient={t("realestate.meet.titleGradient")}
                paragraphs={[
                    t("realestate.meet.para1"),
                    t("realestate.meet.para2")
                ]}
                listHeader={t("realestate.meet.listHeader")}
                listItems={[
                    { text: t("realestate.meet.item1"), icon: PhoneIncoming },
                    { text: t("realestate.meet.item2"), icon: Users },
                    { text: t("realestate.meet.item3"), icon: Calendar },
                    { text: t("realestate.meet.item4"), icon: UserCheck },
                    { text: t("realestate.meet.item5"), icon: Clock }
                ]}
            />
            {/* ── WHY PRODUCT SECTION ── */}
            <WhyProduct
                badge={t("realestate.why.badge")}
                title={t("realestate.why.title")}
                descriptionTop={t("realestate.why.descTop")}
                descriptionBottom={t("realestate.why.descBottom")}
                itemIcon={AlertTriangle}
                listItems={[
                    t("realestate.why.item1"),
                    t("realestate.why.item2"),
                    t("realestate.why.item3"),
                    t("realestate.why.item4"),
                    t("realestate.why.item5")
                ]}
            />
             <ProductFeatures
                sectionTitle={t("realestate.features.title")}
                sectionSubtitle={t("realestate.features.subtitle")}
                features={features}
            />
             {/* ── LEAD AUTOMATION FEATURES GRID ── */}
            <ProductAutomationFeatures
                sectionTitle={t("realestate.automation.title")}
                sectionSubtitleTop={t("realestate.automation.subtitleTop")}
                sectionSubtitleBottom={t("realestate.automation.subtitleBottom")}
                features={automationFeatures}
            />
             <ProductUseCases
                sectionTitle={t("realestate.usecases.title")}
                useCases={useCases}
                ctaText={t("hero.startTrial")}
            />
            {/* ── KEY PRODUCT FEATURES SECTION ── */}
            <KeyProductFeatures
                sectionTitle={t("realestate.keyfeatures.title")}
                features={keyFeatures}
            />


            {/* ── AGENT VS HUMAN COMPARISON SECTION ── */}
            <ProductAgentVsHuman
                sectionTitle={t("realestate.agentvshuman.title")}
                beforeTitle={t("realestate.agentvshuman.beforeTitle")}
                afterTitle={t("realestate.agentvshuman.afterTitle")}
                beforeItems={beforeComparisonItems}
                afterItems={afterComparisonItems}
            />

            

            
            {/* ── CALL HANDLING FEATURES SECTION ── */}
           

            

            {/* ── WHY CHOOSE PRODUCT SECTION ── */}
            <WhyChooseProduct
                badge="Benefits"
                title={t("realestate.whychoose.title")}
                description={t("realestate.whychoose.desc")}
                benefits={whyChooseBenefits}
            />

            

           

            {/* ── STRUCTURED DATA SECTION ── */}
            <ProductStructuredData
                subtitle={t("realestate.structured.subtitle")}
                title={t("realestate.structured.title")}
                description={t("realestate.structured.desc")}
                footerText={t("realestate.structured.footer")}
                items={structuredDataItems}
            />

            {/* ── PRODUCT USE CASES SECTION ── */}
           

            {/* ── PRODUCT SPECIFIC CTA ── */}
            <ProductCTA
                title={t("realestate.cta.title")}
                subtitle={t("realestate.cta.subtitle")}
                description={t("realestate.cta.desc")}
                buttonText={t("realestate.cta.btn")}
            />

            {/* ── TESTIMONIAL SECTION ── */}
            <section className="py-24 bg-transparent relative z-10">
                <div className="max-w-5xl mx-auto px-6">
                    <div
                        style={{ background: 'linear-gradient(135deg, #03140a 0%, #010703 100%)' }}
                        className="rounded-[2.5rem] border border-emerald-500/15 p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group"
                    >
                        <div className="flex-1 text-left space-y-6">
                            <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                                Real Estate Success
                            </span>
                            <p className="text-xl md:text-2xl text-[#fbf9f7]/85 font-medium leading-relaxed italic">
                                &ldquo;{t("testimonials.1.text")}&rdquo;
                            </p>
                            <div className="border-t border-emerald-950/40 pt-4 flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-[#fbf9f7]">{t("testimonials.1.author")}</h4>
                                    <p className="text-sm text-[#fbf9f7]/55">{t("testimonials.1.title")}, {t("testimonials.1.logo")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRODUCTS FAQ SECTION ── */}
            <ProductsFAQ
                title={t("realestate.faq.title")}
                subtitle={t("realestate.faq.subtitle")}
                faqItems={faqItems}
            />

            {/* ── CONTACT/LEAD FORM ── */}
            <section id="contact" className="py-16">
                <MeetAvaCTA />
            </section>

            <ProductFinalCTA
                title={t("realestate.finalcta.title")}
                subtitle1={t("realestate.finalcta.subtitle1")}
                subtitle2={t("realestate.finalcta.subtitle2")}
                description={t("realestate.finalcta.desc")}
                subbuttonText={t("realestate.finalcta.subbtn")}
                buttonText={t("realestate.finalcta.btn")}
                calendarCard1={calendarCard1}
                calendarCard2={calendarCard2}
            />

            <Footer />
        </main>
    );
}

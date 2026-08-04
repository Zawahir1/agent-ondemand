"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GymMockup from "@/components/GymMockup";
import MeetAvaCTA from "@/components/MeetAvaCTA";
import ProductsHero from "@/components/ProductsHero";
import MeetProduct from "@/components/MeetProduct";
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
import GymConversations from "@/components/GymConversations";
import SetupSimple from "@/components/SetupSimple";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";
import { Home, Key, Calendar, PhoneIncoming, Users, UserCheck, UserPlus, Settings, Clock, AlertTriangle, User, Sliders, Euro, Compass, CalendarDays, Building2, Construction, Database, FileText, Brain, Sparkles, Stethoscope, Scale, Scissors, Car, Dumbbell, Wrench, Hotel, GraduationCap, ShoppingBag, PhoneCall, HelpCircle, Info, Send, Volume2, Play, Bell, RefreshCw, Link2, Shield, BarChart3 } from "lucide-react";

export default function GymPage() {
    const { t } = useLanguage();

    const calendarCard1 = {
        name: "Markus Schmidt",
        role: "Physical Tour - 124 Oak Drive",
        status: t("gym.mockup.confirmedTour")
    };

    const calendarCard2 = {
        name: "Sarah Jenkins",
        role: "Listing Consultation",
        status: t("gym.mockup.confirmedTour")
    };

    const features = [
        {
            id: 0,
            title: t("gym.features.step1.title"),
            description: t("gym.features.step1.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-[#00ff66]/10 pb-3 mb-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse" />
                                <span className="text-xs font-bold text-white uppercase tracking-wider">{t("mockup.liveCall" as TranslationKey)}</span>
                            </div>
                            <span className="text-[10px] text-[#fbf9f7]/40 font-mono">00:45</span>
                        </div>
                        <div className="space-y-3.5">
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-[9px] text-[#fbf9f7]/40 font-bold uppercase tracking-wider">{t("mockup.prospect" as TranslationKey)}</span>
                                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-3.5 py-2 text-xs text-[#fbf9f7]/85 max-w-[85%] leading-relaxed font-semibold">
                                    "{t("gym.mockup.dialogue.customer" as TranslationKey)}"
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="text-[9px] text-[#00ff66]/80 font-bold uppercase tracking-wider">{t("mockup.aiReceptionist" as TranslationKey)}</span>
                                <div className="bg-emerald-950/45 border border-[#00ff66]/20 rounded-2xl rounded-tr-none px-3.5 py-2 text-xs text-white max-w-[85%] leading-relaxed font-semibold shadow-[0_0_15px_rgba(0,255,102,0.05)]">
                                    "{t("gym.mockup.dialogue.agent" as TranslationKey)}"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 1,
            title: t("gym.features.step2.title"),
            description: t("gym.features.step2.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Sliders className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.membershipPlans" as TranslationKey)}</span>
                            <span className="text-[9px] bg-emerald-500/10 text-[#00ff66] px-2 py-0.5 rounded font-bold uppercase tracking-wider">{t("mockup.active" as TranslationKey)}</span>
                        </div>
                        <div className="space-y-3.5">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.standardTier" as TranslationKey)}</span>
                                <span className="text-sm font-bold text-white mt-0.5 block">{t("mockup.standardTierDesc" as TranslationKey)}</span>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.allAccessPremium" as TranslationKey)}</span>
                                <span className="text-sm font-bold text-white mt-0.5 block">{t("mockup.allAccessPremiumDesc" as TranslationKey)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: t("gym.features.step3.title"),
            description: t("gym.features.step3.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.classBooking" as TranslationKey)}</span>
                            <span className="text-[9px] bg-emerald-500/10 text-[#00ff66] px-2 py-0.5 rounded font-bold uppercase tracking-wider">{t("mockup.scheduled" as TranslationKey)}</span>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3.5">
                                <div className="text-xs text-[#fbf9f7]/40 font-bold uppercase tracking-wider mb-1">{t("mockup.sessionDetails" as TranslationKey)}</div>
                                <div className="text-sm font-bold text-white">{t("mockup.powerYogaClass" as TranslationKey)}</div>
                                <div className="text-xs text-[#00ff66] font-semibold mt-0.5">{t("mockup.friday6pm" as TranslationKey)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: t("gym.features.step4.title"),
            description: t("gym.features.step4.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Send className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.trialPassDelivery" as TranslationKey)}</span>
                            <span className="text-[9px] text-[#00ff66] font-bold uppercase tracking-wider">{t("mockup.delivered" as TranslationKey)}</span>
                        </div>
                        <div className="border border-white/5 rounded-xl p-3.5 bg-white/5 space-y-2">
                            <div className="bg-[#00ff66]/10 border border-[#00ff66]/15 rounded-xl rounded-tr-none p-3 text-xs text-white max-w-[90%] leading-relaxed font-semibold">
                                "{t("gym.mockup.dialogue.sms" as TranslationKey)}"
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: t("gym.features.step5.title"),
            description: t("gym.features.step5.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Sliders className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.staffRouting" as TranslationKey)}</span>
                            <span className="text-[10px] bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-yellow-500/20">{t("mockup.transferring" as TranslationKey)}</span>
                        </div>
                        <div className="space-y-3 text-xs">
                            <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-3">
                                <div>
                                    <div className="text-sm font-bold text-white">{t("mockup.membershipOffice" as TranslationKey)}</div>
                                    <div className="text-[10px] text-[#fbf9f7]/40 mt-0.5">{t("mockup.customPackageInquiry" as TranslationKey)}</div>
                                </div>
                                <span className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse shrink-0" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const automationFeatures = [
        {
            id: "contact",
            icon: User,
            title: t("gym.automation.item1.title"),
            description: t("gym.automation.item1.desc")
        },
        {
            id: "goals",
            icon: Dumbbell,
            title: t("gym.automation.item2.title"),
            description: t("gym.automation.item2.desc")
        },
        {
            id: "preferences",
            icon: Sparkles,
            title: t("gym.automation.item3.title"),
            description: t("gym.automation.item3.desc")
        },
        {
            id: "membership",
            icon: Euro,
            title: t("gym.automation.item4.title"),
            description: t("gym.automation.item4.desc")
        },
        {
            id: "trials",
            icon: Calendar,
            title: t("gym.automation.item5.title"),
            description: t("gym.automation.item5.desc")
        },
        {
            id: "followup",
            icon: Clock,
            title: t("gym.automation.item6.title"),
            description: t("gym.automation.item6.desc")
        },
        {
            id: "status",
            icon: UserCheck,
            title: t("gym.automation.item7.title"),
            description: t("gym.automation.item7.desc")
        }
    ];

    const useCases = [
        {
            id: "gyms",
            title: t("gym.usecases.item1.title"),
            description: t("gym.usecases.item1.desc"),
            image: "/images/retail_agent.png",
            icon: UserCheck
        },
        {
            id: "yoga",
            title: t("gym.usecases.item2.title"),
            description: t("gym.usecases.item2.desc"),
            image: "/images/hospitality_agent.png",
            icon: Sparkles
        },
        {
            id: "trainers",
            title: t("gym.usecases.item3.title"),
            description: t("gym.usecases.item3.desc"),
            image: "/images/salon_agent.png",
            icon: Calendar
        },
        {
            id: "crossfit",
            title: t("gym.usecases.item4.title"),
            description: t("gym.usecases.item4.desc"),
            image: "/images/homeservice_agent.png",
            icon: Dumbbell
        },
        {
            id: "wellness",
            title: t("gym.usecases.item5.title"),
            description: t("gym.usecases.item5.desc"),
            image: "/images/healthcare_agent.png",
            icon: Home
        },
        {
            id: "sports",
            title: t("gym.usecases.item6.title"),
            description: t("gym.usecases.item6.desc"),
            image: "/images/education_agent.png",
            icon: FileText
        }
    ];

    const keyFeatures = [
        {
            id: "answering",
            title: t("gym.keyfeatures.item1.title"),
            description: t("gym.keyfeatures.item1.desc"),
            icon: Clock
        },
        {
            id: "scheduling",
            title: t("gym.keyfeatures.item2.title"),
            description: t("gym.keyfeatures.item2.desc"),
            icon: Calendar
        },
        {
            id: "leadqual",
            title: t("gym.keyfeatures.item3.title"),
            description: t("gym.keyfeatures.item3.desc"),
            icon: UserCheck
        },
        {
            id: "calintegration",
            title: t("gym.keyfeatures.item4.title"),
            description: t("gym.keyfeatures.item4.desc"),
            icon: Database
        },
        {
            id: "transcripts",
            title: t("gym.keyfeatures.item5.title"),
            description: t("gym.keyfeatures.item5.desc"),
            icon: FileText
        },
        {
            id: "multibranch",
            title: t("gym.keyfeatures.item6.title"),
            description: t("gym.keyfeatures.item6.desc"),
            icon: Brain
        }
    ];

    const beforeComparisonItems = [
        t("gym.agentvshuman.traditional.1"),
        t("gym.agentvshuman.traditional.2"),
        t("gym.agentvshuman.traditional.3"),
        t("gym.agentvshuman.traditional.4"),
        t("gym.agentvshuman.traditional.5"),
        t("gym.agentvshuman.traditional.6"),
        t("gym.agentvshuman.traditional.7"),
        t("gym.agentvshuman.traditional.8")
    ];

    const afterComparisonItems = [
        t("gym.agentvshuman.agent.1"),
        t("gym.agentvshuman.agent.2"),
        t("gym.agentvshuman.agent.3"),
        t("gym.agentvshuman.agent.4"),
        t("gym.agentvshuman.agent.5"),
        t("gym.agentvshuman.agent.6"),
        t("gym.agentvshuman.agent.7"),
        t("gym.agentvshuman.agent.8")
    ];

    const whyChooseBenefits = [
        { 
            id: "memberships", 
            title: t("gym.whychoose.item1.title"),
            description: t("gym.whychoose.item1.desc"),
            icon: UserCheck
        },
        { 
            id: "trials", 
            title: t("gym.whychoose.item2.title"),
            description: t("gym.whychoose.item2.desc"),
            icon: Calendar
        },
        { 
            id: "scheduling", 
            title: t("gym.whychoose.item3.title"),
            description: t("gym.whychoose.item3.desc"),
            icon: Sliders
        },
        { 
            id: "workload", 
            title: t("gym.whychoose.item4.title"),
            description: t("gym.whychoose.item4.desc"),
            icon: Users
        },
        { 
            id: "leads", 
            title: t("gym.whychoose.item5.title"),
            description: t("gym.whychoose.item5.desc"),
            icon: Send
        },
        { 
            id: "scale", 
            title: t("gym.whychoose.item6.title"),
            description: t("gym.whychoose.item6.desc"),
            icon: Brain
        },
        { 
            id: "retention", 
            title: t("gym.whychoose.item7.title"),
            description: t("gym.whychoose.item7.desc"),
            icon: Sparkles
        }
    ];

    const systemBehindFeatures = [
        {
            id: "summaries",
            title: t("gym.system.item1.title"),
            description: t("gym.system.item1.desc"),
            icon: FileText
        },
        {
            id: "alerts",
            title: t("gym.system.item2.title"),
            description: t("gym.system.item2.desc"),
            icon: Bell
        },
        {
            id: "reminders",
            title: t("gym.system.item3.title"),
            description: t("gym.system.item3.desc"),
            icon: Clock
        },
        {
            id: "recovery",
            title: t("gym.system.item4.title"),
            description: t("gym.system.item4.desc"),
            icon: RefreshCw
        },
        {
            id: "syncing",
            title: t("gym.system.item5.title"),
            description: t("gym.system.item5.desc"),
            icon: Database
        },
        {
            id: "billing",
            title: t("gym.system.item6.title"),
            description: t("gym.system.item6.desc"),
            icon: BarChart3
        },
        {
            id: "learning",
            title: t("gym.system.item7.title"),
            description: t("gym.system.item7.desc"),
            icon: Brain
        },
        {
            id: "workflow",
            title: t("gym.system.item8.title"),
            description: t("gym.system.item8.desc"),
            icon: Sliders
        },
        {
            id: "integrations",
            title: t("gym.system.item9.title"),
            description: t("gym.system.item9.desc"),
            icon: Link2
        },
        {
            id: "compliance",
            title: t("gym.system.item10.title"),
            description: t("gym.system.item10.desc"),
            icon: Shield
        }
    ];

    const structuredDataItems = [
        {
            id: 0,
            icon: User,
            title: t("gym.structured.item1.title"),
            description: t("gym.structured.item1.desc"),
            widgetTitle: t("gym.structured.item1.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1">
                    <div className="text-sm font-bold text-white">David Miller</div>
                    <div className="text-xs text-[#00ff66]/90 font-semibold">{t("gym.mockup.tab1")}</div>
                    <div className="text-[11px] text-[#fbf9f7]/60 mt-1">Phone: +1 555-0199</div>
                </div>
            )
        },
        {
            id: 1,
            icon: Dumbbell,
            title: t("gym.structured.item2.title"),
            description: t("gym.structured.item2.desc"),
            widgetTitle: t("gym.structured.item2.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1.5">
                    <div className="text-xs text-white/50">Goals Captured</div>
                    <div className="text-xs text-[#00ff66] font-bold">Strength & Power Yoga</div>
                </div>
            )
        },
        {
            id: 2,
            icon: Sparkles,
            title: t("gym.structured.item3.title"),
            description: t("gym.structured.item3.desc"),
            widgetTitle: t("gym.structured.item3.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1.5">
                    <div className="text-xs text-white/40">{t("gym.mockup.qualifiedBudget")}</div>
                    <div className="text-sm font-bold text-white">{t("gym.mockup.mortgage")}</div>
                </div>
            )
        },
        {
            id: 3,
            icon: Calendar,
            title: t("gym.structured.item4.title"),
            description: t("gym.structured.item4.desc"),
            widgetTitle: t("gym.structured.item4.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1.5">
                    <div className="text-xs text-[#fbf9f7]/70 font-semibold">{t("gym.mockup.confirmedTour")}</div>
                    <div className="flex items-center gap-1 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {t("gym.mockup.viewingTime")}
                    </div>
                </div>
            )
        },
        {
            id: 4,
            icon: UserCheck,
            title: t("gym.structured.item5.title"),
            description: t("gym.structured.item5.desc"),
            widgetTitle: t("gym.structured.item5.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-2">
                    <div className="text-lg font-black text-[#00ff66]">Qualified</div>
                    <div className="text-[9px] text-[#fbf9f7]/40 block font-semibold uppercase">Interested Lead</div>
                </div>
            )
        },
        {
            id: 5,
            icon: FileText,
            title: t("gym.structured.item6.title"),
            description: t("gym.structured.item6.desc"),
            widgetTitle: t("gym.structured.item6.title"),
            colSpan: 2,
            widgetContent: (
                <div className="space-y-3">
                    <p className="text-xs text-[#fbf9f7]/70 leading-relaxed italic">
                        &ldquo;{t("gym.mockup.summaryText")}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 text-[10px] border-t border-[#00ff66]/10 pt-2 text-[#fbf9f7]/45 font-medium">
                        <span className="flex items-center gap-1"><span className="text-emerald-455">✓</span> Mindbody Synced</span>
                    </div>
                </div>
            )
        }
    ];

    const faqItems = [
        {
            id: 1,
            question: t("gym.faq.q1"),
            answer: t("gym.faq.a1")
        },
        {
            id: 2,
            question: t("gym.faq.q2"),
            answer: t("gym.faq.a2")
        },
        {
            id: 3,
            question: t("gym.faq.q3"),
            answer: t("gym.faq.a3")
        },
        {
            id: 4,
            question: t("gym.faq.q4"),
            answer: t("gym.faq.a4")
        },
        {
            id: 5,
            question: t("gym.faq.q5"),
            answer: t("gym.faq.a5")
        },
        {
            id: 6,
            question: t("gym.faq.q6"),
            answer: t("gym.faq.a6")
        },
        {
            id: 7,
            question: t("gym.faq.q7"),
            answer: t("gym.faq.a7")
        },
        {
            id: 8,
            question: t("gym.faq.q8"),
            answer: t("gym.faq.a8")
        },
        {
            id: 9,
            question: t("gym.faq.q9"),
            answer: t("gym.faq.a9")
        },
        {
            id: 10,
            question: t("gym.faq.q10"),
            answer: t("gym.faq.a10")
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "AI Call Agent for Fitness Businesses",
                "serviceType": "AI Call Handling for Gyms and Fitness Studios",
                "provider": { "@id": "https://www.agent-ondemand.com/#software" },
                "url": "https://www.agent-ondemand.com/gym",
                "description": "A 24/7 AI call agent for gyms, fitness studios, and personal trainers that answers member calls, books classes and personal training sessions, schedules trial and guest passes, and captures new membership leads.",
                "areaServed": "Worldwide",
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Gyms, fitness studios, yoga and pilates studios, personal trainers, CrossFit boxes, wellness centers"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is an AI call agent for fitness businesses?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It's a 24/7 AI call agent built for gyms and fitness studios that answers member and prospect calls, books classes and training sessions, and captures new membership leads automatically."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can it book gym classes and personal training sessions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It checks class schedules in real time, locks in the member's slot, and sends a confirmation by SMS."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does it work after gym hours?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It operates 24/7, so trial requests and membership inquiries are captured even outside staffed hours."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will it replace gym staff?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. It removes repetitive phone and booking tasks so front-desk staff and trainers can focus on members in the building, and it escalates complex requests to staff when needed."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-transparent px-4">
            <title>{t("gym.meta.title" as TranslationKey)}</title>
            <meta name="description" content={t("gym.meta.desc" as TranslationKey)} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navbar />

            {/* ── HERO SECTION ── */}
            <ProductsHero
                titleLine1={t("gym.hero.titleLine1")}
                titleGradient={t("gym.hero.titleGradient")}
                subtitle={t("gym.hero.subtitle")}
                description={t("gym.hero.description")}
                detailParagraphs={[
                    t("gym.hero.para1"),
                    t("gym.hero.para2")
                ]}
                bulletPoints={[
                    t("gym.hero.bullet1"),
                    t("gym.hero.bullet2"),
                    t("gym.hero.bullet3")
                ]}
            />
            {/* ── MEET PRODUCT SECTION ── */}
            <MeetProduct
                titleLine1={t("gym.meet.titleLine1")}
                titleGradient={t("gym.meet.titleGradient")}
                paragraphs={[
                    t("gym.meet.para1"),
                    t("gym.meet.para2")
                ]}
                listHeader={t("gym.meet.listHeader")}
                listItems={[
                    { text: t("gym.meet.item1"), icon: PhoneCall },
                    { text: t("gym.meet.item2"), icon: UserPlus },
                    { text: t("gym.meet.item3"), icon: Calendar },
                    { text: t("gym.meet.item4"), icon: Sliders },
                    { text: t("gym.meet.item5"), icon: Settings },
                    { text: t("gym.meet.item6"), icon: Clock },
                    { text: t("gym.meet.item7"), icon: Brain }
                ]}
                ctaPrimary={t("gym.meet.ctaPrimary")}
                ctaSecondary={t("gym.meet.ctaSecondary")}
            />
            {/* ── WHY PRODUCT SECTION ── */}
            <WhyProduct
                badge={t("gym.why.badge")}
                title={t("gym.why.title")}
                descriptionTop={t("gym.why.descTop")}
                descriptionBottom={t("gym.why.descBottom")}
                itemIcon={AlertTriangle}
                listItems={[
                    t("gym.why.item1"),
                    t("gym.why.item2"),
                    t("gym.why.item3"),
                    t("gym.why.item4"),
                    t("gym.why.item5"),
                    t("gym.why.item6")
                ]}
            />
             <ProductFeatures
                sectionTitle={t("gym.features.title")}
                sectionSubtitle={t("gym.features.subtitle")}
                features={features}
            />
            <GymConversations />
             {/* ── LEAD AUTOMATION FEATURES GRID ── */}
            <ProductAutomationFeatures
                sectionTitle={t("gym.automation.title")}
                sectionSubtitleTop={t("gym.automation.subtitleTop")}
                sectionSubtitleBottom={t("gym.automation.subtitleBottom")}
                features={automationFeatures}
            />
             <ProductUseCases
                sectionTitle={t("gym.usecases.title")}
                useCases={useCases}
                ctaText={t("hero.startTrial")}
            />
            {/* ── KEY PRODUCT FEATURES SECTION ── */}
            <KeyProductFeatures
                sectionTitle={t("gym.keyfeatures.title")}
                features={keyFeatures}
            />

            {/* ── AGENT VS HUMAN COMPARISON SECTION ── */}
            <ProductAgentVsHuman
                sectionTitle={t("gym.agentvshuman.title")}
                beforeTitle={t("gym.agentvshuman.beforeTitle")}
                afterTitle={t("gym.agentvshuman.afterTitle")}
                beforeItems={beforeComparisonItems}
                afterItems={afterComparisonItems}
            />

            {/* ── WHY CHOOSE PRODUCT SECTION ── */}
            <WhyChooseProduct
                badge="Benefits"
                title={t("gym.whychoose.title")}
                description={t("gym.whychoose.desc")}
                benefits={whyChooseBenefits}
            />
            <SetupSimple namespace="gym" />

            {/* ── THE SYSTEM BEHIND IT SECTION ── */}
            <div className="relative">
                <KeyProductFeatures
                    sectionTitle={t("gym.system.title")}
                    sectionSubtitle={t("gym.system.subtitle")}
                    features={systemBehindFeatures}
                />
                <div className="max-w-4xl mx-auto px-6 text-center -mt-12 mb-24 relative z-10">
                    <p className="text-[#fbf9f7]/55 text-base md:text-lg font-semibold italic">
                        &ldquo;{t("gym.system.footer")}&rdquo;
                    </p>
                </div>
            </div>

            {/* ── STRUCTURED DATA SECTION ── */}
            <ProductStructuredData
                subtitle={t("gym.structured.subtitle")}
                title={t("gym.structured.title")}
                description={t("gym.structured.desc")}
                footerText={t("gym.structured.footer")}
                items={structuredDataItems}
            />

            {/* ── PRODUCT SPECIFIC CTA ── */}
            <ProductCTA
                title={t("gym.cta.title")}
                subtitle={t("gym.cta.subtitle")}
                description={t("gym.cta.desc")}
                buttonText={t("gym.cta.btn")}
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
                                Gym Success
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
                title={t("gym.faq.title")}
                subtitle={t("gym.faq.subtitle")}
                faqItems={faqItems}
            />

            {/* ── CONTACT/LEAD FORM ── */}
            <section id="contact" className="py-16">
                <MeetAvaCTA />
            </section>

            <ProductFinalCTA
                title={t("gym.finalcta.title")}
                subtitle1={t("gym.finalcta.subtitle1")}
                subtitle2={t("gym.finalcta.subtitle2")}
                description={t("gym.finalcta.desc")}
                subbuttonText={t("gym.finalcta.subbtn")}
                buttonText={t("gym.finalcta.btn")}
                buttonSecondaryText={t("gym.finalcta.btnSecondary")}
                calendarCard1={calendarCard1}
                calendarCard2={calendarCard2}
            />

            <Footer />
        </main>
    );
}

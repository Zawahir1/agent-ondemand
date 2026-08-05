"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OutboundMockup from "@/components/OutboundMockup";
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
import OutboundConversations from "@/components/OutboundConversations";
import SetupSimple from "@/components/SetupSimple";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";
import { Home, Key, Calendar, PhoneIncoming, Users, UserCheck, Clock, AlertTriangle, User, Sliders, Euro, Compass, CalendarDays, Building2, Construction, Database, FileText, Brain, Sparkles, Stethoscope, Scale, Scissors, Car, Dumbbell, Wrench, Hotel, GraduationCap, ShoppingBag, PhoneCall, HelpCircle, Info, Send, Volume2, Play, Bell, RefreshCw, Link2, Shield, BarChart3 } from "lucide-react";

export default function OutboundPage() {
    const { t } = useLanguage();

    const calendarCard1 = {
        name: "Markus Schmidt",
        role: "Demo Call - Agent On Demand",
        status: t("outbound.mockup.confirmedTour")
    };

    const calendarCard2 = {
        name: "Sarah Jenkins",
        role: "Outbound Lead Qualification",
        status: t("outbound.mockup.confirmedTour")
    };

    const features = [
        {
            id: 0,
            title: t("outbound.features.step1.title"),
            description: t("outbound.features.step1.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-[#00ff66]/10 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Sliders className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.appointmentScheduler" as TranslationKey)}</span>
                            <span className="text-[9px] bg-emerald-500/10 text-[#00ff66] px-2 py-0.5 rounded font-bold uppercase tracking-wider">{t("mockup.active" as TranslationKey)}</span>
                        </div>
                        <div className="space-y-3.5">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.buyerProfile" as TranslationKey)}</span>
                                <span className="text-sm font-bold text-white mt-0.5 block">1,248 CRM Contacts Uploaded</span>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.appointment" as TranslationKey)}</span>
                                <span className="text-sm font-bold text-white mt-0.5 block">Lead Reactivation · Warm & Helpful</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 1,
            title: t("outbound.features.step2.title"),
            description: t("outbound.features.step2.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-[#00ff66]/10 pb-3 mb-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse" />
                                <span className="text-xs font-bold text-white uppercase tracking-wider">{t("mockup.liveCall" as TranslationKey)}</span>
                            </div>
                            <span className="text-[10px] text-[#fbf9f7]/40 font-mono">01:15</span>
                        </div>
                        <div className="space-y-3.5">
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-[9px] text-[#fbf9f7]/40 font-bold uppercase tracking-wider">{t("mockup.prospect" as TranslationKey)}</span>
                                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-3.5 py-2 text-xs text-[#fbf9f7]/85 max-w-[85%] leading-relaxed font-semibold">
                                    "{t("outbound.mockup.dialogue.customer" as TranslationKey)}"
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="text-[9px] text-[#00ff66]/80 font-bold uppercase tracking-wider">{t("mockup.aiAgent" as TranslationKey)}</span>
                                <div className="bg-emerald-950/45 border border-[#00ff66]/20 rounded-2xl rounded-tr-none px-3.5 py-2 text-xs text-white max-w-[85%] leading-relaxed font-semibold shadow-[0_0_15px_rgba(0,255,102,0.05)]">
                                    "{t("outbound.mockup.dialogue.agent" as TranslationKey)}"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: t("outbound.features.step3.title"),
            description: t("outbound.features.step3.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><UserCheck className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.staffRouting" as TranslationKey)}</span>
                            <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-[#00ff66] px-2 py-0.5 rounded font-bold uppercase tracking-wider">{t("mockup.hotLead" as TranslationKey)}</span>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <div className="text-xs font-bold text-white">{t("mockup.leadProfiler" as TranslationKey)}</div>
                                <div className="text-[10px] text-[#00ff66] font-semibold mt-1">✓ {t("mockup.passed" as TranslationKey)}</div>
                            </div>
                            <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-3">
                                <div>
                                    <div className="text-sm font-bold text-white">{t("mockup.membershipOffice" as TranslationKey)}</div>
                                    <div className="text-[10px] text-[#fbf9f7]/40 mt-0.5">{t("mockup.transferring" as TranslationKey)}...</div>
                                </div>
                                <span className="w-3.5 h-3.5 rounded-full bg-emerald-450 animate-ping shrink-0" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: t("outbound.features.step4.title"),
            description: t("outbound.features.step4.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Send className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.trialPassDelivery" as TranslationKey)}</span>
                            <span className="text-[9px] text-[#00ff66] font-bold uppercase tracking-wider">{t("mockup.delivered" as TranslationKey)}</span>
                        </div>
                        <div className="border border-white/5 rounded-xl p-3.5 bg-white/5 space-y-2">
                            <div className="text-[8px] text-[#fbf9f7]/30 font-bold uppercase tracking-wider">{t("mockup.aiSummary" as TranslationKey)}</div>
                            <div className="bg-[#00ff66]/10 border border-[#00ff66]/15 rounded-xl rounded-tr-none p-3 text-xs text-white max-w-[90%] leading-relaxed font-semibold">
                                "{t("outbound.mockup.dialogue.sms" as TranslationKey)}"
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: t("outbound.features.step5.title"),
            description: t("outbound.features.step5.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><RefreshCw className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.serviceTransfer" as TranslationKey)}</span>
                            <span className="text-[9px] text-yellow-450 font-bold uppercase tracking-wider">{t("mockup.transferring" as TranslationKey)}</span>
                        </div>
                        <div className="space-y-3.5 text-xs">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <div className="text-[9px] text-[#fbf9f7]/40 uppercase font-bold tracking-wider mb-1">{t("mockup.advisorStatus" as TranslationKey)}</div>
                                <p className="text-[#fbf9f7]/70 font-semibold">"{t("outbound.mockup.dialogue.retry" as TranslationKey)}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const automationFeatures = [
        {
            id: "leadgen",
            icon: UserCheck,
            title: t("outbound.automation.item1.title"),
            description: t("outbound.automation.item1.desc")
        },
        {
            id: "reengage",
            icon: RefreshCw,
            title: t("outbound.automation.item2.title"),
            description: t("outbound.automation.item2.desc")
        },
        {
            id: "confirm",
            icon: Calendar,
            title: t("outbound.automation.item3.title"),
            description: t("outbound.automation.item3.desc")
        },
        {
            id: "promo",
            icon: Send,
            title: t("outbound.automation.item4.title"),
            description: t("outbound.automation.item4.desc")
        },
        {
            id: "feedback",
            icon: Brain,
            title: t("outbound.automation.item5.title"),
            description: t("outbound.automation.item5.desc")
        },
        {
            id: "qualify",
            icon: Sliders,
            title: t("outbound.automation.item6.title"),
            description: t("outbound.automation.item6.desc")
        },
        {
            id: "crm",
            icon: Database,
            title: t("outbound.automation.item7.title"),
            description: t("outbound.automation.item7.desc")
        }
    ];

    const useCases = [
        {
            id: "leadgen",
            title: t("outbound.usecases.item1.title"),
            description: t("outbound.usecases.item1.desc"),
            image: "/images/enterprise_agent.png",
            icon: UserCheck
        },
        {
            id: "realestate",
            title: t("outbound.usecases.item2.title"),
            description: t("outbound.usecases.item2.desc"),
            image: "/images/homeservice_agent.png",
            icon: Home
        },
        {
            id: "appointment",
            title: t("outbound.usecases.item3.title"),
            description: t("outbound.usecases.item3.desc"),
            image: "/images/hospitality_agent.png",
            icon: Calendar
        },
        {
            id: "service",
            title: t("outbound.usecases.item4.title"),
            description: t("outbound.usecases.item4.desc"),
            image: "/images/salon_agent.png",
            icon: Clock
        },
        {
            id: "winback",
            title: t("outbound.usecases.item5.title"),
            description: t("outbound.usecases.item5.desc"),
            image: "/images/retail_agent.png",
            icon: RefreshCw
        },
        {
            id: "events",
            title: t("outbound.usecases.item6.title"),
            description: t("outbound.usecases.item6.desc"),
            image: "/images/education_agent.png",
            icon: FileText
        },
        {
            id: "surveys",
            title: t("outbound.usecases.item7.title"),
            description: t("outbound.usecases.item7.desc"),
            image: "/images/healthcare_agent.png",
            icon: Brain
        }
    ];

    const keyFeatures = [
        {
            id: "timing",
            title: t("outbound.system.item1.title"),
            description: t("outbound.system.item1.desc"),
            icon: Clock
        },
        {
            id: "fallback",
            title: t("outbound.system.item2.title"),
            description: t("outbound.system.item2.desc"),
            icon: Send
        },
        {
            id: "email",
            title: t("outbound.system.item3.title"),
            description: t("outbound.system.item3.desc"),
            icon: FileText
        },
        {
            id: "scheduling",
            title: t("outbound.system.item4.title"),
            description: t("outbound.system.item4.desc"),
            icon: Link2
        },
        {
            id: "engagement",
            title: t("outbound.system.item5.title"),
            description: t("outbound.system.item5.desc"),
            icon: RefreshCw
        }
    ];

    const beforeComparisonItems = [
        t("outbound.agentvshuman.traditional.1"),
        t("outbound.agentvshuman.traditional.2"),
        t("outbound.agentvshuman.traditional.3"),
        t("outbound.agentvshuman.traditional.4"),
        t("outbound.agentvshuman.traditional.5"),
        t("outbound.agentvshuman.traditional.6"),
        t("outbound.agentvshuman.traditional.7"),
        t("outbound.agentvshuman.traditional.8")
    ];

    const afterComparisonItems = [
        t("outbound.agentvshuman.agent.1"),
        t("outbound.agentvshuman.agent.2"),
        t("outbound.agentvshuman.agent.3"),
        t("outbound.agentvshuman.agent.4"),
        t("outbound.agentvshuman.agent.5"),
        t("outbound.agentvshuman.agent.6"),
        t("outbound.agentvshuman.agent.7"),
        t("outbound.agentvshuman.agent.8")
    ];

    const whyChooseBenefits = [
        { 
            id: "active", 
            title: t("outbound.whychoose.item1.title"),
            description: t("outbound.whychoose.item1.desc"),
            icon: Clock
        },
        { 
            id: "scalable", 
            title: t("outbound.whychoose.item2.title"),
            description: t("outbound.whychoose.item2.desc"),
            icon: Users
        },
        { 
            id: "consistent", 
            title: t("outbound.whychoose.item3.title"),
            description: t("outbound.whychoose.item3.desc"),
            icon: Shield
        },
        { 
            id: "instant", 
            title: t("outbound.whychoose.item4.title"),
            description: t("outbound.whychoose.item4.desc"),
            icon: Send
        },
        { 
            id: "datadriven", 
            title: t("outbound.whychoose.item5.title"),
            description: t("outbound.whychoose.item5.desc"),
            icon: Brain
        }
    ];

    const systemBehindFeatures = [
        {
            id: "summaries",
            title: t("outbound.system.item1.title"),
            description: t("outbound.system.item1.desc"),
            icon: FileText
        },
        {
            id: "alerts",
            title: t("outbound.system.item2.title"),
            description: t("outbound.system.item2.desc"),
            icon: Bell
        },
        {
            id: "reminders",
            title: t("outbound.system.item3.title"),
            description: t("outbound.system.item3.desc"),
            icon: Clock
        },
        {
            id: "recovery",
            title: t("outbound.system.item4.title"),
            description: t("outbound.system.item4.desc"),
            icon: RefreshCw
        },
        {
            id: "syncing",
            title: t("outbound.system.item5.title"),
            description: t("outbound.system.item5.desc"),
            icon: Database
        },
        {
            id: "billing",
            title: t("outbound.system.item6.title"),
            description: t("outbound.system.item6.desc"),
            icon: BarChart3
        },
        {
            id: "learning",
            title: t("outbound.system.item7.title"),
            description: t("outbound.system.item7.desc"),
            icon: Brain
        },
        {
            id: "workflow",
            title: t("outbound.system.item8.title"),
            description: t("outbound.system.item8.desc"),
            icon: Sliders
        },
        {
            id: "integrations",
            title: t("outbound.system.item9.title"),
            description: t("outbound.system.item9.desc"),
            icon: Link2
        },
        {
            id: "compliance",
            title: t("outbound.system.item10.title"),
            description: t("outbound.system.item10.desc"),
            icon: Shield
        }
    ];

    const structuredDataItems = [
        {
            id: 0,
            icon: User,
            title: t("outbound.structured.item1.title"),
            description: t("outbound.structured.item1.desc"),
            widgetTitle: t("outbound.structured.item1.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1">
                    <div className="text-sm font-bold text-white">Markus Schmidt</div>
                    <div className="text-xs text-[#00ff66]/90 font-semibold">{t("outbound.mockup.tab1")}</div>
                    <div className="text-[11px] text-[#fbf9f7]/60 mt-1">Phone: +49 152 901234</div>
                    <div className="text-[10px] text-[#fbf9f7]/40">Email: m.schmidt@domain.de</div>
                </div>
            )
        },
        {
            id: 1,
            icon: Calendar,
            title: t("outbound.structured.item2.title"),
            description: t("outbound.structured.item2.desc"),
            widgetTitle: t("outbound.structured.item2.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1.5">
                    <div className="text-xs text-white/50">{t("outbound.mockup.tourType")}</div>
                    <div className="text-xs text-[#00ff66] font-bold">{t("outbound.mockup.viewingTime")}</div>
                    <div className="text-[9px] bg-emerald-500/10 text-[#00ff66] border border-emerald-500/20 px-2 py-0.5 rounded font-bold uppercase w-fit">
                        {t("outbound.mockup.calendarSynced")}
                    </div>
                </div>
            )
        },
        {
            id: 2,
            icon: Euro,
            title: t("outbound.structured.item3.title"),
            description: t("outbound.structured.item3.desc"),
            widgetTitle: t("outbound.structured.item3.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1.5">
                    <div className="text-xs text-white/40">{t("outbound.mockup.qualifiedBudget")}</div>
                    <div className="text-sm font-bold text-[#00ff66]">98 / 100</div>
                    <span className="text-[9px] text-[#fbf9f7]/30 block font-semibold">High Intent</span>
                </div>
            )
        },
        {
            id: 3,
            icon: UserCheck,
            title: t("outbound.structured.item4.title"),
            description: t("outbound.structured.item4.desc"),
            widgetTitle: t("outbound.structured.item4.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1.5">
                    <div className="text-xs text-[#fbf9f7]/70 font-semibold">{t("outbound.mockup.confirmedTour")}</div>
                    <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {t("outbound.mockup.calendarSynced")}
                    </div>
                </div>
            )
        },
        {
            id: 4,
            icon: Sparkles,
            title: t("outbound.structured.item5.title"),
            description: t("outbound.structured.item5.desc"),
            widgetTitle: t("outbound.structured.item5.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                        <span className="text-2xl font-black text-[#00ff66]">98</span>
                        <span className="text-xs text-[#fbf9f7]/40">/ 100</span>
                    </div>
                    <div className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded text-emerald-455 font-bold uppercase tracking-wider w-fit">
                        Hot Lead
                    </div>
                </div>
            )
        },
        {
            id: 5,
            icon: FileText,
            title: t("outbound.structured.item6.title"),
            description: t("outbound.structured.item6.desc"),
            widgetTitle: t("outbound.structured.item6.title"),
            colSpan: 2,
            widgetContent: (
                <div className="space-y-3">
                    <p className="text-xs text-[#fbf9f7]/70 leading-relaxed italic">
                        &ldquo;{t("outbound.mockup.summaryText")}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 text-[10px] border-t border-[#00ff66]/10 pt-2 text-[#fbf9f7]/45 font-medium">
                        <span className="flex items-center gap-1"><span className="text-emerald-455">✓</span> Audio recorded</span>
                        <span className="flex items-center gap-1"><span className="text-emerald-455">✓</span> CRM updated</span>
                    </div>
                </div>
            )
        }
    ];

    const faqItems = [
        {
            id: 1,
            question: t("outbound.faq.q1"),
            answer: t("outbound.faq.a1")
        },
        {
            id: 2,
            question: t("outbound.faq.q2"),
            answer: t("outbound.faq.a2")
        },
        {
            id: 3,
            question: t("outbound.faq.q3"),
            answer: t("outbound.faq.a3")
        },
        {
            id: 4,
            question: t("outbound.faq.q4"),
            answer: t("outbound.faq.a4")
        },
        {
            id: 5,
            question: t("outbound.faq.q5"),
            answer: t("outbound.faq.a5")
        },
        {
            id: 6,
            question: t("outbound.faq.q6"),
            answer: t("outbound.faq.a6")
        },
        {
            id: 7,
            question: t("outbound.faq.q7"),
            answer: t("outbound.faq.a7")
        },
        {
            id: 8,
            question: t("outbound.faq.q8"),
            answer: t("outbound.faq.a8")
        },
        {
            id: 9,
            question: t("outbound.faq.q9"),
            answer: t("outbound.faq.a9")
        },
        {
            id: 10,
            question: t("outbound.faq.q10"),
            answer: t("outbound.faq.a10")
        },
        {
            id: 11,
            question: t("outbound.faq.q11"),
            answer: t("outbound.faq.a11")
        },
        {
            id: 12,
            question: t("outbound.faq.q12"),
            answer: t("outbound.faq.a12")
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "AI Call Agent for Outbound Calling",
                "serviceType": "Automated Outbound Voice Campaigns",
                "provider": { "@id": "https://www.agent-ondemand.com/#software" },
                "url": "https://www.agent-ondemand.com/outbound",
                "description": "An AI call agent that proactively calls leads, follows up on missed inquiries, re-engages inactive customers, and books appointments through natural, real-time voice conversations.",
                "areaServed": "Worldwide"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is an AI call agent for outbound calling?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It's an automated system that proactively calls leads and customers — following up on inquiries, re-engaging cold contacts, and confirming appointments — using natural, human-like voice conversation instead of a scripted dialer."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does the AI call agent decide who to call?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You define a contact list, a campaign goal, and a conversation style. The AI then works through that list automatically, adapting its approach based on each contact's response."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can it handle follow-ups if the person does not answer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. If a call goes unanswered, the system automatically retries at scheduled intervals and sends a follow-up message by SMS or WhatsApp."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does it update my CRM automatically?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Every call outcome, transcript, and lead status updates your connected CRM in real time."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-transparent px-4">
            <title>{t("outbound.meta.title" as TranslationKey)}</title>
            <meta name="description" content={t("outbound.meta.desc" as TranslationKey)} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navbar />

            {/* ── HERO SECTION ── */}
            <ProductsHero
                titleLine1={t("outbound.hero.titleLine1")}
                titleGradient={t("outbound.hero.titleGradient")}
                subtitle={t("outbound.hero.subtitle")}
                description={t("outbound.hero.description")}
                detailParagraphs={[
                    t("outbound.hero.para1"),
                    t("outbound.hero.para2")
                ]}
                bulletPoints={[
                    t("outbound.hero.bullet1"),
                    t("outbound.hero.bullet2"),
                    t("outbound.hero.bullet3")
                ]}
                videoUrl="https://www.youtube.com/embed/kxfIaV5T_FY?autoplay=1"
                videoThumbnail="https://img.youtube.com/vi/kxfIaV5T_FY/maxresdefault.jpg"
            />
            {/* ── MEET PRODUCT SECTION ── */}
            <MeetProduct
                titleLine1={t("outbound.meet.titleLine1")}
                titleGradient={t("outbound.meet.titleGradient")}
                paragraphs={[
                    t("outbound.meet.para1"),
                    t("outbound.meet.para2")
                ]}
                listHeader={t("outbound.meet.listHeader")}
                listItems={[
                    { text: t("outbound.meet.item1"), icon: PhoneIncoming },
                    { text: t("outbound.meet.item2"), icon: Sliders },
                    { text: t("outbound.meet.item3"), icon: Calendar },
                    { text: t("outbound.meet.item4"), icon: CalendarDays },
                    { text: t("outbound.meet.item5"), icon: UserCheck },
                    { text: t("outbound.meet.item6"), icon: Compass },
                    { text: t("outbound.meet.item7"), icon: Brain }
                ]}
                ctaPrimary={t("outbound.meet.ctaPrimary")}
                ctaSecondary={t("outbound.meet.ctaSecondary")}
            />
            {/* ── WHY PRODUCT SECTION ── */}
            <WhyProduct
                badge={t("outbound.why.badge")}
                title={t("outbound.why.title")}
                descriptionTop={t("outbound.why.descTop")}
                descriptionBottom={t("outbound.why.descBottom")}
                itemIcon={AlertTriangle}
                listItems={[
                    t("outbound.why.item1"),
                    t("outbound.why.item2"),
                    t("outbound.why.item3"),
                    t("outbound.why.item4"),
                    t("outbound.why.item5"),
                    t("outbound.why.item6"),
                    t("outbound.why.item7"),
                    t("outbound.why.item8")
                ]}
            />
             <ProductFeatures
                sectionTitle={t("outbound.features.title")}
                sectionSubtitle={t("outbound.features.subtitle")}
                features={features}
            />
            <OutboundConversations />
             {/* ── LEAD AUTOMATION FEATURES GRID ── */}
            <ProductAutomationFeatures
                sectionTitle={t("outbound.automation.title")}
                sectionSubtitleTop={t("outbound.automation.subtitleTop")}
                sectionSubtitleBottom={t("outbound.automation.subtitleBottom")}
                features={automationFeatures}
            />
             <ProductUseCases
                sectionTitle={t("outbound.usecases.title")}
                useCases={useCases}
                ctaText={t("hero.startTrial")}
            />
            {/* ── KEY PRODUCT FEATURES SECTION ── */}
            <KeyProductFeatures
                sectionTitle={t("outbound.keyfeatures.title")}
                features={keyFeatures}
            />

            {/* ── AGENT VS HUMAN COMPARISON SECTION ── */}
            <ProductAgentVsHuman
                sectionTitle={t("outbound.agentvshuman.title")}
                beforeTitle={t("outbound.agentvshuman.beforeTitle")}
                afterTitle={t("outbound.agentvshuman.afterTitle")}
                beforeItems={beforeComparisonItems}
                afterItems={afterComparisonItems}
            />

            {/* ── WHY CHOOSE PRODUCT SECTION ── */}
            <WhyChooseProduct
                badge="Benefits"
                title={t("outbound.whychoose.title")}
                description={t("outbound.whychoose.desc")}
                benefits={whyChooseBenefits}
            />
            <SetupSimple namespace="outbound" />

            {/* ── THE SYSTEM BEHIND IT SECTION ── */}
            <div className="relative">
                <KeyProductFeatures
                    sectionTitle={t("outbound.system.title")}
                    sectionSubtitle={t("outbound.system.subtitle")}
                    features={systemBehindFeatures}
                />
                <div className="max-w-4xl mx-auto px-6 text-center -mt-12 mb-24 relative z-10">
                    <p className="text-[#fbf9f7]/55 text-base md:text-lg font-semibold italic">
                        &ldquo;{t("outbound.system.footer")}&rdquo;
                    </p>
                </div>
            </div>

            {/* ── STRUCTURED DATA SECTION ── */}
            <ProductStructuredData
                subtitle={t("outbound.structured.subtitle")}
                title={t("outbound.structured.title")}
                description={t("outbound.structured.desc")}
                footerText={t("outbound.structured.footer")}
                items={structuredDataItems}
            />

            {/* ── PRODUCT SPECIFIC CTA ── */}
            <ProductCTA
                title={t("outbound.cta.title")}
                subtitle={t("outbound.cta.subtitle")}
                description={t("outbound.cta.desc")}
                buttonText={t("outbound.cta.btn")}
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
                                Outbound Success
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
                title={t("outbound.faq.title")}
                subtitle={t("outbound.faq.subtitle")}
                faqItems={faqItems}
            />

            {/* ── CONTACT/LEAD FORM ── */}
            <section id="contact" className="py-16">
                <MeetAvaCTA />
            </section>

            <ProductFinalCTA
                title={t("outbound.finalcta.title")}
                subtitle1={t("outbound.finalcta.subtitle1")}
                subtitle2={t("outbound.finalcta.subtitle2")}
                description={t("outbound.finalcta.desc")}
                subbuttonText={t("outbound.finalcta.subbtn")}
                buttonText={t("outbound.finalcta.btn")}
                buttonSecondaryText={t("outbound.finalcta.btnSecondary")}
                calendarCard1={calendarCard1}
                calendarCard2={calendarCard2}
            />

            <Footer />
        </main>
    );
}

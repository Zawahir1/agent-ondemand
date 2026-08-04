"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AutomotiveMockup from "@/components/AutomotiveMockup";
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
import AutomotiveConversations from "@/components/AutomotiveConversations";
import SetupSimple from "@/components/SetupSimple";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";
import { Home, Key, Calendar, PhoneIncoming, Users, UserCheck, UserPlus, Clock, AlertTriangle, User, Sliders, Euro, Compass, CalendarDays, Building2, Construction, Database, FileText, Brain, Sparkles, Stethoscope, Scale, Scissors, Car, Dumbbell, Wrench, Hotel, GraduationCap, ShoppingBag, PhoneCall, HelpCircle, Info, Send, Volume2, Play, Bell, RefreshCw, Link2, Shield, BarChart3 } from "lucide-react";

export default function AutomotivePage() {
    const { t } = useLanguage();

    const calendarCard1 = {
        name: "Markus Schmidt",
        role: "Physical Tour - 124 Oak Drive",
        status: t("automotive.mockup.confirmedTour")
    };

    const calendarCard2 = {
        name: "Sarah Jenkins",
        role: "Listing Consultation",
        status: t("automotive.mockup.confirmedTour")
    };

    const features = [
        {
            id: 0,
            title: t("automotive.features.step1.title"),
            description: t("automotive.features.step1.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-[#00ff66]/10 pb-3 mb-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse" />
                                <span className="text-xs font-bold text-white uppercase tracking-wider">{t("mockup.liveCall" as TranslationKey)}</span>
                            </div>
                            <span className="text-[10px] text-[#fbf9f7]/40 font-mono">01:05</span>
                        </div>
                        <div className="space-y-3.5">
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-[9px] text-[#fbf9f7]/40 font-bold uppercase tracking-wider">{t("mockup.customer" as TranslationKey)}</span>
                                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-3.5 py-2 text-xs text-[#fbf9f7]/85 max-w-[85%] leading-relaxed font-semibold">
                                    "{t("automotive.mockup.dialogue.customer" as TranslationKey)}"
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="text-[9px] text-[#00ff66]/80 font-bold uppercase tracking-wider">{t("mockup.aiReceptionist" as TranslationKey)}</span>
                                <div className="bg-emerald-950/45 border border-[#00ff66]/20 rounded-2xl rounded-tr-none px-3.5 py-2 text-xs text-white max-w-[85%] leading-relaxed font-semibold shadow-[0_0_15px_rgba(0,255,102,0.05)]">
                                    "{t("automotive.mockup.dialogue.agent" as TranslationKey)}"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 1,
            title: t("automotive.features.step2.title"),
            description: t("automotive.features.step2.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.appointmentScheduler" as TranslationKey)}</span>
                            <span className="text-[9px] bg-emerald-500/10 text-[#00ff66] px-2 py-0.5 rounded font-bold uppercase tracking-wider">{t("mockup.active" as TranslationKey)}</span>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3.5">
                                <div className="text-xs text-[#fbf9f7]/40 font-bold uppercase tracking-wider mb-1">{t("mockup.appointmentType" as TranslationKey)}</div>
                                <div className="text-sm font-bold text-white">{t("mockup.oilChangeBrakeInspection" as TranslationKey)}</div>
                                <div className="text-xs text-[#00ff66] font-semibold mt-0.5">{t("mockup.tomorrow10am" as TranslationKey)}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 text-center">
                                    <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.bayBuffer" as TranslationKey)}</span>
                                    <span className="text-xs font-bold text-white mt-0.5 block">{t("mockup.bayBufferMin" as TranslationKey)}</span>
                                </div>
                                <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 text-center">
                                    <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.advisorStatus" as TranslationKey)}</span>
                                    <span className="text-xs font-bold text-white mt-0.5 block">{t("mockup.markedReady" as TranslationKey)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: t("automotive.features.step3.title"),
            description: t("automotive.features.step3.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><UserCheck className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.buyerProfile" as TranslationKey)}</span>
                            <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-[#00ff66] px-2 py-0.5 rounded font-bold uppercase tracking-wider">{t("mockup.hotLead" as TranslationKey)}</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-3">
                                <div>
                                    <div className="text-sm font-bold text-white">David Miller</div>
                                    <div className="text-[10px] text-[#fbf9f7]/40"> Ford F-150 (2021)</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-[#00ff66] font-semibold">{t("mockup.interestedBuyer" as TranslationKey)}</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-semibold py-1 border-b border-white/5">
                                    <span className="text-[#fbf9f7]/40">{t("mockup.vehiclePref" as TranslationKey)}</span>
                                    <span className="text-white">{t("mockup.fordRaptor" as TranslationKey)}</span>
                                </div>
                                <div className="flex justify-between text-xs font-semibold py-1 border-b border-white/5">
                                    <span className="text-[#fbf9f7]/40">{t("mockup.estValue" as TranslationKey)}</span>
                                    <span className="text-white">$65,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: t("automotive.features.step4.title"),
            description: t("automotive.features.step4.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-[#00ff66]/30 flex items-center justify-center text-[#00ff66] shrink-0">
                                <Play className="w-4 h-4 fill-[#00ff66]/20 text-[#00ff66]" />
                            </div>
                            <div className="flex-1">
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-[#00ff66] rounded-full" />
                                </div>
                                <div className="flex justify-between text-[8px] text-[#fbf9f7]/30 font-mono mt-1">
                                    <span>01:12</span>
                                    <span>02:15</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 text-xs leading-relaxed font-semibold">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <div className="text-[9px] text-[#00ff66] uppercase font-bold tracking-wider mb-1">{t("mockup.aiTranscript" as TranslationKey)}</div>
                                <p className="text-[#fbf9f7]/70 font-medium">"{t("automotive.mockup.dialogue.summary" as TranslationKey)}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: t("automotive.features.step5.title"),
            description: t("automotive.features.step5.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Sliders className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.serviceTransfer" as TranslationKey)}</span>
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
            title: t("automotive.automation.item1.title"),
            description: t("automotive.automation.item1.desc")
        },
        {
            id: "vehicle",
            icon: Car,
            title: t("automotive.automation.item2.title"),
            description: t("automotive.automation.item2.desc")
        },
        {
            id: "requirements",
            icon: Wrench,
            title: t("automotive.automation.item3.title"),
            description: t("automotive.automation.item3.desc")
        },
        {
            id: "sales",
            icon: Euro,
            title: t("automotive.automation.item4.title"),
            description: t("automotive.automation.item4.desc")
        },
        {
            id: "appointments",
            icon: Calendar,
            title: t("automotive.automation.item5.title"),
            description: t("automotive.automation.item5.desc")
        },
        {
            id: "followup",
            icon: Clock,
            title: t("automotive.automation.item6.title"),
            description: t("automotive.automation.item6.desc")
        },
        {
            id: "status",
            icon: UserCheck,
            title: t("automotive.automation.item7.title"),
            description: t("automotive.automation.item7.desc")
        }
    ];

    const useCases = [
        {
            id: "dealerships",
            title: t("automotive.usecases.item1.title"),
            description: t("automotive.usecases.item1.desc"),
            image: "/images/enterprise_agent.png",
            icon: UserCheck
        },
        {
            id: "repair",
            title: t("automotive.usecases.item2.title"),
            description: t("automotive.usecases.item2.desc"),
            image: "/images/homeservice_agent.png",
            icon: Wrench
        },
        {
            id: "service",
            title: t("automotive.usecases.item3.title"),
            description: t("automotive.usecases.item3.desc"),
            image: "/images/hospitality_agent.png",
            icon: Calendar
        },
        {
            id: "tire",
            title: t("automotive.usecases.item4.title"),
            description: t("automotive.usecases.item4.desc"),
            image: "/images/salon_agent.png",
            icon: Sliders
        },
        {
            id: "body",
            title: t("automotive.usecases.item5.title"),
            description: t("automotive.usecases.item5.desc"),
            image: "/images/retail_agent.png",
            icon: FileText
        },
        {
            id: "fleet",
            title: t("automotive.usecases.item6.title"),
            description: t("automotive.usecases.item6.desc"),
            image: "/images/education_agent.png",
            icon: Car
        }
    ];

    const keyFeatures = [
        {
            id: "answering",
            title: t("automotive.keyfeatures.item1.title"),
            description: t("automotive.keyfeatures.item1.desc"),
            icon: Clock
        },
        {
            id: "scheduling",
            title: t("automotive.keyfeatures.item2.title"),
            description: t("automotive.keyfeatures.item2.desc"),
            icon: Calendar
        },
        {
            id: "leadqual",
            title: t("automotive.keyfeatures.item3.title"),
            description: t("automotive.keyfeatures.item3.desc"),
            icon: UserCheck
        },
        {
            id: "calintegration",
            title: t("automotive.keyfeatures.item4.title"),
            description: t("automotive.keyfeatures.item4.desc"),
            icon: Database
        },
        {
            id: "transcripts",
            title: t("automotive.keyfeatures.item5.title"),
            description: t("automotive.keyfeatures.item5.desc"),
            icon: FileText
        },
        {
            id: "multilocation",
            title: t("automotive.keyfeatures.item6.title"),
            description: t("automotive.keyfeatures.item6.desc"),
            icon: Brain
        }
    ];

    const beforeComparisonItems = [
        t("automotive.agentvshuman.traditional.1"),
        t("automotive.agentvshuman.traditional.2"),
        t("automotive.agentvshuman.traditional.3"),
        t("automotive.agentvshuman.traditional.4"),
        t("automotive.agentvshuman.traditional.5"),
        t("automotive.agentvshuman.traditional.6"),
        t("automotive.agentvshuman.traditional.7"),
        t("automotive.agentvshuman.traditional.8")
    ];

    const afterComparisonItems = [
        t("automotive.agentvshuman.agent.1"),
        t("automotive.agentvshuman.agent.2"),
        t("automotive.agentvshuman.agent.3"),
        t("automotive.agentvshuman.agent.4"),
        t("automotive.agentvshuman.agent.5"),
        t("automotive.agentvshuman.agent.6"),
        t("automotive.agentvshuman.agent.7"),
        t("automotive.agentvshuman.agent.8")
    ];

    const whyChooseBenefits = [
        { 
            id: "missed", 
            title: t("automotive.whychoose.item1.title"),
            description: t("automotive.whychoose.item1.desc"),
            icon: Clock
        },
        { 
            id: "bookings", 
            title: t("automotive.whychoose.item2.title"),
            description: t("automotive.whychoose.item2.desc"),
            icon: Calendar
        },
        { 
            id: "leads", 
            title: t("automotive.whychoose.item3.title"),
            description: t("automotive.whychoose.item3.desc"),
            icon: UserCheck
        },
        { 
            id: "workload", 
            title: t("automotive.whychoose.item4.title"),
            description: t("automotive.whychoose.item4.desc"),
            icon: Sliders
        },
        { 
            id: "satisfaction", 
            title: t("automotive.whychoose.item5.title"),
            description: t("automotive.whychoose.item5.desc"),
            icon: Users
        },
        { 
            id: "instantly", 
            title: t("automotive.whychoose.item6.title"),
            description: t("automotive.whychoose.item6.desc"),
            icon: Send
        },
        { 
            id: "scale", 
            title: t("automotive.whychoose.item7.title"),
            description: t("automotive.whychoose.item7.desc"),
            icon: Car
        }
    ];

    const systemBehindFeatures = [
        {
            id: "summaries",
            title: t("automotive.system.item1.title"),
            description: t("automotive.system.item1.desc"),
            icon: FileText
        },
        {
            id: "alerts",
            title: t("automotive.system.item2.title"),
            description: t("automotive.system.item2.desc"),
            icon: Bell
        },
        {
            id: "reminders",
            title: t("automotive.system.item3.title"),
            description: t("automotive.system.item3.desc"),
            icon: Clock
        },
        {
            id: "recovery",
            title: t("automotive.system.item4.title"),
            description: t("automotive.system.item4.desc"),
            icon: RefreshCw
        },
        {
            id: "syncing",
            title: t("automotive.system.item5.title"),
            description: t("automotive.system.item5.desc"),
            icon: Database
        },
        {
            id: "billing",
            title: t("automotive.system.item6.title"),
            description: t("automotive.system.item6.desc"),
            icon: BarChart3
        },
        {
            id: "learning",
            title: t("automotive.system.item7.title"),
            description: t("automotive.system.item7.desc"),
            icon: Brain
        },
        {
            id: "workflow",
            title: t("automotive.system.item8.title"),
            description: t("automotive.system.item8.desc"),
            icon: Sliders
        },
        {
            id: "integrations",
            title: t("automotive.system.item9.title"),
            description: t("automotive.system.item9.desc"),
            icon: Link2
        },
        {
            id: "compliance",
            title: t("automotive.system.item10.title"),
            description: t("automotive.system.item10.desc"),
            icon: Shield
        }
    ];

    const structuredDataItems = [
        {
            id: 0,
            icon: User,
            title: t("automotive.structured.item1.title"),
            description: t("automotive.structured.item1.desc"),
            widgetTitle: t("automotive.structured.item1.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1">
                    <div className="text-sm font-bold text-white">David Miller</div>
                    <div className="text-xs text-[#00ff66]/90 font-semibold">{t("automotive.mockup.tab1")}</div>
                    <div className="text-[11px] text-[#fbf9f7]/60 mt-1">Phone: +1 555-0199</div>
                </div>
            )
        },
        {
            id: 1,
            icon: Car,
            title: t("automotive.structured.item2.title"),
            description: t("automotive.structured.item2.desc"),
            widgetTitle: t("automotive.structured.item2.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1.5">
                    <div className="text-xs text-white/50">Ford F-150 (2021)</div>
                    <div className="text-xs text-[#00ff66] font-bold">Mileage: 42,500 mi</div>
                </div>
            )
        },
        {
            id: 2,
            icon: Wrench,
            title: t("automotive.structured.item3.title"),
            description: t("automotive.structured.item3.desc"),
            widgetTitle: t("automotive.structured.item3.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1.5">
                    <div className="text-xs text-white/40">{t("automotive.mockup.qualifiedBudget")}</div>
                    <div className="text-sm font-bold text-white">{t("automotive.mockup.mortgage")}</div>
                </div>
            )
        },
        {
            id: 3,
            icon: Calendar,
            title: t("automotive.structured.item4.title"),
            description: t("automotive.structured.item4.desc"),
            widgetTitle: t("automotive.structured.item4.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1.5">
                    <div className="text-xs text-[#fbf9f7]/70 font-semibold">{t("automotive.mockup.confirmedTour")}</div>
                    <div className="flex items-center gap-1 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {t("automotive.mockup.viewingTime")}
                    </div>
                </div>
            )
        },
        {
            id: 4,
            icon: UserCheck,
            title: t("automotive.structured.item5.title"),
            description: t("automotive.structured.item5.desc"),
            widgetTitle: t("automotive.structured.item5.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-2">
                    <div className="text-lg font-black text-[#00ff66]">Hot Lead</div>
                    <div className="text-[9px] text-[#fbf9f7]/40 block font-semibold uppercase">Qualified</div>
                </div>
            )
        },
        {
            id: 5,
            icon: FileText,
            title: t("automotive.structured.item6.title"),
            description: t("automotive.structured.item6.desc"),
            widgetTitle: t("automotive.structured.item6.title"),
            colSpan: 2,
            widgetContent: (
                <div className="space-y-3">
                    <p className="text-xs text-[#fbf9f7]/70 leading-relaxed italic">
                        &ldquo;{t("automotive.mockup.summaryText")}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 text-[10px] border-t border-[#00ff66]/10 pt-2 text-[#fbf9f7]/45 font-medium">
                        <span className="flex items-center gap-1"><span className="text-emerald-455">✓</span> DMS Synced</span>
                    </div>
                </div>
            )
        }
    ];

    const faqItems = [
        {
            id: 1,
            question: t("automotive.faq.q1"),
            answer: t("automotive.faq.a1")
        },
        {
            id: 2,
            question: t("automotive.faq.q2"),
            answer: t("automotive.faq.a2")
        },
        {
            id: 3,
            question: t("automotive.faq.q3"),
            answer: t("automotive.faq.a3")
        },
        {
            id: 4,
            question: t("automotive.faq.q4"),
            answer: t("automotive.faq.a4")
        },
        {
            id: 5,
            question: t("automotive.faq.q5"),
            answer: t("automotive.faq.a5")
        },
        {
            id: 6,
            question: t("automotive.faq.q6"),
            answer: t("automotive.faq.a6")
        },
        {
            id: 7,
            question: t("automotive.faq.q7"),
            answer: t("automotive.faq.a7")
        },
        {
            id: 8,
            question: t("automotive.faq.q8"),
            answer: t("automotive.faq.a8")
        },
        {
            id: 9,
            question: t("automotive.faq.q9"),
            answer: t("automotive.faq.a9")
        },
        {
            id: 10,
            question: t("automotive.faq.q10"),
            answer: t("automotive.faq.a10")
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "AI Call Agent for Automotive Businesses",
                "serviceType": "AI Call Handling for Dealerships and Service Centers",
                "provider": { "@id": "https://www.agent-ondemand.com/#software" },
                "url": "https://www.agent-ondemand.com/automotive",
                "description": "A 24/7 AI call agent for car dealerships, repair shops, and service centers that books service appointments, captures vehicle sales inquiries, and routes urgent calls to advisors and sales staff.",
                "areaServed": "Worldwide",
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Car dealerships, auto repair shops, service centers, tire shops, auto body shops, fleet service providers"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is an AI call agent for automotive businesses?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It's a 24/7 AI call agent for dealerships and service centers that answers customer calls, schedules service and sales appointments, and captures vehicle sales inquiries automatically."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can the AI call agent schedule service appointments?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It checks real-time bay availability, applies buffer rules, and books maintenance, inspection, and repair appointments directly into the shop's calendar."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can it handle vehicle sales inquiries?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It captures vehicle preferences, budget, and purchase timeline, then qualifies and routes serious buyers to the sales team."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does it integrate with calendars and CRM systems?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It syncs with Google Calendar, Outlook, and dealer management or CRM systems in real time."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-transparent px-4">
            <title>{t("automotive.meta.title" as TranslationKey)}</title>
            <meta name="description" content={t("automotive.meta.desc" as TranslationKey)} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navbar />

            {/* ── HERO SECTION ── */}
            <ProductsHero
                titleLine1={t("automotive.hero.titleLine1")}
                titleGradient={t("automotive.hero.titleGradient")}
                subtitle={t("automotive.hero.subtitle")}
                description={t("automotive.hero.description")}
                detailParagraphs={[
                    t("automotive.hero.para1"),
                    t("automotive.hero.para2")
                ]}
                bulletPoints={[
                    t("automotive.hero.bullet1"),
                    t("automotive.hero.bullet2"),
                    t("automotive.hero.bullet3")
                ]}
            />
            {/* ── MEET PRODUCT SECTION ── */}
            <MeetProduct
                titleLine1={t("automotive.meet.titleLine1")}
                titleGradient={t("automotive.meet.titleGradient")}
                paragraphs={[
                    t("automotive.meet.para1"),
                    t("automotive.meet.para2")
                ]}
                listHeader={t("automotive.meet.listHeader")}
                listItems={[
                    { text: t("automotive.meet.item1"), icon: PhoneCall },
                    { text: t("automotive.meet.item2"), icon: Calendar },
                    { text: t("automotive.meet.item3"), icon: UserCheck },
                    { text: t("automotive.meet.item4"), icon: Wrench },
                    { text: t("automotive.meet.item5"), icon: UserPlus },
                    { text: t("automotive.meet.item6"), icon: Clock },
                    { text: t("automotive.meet.item7"), icon: Brain }
                ]}
                ctaPrimary={t("automotive.meet.ctaPrimary")}
                ctaSecondary={t("automotive.meet.ctaSecondary")}
            />
            {/* ── WHY PRODUCT SECTION ── */}
            <WhyProduct
                badge={t("automotive.why.badge")}
                title={t("automotive.why.title")}
                descriptionTop={t("automotive.why.descTop")}
                descriptionBottom={t("automotive.why.descBottom")}
                itemIcon={AlertTriangle}
                listItems={[
                    t("automotive.why.item1"),
                    t("automotive.why.item2"),
                    t("automotive.why.item3"),
                    t("automotive.why.item4"),
                    t("automotive.why.item5"),
                    t("automotive.why.item6")
                ]}
            />
             <ProductFeatures
                sectionTitle={t("automotive.features.title")}
                sectionSubtitle={t("automotive.features.subtitle")}
                features={features}
            />
            <AutomotiveConversations />
             {/* ── LEAD AUTOMATION FEATURES GRID ── */}
            <ProductAutomationFeatures
                sectionTitle={t("automotive.automation.title")}
                sectionSubtitleTop={t("automotive.automation.subtitleTop")}
                sectionSubtitleBottom={t("automotive.automation.subtitleBottom")}
                features={automationFeatures}
            />
             <ProductUseCases
                sectionTitle={t("automotive.usecases.title")}
                useCases={useCases}
                ctaText={t("hero.startTrial")}
            />
            {/* ── KEY PRODUCT FEATURES SECTION ── */}
            <KeyProductFeatures
                sectionTitle={t("automotive.keyfeatures.title")}
                features={keyFeatures}
            />

            {/* ── AGENT VS HUMAN COMPARISON SECTION ── */}
            <ProductAgentVsHuman
                sectionTitle={t("automotive.agentvshuman.title")}
                beforeTitle={t("automotive.agentvshuman.beforeTitle")}
                afterTitle={t("automotive.agentvshuman.afterTitle")}
                beforeItems={beforeComparisonItems}
                afterItems={afterComparisonItems}
            />

            {/* ── WHY CHOOSE PRODUCT SECTION ── */}
            <WhyChooseProduct
                badge="Benefits"
                title={t("automotive.whychoose.title")}
                description={t("automotive.whychoose.desc")}
                benefits={whyChooseBenefits}
            />
            <SetupSimple namespace="automotive" />

            {/* ── THE SYSTEM BEHIND IT SECTION ── */}
            <div className="relative">
                <KeyProductFeatures
                    sectionTitle={t("automotive.system.title")}
                    sectionSubtitle={t("automotive.system.subtitle")}
                    features={systemBehindFeatures}
                />
                <div className="max-w-4xl mx-auto px-6 text-center -mt-12 mb-24 relative z-10">
                    <p className="text-[#fbf9f7]/55 text-base md:text-lg font-semibold italic">
                        &ldquo;{t("automotive.system.footer")}&rdquo;
                    </p>
                </div>
            </div>

            {/* ── STRUCTURED DATA SECTION ── */}
            <ProductStructuredData
                subtitle={t("automotive.structured.subtitle")}
                title={t("automotive.structured.title")}
                description={t("automotive.structured.desc")}
                footerText={t("automotive.structured.footer")}
                items={structuredDataItems}
            />

            {/* ── PRODUCT SPECIFIC CTA ── */}
            <ProductCTA
                title={t("automotive.cta.title")}
                subtitle={t("automotive.cta.subtitle")}
                description={t("automotive.cta.desc")}
                buttonText={t("automotive.cta.btn")}
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
                                Automotive Success
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
                title={t("automotive.faq.title")}
                subtitle={t("automotive.faq.subtitle")}
                faqItems={faqItems}
            />

            {/* ── CONTACT/LEAD FORM ── */}
            <section id="contact" className="py-16">
                <MeetAvaCTA />
            </section>

            <ProductFinalCTA
                title={t("automotive.finalcta.title")}
                subtitle1={t("automotive.finalcta.subtitle1")}
                subtitle2={t("automotive.finalcta.subtitle2")}
                description={t("automotive.finalcta.desc")}
                subbuttonText={t("automotive.finalcta.subbtn")}
                buttonText={t("automotive.finalcta.btn")}
                buttonSecondaryText={t("automotive.finalcta.btnSecondary")}
                calendarCard1={calendarCard1}
                calendarCard2={calendarCard2}
            />

            <Footer />
        </main>
    );
}

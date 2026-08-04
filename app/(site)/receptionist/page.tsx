"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReceptionistMockup from "@/components/ReceptionistMockup";
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
import RealConversations from "@/components/RealConversations";
import SetupSimple from "@/components/SetupSimple";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";
import { Home, Key, Calendar, PhoneIncoming, Users, UserCheck, Clock, AlertTriangle, User, Sliders, Euro, Compass, CalendarDays, Building2, Construction, Database, FileText, Brain, Sparkles, Stethoscope, Scale, Scissors, Car, Dumbbell, Wrench, Hotel, GraduationCap, ShoppingBag, PhoneCall, HelpCircle, Info, Send, Volume2, Play, Bell, RefreshCw, Link2, Shield, BarChart3 } from "lucide-react";

export default function ReceptionistPage() {
    const { t } = useLanguage();

    const calendarCard1 = {
        name: "Markus Schmidt",
        role: "Physical Tour - 124 Oak Drive",
        status: t("receptionist.mockup.confirmedTour")
    };

    const calendarCard2 = {
        name: "Sarah Jenkins",
        role: "Listing Consultation",
        status: t("receptionist.mockup.confirmedTour")
    };

    const features = [
        {
            id: 0,
            title: t("receptionist.features.step1.title"),
            description: t("receptionist.features.step1.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-[#00ff66]/10 pb-3 mb-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse" />
                                <span className="text-xs font-bold text-white uppercase tracking-wider">{t("mockup.liveCall" as TranslationKey)}</span>
                            </div>
                            <span className="text-[10px] text-[#fbf9f7]/40 font-mono">01:42</span>
                        </div>
                        <div className="space-y-3.5">
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-[9px] text-[#fbf9f7]/40 font-bold uppercase tracking-wider">{t("mockup.customer" as TranslationKey)}</span>
                                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-3.5 py-2 text-xs text-[#fbf9f7]/85 max-w-[85%] leading-relaxed font-semibold">
                                    "{t("receptionist.mockup.dialogue.customer" as TranslationKey)}"
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="text-[9px] text-[#00ff66]/80 font-bold uppercase tracking-wider">{t("mockup.aiAgent" as TranslationKey)}</span>
                                <div className="bg-emerald-950/45 border border-[#00ff66]/20 rounded-2xl rounded-tr-none px-3.5 py-2 text-xs text-white max-w-[85%] leading-relaxed font-semibold shadow-[0_0_15px_rgba(0,255,102,0.05)]">
                                    "{t("receptionist.mockup.dialogue.agent" as TranslationKey)}"
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-[#00ff66]/10 flex items-center justify-between text-[10px] text-[#00ff66] font-bold uppercase tracking-wider">
                            <span>✓ {t("mockup.interruptionHandled" as TranslationKey)}</span>
                            <span className="text-white/60">{t("mockup.naturalFlow" as TranslationKey)}</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 1,
            title: t("receptionist.features.step2.title"),
            description: t("receptionist.features.step2.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.calendarSync" as TranslationKey)}</span>
                            <span className="text-[9px] bg-emerald-500/10 text-[#00ff66] px-2 py-0.5 rounded font-bold uppercase tracking-wider">{t("mockup.active" as TranslationKey)}</span>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3.5">
                                <div className="text-xs text-[#fbf9f7]/40 font-bold uppercase tracking-wider mb-1">{t("mockup.appointment" as TranslationKey)}</div>
                                <div className="text-sm font-bold text-white">{t("mockup.consultationBooking" as TranslationKey)}</div>
                                <div className="text-xs text-[#00ff66] font-semibold mt-0.5">{t("mockup.thursdayDate" as TranslationKey)}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 text-center">
                                    <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.bufferRules" as TranslationKey)}</span>
                                    <span className="text-xs font-bold text-white mt-0.5 block">{t("mockup.bufferMinApplied" as TranslationKey)}</span>
                                </div>
                                <div className="bg-white/5 border border-white/5 rounded-xl p-2.5 text-center">
                                    <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.conflictCheck" as TranslationKey)}</span>
                                    <span className="text-xs font-bold text-white mt-0.5 block">{t("mockup.passed" as TranslationKey)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: t("receptionist.features.step3.title"),
            description: t("receptionist.features.step3.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><UserCheck className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.leadProfiler" as TranslationKey)}</span>
                            <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-[#00ff66] px-2 py-0.5 rounded font-bold uppercase tracking-wider">{t("mockup.hotLead" as TranslationKey)}</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-3">
                                <div>
                                    <div className="text-sm font-bold text-white">Sarah Jenkins</div>
                                    <div className="text-[10px] text-[#fbf9f7]/40">{t("mockup.qualifiedOnCall" as TranslationKey)}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-[#00ff66]">94</div>
                                    <div className="text-[9px] text-[#fbf9f7]/30 uppercase font-bold">{t("mockup.intentScore" as TranslationKey)}</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-semibold py-1 border-b border-white/5">
                                    <span className="text-[#fbf9f7]/40">{t("mockup.urgency" as TranslationKey)}</span>
                                    <span className="text-white">{t("mockup.immediate" as TranslationKey)}</span>
                                </div>
                                <div className="flex justify-between text-xs font-semibold py-1 border-b border-white/5">
                                    <span className="text-[#fbf9f7]/40">{t("mockup.estValue" as TranslationKey)}</span>
                                    <span className="text-white">{t("mockup.highValueLead" as TranslationKey)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: t("receptionist.features.step4.title"),
            description: t("receptionist.features.step4.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-[#00ff66]/30 flex items-center justify-center text-[#00ff66] shrink-0">
                                <Play className="w-4 h-4 fill-[#00ff66]/20 text-[#00ff66]" />
                            </div>
                            <div className="flex-1">
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-1/3 bg-[#00ff66] rounded-full" />
                                </div>
                                <div className="flex justify-between text-[8px] text-[#fbf9f7]/30 font-mono mt-1">
                                    <span>00:48</span>
                                    <span>02:45</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 text-xs leading-relaxed font-semibold">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <div className="text-[9px] text-[#00ff66] uppercase font-bold tracking-wider mb-1">{t("mockup.aiSummary" as TranslationKey)}</div>
                                <p className="text-[#fbf9f7]/70 font-medium">"{t("receptionist.mockup.dialogue.summary" as TranslationKey)}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: t("receptionist.features.step5.title"),
            description: t("receptionist.features.step5.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.buyerProfile" as TranslationKey)}</span>
                            <span className="text-[9px] text-[#00ff66] font-bold uppercase tracking-wider">{t("mockup.active" as TranslationKey)}</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-sm font-bold text-white">David Miller</div>
                                    <div className="text-[10px] text-[#fbf9f7]/40">d.miller@gmail.com</div>
                                </div>
                                <span className="text-[9px] bg-emerald-500/10 text-[#00ff66] px-2 py-0.5 rounded font-bold">{t("mockup.active" as TranslationKey)}</span>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-xs space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-[#fbf9f7]/40">{t("mockup.estValue" as TranslationKey)}</span>
                                    <span className="text-[#fbf9f7]/80 font-semibold">{t("mockup.highValueLead" as TranslationKey)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[#fbf9f7]/40">{t("mockup.conflictCheck" as TranslationKey)}</span>
                                    <span className="text-[#00ff66] font-semibold">{t("mockup.passed" as TranslationKey)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 5,
            title: t("receptionist.features.step6.title"),
            description: t("receptionist.features.step6.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Send className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.trialPassDelivery" as TranslationKey)}</span>
                            <span className="text-[10px] text-[#00ff66] font-bold uppercase tracking-wider">{t("mockup.delivered" as TranslationKey)}</span>
                        </div>
                        <div className="border border-white/5 rounded-xl p-3 bg-white/5 space-y-2">
                            <div className="text-[8px] text-[#fbf9f7]/30 font-bold uppercase tracking-wider">SMS / WhatsApp</div>
                            <div className="bg-[#00ff66]/10 border border-[#00ff66]/15 rounded-xl rounded-tr-none p-3 text-xs text-white max-w-[90%] leading-relaxed font-semibold">
                                "{t("gym.mockup.dialogue.sms" as TranslationKey)}"
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 6,
            title: t("receptionist.features.step7.title"),
            description: t("receptionist.features.step7.desc"),
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
                            <div className="bg-emerald-950/45 border border-[#00ff66]/15 rounded-xl p-3 text-[11px] text-[#fbf9f7]/70 font-semibold">
                                {t("mockup.transferring" as TranslationKey)}...
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 7,
            title: t("receptionist.features.step8.title"),
            description: t("receptionist.features.step8.desc"),
            mockup: (
                <div className="w-full max-w-md mx-auto space-y-4 text-left z-10 relative">
                    <div className="bg-emerald-950/20 backdrop-blur-md p-5 rounded-2xl border border-[#00ff66]/15 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#00ff66]" /> {t("mockup.leadProfiler" as TranslationKey)}</span>
                            <span className="text-[9px] bg-emerald-500/10 text-[#00ff66] px-2 py-0.5 rounded font-bold uppercase tracking-wider">{t("mockup.active" as TranslationKey)}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3.5">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.intentScore" as TranslationKey)}</span>
                                <span className="text-lg font-black text-[#00ff66] mt-0.5 block">87.4%</span>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.bufferRules" as TranslationKey)}</span>
                                <span className="text-lg font-black text-white mt-0.5 block">186 hrs</span>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.appointment" as TranslationKey)}</span>
                                <span className="text-lg font-black text-white mt-0.5 block">1,482</span>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <span className="text-[9px] text-[#fbf9f7]/40 block uppercase font-bold">{t("mockup.naturalFlow" as TranslationKey)}</span>
                                <span className="text-lg font-black text-[#00ff66] mt-0.5 block">99.1%</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const automationFeatures = [
        {
            id: "calls",
            icon: PhoneCall,
            title: t("receptionist.automation.item1.title"),
            description: t("receptionist.automation.item1.desc")
        },
        {
            id: "scheduling",
            icon: Calendar,
            title: t("receptionist.automation.item2.title"),
            description: t("receptionist.automation.item2.desc")
        },
        {
            id: "support",
            icon: HelpCircle,
            title: t("receptionist.automation.item3.title"),
            description: t("receptionist.automation.item3.desc")
        },
        {
            id: "qualification",
            icon: UserCheck,
            title: t("receptionist.automation.item4.title"),
            description: t("receptionist.automation.item4.desc")
        },
        {
            id: "info",
            icon: Info,
            title: t("receptionist.automation.item5.title"),
            description: t("receptionist.automation.item5.desc")
        },
        {
            id: "routing",
            icon: Clock,
            title: t("receptionist.automation.item6.title"),
            description: t("receptionist.automation.item6.desc")
        },
        {
            id: "escalation",
            icon: AlertTriangle,
            title: t("receptionist.automation.item7.title"),
            description: t("receptionist.automation.item7.desc")
        },
        {
            id: "followup",
            icon: Send,
            title: t("receptionist.automation.item8.title"),
            description: t("receptionist.automation.item8.desc")
        },
        {
            id: "voicemail",
            icon: Volume2,
            title: t("receptionist.automation.item9.title"),
            description: t("receptionist.automation.item9.desc")
        },
        {
            id: "summaries",
            icon: FileText,
            title: t("receptionist.automation.item10.title"),
            description: t("receptionist.automation.item10.desc")
        }
    ];

    const useCases = [
        {
            id: "healthcare",
            title: t("receptionist.usecases.item1.title"),
            description: t("receptionist.usecases.item1.desc"),
            image: "/images/healthcare_agent.png",
            icon: Stethoscope
        },
        {
            id: "law",
            title: t("receptionist.usecases.item2.title"),
            description: t("receptionist.usecases.item2.desc"),
            image: "/images/legal_agent.png",
            icon: Scale
        },
        {
            id: "salons",
            title: t("receptionist.usecases.item3.title"),
            description: t("receptionist.usecases.item3.desc"),
            image: "/images/salon_agent.png",
            icon: Scissors
        },
        {
            id: "automotive",
            title: t("receptionist.usecases.item4.title"),
            description: t("receptionist.usecases.item4.desc"),
            image: "/images/automotive_agent.png",
            icon: Car
        },
        {
            id: "fitness",
            title: t("receptionist.usecases.item5.title"),
            description: t("receptionist.usecases.item5.desc"),
            image: "/images/fitness_agent.png",
            icon: Dumbbell
        },
        {
            id: "homeservice",
            title: t("receptionist.usecases.item6.title"),
            description: t("receptionist.usecases.item6.desc"),
            image: "/images/homeservice_agent.png",
            icon: Wrench
        },
        {
            id: "hospitality",
            title: t("receptionist.usecases.item7.title"),
            description: t("receptionist.usecases.item7.desc"),
            image: "/images/hospitality_agent.png",
            icon: Hotel
        },
        {
            id: "education",
            title: t("receptionist.usecases.item8.title"),
            description: t("receptionist.usecases.item8.desc"),
            image: "/images/education_agent.png",
            icon: GraduationCap
        },
        {
            id: "retail",
            title: t("receptionist.usecases.item9.title"),
            description: t("receptionist.usecases.item9.desc"),
            image: "/images/retail_agent.png",
            icon: ShoppingBag
        },
        {
            id: "enterprise",
            title: t("receptionist.usecases.item10.title"),
            description: t("receptionist.usecases.item10.desc"),
            image: "/images/enterprise_agent.png",
            icon: Building2
        }
    ];

    const keyFeatures = [
        {
            id: "answering",
            title: t("receptionist.keyfeatures.item1.title"),
            description: t("receptionist.keyfeatures.item1.desc"),
            icon: Clock
        },
        {
            id: "scheduler",
            title: t("receptionist.keyfeatures.item2.title"),
            description: t("receptionist.keyfeatures.item2.desc"),
            icon: Calendar
        },
        {
            id: "qualification",
            title: t("receptionist.keyfeatures.item3.title"),
            description: t("receptionist.keyfeatures.item3.desc"),
            icon: UserCheck
        },
        {
            id: "integration",
            title: t("receptionist.keyfeatures.item4.title"),
            description: t("receptionist.keyfeatures.item4.desc"),
            icon: Database
        },
        {
            id: "transcripts",
            title: t("receptionist.keyfeatures.item5.title"),
            description: t("receptionist.keyfeatures.item5.desc"),
            icon: FileText
        },
        {
            id: "learning",
            title: t("receptionist.keyfeatures.item6.title"),
            description: t("receptionist.keyfeatures.item6.desc"),
            icon: Brain
        }
    ];

    const beforeComparisonItems = [
        t("receptionist.agentvshuman.traditional.1"),
        t("receptionist.agentvshuman.traditional.2"),
        t("receptionist.agentvshuman.traditional.3"),
        t("receptionist.agentvshuman.traditional.4"),
        t("receptionist.agentvshuman.traditional.5"),
        t("receptionist.agentvshuman.traditional.6"),
        t("receptionist.agentvshuman.traditional.7"),
        t("receptionist.agentvshuman.traditional.8")
    ];

    const afterComparisonItems = [
        t("receptionist.agentvshuman.agent.1"),
        t("receptionist.agentvshuman.agent.2"),
        t("receptionist.agentvshuman.agent.3"),
        t("receptionist.agentvshuman.agent.4"),
        t("receptionist.agentvshuman.agent.5"),
        t("receptionist.agentvshuman.agent.6"),
        t("receptionist.agentvshuman.agent.7"),
        t("receptionist.agentvshuman.agent.8")
    ];

    const whyChooseBenefits = [
        { 
            id: "attention", 
            title: t("receptionist.whychoose.item1.title"),
            description: t("receptionist.whychoose.item1.desc"),
            icon: Clock
        },
        { 
            id: "channels", 
            title: t("receptionist.whychoose.item2.title"),
            description: t("receptionist.whychoose.item2.desc"),
            icon: Send
        },
        { 
            id: "dependency", 
            title: t("receptionist.whychoose.item3.title"),
            description: t("receptionist.whychoose.item3.desc"),
            icon: Sliders
        },
        { 
            id: "improving", 
            title: t("receptionist.whychoose.item4.title"),
            description: t("receptionist.whychoose.item4.desc"),
            icon: Brain
        }
    ];

    const systemBehindFeatures = [
        {
            id: "summaries",
            title: t("receptionist.system.item1.title"),
            description: t("receptionist.system.item1.desc"),
            icon: FileText
        },
        {
            id: "alerts",
            title: t("receptionist.system.item2.title"),
            description: t("receptionist.system.item2.desc"),
            icon: Bell
        },
        {
            id: "reminders",
            title: t("receptionist.system.item3.title"),
            description: t("receptionist.system.item3.desc"),
            icon: Clock
        },
        {
            id: "recovery",
            title: t("receptionist.system.item4.title"),
            description: t("receptionist.system.item4.desc"),
            icon: RefreshCw
        },
        {
            id: "syncing",
            title: t("receptionist.system.item5.title"),
            description: t("receptionist.system.item5.desc"),
            icon: Database
        },
        {
            id: "billing",
            title: t("receptionist.system.item6.title"),
            description: t("receptionist.system.item6.desc"),
            icon: BarChart3
        },
        {
            id: "learning",
            title: t("receptionist.system.item7.title"),
            description: t("receptionist.system.item7.desc"),
            icon: Brain
        },
        {
            id: "workflow",
            title: t("receptionist.system.item8.title"),
            description: t("receptionist.system.item8.desc"),
            icon: Sliders
        },
        {
            id: "integrations",
            title: t("receptionist.system.item9.title"),
            description: t("receptionist.system.item9.desc"),
            icon: Link2
        },
        {
            id: "compliance",
            title: t("receptionist.system.item10.title"),
            description: t("receptionist.system.item10.desc"),
            icon: Shield
        }
    ];


    const structuredDataItems = [
        {
            id: 0,
            icon: User,
            title: t("receptionist.structured.item1.title"),
            description: t("receptionist.structured.item1.desc"),
            widgetTitle: t("receptionist.structured.item1.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1">
                    <div className="text-sm font-bold text-white">Markus Schmidt</div>
                    <div className="text-xs text-[#00ff66]/90 font-semibold">{t("receptionist.mockup.tab1")}</div>
                    <div className="text-[11px] text-[#fbf9f7]/60 mt-1">Phone: +49 152 901234</div>
                    <div className="text-[10px] text-[#fbf9f7]/40">Email: m.schmidt@domain.de</div>
                </div>
            )
        },
        {
            id: 1,
            icon: Euro,
            title: t("receptionist.structured.item3.title"),
            description: t("receptionist.structured.item3.desc"),
            widgetTitle: t("receptionist.structured.item3.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1">
                    <div className="text-sm font-bold text-[#00ff66]">€450,000 - €500,000</div>
                    <div className="text-xs text-[#fbf9f7]/60">{t("receptionist.mockup.mortgage")}</div>
                    <div className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 w-fit mt-1.5 uppercase tracking-wider">
                        Vetted
                    </div>
                </div>
            )
        },
        {
            id: 2,
            icon: Home,
            title: t("receptionist.structured.item2.title"),
            description: t("receptionist.structured.item2.desc"),
            widgetTitle: t("receptionist.structured.item2.title"),
            colSpan: 2,
            widgetContent: (
                <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl px-3.5 py-2">
                        <span className="text-[11px] text-[#fbf9f7]/50 font-bold uppercase tracking-wider">{t("receptionist.mockup.targetProperty")}</span>
                        <span className="text-xs font-bold text-white">{t("receptionist.mockup.address")}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                        <span className="text-[10px] bg-emerald-950/40 border border-emerald-900/30 text-emerald-350 px-2.5 py-1 rounded-lg font-semibold">{t("receptionist.mockup.tag1")}</span>
                        <span className="text-[10px] bg-emerald-950/40 border border-emerald-900/30 text-emerald-350 px-2.5 py-1 rounded-lg font-semibold">{t("receptionist.mockup.tag2")}</span>
                        <span className="text-[10px] bg-emerald-950/40 border border-emerald-900/30 text-emerald-350 px-2.5 py-1 rounded-lg font-semibold">{t("receptionist.mockup.tag3")}</span>
                        <span className="text-[10px] bg-emerald-950/40 border border-emerald-900/30 text-emerald-350 px-2.5 py-1 rounded-lg font-semibold">{t("receptionist.mockup.tag4")}</span>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            icon: Calendar,
            title: t("receptionist.structured.item4.title"),
            description: t("receptionist.structured.item4.desc"),
            widgetTitle: t("receptionist.structured.item4.title"),
            colSpan: 1,
            widgetContent: (
                <div className="space-y-1">
                    <div className="text-sm font-bold text-white">{t("receptionist.mockup.confirmedTour")}</div>
                    <div className="text-xs text-emerald-400 font-bold">{t("receptionist.mockup.viewingTime")}</div>
                    <div className="text-[9px] text-[#fbf9f7]/40 mt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {t("receptionist.mockup.calendarSynced")}
                    </div>
                </div>
            )
        },
        {
            id: 4,
            icon: Sparkles,
            title: t("receptionist.structured.item5.title"),
            description: t("receptionist.structured.item5.desc"),
            widgetTitle: t("receptionist.structured.item5.title"),
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
            title: t("receptionist.structured.item6.title"),
            description: t("receptionist.structured.item6.desc"),
            widgetTitle: t("receptionist.structured.item6.title"),
            colSpan: 2,
            widgetContent: (
                <div className="space-y-3">
                    <p className="text-xs text-[#fbf9f7]/70 leading-relaxed italic">
                        &ldquo;{t("receptionist.mockup.summaryText")}&rdquo;
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
            question: t("receptionist.faq.q1"),
            answer: t("receptionist.faq.a1")
        },
        {
            id: 2,
            question: t("receptionist.faq.q2"),
            answer: t("receptionist.faq.a2")
        },
        {
            id: 3,
            question: t("receptionist.faq.q3"),
            answer: t("receptionist.faq.a3")
        },
        {
            id: 4,
            question: t("receptionist.faq.q4"),
            answer: t("receptionist.faq.a4")
        },
        {
            id: 5,
            question: t("receptionist.faq.q5"),
            answer: t("receptionist.faq.a5")
        },
        {
            id: 6,
            question: t("receptionist.faq.q6"),
            answer: t("receptionist.faq.a6")
        },
        {
            id: 7,
            question: t("receptionist.faq.q7"),
            answer: t("receptionist.faq.a7")
        },
        {
            id: 8,
            question: t("receptionist.faq.q8"),
            answer: t("receptionist.faq.a8")
        },
        {
            id: 9,
            question: t("receptionist.faq.q9"),
            answer: t("receptionist.faq.a9")
        },
        {
            id: 10,
            question: t("receptionist.faq.q10"),
            answer: t("receptionist.faq.a10")
        },
        {
            id: 11,
            question: t("receptionist.faq.q11"),
            answer: t("receptionist.faq.a11")
        },
        {
            id: 12,
            question: t("receptionist.faq.q12"),
            answer: t("receptionist.faq.a12")
        },
        {
            id: 13,
            question: t("receptionist.faq.q13"),
            answer: t("receptionist.faq.a13")
        },
        {
            id: 14,
            question: t("receptionist.faq.q14"),
            answer: t("receptionist.faq.a14")
        },
        {
            id: 15,
            question: t("receptionist.faq.q15"),
            answer: t("receptionist.faq.a15")
        },
        {
            id: 16,
            question: t("receptionist.faq.q16"),
            answer: t("receptionist.faq.a16")
        },
        {
            id: 17,
            question: t("receptionist.faq.q17"),
            answer: t("receptionist.faq.a17")
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "AI Call Agent for Business Receptionist Duties",
                "serviceType": "Automated Call Answering and Appointment Scheduling",
                "provider": { "@id": "https://www.agent-ondemand.com/#software" },
                "url": "https://www.agent-ondemand.com/receptionist",
                "description": "An AI call agent that answers every incoming call instantly, books appointments with real-time calendar sync, qualifies leads by intent and urgency, and hands off complex calls to a human team member with full context.",
                "areaServed": "Worldwide"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does the AI call agent sound natural?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Agent On Demand uses natural, conversational voice AI that handles interruptions, tone, and context in real time rather than following a rigid script."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can it book appointments automatically?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. It connects directly to Google Calendar and Outlook, checks real-time availability, applies buffer rules, and confirms bookings without manual coordination."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if a caller wants to speak with a person?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The AI performs a warm transfer to the right team member and sends a call summary first, so the caller never has to repeat themselves."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does it work outside business hours?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. The AI call agent is available 24/7, including evenings, weekends, and holidays."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-transparent px-4">
            <title>{t("receptionist.meta.title" as TranslationKey)}</title>
            <meta name="description" content={t("receptionist.meta.desc" as TranslationKey)} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Navbar />

            {/* ── HERO SECTION ── */}
            <ProductsHero
                titleLine1={t("receptionist.hero.titleLine1")}
                titleGradient={t("receptionist.hero.titleGradient")}
                subtitle={t("receptionist.hero.subtitle")}
                description={t("receptionist.hero.description")}
                detailParagraphs={[
                    t("receptionist.hero.para1"),
                    t("receptionist.hero.para2")
                ]}
                bulletPoints={[
                    t("receptionist.hero.bullet1"),
                    t("receptionist.hero.bullet2"),
                    t("receptionist.hero.bullet3")
                ]}
            />

            {/* ── INTERACTIVE TESTING SANDBOX ── */}
            <TestAgent 
                initialAgentId="receptionist" 
                allowedAgents={["receptionist"]} 
                allowedTabs={["call", "getcalled"]} 
            />

            {/* ── MEET PRODUCT SECTION ── */}
            <MeetProduct
                titleLine1={t("receptionist.meet.titleLine1")}
                titleGradient={t("receptionist.meet.titleGradient")}
                paragraphs={[
                    t("receptionist.meet.para1"),
                    t("receptionist.meet.para2")
                ]}
                listHeader={t("receptionist.meet.listHeader")}
                listItems={[
                    { text: t("receptionist.meet.item1"), icon: PhoneIncoming },
                    { text: t("receptionist.meet.item2"), icon: Sliders },
                    { text: t("receptionist.meet.item3"), icon: Calendar },
                    { text: t("receptionist.meet.item4"), icon: CalendarDays },
                    { text: t("receptionist.meet.item5"), icon: UserCheck },
                    { text: t("receptionist.meet.item6"), icon: Compass },
                    { text: t("receptionist.meet.item7"), icon: Brain }
                ]}
                ctaPrimary={t("receptionist.meet.ctaPrimary")}
                ctaSecondary={t("receptionist.meet.ctaSecondary")}
            />
            {/* ── WHY PRODUCT SECTION ── */}
            <WhyProduct
                badge={t("receptionist.why.badge")}
                title={t("receptionist.why.title")}
                descriptionTop={t("receptionist.why.descTop")}
                descriptionBottom={t("receptionist.why.descBottom")}
                itemIcon={AlertTriangle}
                listItems={[
                    t("receptionist.why.item1"),
                    t("receptionist.why.item2"),
                    t("receptionist.why.item3"),
                    t("receptionist.why.item4"),
                    t("receptionist.why.item5")
                ]}
            />
             <ProductFeatures
                sectionTitle={t("receptionist.features.title")}
                sectionSubtitle={t("receptionist.features.subtitle")}
                features={features}
            />
            <RealConversations />
             {/* ── LEAD AUTOMATION FEATURES GRID ── */}
            <ProductAutomationFeatures
                sectionTitle={t("receptionist.automation.title")}
                sectionSubtitleTop={t("receptionist.automation.subtitleTop")}
                sectionSubtitleBottom={t("receptionist.automation.subtitleBottom")}
                features={automationFeatures}
            />
             <ProductUseCases
                sectionTitle={t("receptionist.usecases.title")}
                useCases={useCases}
                ctaText={t("hero.startTrial")}
            />
            {/* ── KEY PRODUCT FEATURES SECTION ── */}
            <KeyProductFeatures
                sectionTitle={t("receptionist.keyfeatures.title")}
                features={keyFeatures}
            />

            {/* ── AGENT VS HUMAN COMPARISON SECTION ── */}
            <ProductAgentVsHuman
                sectionTitle={t("receptionist.agentvshuman.title")}
                beforeTitle={t("receptionist.agentvshuman.beforeTitle")}
                afterTitle={t("receptionist.agentvshuman.afterTitle")}
                beforeItems={beforeComparisonItems}
                afterItems={afterComparisonItems}
            />

            {/* ── WHY CHOOSE PRODUCT SECTION ── */}
            <WhyChooseProduct
                badge="Benefits"
                title={t("receptionist.whychoose.title")}
                description={t("receptionist.whychoose.desc")}
                benefits={whyChooseBenefits}
            />
            <SetupSimple />

            {/* ── THE SYSTEM BEHIND IT SECTION ── */}
            <div className="relative">
                <KeyProductFeatures
                    sectionTitle={t("receptionist.system.title")}
                    sectionSubtitle={t("receptionist.system.subtitle")}
                    features={systemBehindFeatures}
                />
                <div className="max-w-4xl mx-auto px-6 text-center -mt-12 mb-24 relative z-10">
                    <p className="text-[#fbf9f7]/55 text-base md:text-lg font-semibold italic">
                        &ldquo;{t("receptionist.system.footer")}&rdquo;
                    </p>
                </div>
            </div>

            {/* ── STRUCTURED DATA SECTION ── */}
            <ProductStructuredData
                subtitle={t("receptionist.structured.subtitle")}
                title={t("receptionist.structured.title")}
                description={t("receptionist.structured.desc")}
                footerText={t("receptionist.structured.footer")}
                items={structuredDataItems}
            />

            {/* ── PRODUCT SPECIFIC CTA ── */}
            <ProductCTA
                title={t("receptionist.cta.title")}
                subtitle={t("receptionist.cta.subtitle")}
                description={t("receptionist.cta.desc")}
                buttonText={t("receptionist.cta.btn")}
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
                title={t("receptionist.faq.title")}
                subtitle={t("receptionist.faq.subtitle")}
                faqItems={faqItems}
            />

            {/* ── CONTACT/LEAD FORM ── */}
            <section id="contact" className="py-16">
                <MeetAvaCTA />
            </section>

            <ProductFinalCTA
                title={t("receptionist.finalcta.title")}
                subtitle1={t("receptionist.finalcta.subtitle1")}
                subtitle2={t("receptionist.finalcta.subtitle2")}
                description={t("receptionist.finalcta.desc")}
                subbuttonText={t("receptionist.finalcta.subbtn")}
                buttonText={t("receptionist.finalcta.btn")}
                buttonSecondaryText={t("receptionist.finalcta.btnSecondary")}
                calendarCard1={calendarCard1}
                calendarCard2={calendarCard2}
            />

            <Footer />
        </main>
    );
}

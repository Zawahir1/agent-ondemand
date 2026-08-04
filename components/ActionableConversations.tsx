"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, UserCheck, CalendarDays, ListTodo, StickyNote, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

const listItems = [
    {
        id: 0,
        icon: FileText,
        titleKey: "actionable.summary" as TranslationKey,
        descKey: "actionable.summary.desc" as TranslationKey,
    },
    {
        id: 1,
        icon: UserCheck,
        titleKey: "actionable.lead" as TranslationKey,
        descKey: "actionable.lead.desc" as TranslationKey,
    },
    {
        id: 2,
        icon: CalendarDays,
        titleKey: "actionable.appointment" as TranslationKey,
        descKey: "actionable.appointment.desc" as TranslationKey,
    },
    {
        id: 3,
        icon: ListTodo,
        titleKey: "actionable.followup" as TranslationKey,
        descKey: "actionable.followup.desc" as TranslationKey,
    },
    {
        id: 4,
        icon: StickyNote,
        titleKey: "actionable.notes" as TranslationKey,
        descKey: "actionable.notes.desc" as TranslationKey,
    },
];

const localDict = {
    en: {
        summaryTitle: "AI Call Summary",
        summaryContent: "Markus Schmidt called regarding the property listing. He is highly interested, qualified with a budget of €450k, and scheduled a viewing for tomorrow.",
        leadTitle: "Lead Capture",
        leadName: "Markus Schmidt",
        leadStatus: "Qualified Lead",
        leadBudget: "Budget: €450,000",
        apptTitle: "Calendar Booking",
        apptEvent: "Property Viewing",
        apptTime: "June 15 at 14:00",
        apptSync: "Calendar synced",
        followTitle: "Follow-Up Workflow",
        followItem1: "Send brochure (SMS sent)",
        followItem2: "Sync profile to HubSpot CRM",
        followItem3: "Send calendar invite",
        notesTitle: "Context & Preferences",
        notes1: "Prefers ground floor / elevator",
        notes2: "Has a dog (golden retriever)",
        notes3: "Prefers calls in the afternoon"
    },
    de: {
        summaryTitle: "KI-Anrufzusammenfassung",
        summaryContent: "Markus Schmidt rief wegen des Immobilienangebots an. Er ist sehr interessiert, qualifiziert mit einem Budget von 450k € und hat eine Besichtigung vereinbart.",
        leadTitle: "Lead-Erfassung",
        leadName: "Markus Schmidt",
        leadStatus: "Qualifizierter Lead",
        leadBudget: "Budget: 450.000 €",
        apptTitle: "Kalenderbuchung",
        apptEvent: "Immobilienbesichtigung",
        apptTime: "15. Juni um 14:00 Uhr",
        apptSync: "Kalender synchronisiert",
        followTitle: "Follow-up-Workflow",
        followItem1: "Broschüre senden (SMS gesendet)",
        followItem2: "Profil mit HubSpot synchronisieren",
        followItem3: "Kalendereinladung senden",
        notesTitle: "Kontext & Vorlieben",
        notes1: "Bevorzugt Erdgeschoss / Aufzug",
        notes2: "Hat einen Hund (Golden Retriever)",
        notes3: "Anrufe am Nachmittag bevorzugt"
    },
    it: {
        summaryTitle: "Riepilogo chiamata AI",
        summaryContent: "Markus Schmidt ha chiamato per l'annuncio immobiliare. È molto interessato, qualificato con un budget di € 450k e ha programmato una visita.",
        leadTitle: "Cattura lead",
        leadName: "Markus Schmidt",
        leadStatus: "Lead qualificato",
        leadBudget: "Budget: € 450.000",
        apptTitle: "Prenotazione calendario",
        apptEvent: "Visita immobile",
        apptTime: "15 giugno alle 14:00",
        apptSync: "Calendario sincronizzato",
        followTitle: "Workflow di follow-up",
        followItem1: "Invia brochure (SMS inviato)",
        followItem2: "Sincronizza profilo su HubSpot",
        followItem3: "Invia invito calendario",
        notesTitle: "Contesto e preferenze",
        notes1: "Preferisce piano terra / ascensore",
        notes2: "Ha un cane (golden retriever)",
        notes3: "Preferisce chiamate nel pomeriggio"
    },
    es: {
        summaryTitle: "Resumen de llamada IA",
        summaryContent: "Markus Schmidt llamó por el anuncio de la propiedad. Está muy interesado, calificado con un presupuesto de € 450k y programó una visita.",
        leadTitle: "Captura de prospectos",
        leadName: "Markus Schmidt",
        leadStatus: "Prospecto calificado",
        leadBudget: "Presupuesto: € 450.000",
        apptTitle: "Reserva de calendario",
        apptEvent: "Visita de propiedad",
        apptTime: "15 de junio a las 14:00",
        apptSync: "Calendario sincronizado",
        followTitle: "Flujo de seguimiento",
        followItem1: "Enviar folleto (SMS enviado)",
        followItem2: "Sincronizar con HubSpot CRM",
        followItem3: "Enviar invitación de calendario",
        notesTitle: "Contexto y preferencias",
        notes1: "Prefiere planta baja / ascensor",
        notes2: "Tiene un perro (golden retriever)",
        notes3: "Prefiere llamadas por la tarde"
    },
    fr: {
        summaryTitle: "Résumé d'appel IA",
        summaryContent: "Markus Schmidt a appelé concernant l'annonce immobilière. Il est très intéressé, qualifié avec un budget de 450k € et a programmé une visite.",
        leadTitle: "Capture de lead",
        leadName: "Markus Schmidt",
        leadStatus: "Lead qualifié",
        leadBudget: "Budget : 450 000 €",
        apptTitle: "Réservation d'agenda",
        apptEvent: "Visite de propriété",
        apptTime: "15 juin à 14h00",
        apptSync: "Calendrier synchronisé",
        followTitle: "Flux de suivi",
        followItem1: "Envoyer la brochure (SMS envoyé)",
        followItem2: "Synchroniser le profil sur HubSpot",
        followItem3: "Envoyer l'invitation d'agenda",
        notesTitle: "Contexte & préférences",
        notes1: "Préfère rez-de-chaussée / ascenseur",
        notes2: "A un chien (golden retriever)",
        notes3: "Préfère les appels l'après-midi"
    }
};

export default function ActionableConversations() {
    const { t, language } = useLanguage();
    const [activeIdx, setActiveIdx] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-advance slideshow active index if not hovered
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIdx((prev) => (prev + 1) % 5);
        }, 3200);
        return () => clearInterval(interval);
    }, [isHovered]);

    // Ensure language is typed correctly or defaults to 'en'
    const lang = (language in localDict ? language : "en") as keyof typeof localDict;
    const content = localDict[lang];

    return (
        <section 
            className="py-24 bg-[#000000] relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Ambient colorful green nebula backlight */}
            <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none z-0 origin-center bg-[radial-gradient(circle,rgba(0,255,102,0.1)_0%,rgba(16,185,129,0.02)_50%,rgba(0,0,0,0)_80%)]" />

            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* Left Side Content & Interactive Tabs */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
                        {t("actionable.subtitle")}
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-intrinseca text-[#fbf9f7] font-medium leading-tight mb-4">
                        {t("actionable.title")}
                    </h2>
                    
                    <p className="text-base md:text-lg text-[#fbf9f7]/60 mb-8 leading-relaxed">
                        {t("actionable.desc")}
                    </p>

                    <div className="space-y-4 mb-8">
                        {listItems.map((item) => {
                            const isActive = activeIdx === item.id;
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => setActiveIdx(item.id)}
                                    className={`pl-4 py-3 rounded-r-xl border-l-4 transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                                        isActive 
                                            ? "border-emerald-400 bg-emerald-500/5 text-white" 
                                            : "border-white/5 bg-transparent text-[#fbf9f7]/50 hover:text-[#fbf9f7]/80 hover:bg-white/[0.01]"
                                    }`}
                                >
                                    <div className={`p-2 rounded-lg transition-colors ${
                                        isActive ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-white/40"
                                    }`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-base transition-colors">
                                            {t(item.titleKey)}
                                        </h3>
                                        <p className="text-xs text-[#fbf9f7]/60 mt-0.5 leading-snug">
                                            {t(item.descKey)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Team Footer Banner */}
                    <div className="border-l-2 border-emerald-500/40 pl-4 py-1.5 text-sm font-medium text-emerald-400/90 italic">
                        {t("actionable.footer")}
                    </div>
                </div>

                {/* Right Side CRM Dashboard Mockup */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="w-full bg-[#030905]/80 backdrop-blur-md rounded-[2rem] border border-[#00ff66]/10 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#00ff66]/10">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                <span className="text-[10px] text-[#fbf9f7]/30 font-semibold tracking-wider uppercase ml-2">
                                    Agent On Demand CRM
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-bold border border-emerald-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Live call synced
                            </div>
                        </div>

                        {/* CRM Dashboard Widgets Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            {/* Widget 0: Call Summary (Spans full width) */}
                            <motion.div
                                animate={{
                                    scale: activeIdx === 0 ? 1.02 : 0.98,
                                    borderColor: activeIdx === 0 ? "rgba(0, 255, 102, 0.4)" : "rgba(255, 255, 255, 0.05)",
                                    backgroundColor: activeIdx === 0 ? "rgba(0, 255, 102, 0.06)" : "rgba(255, 255, 255, 0.02)",
                                    boxShadow: activeIdx === 0 ? "0 0 25px rgba(0, 255, 102, 0.15)" : "0 4px 10px rgba(0, 0, 0, 0.3)"
                                }}
                                transition={{ duration: 0.3 }}
                                className="sm:col-span-2 border rounded-2xl p-4 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <FileText className="w-4 h-4 text-emerald-400" />
                                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                                        {content.summaryTitle}
                                    </span>
                                </div>
                                <p className="text-xs text-[#fbf9f7]/70 leading-relaxed">
                                    {content.summaryContent}
                                </p>
                            </motion.div>

                            {/* Widget 1: Lead Information */}
                            <motion.div
                                animate={{
                                    scale: activeIdx === 1 ? 1.03 : 0.98,
                                    borderColor: activeIdx === 1 ? "rgba(0, 255, 102, 0.4)" : "rgba(255, 255, 255, 0.05)",
                                    backgroundColor: activeIdx === 1 ? "rgba(0, 255, 102, 0.06)" : "rgba(255, 255, 255, 0.02)",
                                    boxShadow: activeIdx === 1 ? "0 0 25px rgba(0, 255, 102, 0.15)" : "0 4px 10px rgba(0, 0, 0, 0.3)"
                                }}
                                transition={{ duration: 0.3 }}
                                className="border rounded-2xl p-4 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <UserCheck className="w-4 h-4 text-emerald-400" />
                                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                                        {content.leadTitle}
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs font-bold text-[#fbf9f7]">
                                        {content.leadName}
                                    </div>
                                    <div className="text-[10px] text-[#00ff66]/90 font-medium">
                                        {content.leadStatus}
                                    </div>
                                    <div className="text-[10px] text-[#fbf9f7]/55">
                                        {content.leadBudget}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Widget 2: Appointment Details */}
                            <motion.div
                                animate={{
                                    scale: activeIdx === 2 ? 1.03 : 0.98,
                                    borderColor: activeIdx === 2 ? "rgba(0, 255, 102, 0.4)" : "rgba(255, 255, 255, 0.05)",
                                    backgroundColor: activeIdx === 2 ? "rgba(0, 255, 102, 0.06)" : "rgba(255, 255, 255, 0.02)",
                                    boxShadow: activeIdx === 2 ? "0 0 25px rgba(0, 255, 102, 0.15)" : "0 4px 10px rgba(0, 0, 0, 0.3)"
                                }}
                                transition={{ duration: 0.3 }}
                                className="border rounded-2xl p-4 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <CalendarDays className="w-4 h-4 text-emerald-400" />
                                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                                        {content.apptTitle}
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs font-bold text-[#fbf9f7]">
                                        {content.apptEvent}
                                    </div>
                                    <div className="text-[10px] text-emerald-400 font-semibold">
                                        {content.apptTime}
                                    </div>
                                    <div className="text-[9px] text-[#fbf9f7]/40 flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        {content.apptSync}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Widget 3: Follow-up Actions */}
                            <motion.div
                                animate={{
                                    scale: activeIdx === 3 ? 1.03 : 0.98,
                                    borderColor: activeIdx === 3 ? "rgba(0, 255, 102, 0.4)" : "rgba(255, 255, 255, 0.05)",
                                    backgroundColor: activeIdx === 3 ? "rgba(0, 255, 102, 0.06)" : "rgba(255, 255, 255, 0.02)",
                                    boxShadow: activeIdx === 3 ? "0 0 25px rgba(0, 255, 102, 0.15)" : "0 4px 10px rgba(0, 0, 0, 0.3)"
                                }}
                                transition={{ duration: 0.3 }}
                                className="border rounded-2xl p-4 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <ListTodo className="w-4 h-4 text-emerald-400" />
                                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                                        {content.followTitle}
                                    </span>
                                </div>
                                <div className="space-y-1.5 text-[9px] text-[#fbf9f7]/70">
                                    <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                                        <Check className="w-3 h-3 flex-shrink-0" />
                                        {content.followItem1}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                                        <Check className="w-3 h-3 flex-shrink-0" />
                                        {content.followItem2}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[#fbf9f7]/40">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#fbf9f7]/20 ml-1 mr-1" />
                                        {content.followItem3}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Widget 4: Customer Notes */}
                            <motion.div
                                animate={{
                                    scale: activeIdx === 4 ? 1.03 : 0.98,
                                    borderColor: activeIdx === 4 ? "rgba(0, 255, 102, 0.4)" : "rgba(255, 255, 255, 0.05)",
                                    backgroundColor: activeIdx === 4 ? "rgba(0, 255, 102, 0.06)" : "rgba(255, 255, 255, 0.02)",
                                    boxShadow: activeIdx === 4 ? "0 0 25px rgba(0, 255, 102, 0.15)" : "0 4px 10px rgba(0, 0, 0, 0.3)"
                                }}
                                transition={{ duration: 0.3 }}
                                className="border rounded-2xl p-4 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <StickyNote className="w-4 h-4 text-emerald-400" />
                                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                                        {content.notesTitle}
                                    </span>
                                </div>
                                <ul className="space-y-1 list-disc list-inside text-[9px] text-[#fbf9f7]/60">
                                    <li>{content.notes1}</li>
                                    <li>{content.notes2}</li>
                                    <li>{content.notes3}</li>
                                </ul>
                            </motion.div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

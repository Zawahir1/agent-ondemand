"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, MapPin, MessageSquare, Check, Loader2, ArrowRight } from "lucide-react";
import GradientText from "@/components/GradientText";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/locales/translations";

export default function MeetAvaCTA() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
        acceptedTerms: false,
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const tempErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) tempErrors.name = t("meet.form.error.name");
        if (!formData.email.trim()) {
            tempErrors.email = t("meet.form.error.email");
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = t("meet.form.error.email.invalid");
        }
        if (!formData.phone.trim()) {
            tempErrors.phone = t("meet.form.error.phone");
        } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
            tempErrors.phone = t("meet.form.error.phone.invalid");
        }
        if (!formData.address.trim()) tempErrors.address = t("meet.form.error.address");
        if (!formData.message.trim()) tempErrors.message = t("meet.form.error.goals");
        if (!formData.acceptedTerms) tempErrors.acceptedTerms = t("meet.form.error.terms");
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        // Simulate submitting data
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
            acceptedTerms: false,
        });
        setErrors({});
        setIsSubmitted(false);
    };

    return (
        <section className="py-20 relative overflow-hidden">
             <div 
                 className="w-full mx-auto rounded-3xl border border-[#00ff66]/10 overflow-hidden relative p-8 md:p-16 lg:p-20 shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
                 style={{ background: 'linear-gradient(135deg, #041c0e 0%, #010a05 100%)' }}
             >
                 {/* Subtle green ambient overlay */}
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-955/10 to-transparent pointer-events-none" />

                {/* Left/Right Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
                    {/* Left Column: Heading and description (col-span-5) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 text-left flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-intrinseca mb-6 leading-[1.15] text-[#fbf9f7]">
                            <GradientText white={true}>{t("meet.title")}</GradientText>
                        </h2>
                        <p className="text-lg md:text-xl text-[#fbf9f7]/80 font-medium leading-relaxed">
                            {t("meet.desc")}
                        </p>
                    </motion.div>

                    {/* Right Column: Form / Success Content (col-span-7) */}
                    <div className="lg:col-span-7 w-full">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="contact-form"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    onSubmit={handleSubmit}
                                    className="w-full space-y-6"
                                    noValidate
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Field */}
                                        <div className="flex flex-col text-left w-full">
                                            <label className="text-xs font-semibold text-[#fbf9f7]/85 uppercase tracking-wider mb-2">
                                                {t("meet.form.name")}
                                            </label>
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff66] group-focus-within:text-[#00ff66]/80 w-5 h-5 transition-colors duration-300" />
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={(e) => {
                                                        setFormData({ ...formData, name: e.target.value });
                                                        if (errors.name) setErrors({ ...errors, name: "" });
                                                    }}
                                                    className={`w-full bg-black/40 backdrop-blur-md border ${errors.name ? 'border-red-500/40 focus:ring-red-500/30 focus:border-red-500/40' : 'border-[#00ff66]/20 focus:ring-emerald-500/20 focus:border-[#00ff66]/50 focus:shadow-[0_0_15px_rgba(0,255,102,0.15)]'} rounded-2xl px-5 py-3.5 pl-12 text-[#fbf9f7] placeholder-[#fbf9f7]/30 focus:bg-black/60 focus:outline-none focus:ring-1 transition-all duration-300`}
                                                />
                                            </div>
                                            {errors.name && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-red-400 text-xs mt-1.5 ml-1"
                                                >
                                                    {errors.name}
                                                </motion.p>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div className="flex flex-col text-left w-full">
                                            <label className="text-xs font-semibold text-[#fbf9f7]/85 uppercase tracking-wider mb-2">
                                                {t("meet.form.email")}
                                            </label>
                                            <div className="relative group">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff66] group-focus-within:text-[#00ff66]/80 w-5 h-5 transition-colors duration-300" />
                                                <input
                                                    type="email"
                                                    placeholder="john@company.com"
                                                    value={formData.email}
                                                    onChange={(e) => {
                                                        setFormData({ ...formData, email: e.target.value });
                                                        if (errors.email) setErrors({ ...errors, email: "" });
                                                    }}
                                                    className={`w-full bg-black/40 backdrop-blur-md border ${errors.email ? 'border-red-500/40 focus:ring-red-500/30 focus:border-red-500/40' : 'border-[#00ff66]/20 focus:ring-emerald-500/20 focus:border-[#00ff66]/50 focus:shadow-[0_0_15px_rgba(0,255,102,0.15)]'} rounded-2xl px-5 py-3.5 pl-12 text-[#fbf9f7] placeholder-[#fbf9f7]/30 focus:bg-black/60 focus:outline-none focus:ring-1 transition-all duration-300`}
                                                />
                                            </div>
                                            {errors.email && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-red-400 text-xs mt-1.5 ml-1"
                                                >
                                                    {errors.email}
                                                </motion.p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Phone Number Field */}
                                        <div className="flex flex-col text-left w-full">
                                            <label className="text-xs font-semibold text-[#fbf9f7]/85 uppercase tracking-wider mb-2">
                                                {t("meet.form.phone")}
                                            </label>
                                            <div className="relative group">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff66] group-focus-within:text-[#00ff66]/80 w-5 h-5 transition-colors duration-300" />
                                                <input
                                                    type="tel"
                                                    placeholder="+1 (555) 000-0000"
                                                    value={formData.phone}
                                                    onChange={(e) => {
                                                        setFormData({ ...formData, phone: e.target.value });
                                                        if (errors.phone) setErrors({ ...errors, phone: "" });
                                                    }}
                                                    className={`w-full bg-black/40 backdrop-blur-md border ${errors.phone ? 'border-red-500/40 focus:ring-red-500/30 focus:border-red-500/40' : 'border-[#00ff66]/20 focus:ring-emerald-500/20 focus:border-[#00ff66]/50 focus:shadow-[0_0_15px_rgba(0,255,102,0.15)]'} rounded-2xl px-5 py-3.5 pl-12 text-[#fbf9f7] placeholder-[#fbf9f7]/30 focus:bg-black/60 focus:outline-none focus:ring-1 transition-all duration-300`}
                                                />
                                            </div>
                                            {errors.phone && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-red-400 text-xs mt-1.5 ml-1"
                                                >
                                                    {errors.phone}
                                                </motion.p>
                                            )}
                                        </div>

                                        {/* Address Field */}
                                        <div className="flex flex-col text-left w-full">
                                            <label className="text-xs font-semibold text-[#fbf9f7]/85 uppercase tracking-wider mb-2">
                                                {t("meet.form.address")}
                                            </label>
                                            <div className="relative group">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff66] group-focus-within:text-[#00ff66]/80 w-5 h-5 transition-colors duration-300" />
                                                <input
                                                    type="text"
                                                    placeholder="San Francisco, CA"
                                                    value={formData.address}
                                                    onChange={(e) => {
                                                        setFormData({ ...formData, address: e.target.value });
                                                        if (errors.address) setErrors({ ...errors, address: "" });
                                                    }}
                                                    className={`w-full bg-black/40 backdrop-blur-md border ${errors.address ? 'border-red-500/40 focus:ring-red-500/30 focus:border-red-500/40' : 'border-[#00ff66]/20 focus:ring-emerald-500/20 focus:border-[#00ff66]/50 focus:shadow-[0_0_15px_rgba(0,255,102,0.15)]'} rounded-2xl px-5 py-3.5 pl-12 text-[#fbf9f7] placeholder-[#fbf9f7]/30 focus:bg-black/60 focus:outline-none focus:ring-1 transition-all duration-300`}
                                                />
                                            </div>
                                            {errors.address && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-red-400 text-xs mt-1.5 ml-1"
                                                >
                                                    {errors.address}
                                                </motion.p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div className="flex flex-col text-left w-full">
                                        <label className="text-xs font-semibold text-[#fbf9f7]/85 uppercase tracking-wider mb-2">
                                            {t("meet.form.goals")}
                                        </label>
                                        <div className="relative group">
                                            <MessageSquare className="absolute left-4 top-4 text-[#00ff66] group-focus-within:text-[#00ff66]/80 w-5 h-5 transition-colors duration-300" />
                                            <textarea
                                                placeholder={t("meet.form.placeholder.goals")}
                                                value={formData.message}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, message: e.target.value });
                                                    if (errors.message) setErrors({ ...errors, message: "" });
                                                }}
                                                className={`w-full bg-black/40 backdrop-blur-md border ${errors.message ? 'border-red-500/40 focus:ring-red-500/30 focus:border-red-500/40' : 'border-[#00ff66]/20 focus:ring-emerald-500/20 focus:border-[#00ff66]/50 focus:shadow-[0_0_15px_rgba(0,255,102,0.15)]'} rounded-2xl px-5 py-3.5 pl-12 h-32 resize-none text-[#fbf9f7] placeholder-[#fbf9f7]/30 focus:bg-black/60 focus:outline-none focus:ring-1 transition-all duration-300`}
                                            />
                                        </div>
                                        {errors.message && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-400 text-xs mt-1.5 ml-1"
                                            >
                                                {errors.message}
                                            </motion.p>
                                        )}
                                    </div>

                                    {/* Checkbox Field */}
                                    <div className="relative flex flex-col text-left w-full">
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <div className="relative flex items-center mt-1">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.acceptedTerms}
                                                    onChange={(e) => {
                                                        setFormData({ ...formData, acceptedTerms: e.target.checked });
                                                        if (errors.acceptedTerms) setErrors({ ...errors, acceptedTerms: "" });
                                                    }}
                                                    className="sr-only peer"
                                                />
                                                <div className={`w-5 h-5 border rounded flex items-center justify-center transition-all ${errors.acceptedTerms ? 'border-red-500/50 bg-red-955/20' : 'border-[#00ff66]/20 bg-black/40 group-hover:border-[#00ff66]/50'} peer-checked:bg-[#00ff66] peer-checked:border-[#00ff66]`}>
                                                    {formData.acceptedTerms && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                                                </div>
                                            </div>
                                            <span className="text-sm text-[#fbf9f7]/80 select-none font-medium">
                                                {t("meet.form.privacy.agree" as TranslationKey)}{" "}
                                                <a href="#" className="underline text-[#fbf9f7] hover:text-[#00ff66] transition-colors">
                                                    {t("meet.form.privacy.policy")}
                                                </a>{" "}
                                                {t("meet.form.privacy.and" as TranslationKey)}{" "}
                                                <a href="#" className="underline text-[#fbf9f7] hover:text-[#00ff66] transition-colors">
                                                    {t("meet.form.privacy.terms")}
                                                </a>
                                                .
                                            </span>
                                        </label>
                                        {errors.acceptedTerms && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-400 text-xs mt-1.5 ml-8"
                                            >
                                                {errors.acceptedTerms}
                                            </motion.p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-center pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex items-center justify-center gap-3 bg-[#00ff66] text-black px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(0,255,102,0.65)] hover:bg-[#00e575] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer border-0"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-6 h-6 animate-spin" />
                                                    {t("meet.form.button.submitting")}
                                                </>
                                            ) : (
                                                <>
                                                    {t("meet.form.button.idle")}
                                                    <ArrowRight className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success-message"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ type: "spring", duration: 0.5 }}
                                    className="text-center py-12 space-y-6 max-w-md mx-auto w-full"
                                >
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-950/40 border border-[#00ff66]/30 shadow-2xl shadow-green-400/30 text-[#00ff66]">
                                        <Check className="w-10 h-10 stroke-[3]" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-3xl font-intrinseca text-[#fbf9f7]">
                                            {t("meet.form.success.title")}
                                        </h3>
                                        <p className="text-[#fbf9f7]/80">
                                            {t("meet.form.success.desc1").replace("{name}", formData.name)}
                                        </p>
                                        <p className="text-sm text-[#fbf9f7]/60">
                                            {t("meet.form.success.desc2").replace("{email}", formData.email)}
                                        </p>
                                    </div>
 
                                    <div className="pt-4">
                                        <button
                                            onClick={handleReset}
                                            className="text-[#fbf9f7] bg-white/5 hover:bg-white/10 border border-[#00ff66]/30 px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer"
                                        >
                                            {t("meet.form.success.again")}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Ripple keyframes style */}
                <style>{`
                    @keyframes ripple-cta {
                        0% {
                            transform: translate(-50%, -50%) scale(1);
                            opacity: 0.35;
                        }
                        75% {
                            opacity: 0.12;
                        }
                        100% {
                            transform: translate(-50%, -50%) scale(6.5);
                            opacity: 0;
                        }
                    }
                    .ripple-animation {
                        animation-name: ripple-cta;
                        animation-timing-function: cubic-bezier(0.1, 0.8, 0.3, 1);
                        animation-iteration-count: infinite;
                    }
                `}</style>
            </div>
        </section>
    );
}

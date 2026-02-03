"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Loader2, CheckCircle2 } from "lucide-react";

const ContactInfoSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        services: [] as string[]
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const toggleService = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Something went wrong");
            }

            setStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
                services: []
            });

            // Reset status after a few seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message || "Failed to send message. Please try again.");
        }
    };

    return (
        <section className="w-full min-h-screen bg-black py-20 md:py-32 flex items-center">
            <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: -0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-8"
                >
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-normal">
                            Get in touch
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-5xl text-primary font-normal leading-tight">
                        Contact information
                    </h2>

                    <div className="max-w-md">
                        <p className="text-white/70 text-sm md:text-base font-normal leading-relaxed">
                            Have a project in mind or just want to say hello? Fill out the form below and we'll get back to you as soon as possible. Our team is ready to help you bring your ideas to life.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 mt-12 md:mt-auto">
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-primary hover:text-white transition-all rounded-sm">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-primary hover:text-white transition-all rounded-sm">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-primary hover:text-white transition-all rounded-sm">
                            <span className="font-bold text-lg">G+</span>
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-primary hover:text-white transition-all rounded-sm">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-primary hover:text-white transition-all rounded-sm">
                            <MessageCircle size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-10"
                >
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                        {/* Name Input */}
                        <div className="flex flex-col gap-2 group">
                            <label className="text-gray-400 text-sm font-normal">First name</label>
                            <input
                                required
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="bg-transparent border-b border-primary/50 group-hover:border-primary transition-all py-2 outline-none text-white font-normal"
                            />
                        </div>

                        {/* Name Input 2 */}
                        <div className="flex flex-col gap-2 group">
                            <label className="text-gray-400 text-sm font-normal">Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="bg-transparent border-b border-primary/50 group-hover:border-primary transition-all py-2 outline-none text-white font-normal"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-2 group">
                            <label className="text-gray-400 text-sm font-normal">Email</label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="bg-transparent border-b border-primary/50 group-hover:border-primary transition-all py-2 outline-none text-white font-normal"
                            />
                        </div>

                        {/* Phone Input */}
                        <div className="flex flex-col gap-2 group">
                            <label className="text-gray-400 text-sm font-normal">Phone number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="bg-transparent border-b border-primary/50 group-hover:border-primary transition-all py-2 outline-none text-white font-normal"
                            />
                        </div>

                        {/* Service Selection */}
                        <div className="md:col-span-2 flex flex-col gap-6 mt-4">
                            <label className="text-gray-200 text-sm md:text-base font-normal">Choose the service which you want to hire us.</label>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {['Design', 'Development', 'Management', 'Marketing'].map((service) => (
                                    <div
                                        key={service}
                                        onClick={() => toggleService(service)}
                                        className="flex items-center gap-3 cursor-pointer group select-none"
                                    >
                                        <div
                                            className="relative w-5 h-5 border border-white/40 flex-shrink-0 flex items-center justify-center bg-transparent group-hover:border-primary transition-all"
                                        >
                                            <div className={`w-2 h-2 bg-primary transition-opacity ${formData.services.includes(service) ? "opacity-100" : "opacity-0"}`} />
                                        </div>
                                        <span className="text-white text-sm md:text-base font-normal whitespace-nowrap">
                                            {service}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="md:col-span-2 flex flex-col gap-2 mt-4">
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Type your message"
                                rows={6}
                                className="bg-white border-none p-4 outline-none text-black font-normal resize-none"
                            />
                        </div>

                        {/* Submit Button & Status */}
                        <div className="md:col-span-2 mt-4 flex flex-col gap-4">
                            <motion.button
                                disabled={status === "loading"}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className={`w-full py-4 text-sm md:text-base font-normal uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-3 ${status === "success" ? "bg-green-600" : "bg-primary hover:bg-primary/95"
                                    } text-white disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle2 className="w-5 h-5" />
                                        Message Sent!
                                    </>
                                ) : (
                                    "Contact Us"
                                )}
                            </motion.button>

                            {status === "error" && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-sm text-center"
                                >
                                    {errorMessage}
                                </motion.p>
                            )}
                        </div>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactInfoSection;

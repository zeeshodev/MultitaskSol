"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";

const ContactInfoSection = () => {
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                        {/* Name Input */}
                        <div className="flex flex-col gap-2 group">
                            <label className="text-gray-400 text-sm font-normal">Your name</label>
                            <input
                                type="text"
                                className="bg-transparent border-b border-primary/50 group-hover:border-primary transition-all py-2 outline-none text-white font-normal"
                            />
                        </div>

                        {/* Name Input 2 */}
                        <div className="flex flex-col gap-2 group">
                            <label className="text-gray-400 text-sm font-normal">Your name</label>
                            <input
                                type="text"
                                className="bg-transparent border-b border-primary/50 group-hover:border-primary transition-all py-2 outline-none text-white font-normal"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-2 group">
                            <label className="text-gray-400 text-sm font-normal">Email</label>
                            <input
                                type="email"
                                className="bg-transparent border-b border-primary/50 group-hover:border-primary transition-all py-2 outline-none text-white font-normal"
                            />
                        </div>

                        {/* Phone Input */}
                        <div className="flex flex-col gap-2 group">
                            <label className="text-gray-400 text-sm font-normal">Phone number</label>
                            <input
                                type="tel"
                                className="bg-transparent border-b border-primary/50 group-hover:border-primary transition-all py-2 outline-none text-white font-normal"
                            />
                        </div>

                        {/* Service Selection */}
                        <div className="md:col-span-2 flex flex-col gap-6 mt-4">
                            <label className="text-gray-200 text-sm md:text-base font-normal">Choose the service which you want to hire us.</label>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {['Design', 'Development', 'Management', 'Marketing'].map((service) => (
                                    <label key={service} className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative w-5 h-5 border border-white/40 flex-shrink-0 flex items-center justify-center bg-transparent group-hover:border-primary transition-all">
                                            <div className="w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="text-white text-sm md:text-base font-normal whitespace-nowrap">{service}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="md:col-span-2 flex flex-col gap-2 mt-4">
                            <textarea
                                placeholder="Type your message"
                                rows={6}
                                className="bg-white border-none p-4 outline-none text-black font-normal resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 mt-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-primary text-white py-4 text-sm md:text-base font-normal uppercase tracking-widest shadow-xl transition-all hover:bg-primary/95"
                            >
                                Contact Us
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactInfoSection;

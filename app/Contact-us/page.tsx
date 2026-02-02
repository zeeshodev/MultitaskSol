"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactInfoSection from "@/components/ContactInfoSection";
import Achievements from "@/components/Achievements";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import FAQSection from "@/components/FAQSection";
import CTA from "@/components/CTA";

const ContactUsPage = () => {
    return (
        <div className="min-h-screen bg-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: "url('/u979.png')" }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Decorative Elements - Left */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center">
                    <div className="w-20 h-64 bg-primary opacity-90" />
                    <div className="flex gap-4 ml-6">
                        <div className="w-1.5 h-64 bg-gray-400/50" />
                        <div className="w-1.5 h-64 bg-gray-400/50" />
                        <div className="w-1.5 h-64 bg-gray-400/50" />
                    </div>
                </div>

                {/* Decorative Elements - Right */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center">
                    <div className="flex gap-4 mr-6">
                        <div className="w-1.5 h-64 bg-gray-400/50" />
                        <div className="w-1.5 h-64 bg-gray-400/50" />
                        <div className="w-1.5 h-64 bg-gray-400/50" />
                    </div>
                    <div className="w-20 h-64 bg-primary opacity-90" />
                </div>

                {/* Content Area */}
                <div className="relative z-30 w-[90%] md:w-[70%] lg:w-[1000px] mx-auto text-center px-4">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-5xl text-white font-normal leading-tight mb-2">
                            <span className="text-primary">Need a place to ludge?</span><br />
                            THis is where to be.
                        </h1>

                        <div className="max-w-2xl mx-auto mt-8 mb-12">
                            <p className="text-white/80 text-sm md:text-base font-normal leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-10 py-3.5 text-sm md:text-base font-normal uppercase tracking-widest shadow-2xl transition-all hover:bg-gray-100 hover:bg-primary hover:text-white"
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </div>


            </section>

            <ContactInfoSection />
            <Achievements />
            <WorkWithUsSection />
            <FAQSection />
            <CTA />
        </div>
    );
};

export default ContactUsPage;

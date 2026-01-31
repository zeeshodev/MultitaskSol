"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section className="relative w-full h-[600px] flex items-center overflow-hidden">
            {/* Background Image with Parallax-like effect */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/u185.jpg')" }}
            >
                {/* Overlay for better text separation */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 w-[85%] mx-auto h-[70%] flex flex-col justify-between">
                {/* Top Section - Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2"
                >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                        Get Started
                    </span>
                </motion.div>

                {/* Middle Section - Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-3xl  text-white leading-tight max-w-xl">
                            Research-driven investors <br />
                            for technical founders
                        </h2>
                        <p className="text-white/80 text-sm md:text-base max-w-md leading-relaxed">
                            Our Mission is to turn groundbreaking research into transformative investments,
                            fueling the next generation of first startups.
                        </p>
                    </motion.div>

                    {/* Bottom Right - Contact Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex lg:justify-end"
                    >
                        <button className="bg-white text-black px-10 py-4 font-bold text-sm md:text-base hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 group">
                            Contact Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* Bottom Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="relative w-full h-[1px] bg-white/20 origin-left mt-12"
                >
                    <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-primary" />
                    <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-primary" />
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;

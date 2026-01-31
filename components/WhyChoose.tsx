"use client";

import React from "react";
import { Lightbulb, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const WhyChoose = () => {
    return (
        <section className="relative w-full h-[700px] flex items-center overflow-hidden py-24">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/u167.jpg')" }}
            >
                {/* Dark Overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Space for the globe in the background image */}
                <div className="hidden lg:block h-full" />

                {/* Right Side - Content Box */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col w-full max-w-2xl"
                >
                    {/* Tiny Badge Above */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-white text-[10px] md:text-xs font-medium tracking-wider uppercase">
                            Your Partner in Business Excellence
                        </span>
                    </div>

                    {/* Main Box */}
                    <div className="flex flex-col shadow-2xl overflow-hidden rounded-sm">
                        {/* Header Part */}
                        <div className="bg-[#8B6D2D]/90 backdrop-blur-sm p-6 md:p-8 border-b border-white/10">
                            <h2 className="text-2xl md:text-2xl lg:text-2xl  text-white leading-tight">
                                Why Choose Our IT <br />
                                <span className="text-white/90">Outsourcing Services Pakistan?</span>
                            </h2>
                        </div>

                        {/* Body Part */}
                        <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 border border-white/5 flex flex-col gap-6">
                            <p className="text-white/80 text-sm md:text-base leading-relaxed">
                                Our goal is to provide outcomes that go above expectations. Our clients are
                                at the center of all we do at Multi-Task Solutions. We collaborate closely
                                with you to make sure your company succeeds in Offshore software development.
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center transition-colors group-hover:bg-primary/30">
                                        <Lightbulb className="text-primary w-5 h-5" />
                                    </div>
                                    <span className="text-white font-semibold text-base uppercase tracking-tight">
                                        Customized <br className="hidden md:block" /> solutions
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center transition-colors group-hover:bg-primary/30">
                                        <BarChart3 className="text-primary w-5 h-5" />
                                    </div>
                                    <span className="text-white font-semibold text-base uppercase tracking-tight">
                                        Expert <br className="hidden md:block" /> team
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChoose;

"use client";

import React from "react";
import { motion } from "framer-motion";

const ReadyToServe = () => {
    return (
        <section className="relative w-full h-[600px] flex items-center overflow-hidden py-24">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/u38.jpg')" }}
            >
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side spacer */}
                <div className="hidden lg:block h-full" />

                {/* Right Side Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col w-full max-w-2xl"
                >
                    {/* Tiny Badge Above */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-white text-[10px] md:text-xs font-medium tracking-wider uppercase">
                            Cutting Edge Custom Software Development Services for a Growing Business
                        </span>
                    </div>

                    {/* Main Box */}
                    <div className="flex flex-col shadow-2xl overflow-hidden rounded-sm ">
                        {/* Gold Block */}
                        <div className="bg-[#8B6D2D]/90 backdrop-blur-sm p-6 md:p-8">
                            <h2 className="text-2xl md:text-2xl lg:text-2xl  text-white leading-tight uppercase">
                                We stand ready to provide you with the service you need that will suit your business: big or small.
                            </h2>
                        </div>

                        {/* Secondary Transparent Block */}
                        <div className="bg-white/10 backdrop-blur-xl h-12 w-full border border-white/5 border-t-0" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReadyToServe;

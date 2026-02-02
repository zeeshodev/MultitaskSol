"use client";

import React from "react";
import { motion } from "framer-motion";

const WorkWithUsSection = () => (
    <section className="relative w-full py-20 bg-[#2A2A2A] overflow-hidden">
        {/* Background Graphic (u760.png) - Ensure path is correct from public folder */}
        <div
            className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/u760.png')" }}
        />

        <div className="relative z-10 w-[90%] md:w-[85%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative aspect-video md:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl"
                >
                    <img
                        src="/u976.png"
                        alt="Team Working"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <h2 className="text-3xl md:text-5xl text-primary font-normal">
                        Work with Us
                    </h2>

                    <div className="flex flex-col gap-2 text-white/80 font-normal leading-relaxed text-sm md:text-base">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white py-3 px-10 self-start font-normal uppercase tracking-widest text-sm transition-all hover:bg-primary/90 shadow-lg"
                    >
                        Work with us
                    </motion.button>
                </motion.div>
            </div>
        </div>
    </section>
);

export default WorkWithUsSection;

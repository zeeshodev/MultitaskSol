"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PARTNERS = [
    { name: "P@SHA", logo: "/pasha-logo.png" },
    { name: "ORACLE", logo: "/Oracle-Cloud-Emblem (1).png" },
    { name: "INVEST PAKISTAN", logo: "/invest_pakistan.png" },
    { name: "TOSHIBA", logo: "/toshiba-seeklogo.png" },
    { name: "DELL", logo: "/Brands-Logo-07.png" }, // Assuming this is Dell based on context or common naming in collections
    { name: "Microsoft", logo: "/microsoft-logo-svgrepo-com.svg" },
    { name: "PITB", logo: "/punjab-information-technology-board-pitb-seeklogo.png" },
];

const Partners = () => {
    return (
        <section className="py-24 w-full bg-background flex flex-col items-center gap-16 overflow-hidden">
            {/* Header Content */}
            <div className="w-[85%] mx-auto text-center flex flex-col items-center gap-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Our partner</h2>
                <p className="max-w-4xl text-white/70 text-sm md:text-base leading-relaxed">
                    We proudly collaborate with trusted partners who share our vision of quality, integrity, and excellence.
                    Together, we combine expertise, innovation, and market knowledge to deliver reliable solutions and
                    long-term value for our clients. These strategic partnerships strengthen our services and help us achieve sustainable growth.
                </p>
            </div>

            {/* Partners Grid - Skewed Cards */}
            <div className="w-full flex overflow-x-auto no-scrollbar snap-x snap-mandatory pt-4 pb-12 cursor-grab active:cursor-grabbing">
                <div className="flex gap-4 md:gap-8 px-6 md:px-[7.5%] items-center">
                    {PARTNERS.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="snap-center shrink-0"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative group"
                            >
                                {/* Skewed Container */}
                                <div className="w-32 md:w-36 lg:w-44 h-72 md:h-[320px] bg-primary -skew-x-12 md:-skew-x-16 transition-all duration-300 group-hover:bg-primary/90 flex items-center justify-center overflow-hidden shadow-2xl">
                                    {/* Un-skewed Content Area */}
                                    <div className="skew-x-12 md:skew-x-16 flex items-center justify-center h-full w-full p-6">
                                        {/* Vertical Logo */}
                                        <div className="rotate-[-90deg] skew-y-12 md:skew-y-16 flex items-center justify-center w-[200px] md:w-[250px]">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                width={300}
                                                height={80}
                                                className="object-contain max-h-16 md:max-h-20 drop-shadow-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;

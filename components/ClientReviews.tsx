"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const REVIEWS = [
    {
        name: "James Anderson",
        role: "CTO, TechVision",
        content: "MTS transformed our offshore development process. Their team's expertise and commitment to quality are unparalleled in the industry.",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    },
    {
        name: "Sarah Jenkins",
        role: "Product Manager, Innovate Corp",
        content: "The customized solutions provided by MTS helped us scale our platform 3x faster than ever. Highly professional and reliable company.",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        name: "Michael Chen",
        role: "Founder, GreenWave",
        content: "Outstanding software development services. Their understanding of modern tech stacks and business needs is exceptional.",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
        name: "Emma Wilson",
        role: "Director, BuildSmart",
        content: "Truly a partner in business excellence. The team at MTS is proactive, skilled, and delivers beyond expectations every single time.",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    },
    {
        name: "David Ross",
        role: "VP of Engineering, CloudLink",
        content: "The best outsourcing experience we've had. Seamless communication and top-tier code quality. Highly recommend MTS.",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    }
];

const ClientReviews = () => {
    return (
        <section className="py-24 w-full bg-background overflow-hidden">
            <div className="w-[85%] mx-auto mb-16 flex flex-col items-center text-center gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2"
                >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-primary text-xs md:text-sm font-bold tracking-widest uppercase">Testimonials</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-white uppercase"
                >
                    What Our Clients Say
                </motion.h2>
            </div>

            {/* Scrolling Reviews Container */}
            <div className="flex overflow-hidden relative group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    className="flex gap-6 min-w-max px-6"
                >
                    {/* Double the array for seamless infinite loop */}
                    {[...REVIEWS, ...REVIEWS].map((review, index) => (
                        <div
                            key={index}
                            className="w-[300px] md:w-[400px] p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-6 group/card hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <Quote className="w-8 h-8 text-primary/20 group-hover/card:text-primary/40 transition-colors" />
                            </div>

                            <p className="text-white/80 text-base md:text-lg italic leading-relaxed">
                                "{review.content}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 group-hover/card:border-primary transition-colors">
                                    <Image
                                        src={review.avatar}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-base">{review.name}</span>
                                    <span className="text-white/50 text-xs md:text-sm uppercase tracking-wider">{review.role}</span>
                                </div>
                            </div>

                            {/* Decorative Bottom Line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover/card:w-full transition-all duration-500 rounded-b-2xl" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientReviews;

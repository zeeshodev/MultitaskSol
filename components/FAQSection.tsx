"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    number: string;
}

const FAQItem = ({ question, answer, isOpen, onClick, number }: FAQItemProps) => {
    return (
        <div className="flex flex-col mb-4">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-4 md:p-6 bg-primary text-white transition-all hover:bg-primary/95 text-left"
            >
                <span className="text-xs md:text-sm lg:text-base font-normal tracking-wide">
                    {number}. {question}
                </span>
                <div className="flex-shrink-0 ml-4">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-primary/10"
                    >
                        <div className="p-6 text-white/80 font-normal leading-relaxed text-sm md:text-base">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            number: "01",
            question: "What does your website design service include?",
            answer: "Our website design service is comprehensive and includes user experience (UX) research, user interface (UI) design, responsive development, and SEO optimization to ensure your site looks great and performs even better."
        },
        {
            number: "02",
            question: "How can my company benefit from digital marketing?",
            answer: "Digital marketing helps increase your brand visibility, reach a wider target audience more effectively than traditional methods, and provides measurable data to track your return on investment."
        },
        {
            number: "03",
            question: "What kind of content are you offering?",
            answer: "We offer a wide range of content strategies including social media assets, video production, technical copywriting, and data-driven blog posts tailored to your brand voice."
        },
        {
            number: "04",
            question: "How would you measure the success of your Social media campaigns?",
            answer: "Success is measured through key performance indicators (KPIs) such as engagement rates, conversion tracking, follower growth, and overall brand sentiment across all major platforms."
        }
    ];

    return (
        <section className="relative w-full py-20 bg-[#2A2A2A] overflow-hidden">
            {/* Background Graphic (u760.png) */}
            <div
                className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/u760.png')" }}
            />

            <div className="relative z-10 w-[90%] md:w-[85%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side: Image u908.png */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative aspect-video lg:aspect-square rounded-sm overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/u908.png"
                            alt="Team Collaboration"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right Side: FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        <h2 className="text-3xl md:text-5xl text-white font-normal leading-tight">
                            Frequently Ask question
                        </h2>

                        <div className="flex flex-col">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    number={faq.number}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

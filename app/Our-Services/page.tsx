"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import ClientReviews from "@/components/ClientReviews";
import CTA from "@/components/CTA";

const OurServicesPage = () => {
    return (
        <div className="min-h-screen bg-background">


            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: "url('/u438.png')" }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-[90%] md:w-[85%] mx-auto ">
                    {/* Skewed Title Banner */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Yellow Skewed Background - Hidden on Mobile */}
                        <div
                            className="hidden md:block absolute left-0  w-[60%] md:w-[50%] bg-primary h-[80%] items-center top-5"
                            style={{
                                clipPath: "polygon(0 0, 100% 0, 93% 100%, 0 100%)",
                            }}
                        />

                        {/* Decorative Stripes - Hidden on Mobile */}
                        <div className="hidden md:flex absolute right-[55%] md:right-[45%] top-5 gap-2 h-full">
                            <div className="w-3 h-[80%] bg-gray-400 -skew-x-16" />
                            <div className="w-3 h-[80%] bg-gray-500 -skew-x-16" />
                            <div className="w-3 h-[80%] bg-gray-600 -skew-x-16" />
                        </div>

                        {/* Title Content */}
                        <div className="relative px-8 md:px-0 py-10 md:py-12">
                            <h1 className="text-3xl md:text-5xl lg:text-5xl text-white leading-tight max-w-xl">
                                Your One-Stop Solution<br />
                                for All Business Needs
                            </h1>
                        </div>
                    </motion.div>

                    {/* Description Text */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="px-8 md:px-0 mt-8 max-w-2xl"
                    >
                        <p className="text-white/80 text-sm md:text-base leading-relaxed">
                            We at Multi-Task Solutions are aware of the challenges involved in managing a
                            company. For this reason, we provide an extensive array of services aimed at optimizing
                            your business processes, raising efficiency, and boosting expansion.
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="px-8 md:px-0 mt-12 flex flex-col sm:flex-row gap-6"
                    >
                        {/* Start Project Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative bg-primary text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-56"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Start a project
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </span>

                            {/* Hover Effect Background */}
                            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </motion.button>

                        {/* Explore More Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wider overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-56"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3 group-hover:opacity-0 transition-opacity duration-300">
                                Explore more
                                <motion.div
                                    animate={{ y: [0, 3, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                >
                                    <ChevronDown className="w-5 h-5" />
                                </motion.div>
                            </span>

                            {/* Hover Effect Background */}
                            <div className="absolute inset-0 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />
                            <span className="absolute inset-0 flex items-center justify-center gap-3 text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Explore more
                                <ChevronDown className="w-5 h-5" />
                            </span>
                        </motion.button>
                    </motion.div>
                </div>



            </section>

            {/* Digital Solutions Section */}
            <section className="w-full py-20 md:py-32 bg-white">
                <div className="w-[90%] md:w-[85%] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* Badge */}
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-sm text-gray-600">Trusted Web design Service</span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
                                We Give You Digital<br />
                                Solutions for
                            </h2>

                            {/* Orange Bar with Text */}
                            <div className="bg-primary px-4 py-2 inline-block">
                                <p className="text-white text-sm">
                                    IT can set backs, magnitudinopere laoreet, quis euismod
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                                Transmax is the world's driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport and transport.
                            </p>

                            {/* Services List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                                    <div>
                                        <p className="text-gray-800 font-medium">Website Design</p>
                                        <p className="text-gray-500 text-sm">Design on website</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                                    <div>
                                        <p className="text-gray-800 font-medium">Graphic Design</p>
                                        <p className="text-gray-500 text-sm">Design on website</p>
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white px-8 py-3 text-sm transition-colors duration-300 mt-4"
                            >
                                More about us
                            </motion.button>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="/u486.png"
                                alt="Digital Transformation"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Cards Grid Section */}
            <section className="w-full py-20 md:py-32 bg-background">
                <div className="w-[90%] md:w-[85%] mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            {/* Left Side - Badge and Heading */}
                            <div>
                                {/* Badge */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span className="text-sm text-white">Trusted web design Service</span>
                                </div>

                                {/* Main Heading */}
                                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
                                    <span className="text-primary">Digital Services</span><br />
                                    <span className="text-white">For <span className="text-primary">Creative Agency</span></span>
                                </h2>
                            </div>

                            {/* Right Side - Description */}
                            <div className="flex items-center">
                                <p className="text-white text-sm leading-relaxed">
                                    On the other hand, we denounce with righteous indignation dislike are so beguiled and demoralized by the charms of pleasure of the blinded by desire that they cannot foresee the pain and trouble
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Website design & Development", image: "/u496.png" },
                            { title: "Digital Marketing", image: "/u508.png" },
                            { title: "SEO & Optimization", image: "/u521.png" },
                            { title: "UI/UX Design", image: "/u534.png" },
                            { title: "Support & Maintenance", image: "/u546.png" },
                            { title: "Product Development", image: "/u559.png" },
                            { title: "Application Development", image: "/u572.png" },
                            { title: "IT Outsourcing", image: "/u584.png" },
                            { title: "BPO/Call Center Solutions", image: "/u597.png" },
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group relative h-80 overflow-hidden cursor-pointer"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${service.image}')` }}
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

                                {/* Plus Icon - Top Right */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-white text-xl font-bold">+</span>
                                </div>

                                {/* Title Box - Bottom Left (appears on hover with gradient) */}
                                <div
                                    className="absolute bottom-0 left-0 px-6 py-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-0"
                                    style={{
                                        background: 'linear-gradient(to right, #F5A81C 0%, #F5A81C 70%, transparent 100%)'
                                    }}
                                >
                                    <h3 className="text-white text-sm md:text-base font-medium">
                                        {service.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ClientReviews />
            <CTA />
        </div>
    );
};

export default OurServicesPage;

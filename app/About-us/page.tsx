"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Calculator, Linkedin } from "lucide-react";
import Achievements from "@/components/Achievements";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import FAQSection from "@/components/FAQSection";
import CTA from "@/components/CTA";


const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative w-full h-screen md:h-screen flex items-end justify-end overflow-hidden">

                <div
                    className="absolute inset-0 z-0 bg-top bg-cover bg-no-repeat"
                    style={{ backgroundImage: "url('/u745.png')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
                </div>

                <div className="absolute left-[3%] md:left-[5%] top-0 bottom-0 z-20 flex gap-2 md:gap-4 pointer-events-none items-center">
                    <div className="w-1 md:w-2 h-[40%] bg-white/30" />
                    <div className="w-1 md:w-2 h-[40%] bg-white/30" />
                    <div className="w-1 md:w-2 h-[40%] bg-white/30" />
                </div>


                <div className="absolute right-[3%] md:right-[5%] top-0 bottom-0 z-20 flex gap-2 md:gap-4 pointer-events-none items-center">
                    <div className="w-1 md:w-2 h-[40%] bg-white/30" />
                    <div className="w-1 md:w-2 h-[40%] bg-white/30" />
                    <div className="w-1 md:w-2 h-[40%] bg-white/30" />
                </div>


                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 w-full bg-primary/90 py-8 md:py-16"
                >
                    <div className="w-[90%] md:w-[85%] mx-auto text-center px-4  ">

                        <h1 className="text-xl md:text-5xl lg:text-5xl text-white leading-tight ">
                            Your Partner in Professional<br />
                            Business Excellence
                        </h1>


                        <p className="text-white text-[10px] md:text-sm lg:text-base max-w-3xl mx-auto mb-6 md:mb-10 leading-relaxed font-light">
                            We bring a lot of experience and knowledge of Social media marketing strategies due to our team of
                            seasoned professionals. Our multidisciplinary approach to Social media management Pakistan guarantees
                            that we recognize the special opportunities and problems faced by your company.
                        </p>


                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-6 md:px-12 py-2.5 md:py-4 font-medium uppercase tracking-widest text-[10px] md:text-sm transition-all hover:bg-gray-100 shadow-xl"
                        >
                            CONTACT US
                        </motion.button>
                    </div>
                </motion.div>
            </section>




            <section className="w-full bg-black py-20 border-t border-white/10">
                <div className="w-[90%] md:w-[85%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-2">
                                <Briefcase className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-primary text-xl font-medium uppercase tracking-widest">Experience</h3>
                            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                            </p>
                        </motion.div>

                        {/* Projects Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-4 md:border-x md:border-white/10"
                        >
                            <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-2">
                                <CheckCircle className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-primary text-xl font-medium uppercase tracking-widest">Projects</h3>
                            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                            </p>
                        </motion.div>

                        {/* Financing Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-2">
                                <Calculator className="text-primary w-8 h-8" />
                            </div>
                            <h3 className="text-primary text-xl font-medium uppercase tracking-widest">FINANCING</h3>
                            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Experience Counter Section (New) */}
            <section className="w-full bg-white py-20 md:py-32 overflow-hidden">
                <div className="w-[90%] md:w-[85%] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6"
                        >
                            {/* Badge */}
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-xs md:text-sm text-gray-500 font-medium">
                                    Empowering Success with Tailored Solutions
                                </span>
                            </div>

                            {/* Heading with mixed colors */}
                            <h2 className="text-2xl md:text-4xl lg:text-3xl leading-tight font-medium text-gray-800">
                                <p className="text-black">Committed for making
                                    your Business Grow with
                                    the right Strategies,
                                    World-Class Standards
                                    and Tailored Approaches
                                    that will stand the Test
                                    of Time!</p>
                            </h2>
                        </motion.div>

                        {/* Right Side Counter */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center lg:items-end lg:pr-10"
                        >
                            <div className="relative">
                                <span className="text-[120px] md:text-[200px] leading-none font-bold text-primary opacity-90 select-none">
                                    10+
                                </span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-1 bg-primary mt-2 flex justify-end"
                                />
                                <p className="text-xl md:text-2xl text-gray-500 font-medium mt-4 tracking-wide text-center lg:text-right">
                                    years of experience
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Achievements />

            {/* Our Leaders Section */}
            <section className="w-full  py-20 md:py-32 overflow-hidden">
                <div className="w-[90%] md:w-[85%] mx-auto">
                    {/* Upper Heading Section */}
                    <div className="flex flex-col gap-4 mb-20">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                                Our Leaders
                            </span>
                        </div>
                        <h2 className="text-xl md:text-3xl lg:text-2xl text-primary max-w-4xl leading-tight w-full lg:max-w-xl">
                            We are dedicated to the success of our merchants, partners, and employees
                        </h2>
                    </div>

                    {/* Leader Profile Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Leader Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] md:aspect-square bg-gray-100 overflow-hidden shadow-2xl rounded-sm"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                alt="CEO Name"
                                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>

                        {/* Leader Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                                    Co-Founder / Chief Executive Officer
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl lg:text-4xl text-primary ">
                                Oisin O' Connor
                            </h3>

                            <div className="flex flex-col gap-6 text-gray-600 leading-relaxed text-sm md:text-base">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
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
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* CTO Profile Section (Inverted Layout) */}
            <section className="w-full  py-20 md:py-32 overflow-hidden">
                <div className="w-[90%] md:w-[85%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Leader Info (Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6 order-2 md:order-1"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                                    Co-Founder / Chief Technology Officer
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl lg:text-4xl text-primary font-normal">
                                Mike Flynn
                            </h3>

                            <div className="flex flex-col gap-6 text-gray-600 leading-relaxed text-sm md:text-base font-normal">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </motion.div>

                        {/* Leader Image (Right) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] md:aspect-square bg-gray-100 overflow-hidden shadow-2xl rounded-sm order-1 md:order-2"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                alt="Mike Flynn"
                                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="w-full py-20 md:py-32 overflow-hidden ">
                <div className="w-[90%] md:w-[85%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        {/* Team Member 1 */}
                        <TeamMember
                            name="Connor"
                            role="Co-Founder & CEO"
                            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                        />
                        {/* Team Member 2 */}
                        <TeamMember
                            name="Mike Flynn"
                            role="Co-Founder & CTO"
                            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                        />
                        {/* Team Member 3 */}
                        <TeamMember
                            name="Michael McArthur"
                            role="COO"
                            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                        />
                        {/* Team Member 4 */}
                        <TeamMember
                            name="Vanessa Lopez"
                            role="CCXO"
                            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                        />
                        {/* Team Member 5 */}
                        <TeamMember
                            name="Ty Bailey"
                            role="VP of Technical Support"
                            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop"
                        />
                        {/* Team Member 6 */}
                        <TeamMember
                            name="Michael McArthur"
                            role="COO"
                            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                        />
                    </div>
                </div>
            </section>

            <WorkWithUsSection />
            <FAQSection />
            <CTA />
        </div>
    );
};

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
}

const TeamMember = ({ name, role, image }: TeamMemberProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-6"
    >
        {/* Circular Image with Yellow Accent */}
        <div className="relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
            {/* The Yellow Semi-Circle Border highlight - Refined for perfect wrapping */}
            <div
                className="absolute inset-[-10px] border-[8px] border-primary rounded-full z-0"
                style={{ clipPath: 'inset(50% 0 0 0)' }}
            />
            <div className="w-full h-full rounded-full overflow-hidden relative z-10 ">
                <img src={image} alt={name} className="w-full h-full object-cover  grayscale-[0.2]" />
            </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 pt-4">
            <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <h4 className="text-xl md:text-2xl text-gray-800 font-normal">{name}</h4>
            </div>
            <p className="text-sm text-gray-500 font-normal">{role}</p>

            <div className="mt-2 pt-2 border-t border-gray-100">
                <a href="#" className="flex items-center justify-between group">
                    <span className="text-xs text-gray-600 uppercase">learn more on</span>
                    <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                </a>
            </div>
        </div>
    </motion.div>

);

export default AboutUsPage;

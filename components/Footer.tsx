"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageSquare, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white pt-20 pb-10 overflow-hidden">
            <div className="w-[85%] mx-auto flex flex-col gap-16">
                {/* Top Section - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
                    {/* Column 1 - Brand Info */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-primary font-bold text-lg uppercase tracking-wider mb-1">
                                Multi-Task Solutions Pvt. Limited
                            </h3>
                            <p className="text-white/60 text-sm italic">Building possibilities</p>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                            Our multidisciplinary approach Social media management Pakistan guarantees that we
                            recognize the special opportunities and problems faced by your company.
                        </p>
                    </div>

                    {/* Column 2 - Links */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-primary font-bold text-lg uppercase tracking-wider">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {["Websites Design & Development", "SEO", "Digital Marketing", "Blog"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-white/70 text-sm hover:text-primary transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Contact */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-primary font-bold text-lg uppercase tracking-wider">
                            Contact Us
                        </h3>
                        <div className="flex flex-col gap-3 text-sm text-white/70">
                            <p>Pakistan, UK, USA</p>
                            <p className="hover:text-primary transition-colors cursor-pointer">info@multitasksols.com</p>
                            <p className="hover:text-primary transition-colors cursor-pointer">+92 313 4647139</p>
                        </div>
                    </div>
                </div>

                {/* Newsletter / Contact Bar */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
                    <div className="hidden lg:block"></div> {/* Spacer for brand column */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-col sm:flex-row shadow-2xl overflow-hidden rounded-sm">
                            <input
                                type="email"
                                placeholder="Enter your email for updates"
                                className="flex-1 bg-white px-6 py-4 text-black focus:outline-none placeholder:text-gray-400"
                            />
                            <button className="bg-primary text-white px-10 py-4 font-bold uppercase text-sm hover:bg-primary/90 transition-all whitespace-nowrap">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative Line */}
                <div className="relative w-full h-[1px] bg-white/10">
                    <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-primary" />
                    <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Bottom Section - Social & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Social Icons */}
                    <div className="flex items-center gap-6">
                        {[Facebook, Instagram, Twitter, Linkedin, MessageSquare].map((Icon, i) => (
                            <Link key={i} href="#" className="text-white hover:text-primary transition-all hover:scale-110">
                                <Icon className="w-6 h-6" />
                            </Link>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-primary text-sm font-medium text-center">
                        Copyright © 2025 Multi Task Sol. Designed & Developed with Care.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

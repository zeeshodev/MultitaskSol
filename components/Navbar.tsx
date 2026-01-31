"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown, Monitor, Rocket, Globe, Layout, Settings, Cpu, Layers, ShieldCheck, Phone } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside or on a link
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = ["Home", "Services", "Portfolio", "About", "Blog"];

    const services = [
        { name: "Web Design and Development", href: "#web-design", icon: <Monitor size={20} /> },
        { name: "Digital Marketing", href: "#digital-marketing", icon: <Rocket size={20} /> },
        { name: "SEO", href: "#seo", icon: <Globe size={20} /> },
        { name: "UI/UX", href: "#ui-ux", icon: <Layout size={20} /> },
        { name: "Support & Maintenance", href: "#support-maintenance", icon: <Settings size={20} /> },
        { name: "Product Development", href: "#product-development", icon: <Cpu size={20} /> },
        { name: "Application Development", href: "#application-development", icon: <Layers size={20} /> },
        { name: "IT Outsourcing", href: "#it-outsourcing", icon: <ShieldCheck size={20} /> },
        { name: "BPO/Call Center Solutions", href: "#bpo-call-center", icon: <Phone size={20} /> },
    ];

    return (
        <>
            <nav
                className={`fixed top-2 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] z-50 transition-all duration-300 rounded-full ${isScrolled ? "py-2 bg-black border border-white/10" : "py-2"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <span className="text-xl font-bold tracking-tighter text-white">
                            MULTI TASK <span className="text-primary">SOLUTIONS</span>
                        </span>
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => {
                            if (link === "Services") {
                                return (
                                    <div
                                        key={link}
                                        className="relative group h-full py-4"
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                    >
                                        <motion.a
                                            href="#services"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="text-sm font-medium text-white/70 hover:text-white transition-colors relative cursor-pointer flex items-center gap-1"
                                        >
                                            {link}
                                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                        </motion.a>

                                        {/* Megamenu Dropdown */}
                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 20 }}
                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[900px] bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden"
                                                >
                                                    {/* Header */}
                                                    <div className="px-8 py-6 border-b border-white/5 bg-white/5">
                                                        <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                                            Our Professional Services
                                                        </h3>
                                                    </div>

                                                    {/* Services Grid */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6">
                                                        {services.map((service, idx) => (
                                                            <motion.a
                                                                key={service.name}
                                                                href={service.href}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: idx * 0.03 }}
                                                                className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                                                            >
                                                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 shrink-0">
                                                                    {service.icon}
                                                                </div>
                                                                <div className="flex flex-col gap-1">
                                                                    <span className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                                                                        {service.name}
                                                                    </span>
                                                                    <p className="text-[10px] text-white/40 leading-relaxed">
                                                                        Enterprise-grade solutions for your needs
                                                                    </p>
                                                                </div>
                                                            </motion.a>
                                                        ))}
                                                    </div>

                                                    {/* Footer Banner */}
                                                    <div className="bg-primary/5 p-4 text-center border-t border-white/5">
                                                        <p className="text-[10px] text-white/50 uppercase tracking-widest">
                                                            Custom software solutions for businesses big or small
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }

                            return (
                                <motion.a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                                >
                                    {link}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="text-white/70 hover:text-white transition-colors">
                            <Search size={20} />
                        </button>
                        <button className="hidden h-12 w-32 md:block px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-all">
                            Lets Talk
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white z-50 relative"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] md:hidden bg-black flex flex-col"
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                            <span className="text-lg font-bold tracking-tighter text-white">
                                MULTI TASK <span className="text-primary">SOLUTIONS</span>
                            </span>
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 text-white hover:text-primary transition-colors"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Menu Content - Scrollable */}
                        <div className="flex-1 overflow-y-auto px-6 py-10">
                            <nav className="flex flex-col gap-8">
                                {navLinks.map((link, index) => {
                                    if (link === "Services") {
                                        return (
                                            <div key={link} className="flex flex-col gap-4">
                                                <button
                                                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                                    className="text-xl  text-white hover:text-primary transition-all flex items-center justify-between group"
                                                >
                                                    {link}
                                                    <motion.div
                                                        animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ChevronDown size={24} className="text-white/30 group-hover:text-primary" />
                                                    </motion.div>
                                                </button>

                                                {/* Mobile Services Submenu */}
                                                <AnimatePresence>
                                                    {isMobileServicesOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="flex flex-col gap-4 pl-4 border-l border-white/10 mt-2 overflow-hidden"
                                                        >
                                                            {services.map((service, idx) => (
                                                                <motion.a
                                                                    key={service.name}
                                                                    href={service.href}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: idx * 0.05 }}
                                                                    onClick={closeMobileMenu}
                                                                    className="text-lg text-white/60 hover:text-primary transition-colors flex items-center gap-3"
                                                                >
                                                                    <div className="text-primary shrink-0">
                                                                        {React.cloneElement(service.icon as React.ReactElement<{ size?: number }>, { size: 18 })}
                                                                    </div>
                                                                    {service.name}
                                                                </motion.a>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }

                                    return (
                                        <motion.a
                                            key={link}
                                            href={`#${link.toLowerCase()}`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={closeMobileMenu}
                                            className="text-xl  text-white hover:text-primary transition-all"
                                        >
                                            {link}
                                        </motion.a>
                                    );
                                })}
                            </nav>

                            {/* CTA Button */}
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <button
                                    className="w-full py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-primary/90 transition-all active:scale-[0.98]"
                                    onClick={closeMobileMenu}
                                >
                                    Lets Talk
                                </button>
                            </div>

                            {/* Footer Content */}
                            <div className="mt-12 flex flex-col gap-4 text-white/40">
                                <p className="text-sm">info@multitasksols.com</p>
                                <p className="text-sm">+92 313 4647139</p>
                                <div className="pt-4 text-xs">
                                    © 2026 Multi Task Solutions
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

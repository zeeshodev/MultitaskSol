"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <div className=" h-screen w-full overflow-hidden  flex justify-center items-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 ">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source
                        src="https://res.cloudinary.com/diwgvg7fm/video/upload/v1769422406/fiber-optic-cables-global-data-transfer-background-1080p-2026-01-23-02-05-36-utc_pfo67u.mov"
                        type="video/mp4"
                    />
                </video>
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10" />
                <div className="noise z-20" />
            </div>

            {/* Hero Content Box */}
            <div className="relative flex flex-col justify-center z-30 items-center text-center md:items-start md:text-left w-[85%] mx-auto pt-32 md:pt-0 pb-20 md:pb-0" >

                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-primary  tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 block"
                >
                    Leading Software Company
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-white leading-[1.2] tracking-tight"
                >
                    Your One Stop Solution <br className="hidden sm:block" />
                    <span className="text-gradient">For all Business Needs</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/60 text-sm md:text-lg max-w-xl mb-10 leading-relaxed"
                >
                    We provide an extensive array of services aimed at optimizing your
                    business processes, raising efficiency, and boosting expansion.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-10 w-full"
                >
                    <button className="group relative bg-primary h-14 w-56 rounded-full overflow-hidden text-white  text-sm tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,168,28,0.3)]">
                        MAIL US TODAY
                    </button>
                </motion.div>

            </div>


            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
                <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </div>
    );
};

export default Hero;

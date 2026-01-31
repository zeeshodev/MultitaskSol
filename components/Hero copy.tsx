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

            <div className="relative flex flex-col justify-center z-30 items-start gap-6 w-full max-w-6xl mx-auto md:px-12 px-6" >

                <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-6 block">
                    Leading Software Company
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-white leading-[1.1] tracking-tight">
                    Your One Stop Solution <br />
                    <span className="text-gradient">For all Business Needs</span>
                </h1>
                <p className="text-white/70 text-md md:text-xl max-w-2xl mb-12  ">
                    We at Multi-Task Solutions are aware of the challenges involved in managing a company.
                    For this reason, we provide an extensive array of services aimed at optimizing your
                    business processes, raising efficiency, and boosting expansion.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-start gap-10">
                    <button className="group relative bg-primary h-14 w-52 rounded-full overflow-hidden">
                        MAIL US TODAY

                    </button>
                </div>

            </div>


            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-muted">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </div>
    );
};

export default Hero;

"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const Counter = ({ value, suffix = "+" }: { value: number; suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 100,
        damping: 30,
    });

    const display = useTransform(spring, (current) =>
        Math.floor(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-semibold text-primary flex items-center">
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
};

const Achievements = () => {
    return (
        <section className="py-24 w-full bg-background overflow-hidden">
            <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <span className="text-primary tracking-widest uppercase text-sm ">
                            Pioneering Trust and Innovation
                        </span>
                        <h2 className="text-4xl md:text-5xl font-regular text-white leading-tight">
                            Multi Task Solutions <br />
                            <span className="text-gradient">Achievements</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4 text-white/70 max-w-lg">
                        <p className="text-lg">
                            We take pride in empowering businesses worldwide with innovative solutions.MTS brings an unwavering commitment to excellence, backed by a global presence.
                        </p>

                    </div>

                    <div className="mt-4">
                        <button className="group relative bg-primary h-14 w-52 rounded-full overflow-hidden text-white  text-sm tracking-widest transition-all hover:scale-105">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>

                {/* Right Content - Stats Grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                    <div className="flex flex-col gap-2">
                        <Counter value={3000} />
                        <p className="text-white/80  text-lg leading-tight">
                            Successful Projects
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Counter value={23} />
                        <p className="text-white/80  text-lg leading-tight">
                            Countries Supported
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Counter value={250} />
                        <p className="text-white/80  text-lg leading-tight">
                            Active Clients
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Counter value={15} />
                        <p className="text-white/80  text-lg leading-tight">
                            Years of Experience
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Achievements;

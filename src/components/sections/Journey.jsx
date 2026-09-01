import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import AnanthamLogo from '../brand/AnanthamLogo';
import partner2 from '../../assets/images/partners/partner2.webp';
import { ArrowUpRight, TrendingUp, ChevronRight } from 'lucide-react';

// Representative background images for each entity
import sysBg from '../../assets/images/projects/sys_journey_cover.jpeg';
import ananthamBg from '../../assets/images/projects/clubhouse_main_render.png';

export default function Journey() {
    const [activeIdx, setActiveIdx] = useState(2); // default to Anantham

    const journeySteps = [
        {
            id: "sys",
            num: "01",
            stepTitle: "STAGE 1 · DEVELOPMENTS",
            era: "Origin & Group Growth",
            company: "SYS Developers",
            tagline: "Own Real-Estate Developments",
            stat: "Plotted & Residential",
            description: "Premium plotted & residential projects built and owned directly by the group.",
            logo: partner2,
            website: "https://sysdevelopers.com/",
            bg: sysBg
        },
        {
            id: "anantham",
            num: "02",
            stepTitle: "STAGE 2 · THE CULMINATION",
            era: "Flagship Gated Township",
            company: "Anantham",
            tagline: "A Legacy Taking Shape",
            stat: "20 Acres Planned Community",
            description: "Bringing 30+ years of construction mastery to create flagship planned communities.",
            logo: "anantham",
            bg: ananthamBg
        }
    ];

    return (
        <section id="story" className="relative bg-[#F6F4F0] py-24 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#C9A961]/[0.03] blur-[150px] rounded-full" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 text-[#C9A961] mb-3">
                            <TrendingUp size={16} />
                            <span className="text-xs uppercase tracking-[0.4em] font-semibold">
                                Our Evolution Roadmap
                            </span>
                        </div>

                        <h2 className="font-serif text-[#1C1C1C] text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
                            Two Entities. <span className="text-[#C9A961] italic font-serif">One Continuous Journey.</span>
                        </h2>
                        <p className="text-[#7A7A7A] text-xs sm:text-sm font-light max-w-xl mx-auto mt-4">
                            Tracing our evolution from early developments, culminating in Anantham — our flagship planned community.
                        </p>
                    </div>
                </ScrollReveal>

                {/* VISUAL JOURNEY TIMELINE BAR ACROSS TOP */}
                <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto mb-12 relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-8 right-8 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#C9A961]/30 via-[#C9A961] to-[#C9A961]/30 z-0" />

                    {journeySteps.map((step, idx) => {
                        const isActive = activeIdx === idx;
                        return (
                            <button
                                key={step.id}
                                onClick={() => setActiveIdx(idx)}
                                className={`relative z-10 flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-500 bg-white ${
                                    isActive
                                        ? 'border-[#C9A961] text-[#C9A961] shadow-[0_0_20px_rgba(201,169,97,0.3)] scale-105'
                                        : 'border-[#D0CCC5] text-[#9A9A9A] hover:text-[#1C1C1C] hover:border-[#C9A961]/40'
                                }`}
                            >
                                <span className="w-6 h-6 rounded-full bg-[#C9A961]/20 border border-[#C9A961] text-[11px] font-bold flex items-center justify-center text-[#C9A961]">
                                    {idx + 1}
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-wider">
                                    {step.company}
                                </span>
                                {idx < 1 && <ChevronRight size={14} className="text-[#C9A961]/50 ml-1" />}
                            </button>
                        );
                    })}
                </div>

                {/* Interactive 2-Panel Visual Feature Showcase with Journey Flow */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto relative">
                    {journeySteps.map((item, idx) => {
                        const isActive = activeIdx === idx;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.2 }}
                                onMouseEnter={() => setActiveIdx(idx)}
                                className={`group relative overflow-hidden rounded-2xl border transition-all duration-700 bg-white flex flex-col justify-between p-6 sm:p-8 cursor-pointer shadow-xl ${
                                    isActive
                                        ? 'border-[#C9A961] shadow-[0_0_40px_rgba(201,169,97,0.25)] ring-1 ring-[#C9A961]/50 scale-[1.02]'
                                        : 'border-[#E5E2DD] hover:border-[#C9A961]/50 hover:shadow-2xl'
                                }`}
                            >
                                <div>
                                    {/* STAGE & ERA HEADER */}
                                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E5E2DD]">
                                        <span className="text-[#C9A961] text-[10px] uppercase tracking-[0.25em] font-bold">
                                            {item.stepTitle}
                                        </span>
                                        <span className="text-[#7A7A7A] text-[10px] uppercase tracking-wider font-medium">
                                            {item.era}
                                        </span>
                                    </div>

                                    {/* DEDICATED CRISP FEATURED IMAGE WINDOW */}
                                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-6 border border-[#E5E2DD] group-hover:border-[#C9A961]/50 shadow-md">
                                        <img
                                            src={item.bg}
                                            alt={item.company}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Subtle Gradient & Floating Stat Badge on Image */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                            <span className="inline-block px-3 py-1 bg-black/75 backdrop-blur-md border border-[#C9A961]/50 text-[#C9A961] text-[10px] uppercase tracking-widest font-bold rounded-full shadow">
                                                {item.stat}
                                            </span>
                                            <span className="font-serif text-2xl text-white/90 font-light">
                                                {item.num}
                                            </span>
                                        </div>
                                    </div>

                                    {/* ENTITY DETAILS */}
                                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1C] font-light mb-1.5 group-hover:text-[#C9A961] transition-colors duration-300">
                                        {item.company}
                                    </h3>

                                    <p className="text-[#C9A961] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                                        {item.tagline}
                                    </p>

                                    <p className="text-[#1C1C1C] text-xs sm:text-sm font-normal leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom Row: Logo & Website Link */}
                                <div className="pt-5 mt-auto border-t border-[#E5E2DD] flex items-center justify-between">
                                    {/* Logo */}
                                    <div className="h-16 flex items-center">
                                        {item.logo === "anantham" ? (
                                            <AnanthamLogo className="h-14 md:h-16 w-auto" variant="black" />
                                        ) : (
                                            <div className="bg-[#F6F4F0] px-4 py-2.5 rounded-xl border border-[#E5E2DD] group-hover:border-[#C9A961]/40 transition-colors flex items-center shadow-xs">
                                                <img
                                                    src={item.logo}
                                                    alt={item.company}
                                                    className="h-10 md:h-11 w-auto object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Link / Status */}
                                    {item.website ? (
                                        <a
                                            href={item.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-[#C9A961] hover:text-[#1C1C1C] font-semibold group/btn"
                                        >
                                            <span>Visit</span>
                                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </a>
                                    ) : (
                                        <span className="text-[10px] uppercase tracking-widest text-[#C9A961] font-semibold">
                                            The Culmination
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';

// Standalone Circular Gold Icons (ChatGPT Images)
import lifeCentricIcon from '../../assets/images/key_pillars/life_centric_icon.png';
import legacyCentricIcon from '../../assets/images/key_pillars/legacy_centric_icon.png';
import futureCentricIcon from '../../assets/images/key_pillars/future_centric_icon.png';
import { Check } from 'lucide-react';

export default function KeyPillars() {
    const pillars = [
        {
            id: "01",
            title: "LIFE CENTRIC",
            subtitle: "Designed around human living & well-being",
            icon: lifeCentricIcon,
            badge: "Community & Well-being",
            points: [
                "Designed for Every Age",
                "Green Parks & Community Spaces",
                "Safe, Gated & Walkable Living"
            ]
        },
        {
            id: "02",
            title: "LEGACY CENTRIC",
            subtitle: "Rooted in 30+ years of construction mastery",
            icon: legacyCentricIcon,
            badge: "Construction Integrity",
            points: [
                "Decades of Execution",
                "Construction-First Philosophy",
                "Built by Builders"
            ]
        },
        {
            id: "03",
            title: "FUTURE CENTRIC",
            subtitle: "Engineered for generational appreciation",
            icon: futureCentricIcon,
            badge: "Enduring Value",
            points: [
                "Underground Services",
                "Paver-Built Roads",
                "Planned for Long-Term Value"
            ]
        }
    ];

    return (
        <section id="key-pillars" className="relative bg-[#070708] py-24 md:py-36 overflow-hidden text-white">
            {/* Ambient Gold Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C9A961]/[0.04] blur-[160px] rounded-full" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-[#C9A961] text-xs uppercase tracking-[0.4em] font-semibold block mb-3">
                            Our Foundation
                        </span>
                        <h2 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4">
                            Key <span className="text-[#C9A961] italic font-serif">Pillars</span>
                        </h2>
                        <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
                            Three commitments — life, legacy, and future — anchor every Anantham decision.
                        </p>
                        <div className="w-16 h-[1px] bg-[#C9A961]/40 mx-auto mt-6" />
                    </div>
                </ScrollReveal>

                {/* 3 Pillars Showcase — Box-Free Editorial Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 items-stretch">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-white/10 bg-gradient-to-b from-[#121316] to-[#0B0C0E] hover:border-[#C9A961]/50 hover:from-[#C9A961]/[0.06] shadow-2xl transition-all duration-700 text-center items-center"
                        >
                            {/* Number Overlay */}
                            <div className="absolute top-6 right-8">
                                <span className="font-serif text-4xl text-[#C9A961]/25 group-hover:text-[#C9A961]/60 font-light transition-colors duration-500">
                                    {pillar.id}
                                </span>
                            </div>

                            <div className="w-full flex flex-col items-center">
                                {/* Floating Gold Emblem Icon with Soft Aura */}
                                <div className="relative w-36 h-36 sm:w-40 sm:h-40 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                    <div className="absolute inset-0 bg-[#C9A961]/10 rounded-full blur-2xl group-hover:bg-[#C9A961]/25 transition-all duration-700" />
                                    <img
                                        src={pillar.icon}
                                        alt={pillar.title}
                                        className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(201,169,97,0.3)]"
                                    />
                                </div>

                                {/* Category Badge */}
                                <span className="inline-block px-3.5 py-1 bg-[#C9A961]/10 border border-[#C9A961]/30 text-[#C9A961] text-[10px] uppercase tracking-widest font-bold rounded-full mb-4">
                                    {pillar.badge}
                                </span>

                                {/* Title & Subtitle */}
                                <h3 className="font-serif text-2xl sm:text-3xl text-white font-light group-hover:text-[#C9A961] transition-colors duration-300 mb-2">
                                    {pillar.title}
                                </h3>

                                <p className="text-white/60 text-xs sm:text-sm font-normal leading-relaxed mb-8 max-w-xs">
                                    {pillar.subtitle}
                                </p>
                            </div>

                            {/* Bullet Points */}
                            <div className="w-full space-y-3 pt-6 border-t border-white/10 text-left">
                                {pillar.points.map((point, pIdx) => (
                                    <div key={pIdx} className="flex items-center gap-3 text-xs text-white/80 font-normal">
                                        <div className="w-4 h-4 rounded-full bg-[#C9A961]/15 border border-[#C9A961]/40 flex items-center justify-center flex-shrink-0 text-[#C9A961]">
                                            <Check size={10} />
                                        </div>
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
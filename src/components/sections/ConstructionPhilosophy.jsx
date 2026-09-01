import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { ShieldCheck, HardHat, Compass } from 'lucide-react';
import coreBrainImg from '../../assets/images/projects/construction_core_brain.png';

export default function ConstructionPhilosophy() {
    return (
        <section id="construction-philosophy" className="relative bg-[#F6F4F0] text-[#1C1C1C] py-12 md:py-20 overflow-hidden border-t border-[#8A6E4B]/15">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#8A6E4B]/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                <ScrollReveal>
                    <div className="max-w-5xl mx-auto text-center mb-12">
                        <span className="inline-block text-[#8A6E4B] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold mb-4">
                            Our Core Legacy
                        </span>
                        <div className="w-24 h-[1px] bg-[#8A6E4B] mx-auto mb-8" />

                        <span className="text-[#8A6E4B] font-serif italic text-xl md:text-2xl tracking-wide block mb-4">
                            "We built for others, long before we built for ourselves."
                        </span>

                        <h2 className="font-serif text-[#1C1C1C] text-4xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight mb-6">
                            Construction is our <span className="text-[#8A6E4B]">core brain</span>.
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
                        <div className="lg:col-span-7">
                            <div className="bg-white border border-[#8A6E4B]/20 p-8 md:p-12 shadow-sm text-left relative overflow-hidden group hover:border-[#8A6E4B] transition-colors duration-500">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#8A6E4B]" />
                                <p className="text-[#5E5E5E] text-base md:text-lg font-light leading-relaxed pl-2 md:pl-4">
                                    Three decades as a civil contractor — delivering infrastructure for institutions, industries, and communities. Construction isn't our history. It's our DNA.
                                </p>
                            </div>
                        </div>

                        {/* Page 4 Construction Core Brain Visual */}
                        <div className="lg:col-span-5">
                            <div className="relative aspect-[4/3] overflow-hidden border border-[#8A6E4B]/20 rounded-lg group shadow-md">
                                <img
                                    src={coreBrainImg}
                                    alt="Construction is our Core Brain - Civil Engineering Excellence"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <span className="text-[10px] text-[#C9A961] uppercase tracking-widest font-bold block">
                                        3 Decades of Structural Expertise
                                    </span>
                                    <span className="text-xs font-light text-white/90">
                                        Civil infrastructure, institutional builds & residential engineering.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
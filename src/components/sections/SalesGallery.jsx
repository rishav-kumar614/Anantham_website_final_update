import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import salesGalleryRender from '../../assets/images/projects/sales_gallery_render.png';
import land3 from '../../assets/images/land3.jpg';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function SalesGallery() {
    return (
        <section id="sales-gallery" className="relative bg-[#F6F4F0] text-[#1C1C1C] py-12 md:py-20 overflow-hidden border-t border-[#E5E2DD]">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Visual Media Showcase - Page 23 Presentation Render */}
                    <div className="lg:col-span-7">
                        <ScrollReveal>
                            <div className="relative aspect-[16/10] overflow-hidden border border-[#E5E2DD] group rounded-lg">
                                <img
                                    src={salesGalleryRender}
                                    alt="Anantham Sales Gallery Official 3D Render"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    onError={(e) => { e.currentTarget.src = land3; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                
                                <div className="absolute bottom-8 left-8 right-8">
                                    <span className="inline-block px-3 py-1 bg-[#C9A961] text-black text-[10px] uppercase tracking-[0.25em] font-bold mb-2">
                                        Official Page 23 Architectural Render
                                    </span>
                                    <p className="text-white/80 text-xs font-light tracking-wide">
                                        First physical expression of planning & township vision on-site.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Content & Messaging */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <ScrollReveal delay={0.2}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full mb-6">
                                <Sparkles size={14} className="text-[#C9A961]" />
                                <span className="text-[#C9A961] text-[11px] uppercase tracking-[0.3em] font-bold">
                                    Physical Experience
                                </span>
                            </div>

                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-6 text-[#1C1C1C]">
                                The Sales <span className="text-[#C9A961]">Gallery</span>
                            </h2>

                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold block mb-6 italic">
                                "The first physical expression of Anantham."
                            </span>

                            <p className="text-[#5E5E5E] text-base md:text-lg leading-relaxed font-light mb-10">
                                The first physical experience of Anantham — where planning, architecture, and vision come alive on-site.
                            </p>

                            <div>
                                <button
                                    onClick={() => {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A961] text-black uppercase tracking-[0.25em] text-xs font-bold hover:bg-white transition-colors duration-300 group"
                                >
                                    <span>Schedule a Gallery Visit</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
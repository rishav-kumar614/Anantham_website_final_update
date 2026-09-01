import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';

export default function ClosingMessage() {
    return (
        <section id="closing-message" className="relative bg-white text-[#1C1C1C] py-20 md:py-28 overflow-hidden border-t border-[#E5E2DD] text-center">
            {/* Cinematic Overlay Lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A961]/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
                <ScrollReveal>
                    <div className="flex flex-col items-center">
                        <span className="text-[#C9A961] font-serif italic text-xl md:text-2xl tracking-widest block mb-8 opacity-80">
                            — and so, —
                        </span>

                        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-tight text-[#1C1C1C]">
                            This is not a pitch.
                        </h2>

                        <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl italic text-[#C9A961] font-light tracking-tight mb-14">
                            It’s a place taking shape.
                        </h3>

                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mb-12" />

                        <span className="block text-[#1C1C1C] text-xs md:text-sm uppercase tracking-[0.5em] font-bold">
                            ANANTHAM • SONIPAT
                        </span>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="mt-12 px-10 py-4 border border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black uppercase tracking-[0.3em] text-xs font-bold transition-all duration-500"
                        >
                            Connect With Our Team
                        </motion.button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
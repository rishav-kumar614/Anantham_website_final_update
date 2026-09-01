import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

// SYS Projects Images
import oliveResidencyImg from '../../assets/images/projects/olive_residency.png';
import krishnaFarmlandImg from '../../assets/images/projects/krishna_farmland.png';
import golfCourseCommImg from '../../assets/images/projects/golf_course_commercial.png';
import pratibhaTowerImg from '../../assets/images/projects/pratibha_tower_2.png';
import mukteshwarVillasImg from '../../assets/images/projects/mukteshwar_villas.png';
import greenwoodCityImg from '../../assets/images/projects/d13_greenwood_city.png';
import dwarkaExpCommImg from '../../assets/images/projects/dwarka_expressway_commercial.png';
import mannatFarmImg from '../../assets/images/projects/mannat_farm.png';
import builderFloor1Img from '../../assets/images/projects/builder_floor_1.png';
import builderFloor2Img from '../../assets/images/projects/builder_floor_2.png';
import builderFloor3Img from '../../assets/images/projects/builder_floor_3.png';
import builderFloor4Img from '../../assets/images/projects/builder_floor_4.png';
import builderFloor5Img from '../../assets/images/projects/builder_floor_5.png';

export default function LegacyDevelopments() {
    const [expandedIdx, setExpandedIdx] = useState(0);

    const sysProjects = [
        {
            title: "Olive Residency",
            location: "Sector 57, Gurgaon",
            category: "Luxury Row Housing & Builder Floors",
            desc: "Bespoke luxury row houses crafted with architectural precision and high-spec interior finishes.",
            badge: "Completed",
            image: oliveResidencyImg
        },
        {
            title: "Krishna Farmland",
            location: "NCR Region",
            category: "Gated Farmhouse Community",
            desc: "Exclusive gated sanctuary offering sprawling farmland estates surrounded by nature.",
            badge: "Gated Community",
            image: krishnaFarmlandImg
        },
        {
            title: "Golf Course Commercial",
            location: "Main Golf Course Road, Gurugram",
            category: "Commercial Landmark HQ",
            desc: "Prime commercial office space designed for high-density corporate commerce.",
            badge: "Corporate HQ",
            image: golfCourseCommImg
        },
        {
            title: "Pratibha Tower 2",
            location: "Gurugram",
            category: "Commercial Office Building",
            desc: "State-of-the-art commercial elevation featuring modern glass curtain walls.",
            badge: "Commercial",
            image: pratibhaTowerImg
        },
        {
            title: "Mukteshwar Villas",
            location: "Gurugram",
            category: "Bespoke Villa Community",
            desc: "Tailored residential villas built with durable structural integrity.",
            badge: "Residential",
            image: mukteshwarVillasImg
        },
        {
            title: "D-13 Greenwood City",
            location: "Greenwood City, Gurugram",
            category: "Luxury Builder Floor",
            desc: "High-end floor residences in one of Gurugram's established townships.",
            badge: "Luxury Living",
            image: greenwoodCityImg
        },
        {
            title: "Dwarka Expressway Commercial",
            location: "Dwarka Expressway, Gurugram",
            category: "Commercial Development",
            desc: "Strategic retail and office destination along the growth corridor.",
            badge: "Commercial",
            image: dwarkaExpCommImg
        },
        {
            title: "Mannat Farm",
            location: "Gurugram",
            category: "Luxury Country Estate",
            desc: "Lush green farmhouse development designed for serene weekend retreats.",
            badge: "Estate",
            image: mannatFarmImg
        },
        {
            title: "O45",
            location: "Gurugram",
            category: "Luxury Builder Floor",
            desc: "Premium independent builder floor with modern architecture and high-end finishes.",
            badge: "Residential",
            image: builderFloor1Img
        },
        {
            title: "E59",
            location: "Gurugram",
            category: "Independent Floor Living",
            desc: "Contemporary builder floor offering open living spaces and quality construction.",
            badge: "Residential",
            image: builderFloor2Img
        },
        {
            title: "M185",
            location: "Gurugram",
            category: "Premium Floor Residence",
            desc: "Elegantly designed floor residence featuring modern layouts and premium amenities.",
            badge: "Residential",
            image: builderFloor3Img
        },
        {
            title: "1395",
            location: "Gurugram",
            category: "Luxury Independent Floor",
            desc: "Standalone luxury floor with wide frontage and superior finishing standards.",
            badge: "Luxury Living",
            image: builderFloor4Img
        },
        {
            title: "Dew Drops",
            location: "Gurugram",
            category: "Signature Builder Floor",
            desc: "Signature independent floor development crafted with architectural precision.",
            badge: "Luxury Living",
            image: builderFloor5Img
        }
    ];

    const currentProjects = sysProjects;

    return (
        <section id="legacy-developments" className="relative bg-[#070708] py-24 md:py-36 overflow-hidden text-white">
            {/* Ambient Lighting */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#C9A961]/[0.04] blur-[180px] rounded-full" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4">
                            Delivered <span className="text-[#C9A961] italic font-serif">Landmarks</span>
                        </h2>
                        <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                            "We built for others, long before we built for ourselves." Explore three decades of execution excellence.
                        </p>
                    </div>
                </ScrollReveal>

                {/* FULL-WIDTH HORIZONTAL EXPANDING ACCORDION REEL (ALL PROJECTS) */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key="sys"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[530px] w-full overflow-x-auto pb-4 scrollbar-hide hide-scrollbar custom-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {currentProjects.map((project, idx) => {
                            const isExpanded = expandedIdx === idx;
                            return (
                                <motion.div
                                    key={idx}
                                    layout
                                    onClick={() => setExpandedIdx(idx)}
                                    onMouseEnter={() => setExpandedIdx(idx)}
                                    className={`relative overflow-hidden rounded-2xl transition-all duration-700 cursor-pointer border ${
                                        isExpanded
                                            ? 'lg:flex-[4] min-w-[320px] lg:min-w-[420px] border-[#C9A961] shadow-[0_0_35px_rgba(201,169,97,0.2)] ring-1 ring-[#C9A961]/40'
                                            : 'lg:flex-[1] min-w-[90px] border-white/15 opacity-90 hover:opacity-100 hover:border-[#C9A961]/60'
                                    } h-[380px] lg:h-full flex flex-col justify-between p-5 md:p-7 flex-shrink-0 lg:flex-shrink`}
                                >
                                    {/* Full Image Background */}
                                    <div className="absolute inset-0 z-0">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className={`w-full h-full object-cover transition-transform duration-1000 ${
                                                    isExpanded ? 'scale-105' : 'scale-100 group-hover:scale-105'
                                                }`}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-white/10 to-black" />
                                        )}
                                        {/* Gradient Dark Overlay */}
                                        <div className={`absolute inset-0 transition-opacity duration-500 ${
                                            isExpanded
                                                ? 'bg-gradient-to-t from-black/95 via-black/50 to-black/20'
                                                : 'bg-gradient-to-t from-black/80 via-black/40 to-black/20'
                                        }`} />
                                    </div>

                                    {/* EXPANDED CONTENT VIEW */}
                                    {isExpanded ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                            className="relative z-10 h-full flex flex-col justify-between"
                                        >
                                            {/* Top Bar */}
                                            <div className="flex items-center justify-between">
                                                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-[#C9A961]/40 text-[#C9A961] text-[10px] font-bold uppercase tracking-widest rounded-full">
                                                    {project.badge}
                                                </span>
                                                <span className="text-[#C9A961] text-xs font-mono font-semibold">
                                                    {String(idx + 1).padStart(2, '0')} / {String(currentProjects.length).padStart(2, '0')}
                                                </span>
                                            </div>

                                            {/* Bottom Details */}
                                            <div className="pt-10">
                                                <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block mb-2">
                                                    {project.location}
                                                </span>

                                                <h3 className="font-serif text-3xl sm:text-4xl text-white font-light mb-3 leading-tight">
                                                    {project.title}
                                                </h3>

                                                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-lg mb-6">
                                                    {project.desc}
                                                </p>

                                                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                                                    <span className="text-white/50 text-xs font-light">
                                                        {project.category}
                                                    </span>

                                                    <div className="w-8 h-8 rounded-full bg-[#C9A961] text-black flex items-center justify-center">
                                                        <ArrowUpRight size={16} />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        /* COLLAPSED STRIP VIEW */
                                        <div className="relative z-10 h-full flex flex-col justify-between">
                                            <span className="font-serif text-2xl text-[#C9A961]/40 font-light">
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>

                                            {/* Vertical Project Title on Desktop */}
                                            <div className="hidden lg:block my-auto">
                                                <h4 className="font-serif text-lg text-white font-light whitespace-nowrap -rotate-90 origin-left translate-y-12">
                                                    {project.title}
                                                </h4>
                                            </div>

                                            {/* Horizontal Title on Mobile */}
                                            <div className="block lg:hidden">
                                                <h4 className="font-serif text-xl text-white font-light">
                                                    {project.title}
                                                </h4>
                                                <span className="text-[#C9A961] text-xs font-light block">
                                                    {project.location}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
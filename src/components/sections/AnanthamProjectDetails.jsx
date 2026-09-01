import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import land3 from '../../assets/images/land3.jpg';

// Visual Assets
import masterplanImg from '../../assets/images/projects/anantham_88_masterplan.png';
import gateDiagramImg from '../../assets/images/projects/gate_6channel_diagram.png';
import stiltDiagramImg from '../../assets/images/projects/stilt_plot_layout_diagram.png';
import infraImg from '../../assets/images/projects/underground_infra.png';
import clubhouseMainImg from '../../assets/images/projects/clubhouse_main_render.png';

import { 
    Car, 
    Zap, 
    Sparkles, 
    DoorOpen, 
    Trophy,
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Maximize2,
    X,
    Play,
    Pause
} from 'lucide-react';

export default function AnanthamProjectDetails() {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isAutoplay, setIsAutoplay] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const projectSpecs = [
        { label: "Total Township", value: "20 Acres", sub: "DDJAY Approved" },
        { label: "Plot Count", value: "330 Plots", sub: "140 – 180 sq yd" },
        { label: "Plot Frontage", value: "7.5m+ (25 ft)", sub: "Dual Car Lanes" },
        { label: "Main Trunk Road", value: "12 Meters", sub: "9m Internal Roads" },
        { label: "Gate Innovation", value: "6 Channels", sub: "Across 3 Gates" },
        { label: "Clubhouse", value: "15,000 Sq Ft", sub: "Pool & Sports Courts" }
    ];

    const highlights = [
        {
            id: 1,
            num: "01",
            icon: DoorOpen,
            title: "6-Channel Gate & Security",
            tag: "Traffic Flow Architecture",
            image: gateDiagramImg,
            desc: "3 gates & 6 dedicated channels (Resident, Visitor, Pedestrian, Delivery). Zero congestion with a shaded parent & school bus lounge.",
            points: ["Automated Resident Entry", "Dedicated Delivery Lane", "Shaded Bus Waiting Area"]
        },
        {
            id: 2,
            num: "02",
            icon: Car,
            title: "7.5m+ Frontage & Stilt Advantage",
            tag: "Villa Engineering",
            image: stiltDiagramImg,
            desc: "Wide plot frontage designed for builder floors and villas with dual side-by-side car parking and service access.",
            points: ["Dual 2m x 5m Parking Bays", "3.5m Dedicated Service Strip", "Staircase & Lift Space"]
        },
        {
            id: 3,
            num: "03",
            icon: Zap,
            title: "Underground Infrastructure",
            tag: "Clean & Modern",
            image: infraImg,
            desc: "Pre-laid cabling, fiber internet conduits, pre-mapped sewerage and U-drains under 100% paver roads. Zero overhead wires.",
            points: ["100% Underground Power", "Fiber Conduit Ready", "Zero Waterlogging U-Drains"]
        },
        {
            id: 4,
            num: "04",
            icon: Trophy,
            title: "15,000 Sq Ft Club & Parks",
            tag: "Lifestyle & Wellness",
            image: clubhouseMainImg,
            desc: "Glass-forward clubhouse with swimming pool, banquet halls, multi-sport courts, and 5 theme-based recreational parks.",
            points: ["5 Theme-Based Parks", "Cricket, Pickleball & Tennis", "3-Tier Gated Security"]
        }
    ];

    // Auto rotate every 5 seconds (pauses on hover)
    React.useEffect(() => {
        if (!isAutoplay || isHovered) return;

        const timer = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % highlights.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoplay, isHovered, highlights.length]);

    return (
        <section id="anantham-88" className="relative bg-white text-[#1C1C1C] py-20 md:py-28 overflow-hidden border-t border-[#E5E2DD]">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C9A961]/8 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#8A6E4B]/8 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-full mb-4">
                            <Sparkles size={13} className="text-[#C9A961]" />
                            <span className="text-[#C9A961] text-[10px] uppercase tracking-[0.25em] font-bold">
                                Flagship Township · DDJAY
                            </span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight mb-4 text-[#1C1C1C]">
                            ANANTHAM <span className="text-[#C9A961]">88</span>
                        </h2>
                        <p className="text-[#7A7A7A] text-sm md:text-base font-light max-w-xl mx-auto">
                            Sector 88, Sonipat · 20 Acres · 330 Plots · 1 km Direct Link to NH-44
                        </p>
                    </div>
                </ScrollReveal>

                {/* Masterplan Banner */}
                <div className="relative aspect-[21/9] md:aspect-[24/9] overflow-hidden border border-white/15 mb-14 group rounded-2xl shadow-2xl">
                    <img
                        src={masterplanImg}
                        alt="Anantham 88 Plotted Township 3D Masterplan Render"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { e.currentTarget.src = land3; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                        <div>
                            <span className="text-[10px] text-[#C9A961] uppercase tracking-[0.25em] font-bold block mb-1">
                                Township 3D Masterplan
                            </span>
                            <h3 className="font-serif text-xl md:text-3xl text-white font-light">Anantham 88 · Sector 88, Sonipat</h3>
                        </div>
                        <span className="px-3.5 py-1.5 bg-black/80 backdrop-blur-md border border-[#C9A961]/40 text-[#C9A961] text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-lg">
                            1 km to NH-44
                        </span>
                    </div>
                </div>

                {/* Key Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-16">
                    {projectSpecs.map((spec, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white border border-[#E5E2DD] p-4 rounded-xl hover:border-[#C9A961]/40 hover:bg-[#F0EDE8] transition-all duration-300 group"
                        >
                            <span className="block font-serif text-xl md:text-2xl text-[#C9A961] mb-1 font-light group-hover:translate-x-0.5 transition-transform">
                                {spec.value}
                            </span>
                            <span className="block text-[10px] font-bold text-[#1C1C1C] uppercase tracking-wider mb-0.5">
                                {spec.label}
                            </span>
                            <span className="block text-[9px] text-[#9A9A9A] font-light">
                                {spec.sub}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 4 CARDS SECTION HEADER */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-[#E5E2DD]">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A961] animate-pulse" />
                            <span className="text-[10px] text-[#C9A961] uppercase tracking-[0.25em] font-bold">
                                Masterplan Innovations
                            </span>
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl font-light text-[#1C1C1C]">
                            Architectural &amp; Infrastructure Highlights
                        </h3>
                    </div>
                </div>

                {/* INTERACTIVE COMPACT SPOTLIGHT SHOWCASE */}
                <div 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch"
                >
                        {/* Main Interactive Spotlight Hero (8 cols) */}
                        <div className="lg:col-span-8 bg-[#F6F4F0] border border-[#C9A961]/30 rounded-2xl overflow-hidden p-6 flex flex-col justify-between shadow-2xl relative">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A961] via-[#E8D293] to-[#C9A961]" />

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
                                {/* Spotlight Image Container (Stacked Absolute Cross-Dissolve: 5 cols) */}
                                <div className="md:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-lg group bg-black/40 min-h-[220px]">
                                    <AnimatePresence initial={false}>
                                        <motion.img
                                            key={highlights[activeTab].image}
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.96 }}
                                            transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
                                            src={highlights[activeTab].image}
                                            alt={highlights[activeTab].title}
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </AnimatePresence>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10" />
                                    <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-black/80 backdrop-blur-md border border-[#C9A961]/40 text-[#C9A961] text-[9px] font-bold uppercase tracking-wider rounded-full shadow-md z-10">
                                        {highlights[activeTab].tag}
                                    </span>
                                    <button
                                        onClick={() => setSelectedImage({ src: highlights[activeTab].image, title: highlights[activeTab].title, tag: highlights[activeTab].tag })}
                                        className="absolute bottom-3 right-3 p-1.5 bg-black/70 hover:bg-[#C9A961] hover:text-black border border-white/20 text-white rounded-full transition-colors cursor-pointer z-10"
                                    >
                                        <Maximize2 size={13} />
                                    </button>
                                </div>

                                {/* Spotlight Content (Blur-Fade Smooth Text Transition: 7 cols) */}
                                <div className="md:col-span-7 flex flex-col justify-between min-h-[230px]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 5, filter: "blur(3px)" }}
                                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, y: -5, filter: "blur(3px)" }}
                                            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                                            className="flex flex-col justify-between h-full"
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-[#C9A961] font-serif text-xs font-bold tracking-widest">
                                                        FEATURE {highlights[activeTab].num} OF 04
                                                    </span>
                                                </div>
                                                <h3 className="font-serif text-xl md:text-2xl text-[#1C1C1C] font-light mb-2.5 flex items-center gap-2.5">
                                                    {React.createElement(highlights[activeTab].icon, { size: 22, className: "text-[#C9A961] shrink-0" })}
                                                    <span>{highlights[activeTab].title}</span>
                                                </h3>
                                                <p className="text-[#1C1C1C] text-xs md:text-sm leading-relaxed font-normal mb-4">
                                                    {highlights[activeTab].desc}
                                                </p>
                                            </div>

                                            {/* Point Highlights (Single Unified Box) */}
                                            <div className="bg-[#F0EDE8] border border-[#C9A961]/25 p-3.5 rounded-xl flex flex-col justify-center gap-2">
                                                {highlights[activeTab].points.map((pt, pIdx) => (
                                                    <div key={pIdx} className="flex items-center gap-2">
                                                        <CheckCircle2 size={13} className="text-[#C9A961] shrink-0" />
                                                        <span className="text-xs text-[#1C1C1C] font-normal">{pt}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Carousel Navigation Bar */}
                            <div className="pt-4 border-t border-[#E5E2DD] flex justify-between items-center mt-5">
                                <button
                                    onClick={() => setIsAutoplay(!isAutoplay)}
                                    className="flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full bg-[#F0EDE8] hover:bg-[#E5E2DD] border border-[#D0CCC5] text-[#C9A961] cursor-pointer transition-all"
                                    title={isAutoplay ? "Pause Auto-Rotate" : "Start Auto-Rotate"}
                                >
                                    {isAutoplay && !isHovered ? <Pause size={10} /> : <Play size={10} />}
                                    <span>
                                        {!isAutoplay 
                                            ? 'Auto Paused' 
                                            : isHovered 
                                                ? 'Paused on Hover' 
                                                : 'Auto-Switching Every 5s'}
                                    </span>
                                </button>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setActiveTab((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
                                        }}
                                        className="px-3 py-1.5 bg-[#F0EDE8] hover:bg-[#E5E2DD] border border-[#D0CCC5] text-[#1C1C1C] rounded-md transition-colors cursor-pointer text-xs"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveTab((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));
                                        }}
                                        className="px-3.5 py-1.5 bg-[#C9A961] text-black hover:bg-white font-bold rounded-md transition-colors cursor-pointer text-xs flex items-center gap-1"
                                    >
                                        Next <ChevronRight size={13} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Side Tab Selectors (4 cols) with Silky Smooth Spring Gliding */}
                        <div className="lg:col-span-4 flex flex-col gap-3 justify-between">
                            {highlights.map((item, idx) => {
                                const IconComp = item.icon;
                                const isActive = activeTab === idx;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setActiveTab(idx);
                                        }}
                                        onMouseEnter={() => {
                                            setActiveTab(idx);
                                        }}
                                        className={`text-left p-3.5 rounded-xl border transition-colors duration-300 flex items-center gap-3.5 cursor-pointer relative overflow-hidden flex-1 ${
                                            isActive
                                                ? 'text-[#1C1C1C]'
                                                : 'bg-[#F6F4F0] border-[#E5E2DD] hover:border-[#C9A961]/40 text-[#7A7A7A] hover:text-[#1C1C1C]'
                                        }`}
                                    >
                                        {/* Silky Gliding Active Highlight Box */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTabHighlight"
                                                transition={{ type: "spring", stiffness: 320, damping: 32 }}
                                                className="absolute inset-0 bg-[#C9A961]/15 border border-[#C9A961] rounded-xl pointer-events-none shadow-md"
                                            />
                                        )}
                                        {isActive && (
                                            <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#C9A961] z-10" />
                                        )}
                                        <div className={`p-2.5 rounded-lg shrink-0 z-10 transition-colors duration-300 ${
                                            isActive ? 'bg-[#C9A961] text-black' : 'bg-[#F0EDE8] text-[#C9A961]'
                                        }`}>
                                            <IconComp size={17} />
                                        </div>
                                        <div className="overflow-hidden z-10">
                                            <span className="text-[9px] uppercase tracking-wider font-bold text-[#C9A961] block mb-0.5">
                                                {item.num} · {item.tag}
                                            </span>
                                            <h4 className="font-serif text-xs md:text-sm font-normal text-[#1C1C1C] truncate">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                {/* MODAL: IMAGE INSPECTION */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 md:p-8 flex items-center justify-center cursor-zoom-out"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-w-5xl w-full bg-[#121212] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/50">
                                    <div>
                                        <span className="text-[10px] text-[#C9A961] uppercase tracking-wider font-bold block">
                                            {selectedImage.tag}
                                        </span>
                                        <h4 className="font-serif text-lg text-white font-light">{selectedImage.title}</h4>
                                    </div>
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                                <div className="p-2 bg-black">
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CTA Action - Compact Height */}
                <div className="bg-gradient-to-r from-[#F6F4F0] via-[#C9A961]/10 to-[#F6F4F0] border border-[#C9A961]/30 p-3.5 md:p-4 rounded-xl text-center flex flex-col sm:flex-row justify-between items-center gap-3 shadow-lg">
                    <div className="text-left">
                        <h4 className="font-serif text-base md:text-lg text-[#1C1C1C] font-light">Interested in Anantham 88?</h4>
                        <p className="text-[11px] text-[#7A7A7A] font-light">Get official masterplan PDF, plot pricing &amp; book your exclusive site visit.</p>
                    </div>
                    <button
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-4 py-2.5 bg-[#C9A961] hover:bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg transition-all duration-300 shadow-md hover:shadow-[#C9A961]/20 flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                    >
                        <span>Request E-Brochure &amp; Site Visit</span>
                        <ArrowRight size={13} />
                    </button>
                </div>
            </div>
        </section>
    );
}

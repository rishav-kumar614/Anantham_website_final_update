import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ScrollReveal from '../animations/ScrollReveal';
import demandShiftVisual from '../../assets/images/projects/demand_shift_family.png';
import sonipatGrowthHero from '../../assets/images/projects/sonipat_growth_hero.png';
import { 
    Factory, 
    GraduationCap, 
    Sprout, 
    Clock, 
    MapPin, 
    Compass, 
    Check,
    Globe2,
    Building2,
    ShieldCheck,
    Users,
    Navigation
} from 'lucide-react';



function CombinedStrategicEdge({ economicEngines, connectivityGrid, travelTimes }) {
    return (
        <div className="mb-28 space-y-8">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
            >
                <span className="text-[#C9A961] text-xs uppercase tracking-[0.4em] font-semibold block mb-3">
                    Strategic Advantage & Connectivity
                </span>
                <h3 className="font-serif text-4xl sm:text-5xl text-white font-light leading-tight">
                    Sonipat's Strategic <span className="text-[#C9A961] italic">Edge</span>
                </h3>
            </motion.div>

            {/* ═══════════ TIER 1: Economic Engines (3 Cards Grid) ═══════════ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {economicEngines.map((engine, idx) => (
                    <motion.div
                        key={engine.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative rounded-2xl p-7 transition-all duration-500 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#121316] to-[#0A0B0D] border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border hover:border-[#C9A961]/70"
                    >
                        {/* Gold Top Indicator Line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A961]" />

                        {/* Card Top: Number + Icon */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <span className="font-serif text-4xl font-light text-[#C9A961]">
                                    {engine.id}
                                </span>
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#C9A961] text-black shadow-lg shadow-[#C9A961]/20">
                                    <engine.icon size={20} />
                                </div>
                            </div>

                            {/* Badge */}
                            <span className="text-[10px] uppercase tracking-[0.25em] font-bold mb-2 block text-[#C9A961]">
                                {engine.badge}
                            </span>

                            {/* Title */}
                            <h4 className="font-serif text-2xl text-white font-light mb-3">
                                {engine.title}
                            </h4>

                            {/* Description */}
                            <p className="text-white/60 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                                {engine.description}
                            </p>
                        </div>

                        {/* Highlights Pills */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                            {engine.highlights.map((item, i) => (
                                <span
                                    key={i}
                                    className="text-[11px] font-light px-3 py-1 rounded-full bg-[#C9A961]/10 text-[#C9A961] border border-[#C9A961]/30"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ═══════════ TIER 2: Seamless Access & Travel Times ═══════════ */}
            <div className="relative rounded-2xl border border-white/10 bg-[#0B0C0E] p-8 sm:p-10 shadow-2xl overflow-hidden">
                {/* Ambient glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[250px] bg-[#C9A961]/[0.025] blur-[120px] rounded-full" />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    {/* Left Info: Header & Route Pills */}
                    <div className="lg:w-5/12 space-y-6">
                        <div>
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.35em] font-semibold block mb-2">
                                Seamless Access
                            </span>
                            <h4 className="font-serif text-3xl sm:text-4xl text-white font-light leading-tight">
                                Everything Connects <span className="text-[#C9A961] italic">Here.</span>
                            </h4>
                        </div>

                        {/* Route Categories */}
                        <div className="space-y-4 pt-2">
                            {connectivityGrid.map((group, idx) => (
                                <div key={idx}>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C9A961]/70 block mb-2">
                                        {group.category}
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {group.routes.map((route, rIdx) => (
                                            <span
                                                key={rIdx}
                                                className="px-3.5 py-1 text-xs font-medium text-white/90 rounded-full border border-white/15 bg-white/5 hover:border-[#C9A961]/40 hover:text-[#C9A961] transition-all duration-300"
                                            >
                                                {route.code}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vertical Divider for LG screens */}
                    <div className="hidden lg:block w-[1px] h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    {/* Right Info: 4 Travel Time Metric Grid (2x2 on Mobile, 4x1 or 2x2 Grid) */}
                    <div className="lg:w-7/12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                        {travelTimes.map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: idx * 0.08 }}
                                className="group relative rounded-xl border border-white/10 bg-[#121316] p-5 text-center hover:border-[#C9A961]/50 hover:bg-[#C9A961]/[0.06] transition-all duration-400"
                            >
                                <span className="font-serif text-3xl sm:text-4xl text-[#C9A961] font-light block mb-2 group-hover:scale-105 transition-transform duration-300">
                                    {t.duration}
                                </span>
                                <span className="block text-white text-xs font-semibold uppercase tracking-wider mb-1">
                                    {t.destination}
                                </span>
                                <span className="block text-white/50 text-[11px] font-light">
                                    {t.distance}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function WhySonipat() {

    const macroStats = [
        { label: "Population", value: "15 Lakh+", subtext: "Fast-growing urban market", icon: Users },
        { label: "National Highways", value: "6", subtext: "Unmatched NCR connectivity", icon: Navigation },
        { label: "Major Universities", value: "5+", subtext: "Education & innovation hub", icon: GraduationCap },
        { label: "Economic Engines", value: "3", subtext: "Industry, Education, Agriculture", icon: Factory }
    ];


    const economicEngines = [
        {
            id: "01",
            icon: Factory,
            title: "Industrial Hub",
            description: "IMT Rai, IMT Kharkhoda & Maruti Suzuki driving employment and workforce growth.",
            highlights: ["IMT Rai", "IMT Kharkhoda", "Maruti Suzuki Plant"],
            badge: "Industrial Momentum"
        },
        {
            id: "02",
            icon: GraduationCap,
            title: "Education Capital",
            description: "Ashoka, OP Jindal, Rajiv Gandhi Education City — a year-round student & professional economy.",
            highlights: ["Ashoka University", "OP Jindal Global", "Rajiv Gandhi City"],
            badge: "Education Capital"
        },
        {
            id: "03",
            icon: Sprout,
            title: "Agri & Logistics Hub",
            description: "Yamuna basin water security & Azadpur Mandi relocation making it North India's food logistics center.",
            highlights: ["Yamuna Basin", "Azadpur Mandi", "Food Processing"],
            badge: "Agri & Logistics"
        }
    ];

    const connectivityGrid = [
        {
            category: "National Highways",
            routes: [
                { code: "NH-44", desc: "The main Delhi–Chandigarh arterial axis" },
                { code: "NH-334B", desc: "Sonipat to Rohtak manufacturing corridor" },
                { code: "NH-352A", desc: "Sonipat to Gohana regional reach" },
                { code: "NH-709", desc: "Sonipat to Baghpat Eastern access" }
            ]
        },
        {
            category: "Expressways & Transit",
            routes: [
                { code: "KMP Expressway", desc: "NCR outer ring orbital west arc" },
                { code: "KGP Expressway", desc: "NCR outer ring orbital east arc" },
                { code: "UER-II Expressway", desc: "Direct link to Dwarka & Gurgaon" },
                { code: "RRTS Transit", desc: "Upcoming Delhi-Panipat RRTS Corridor" }
            ]
        }
    ];

    const travelTimes = [
        { destination: "NH-44 Entry", distance: "1 km", duration: "1 min" },
        { destination: "Central Delhi", distance: "~45 km", duration: "45 mins" },
        { destination: "Gurugram", distance: "~60 km", duration: "60 mins" },
        { destination: "IGI Airport", distance: "~65 km", duration: "90 mins" }
    ];

    const demandShiftPoints = [
        {
            title: "Nuclear Family Shift",
            desc: "One joint family drives demand for 3 independent modern homes."
        },
        {
            title: "Local End-User Demand",
            desc: "15 lakh+ residents seeking quality gated living within their own city."
        },
        {
            title: "Wealth Retained Locally",
            desc: "Better connectivity & local commerce keep capital in Sonipat seeking premium real estate."
        }
    ];

    return (
        <section id="why-sonipat" className="relative bg-[#070708] py-24 md:py-36 overflow-hidden text-white">
            {/* Ambient Background Light */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#C9A961]/[0.04] blur-[180px] rounded-full" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 text-[#C9A961] mb-3">
                            <Compass size={14} />
                            <span className="text-xs uppercase tracking-[0.4em] font-semibold">
                                Location Intelligence
                            </span>
                        </div>

                        <h2 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-4">
                            Why <span className="text-[#C9A961] italic font-serif">Sonipat</span>?
                        </h2>
                        <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
                            15 lakh+ population · 6 national highways · 3 economic engines driving organic demand.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Hero Widescreen Panoramic Image Banner — Edge-to-Edge Widescreen */}
                <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/15 mb-20 shadow-2xl group">
                    <img
                        src={sonipatGrowthHero}
                        alt="Sonipat Strategic Growth Corridor Panoramic View"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div>
                            <span className="text-[10px] text-[#C9A961] uppercase tracking-[0.3em] font-bold block mb-1">
                                Northern NCR Strategic Growth Belt
                            </span>
                            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                                Direct Expansion Zone of Delhi
                            </h3>
                        </div>
                        <span className="text-white/70 text-xs font-light tracking-wide bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                            NH-44 · KMP Expressway · RRTS Corridor
                        </span>
                    </div>
                </div>

                {/* Macro Stats Strip — Icon-Accented Luxury Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-24">
                    {macroStats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#121316] border border-white/10 hover:border-[#C9A961]/50 hover:bg-[#C9A961]/[0.06] transition-all duration-500 shadow-xl"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#C9A961]/10 border border-[#C9A961]/30 flex items-center justify-center text-[#C9A961] mb-3 group-hover:scale-110 group-hover:bg-[#C9A961] group-hover:text-black transition-all duration-500">
                                <stat.icon size={18} />
                            </div>

                            <span className="font-serif text-3xl sm:text-4xl text-[#C9A961] font-light mb-1">
                                {stat.value}
                            </span>

                            <span className="text-white text-xs font-semibold uppercase tracking-[0.15em] mb-1">
                                {stat.label}
                            </span>

                            <span className="text-white/50 text-[11px] font-normal">
                                {stat.subtext}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Combined: Economic Engines + Seamless Access */}
                <CombinedStrategicEdge 
                    economicEngines={economicEngines} 
                    connectivityGrid={connectivityGrid} 
                    travelTimes={travelTimes} 
                />

                {/* 6 Location Advantage Buckets */}
                <div className="mb-28">
                    <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block mb-6 text-center">
                        Location Advantage · 6 Ecosystem Buckets
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { title: "Education", desc: "IIT Delhi, Ashoka, OP Jindal" },
                            { title: "Healthcare", desc: "Primus & Multi-speciality Hospitals" },
                            { title: "Connectivity", desc: "1 km to NH-44, KMP/KGP, RRTS" },
                            { title: "Lifestyle", desc: "15,000 sq ft Club & Sports Courts" },
                            { title: "Daily Commerce", desc: "Murthal Hub & High-Street Retail" },
                            { title: "Nature & Greenery", desc: "Yamuna Basin Water & 5 Theme Parks" }
                        ].map((bucket, idx) => (
                            <div key={idx} className="p-5 rounded-xl bg-[#121316] border border-white/10 text-center hover:border-[#C9A961]/50 hover:bg-[#C9A961]/[0.05] transition-all duration-300">
                                <span className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">{bucket.title}</span>
                                <span className="block text-[11px] text-white/50 font-normal leading-relaxed">{bucket.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Market Insight & Demographics — Luxury Bento Redesign */}
                <div className="relative pt-6">
                    {/* Main Container Card */}
                    <div className="relative rounded-3xl border border-white/10 bg-[#0B0C0E] p-8 sm:p-12 shadow-2xl overflow-hidden">
                        {/* Ambient glow */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[#C9A961]/[0.03] blur-[120px] rounded-full" />
                        </div>

                        {/* Top Row: Title + Image Banner */}
                        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
                            <div className="lg:col-span-7 space-y-4">
                                <div className="inline-flex items-center gap-2 text-[#C9A961] bg-[#C9A961]/[0.08] border border-[#C9A961]/20 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.3em]">
                                    Market Insight &amp; Demographics
                                </div>
                                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight">
                                    The Local Demand Shift <span className="text-[#C9A961] italic">is Ready.</span>
                                </h3>
                                <p className="text-white/60 text-sm font-light leading-relaxed max-w-xl">
                                    15 lakh+ residents seeking modern gated living, retaining local wealth within Sonipat's booming real estate ecosystem.
                                </p>
                            </div>

                            <div className="lg:col-span-5">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 group shadow-2xl">
                                    <img
                                        src={demandShiftVisual}
                                        alt="Sonipat Local Demand Shift - Generational Living"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                                    <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center">
                                        <span className="text-[10px] text-[#C9A961] uppercase tracking-widest font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A961]/30">
                                            15 Lakh+ Population
                                        </span>
                                        <span className="text-[11px] text-white/80 font-light hidden sm:block">
                                            Generational Living Demand
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gold Separator */}
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent mb-10" />

                        {/* Bottom Row: 3 Demand Shift Cards Grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {demandShiftPoints.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group relative rounded-2xl border border-white/10 bg-[#121316] p-6 hover:border-[#C9A961]/60 hover:shadow-[0_10px_30px_-10px_rgba(201,169,97,0.2)] transition-all duration-400 overflow-hidden"
                                >
                                    {/* Gold Top Accent Line */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A961]/70" />

                                    {/* Number Badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-serif text-3xl text-[#C9A961] font-light">
                                            0{idx + 1}.
                                        </span>
                                        <div className="w-2 h-2 rounded-full bg-[#C9A961] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#C9A961]" />
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-base font-semibold text-white tracking-wide mb-2">
                                        {item.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-white/60 text-xs sm:text-sm font-normal leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
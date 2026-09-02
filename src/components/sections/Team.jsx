import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';

// Founder Images
import meharSinghImg from '../../assets/images/founders/mehar-singh.jpg';
import sagarJanghuImg from '../../assets/images/founders/sagar-janghu.jpg';
import shubhamJanghuImg from '../../assets/images/founders/Shubham-janghu.jpeg';
import pratibhaMalikImg from '../../assets/images/founders/pratibha-malik.jpg';
import devenderSinghImg from '../../assets/images/founders/devender-singh.jpeg';
import goldUserAvatar from '../../assets/images/founders/gold_user_avatar.png';
import corporateHqImg from '../../assets/images/projects/corporate_hq.png';

// Consultant Logos
import sandeepKheraLogo from '../../assets/images/projects/sandeep_khera_new_logo.png';
import maansiSaxenaLogo from '../../assets/images/projects/maansi_saxena_new_logo.png';
import somnathBeheraLogo from '../../assets/images/projects/somnath_behera_new_logo.png';

// Project Entities (Presentation Page 8)
import birdviewLogo from '../../assets/images/partners/birdview_user_logo.png';
import ananthamHabitatLogo from '../../assets/images/partners/anantham_habitat_user_logo.png';

import { 
    Linkedin, 
    Building2, 
    MapPin, 
    Sparkles,
    Check,
    ArrowUpRight,
    ShieldCheck,
    Building
} from 'lucide-react';

export default function Team() {
    const founders = [
        {
            name: "Mehar Singh",
            role: "Founder & Visionary",
            image: meharSinghImg,
            imagePosition: "center 15%",
            highlight: "35+ Years Civil Construction Mastery",
            bio: "35+ years in civil construction. Founded MR Construction in 1991. The group's execution-first philosophy traces back to him.",
            credentials: [
                "B.A., MD University Rohtak (1987)",
                "Founded MR Construction (1991)",
                "Constructed 25+ Maharishi Vidya Mandir Schools"
            ],
            tags: ["Execution-First", "35+ Yrs Civil"]
        },
        {
            name: "Sagar Janghu",
            role: "Managing Partner",
            image: sagarJanghuImg,
            imagePosition: "center 10%",
            linkedin: "https://www.linkedin.com/in/sagar-janghu/",
            highlight: "Ex J.P. Morgan Real Estate IB",
            bio: "Ex J.P. Morgan Real Estate IB. Brings financial discipline and strategic direction to Anantham.",
            credentials: [
                "B.Tech, Netaji Subhash Institute of Technology (NSIT)",
                "MBA, ESADE Business School (Top-ranked global school)",
                "CFA Charterholder · Ex J.P. Morgan Real Estate IB",
                "Joint Secretary, GHDA (Gurugram Home Developers Assoc.)"
            ],
            tags: ["Ex J.P. Morgan IB", "CFA Charterholder", "MBA ESADE"]
        }
    ];

    const keyManagement = [
        {
            name: "Shubham Janghu",
            role: "Legal Advisor & Counsel",
            image: shubhamJanghuImg,
            imagePosition: "center 15%",
            linkedin: "https://www.linkedin.com/in/shubham-janghu/",
            highlight: "LL.M. Cambridge University (UK)",
            bio: "Leads legal strategy, land titling, and compliance — ensuring airtight standing across all acquisitions.",
            credentials: [
                "LL.M., Cambridge University (UK)",
                "Dual-Qualified: England & Wales and India",
                "B.B.A. LL.B., O.P. Jindal Global University",
                "Advocate: Hon'ble Supreme Court & Delhi High Court"
            ],
            tags: ["Supreme Court Advocate", "LL.M. Cambridge"]
        },
        {
            name: "Pratibha Malik",
            role: "Principal Designer & Architect",
            image: pratibhaMalikImg,
            imagePosition: "center 18%",
            linkedin: "https://www.linkedin.com/in/pratibha-malik-b036a953/",
            highlight: "Spatial Architect & Designer",
            bio: "Drives aesthetic direction and spatial planning across Anantham's residential and plotted communities.",
            credentials: [
                "Principal Architect & Interior Strategist",
                "Luxury Residential & Commercial Specialist",
                "Contextual Design Integration"
            ],
            bioDetails: "Contextual Design Integration across Luxury Residential & Commercial Sectors.",
            tags: ["Architectural Design", "Space Planning"]
        }
    ];

    const businessPartners = [
        {
            name: "Mahavir Singh",
            role: "Partner",
            image: goldUserAvatar,
            desc: "Operational strength and ground-level execution expertise across the group's ventures."
        },
        {
            name: "Devender Singh",
            role: "Partner",
            image: devenderSinghImg,
            imagePosition: "center 5%",
            desc: "Decades of industry relationships and project oversight driving reliable delivery."
        }
    ];

    const consultants = [
        {
            name: "Sandeep Khera",
            company: "Interact Consultants Pvt. Ltd.",
            role: "Architecture & Landscape",
            logo: sandeepKheraLogo,
            desc: "Architecture & landscape masterplanning for residential & commercial developments."
        },
        {
            name: "Maansi Saxena",
            company: "landscape architect mesh design",
            role: "Architectural Studio",
            logo: maansiSaxenaLogo,
            desc: "Crafting contextual, timeless spaces where built and unbuilt coexist in harmony."
        },
        {
            name: "Somnath Behera",
            company: "Behera Associates",
            role: "MEPF Engineering",
            logo: somnathBeheraLogo,
            desc: "30+ years of MEPF engineering. Code-compliant, sustainable MEP infrastructure."
        }
    ];

    return (
        <section id="founders" className="relative bg-white text-[#1C1C1C] py-28 md:py-40 overflow-hidden">
            {/* Ambient Lighting Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#C9A961]/5 via-[#C9A961]/[0.02] to-transparent pointer-events-none blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8A6E4B]/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                
                {/* Editorial Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="w-8 h-[1px] bg-[#C9A961]" />
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.4em] font-semibold">
                                Leadership &amp; Vision
                            </span>
                            <div className="w-8 h-[1px] bg-[#C9A961]" />
                        </div>

                        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-8 text-[#1C1C1C]">
                            Two Leaders. <span className="text-[#C9A961] italic font-serif">One Philosophy.</span>
                        </h2>

                        <p className="text-[#1C1C1C] text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed italic border-l-2 border-[#C9A961] pl-6 text-left sm:text-center sm:border-l-0 sm:pl-0">
                            "Vision lays the foundation. Execution builds the legacy." Guided by decades of engineering expertise, legal clarity, and financial discipline.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ============================================================ */}
                {/* 1. FOUNDERS EDITORIAL SHOWCASE (CIRCULAR IMAGE LAYOUT)      */}
                {/* ============================================================ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-36 relative">
                    {/* Vertical Hairline Divider between Founders on Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C9A961]/25 to-transparent -translate-x-1/2" />

                    {founders.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group flex flex-col sm:flex-row items-start gap-8 lg:gap-10"
                        >
                            {/* Circular Image Frame */}
                            <div className="flex flex-col items-center gap-3 flex-shrink-0 mx-auto sm:mx-0">
                                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl border-2 border-[#E5E2DD] group-hover:border-[#C9A961] transition-all duration-700">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                                </div>
                                {/* Highlight Tag */}
                                <span className="inline-block px-3 py-1 bg-white backdrop-blur-md border border-[#C9A961]/40 text-[#C9A961] text-[10px] uppercase tracking-widest font-bold rounded-full text-center max-w-[200px]">
                                    {member.highlight}
                                </span>
                            </div>

                            {/* Bio & Details Column */}
                            <div className="flex-1 space-y-4 text-left">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] font-light group-hover:text-[#C9A961] transition-colors duration-300">
                                            {member.name}
                                        </h3>
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 rounded-full text-[#C9A961] hover:text-white transition-colors"
                                            >
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                    </div>
                                    <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block">
                                        {member.role}
                                    </span>
                                </div>

                                <div className="w-12 h-[1px] bg-[#C9A961]/40" />

                                <p className="text-[#1C1C1C] text-sm leading-relaxed font-normal">
                                    {member.bio}
                                </p>

                                {/* Credentials List */}
                                <div className="space-y-2.5 pt-2">
                                    {member.credentials.map((cred, cIdx) => (
                                        <div key={cIdx} className="flex items-start gap-3 text-xs text-[#1C1C1C] font-normal">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-1.5 flex-shrink-0" />
                                            <span className="leading-snug">{cred}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Minimal Tag Badges */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {member.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-2.5 py-1 bg-[#F0EDE8] border border-[#D0CCC5] text-[#1C1C1C] text-[10px] uppercase tracking-wider font-semibold rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ============================================================ */}
                {/* 2. EXECUTIVE MANAGEMENT SECTION (CIRCULAR IMAGE LAYOUT)      */}
                {/* ============================================================ */}
                <div className="mb-36 pt-12 border-t border-[#E5E2DD]">
                    <ScrollReveal>
                        <div className="mb-20 text-center sm:text-left">
                            <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block mb-2">
                                Executive Leadership &amp; Design
                            </span>
                            <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] font-light">
                                Key Management Team
                            </h3>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {keyManagement.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group flex flex-col sm:flex-row items-start gap-8 lg:gap-10"
                            >
                                {/* Circular Image Frame */}
                                <div className="flex flex-col items-center gap-3 flex-shrink-0 mx-auto sm:mx-0">
                                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl border-2 border-[#E5E2DD] group-hover:border-[#C9A961] transition-all duration-700">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                                    </div>
                                    <span className="inline-block px-3 py-1 bg-white backdrop-blur-md border border-[#C9A961]/40 text-[#C9A961] text-[10px] uppercase tracking-widest font-bold rounded-full text-center max-w-[200px]">
                                        {member.highlight}
                                    </span>
                                </div>

                                {/* Bio & Details Column */}
                                <div className="flex-1 space-y-4 text-left">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] font-light group-hover:text-[#C9A961] transition-colors duration-300">
                                                {member.name}
                                            </h3>
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1.5 rounded-full text-[#C9A961] hover:text-white transition-colors"
                                                >
                                                    <Linkedin size={18} />
                                                </a>
                                            )}
                                        </div>
                                        <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-semibold block">
                                            {member.role}
                                        </span>
                                    </div>

                                    <div className="w-12 h-[1px] bg-[#C9A961]/40" />

                                    <p className="text-[#1C1C1C] text-sm leading-relaxed font-normal">
                                        {member.bio}
                                    </p>

                                    <div className="space-y-2.5 pt-2">
                                        {member.credentials.map((cred, cIdx) => (
                                            <div key={cIdx} className="flex items-start gap-3 text-xs text-[#1C1C1C] font-normal">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] mt-1.5 flex-shrink-0" />
                                                <span className="leading-snug">{cred}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {member.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-2.5 py-1 bg-[#F0EDE8] border border-[#D0CCC5] text-[#1C1C1C] text-[10px] uppercase tracking-wider font-semibold rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ============================================================ */}
                {/* 3. BUSINESS PARTNERS — CENTERED LUXURY CARDS                 */}
                {/* ============================================================ */}
                <div className="pt-12 border-t border-[#E5E2DD] mb-20 max-w-5xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-10">
                            <span className="text-[#C9A961] text-sm uppercase tracking-[0.35em] font-semibold block mb-3">
                                Trusted Allies
                            </span>
                            <div className="w-16 h-[1px] bg-[#C9A961]/40 mx-auto" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                        {businessPartners.map((partner, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.12 }}
                                className="group relative rounded-2xl border border-[#E5E2DD] bg-[#F6F4F0] p-8 hover:border-[#C9A961]/50 hover:bg-[#C9A961]/[0.03] transition-all duration-400 shadow-xl flex items-start gap-6"
                            >
                                {/* Gold Top Accent Line */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A961]/50 to-transparent" />

                                {/* Avatar */}
                                <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#C9A961]/40 group-hover:border-[#C9A961] transition-all duration-300 shadow-md flex-shrink-0">
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        style={partner.imagePosition ? { objectPosition: partner.imagePosition } : undefined}
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-serif text-xl text-[#1C1C1C] group-hover:text-[#C9A961] transition-colors font-light leading-snug mb-1">
                                        {partner.name}
                                    </h4>
                                    <span className="text-[#C9A961] text-[11px] uppercase tracking-widest font-semibold block mb-3">
                                        {partner.role}
                                    </span>
                                    <p className="text-[#1C1C1C] text-sm font-normal leading-relaxed">
                                        {partner.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* ============================================================ */}
                    {/* PROJECT ENTITIES (Presentation Page 8)                       */}
                    {/* ============================================================ */}
                    <div className="pt-20 border-t border-[#E5E2DD]">
                        <ScrollReveal>
                            <div className="text-center max-w-2xl mx-auto mb-14">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0EDE8] border border-[#D0CCC5] rounded-full mb-4">
                                    <ShieldCheck size={13} className="text-[#C9A961]" />
                                    <span className="text-[#8A6E4B] text-[10px] uppercase tracking-[0.25em] font-semibold">
                                        Corporate &amp; Legal Framework
                                    </span>
                                </div>
                                <h4 className="font-serif text-3xl sm:text-4xl text-[#1C1C1C] font-light tracking-tight mb-3">
                                    PROJECT <span className="text-[#C9A961] italic font-serif">ENTITIES</span>
                                </h4>
                                <div className="w-12 h-[1.5px] bg-[#C9A961] mx-auto mb-3" />
                                <p className="font-serif italic text-sm sm:text-base text-[#1C1C1C]/75">
                                    The project is being brought under the following LLPs
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Entity Card 1: Birdview */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="group relative rounded-2xl border border-[#E5E2DD] bg-[#F6F4F0] p-8 md:p-10 hover:border-[#C9A961] hover:bg-white transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col justify-between"
                            >
                                {/* Gold Top Border Glow */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A961]/60 to-transparent" />

                                <div>
                                    {/* Header Badge */}
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="px-3 py-1 bg-white/80 border border-[#E5E2DD] group-hover:border-[#C9A961]/40 text-[#8A6E4B] text-[10px] uppercase tracking-widest font-semibold rounded-full shadow-sm">
                                            Promoter Entity
                                        </span>
                                        <span className="text-[10px] uppercase tracking-widest text-[#1C1C1C]/50 font-mono">
                                            LLP · Haryana
                                        </span>
                                    </div>

                                    {/* Clean Logo Showcase Box */}
                                    <div className="w-full h-40 bg-white rounded-xl border border-[#EBE7DF] group-hover:border-[#C9A961]/40 flex items-center justify-center p-4 sm:p-5 mb-8 transition-all duration-300 shadow-inner">
                                        <img
                                            src={birdviewLogo}
                                            alt="Birdview Housing Projects LLP"
                                            className="max-h-28 max-w-[260px] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Entity Name */}
                                    <h5 className="font-serif text-2xl text-[#1C1C1C] group-hover:text-[#8A6E4B] transition-colors duration-300 font-light mb-2">
                                        Birdview Housing Projects LLP
                                    </h5>
                                    <p className="text-xs text-[#1C1C1C]/65 font-normal leading-relaxed mb-6">
                                        Co-promoter and executing LLP entity for master development and regulatory infrastructure.
                                    </p>
                                </div>

                                {/* Bottom Metadata Strip */}
                                <div className="pt-4 border-t border-[#E5E2DD] flex items-center justify-between text-xs text-[#1C1C1C]/60">
                                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#8A6E4B]">
                                        <Building size={13} />
                                        Anantham 88
                                    </span>
                                    <span className="text-[11px] text-[#1C1C1C]/50">
                                        Sector 88, Sonipat
                                    </span>
                                </div>
                            </motion.div>

                            {/* Entity Card 2: Anantham Habitat */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                className="group relative rounded-2xl border border-[#E5E2DD] bg-[#F6F4F0] p-8 md:p-10 hover:border-[#C9A961] hover:bg-white transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col justify-between"
                            >
                                {/* Gold Top Border Glow */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A961]/60 to-transparent" />

                                <div>
                                    {/* Header Badge */}
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="px-3 py-1 bg-white/80 border border-[#E5E2DD] group-hover:border-[#C9A961]/40 text-[#8A6E4B] text-[10px] uppercase tracking-widest font-semibold rounded-full shadow-sm">
                                            Promoter Entity
                                        </span>
                                        <span className="text-[10px] uppercase tracking-widest text-[#1C1C1C]/50 font-mono">
                                            LLP · Haryana
                                        </span>
                                    </div>

                                    {/* Clean Logo Showcase Box */}
                                    <div className="w-full h-40 bg-white rounded-xl border border-[#EBE7DF] group-hover:border-[#C9A961]/40 flex items-center justify-center p-4 sm:p-5 mb-8 transition-all duration-300 shadow-inner">
                                        <img
                                            src={ananthamHabitatLogo}
                                            alt="Anantham Habitat Projects LLP"
                                            className="max-h-28 max-w-[260px] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Entity Name */}
                                    <h5 className="font-serif text-2xl text-[#1C1C1C] group-hover:text-[#8A6E4B] transition-colors duration-300 font-light mb-2">
                                        Anantham Habitat Projects LLP
                                    </h5>
                                    <p className="text-xs text-[#1C1C1C]/65 font-normal leading-relaxed mb-6">
                                        Primary development and habitat LLP entity steering the vision, design, and plotted township delivery.
                                    </p>
                                </div>

                                {/* Bottom Metadata Strip */}
                                <div className="pt-4 border-t border-[#E5E2DD] flex items-center justify-between text-xs text-[#1C1C1C]/60">
                                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#8A6E4B]">
                                        <Building size={13} />
                                        Anantham 88
                                    </span>
                                    <span className="text-[11px] text-[#1C1C1C]/50">
                                        Sector 88, Sonipat
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Centered Township Footnote */}
                        <div className="text-center mt-12">
                            <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#F6F4F0] rounded-full border border-[#E5E2DD]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                                <span className="font-serif text-xs sm:text-sm text-[#1C1C1C]/80 tracking-widest uppercase font-medium">
                                    Anantham 88 · Sector 88, Sonipat
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================ */}
                {/* 4. KEY CONSULTANTS & CORPORATE HQ — DARK THEME CONTAINER    */}
                {/* ============================================================ */}
                <div className="-mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24 pt-20 pb-24 bg-[#070708] border-t border-white/10 -mb-28 md:-mb-40 relative overflow-hidden text-white">
                    <div className="max-w-[1600px] mx-auto">
                        <ScrollReveal>
                            <div className="flex items-baseline gap-4 mb-12">
                                <span className="text-[#C9A961] text-xs uppercase tracking-[0.35em] font-semibold">
                                    Project Execution Partners
                                </span>
                                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#C9A961]/30 to-transparent" />
                            </div>
                        </ScrollReveal>

                        <div className="space-y-0 mb-24">
                            {consultants.map((consultant, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="group grid grid-cols-12 items-center gap-6 py-6 border-b border-white/10 hover:border-[#C9A961]/30 transition-colors duration-300 cursor-default"
                                >
                                    {/* Index Number */}
                                    <div className="col-span-1">
                                        <span className="font-serif text-3xl text-[#C9A961]/25 group-hover:text-[#C9A961]/70 transition-colors duration-300 font-light">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Logo */}
                                    <div className="col-span-2">
                                        {consultant.logo ? (
                                            <div className="w-16 h-14 sm:w-16 sm:h-16 overflow-hidden bg-white border border-white/20 group-hover:border-[#C9A961] transition-all duration-300 rounded-xl p-2 flex items-center justify-center shadow-md">
                                                <img
                                                    src={consultant.logo}
                                                    alt={consultant.name}
                                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-16 h-14 sm:w-16 sm:h-16 bg-[#C9A961]/10 border border-[#C9A961]/30 rounded-xl flex items-center justify-center text-[#C9A961] font-serif text-lg font-bold">
                                                {consultant.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>

                                    {/* Name & Company */}
                                    <div className="col-span-5 md:col-span-6">
                                        <h4 className="font-serif text-xl md:text-2xl text-white group-hover:text-[#C9A961] transition-colors duration-300 font-light">
                                            {consultant.name}
                                        </h4>
                                        <span className="text-white/40 text-xs font-light">
                                            {consultant.company}
                                        </span>
                                    </div>

                                    {/* Role Badge */}
                                    <div className="col-span-4 md:col-span-3 flex justify-start md:justify-end">
                                        <span className="inline-block px-3 py-1 border border-[#C9A961]/30 group-hover:border-[#C9A961] text-[#C9A961] text-[10px] uppercase tracking-widest font-bold transition-colors duration-300">
                                            {consultant.role}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* ============================================================ */}
                        {/* 5. CORPORATE HQ — FULL BLEED CINEMATIC BANNER                */}
                        {/* ============================================================ */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="pt-12 border-t border-white/10"
                        >
                            <div className="relative w-full aspect-[21/7] overflow-hidden group rounded-2xl border border-white/15 shadow-2xl">
                                <img
                                    src={corporateHqImg}
                                    alt="Corporate HQ Main Golf Course Road Gurugram"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[2000ms]"
                                    onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                                />

                                {/* Directional gradient — dark on left so text is readable */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/10 pointer-events-none" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                                {/* Text overlay — floats over the image, left-aligned */}
                                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-2xl">
                                    <div className="inline-flex items-center gap-2 text-[#C9A961] mb-4">
                                        <Building2 size={14} />
                                        <span className="text-[10px] uppercase tracking-[0.35em] font-semibold">
                                            Corporate Headquarters · Est. 2011
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light leading-tight mb-4">
                                        Main Golf Course<br />Road, Gurugram
                                    </h3>

                                    <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
                                        Plot No. 585, Sector 43, Gurugram — Operational nerve center for Anantham Projects &amp; SYS Developers LLP.
                                    </p>

                                    <div className="mt-5 flex items-center gap-2">
                                        <div className="w-6 h-[1px] bg-[#C9A961]" />
                                        <span className="text-[#C9A961] text-[10px] uppercase tracking-[0.3em] font-semibold">
                                            Main Golf Course Road Axis
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>


            </div>
        </section>
    );
}
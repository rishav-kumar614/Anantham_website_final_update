import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AnanthamLogo from '../brand/AnanthamLogo';
import faviconLogo from '../../assets/logo/favicon.png';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, path) => {
        e.preventDefault();
        if (path === location.pathname) {
            setIsMenuOpen(false);
            return;
        }
        setIsMenuOpen(false);
        
        // Direct navigation without curtain
        navigate(path);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled 
                    ? 'bg-[#070708]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3 md:py-4' 
                    : 'bg-gradient-to-b from-black/70 via-black/25 to-transparent py-5 md:py-7'
                }`}
            >
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
                    <Link to="/" className="z-50 relative">
                        <img
                            src={faviconLogo}
                            alt="Anantham"
                            className={`h-12 w-12 sm:h-14 sm:w-14 md:hidden object-contain transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}
                        />
                        <AnanthamLogo
                            variant="white"
                            className={`hidden md:block h-16 lg:h-20 w-auto transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}
                        />
                    </Link>

                    {/* Universal Menu Trigger */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="group flex items-center gap-5 z-50 py-3 px-1 border-b-2 border-transparent transition-all duration-300 cursor-pointer text-white hover:text-[#C9A961]"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="w-9 h-[1.5px] transition-all duration-300 bg-white group-hover:w-7 group-hover:bg-[#C9A961]" />
                            <span className="w-9 h-[1.5px] transition-all duration-300 bg-white group-hover:bg-[#C9A961]" />
                        </div>
                        <span className="text-sm uppercase tracking-[0.45em] font-bold">Menu</span>
                    </button>
                </div>

            </motion.header>
            
            {/* Side Menu Overlay - Moved outside header to avoid transform container clipping */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90]"
                        />
                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                            className="fixed top-10 right-6 bottom-10 w-[calc(100%-48px)] sm:w-80 md:w-[380px] bg-white z-[100] flex flex-col border border-[#E5E2DD] shadow-[0_30px_100px_rgba(0,0,0,0.12)] rounded-3xl overflow-hidden h-fit max-h-[85vh]"
                        >
                            {/* Decorative Top Line */}
                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent" />

                            {/* Header inside Menu */}
                            <div className="flex justify-between items-center px-8 md:px-10 py-6 border-b border-[#E5E2DD] bg-[#F6F4F0]">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-[#9A9A9A] text-[9px] uppercase tracking-[0.5em] font-bold"
                                >
                                    Navigation
                                </motion.div>
                                <motion.button
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    transition={{ delay: 0.3 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="group relative h-10 w-10 flex items-center justify-center border border-[#D0CCC5] rounded-full hover:bg-[#1C1C1C] hover:border-[#1C1C1C] transition-all duration-500"
                                    aria-label="Close menu"
                                >
                                    <div className="relative w-4 h-4">
                                        <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#1C1C1C] group-hover:bg-white rotate-45 transition-colors duration-300" />
                                        <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#1C1C1C] group-hover:bg-white -rotate-45 transition-colors duration-300" />
                                    </div>
                                </motion.button>
                            </div>

                            {/* Menu Items */}
                            <div className="flex-grow flex flex-col justify-center px-8 md:px-10 py-6 overflow-y-auto">
                                <nav className="flex flex-col space-y-2.5">
                                    {[
                                        { label: 'Anantham 88', path: '/#anantham-88' },
                                        { label: 'Why Sonipat', path: '/#why-sonipat' },
                                        { label: 'Key Pillars', path: '/#key-pillars' },
                                        { label: 'Legacy Portfolio', path: '/#legacy-developments' },
                                        { label: 'Sales Gallery', path: '/#sales-gallery' },
                                        { label: 'Leadership', path: '/#founders' },
                                        { label: 'Philosophy', path: '/philosophy' },
                                        { label: 'Contact', path: '/#contact' }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ x: 30, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{
                                                delay: 0.12 + (idx * 0.04),
                                                duration: 0.5,
                                                type: 'spring',
                                                stiffness: 120
                                            }}
                                        >
                                            <Link
                                                to={item.path}
                                                onClick={(e) => {
                                                    if (item.path.startsWith('/#')) {
                                                        e.preventDefault();
                                                        setIsMenuOpen(false);
                                                        const id = item.path.split('#')[1];
                                                        setTimeout(() => {
                                                            if (location.pathname !== '/') {
                                                                navigate(`/#${id}`);
                                                            } else {
                                                                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                                            }
                                                        }, 300);
                                                    } else {
                                                        handleNavClick(e, item.path);
                                                    }
                                                }}
                                                className="group relative flex items-center justify-between px-5 py-3.5 bg-[#F6F4F0] hover:bg-[#F0EDE8] border border-[#E5E2DD] hover:border-[#C9A961]/30 rounded-xl transition-all duration-300 overflow-hidden"
                                            >
                                                {/* Hover gradient effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A961]/0 via-[#C9A961]/5 to-[#C9A961]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                <div className="relative flex items-center gap-4">
                                                    <span className="text-[#8A6E4B] text-[11px] font-bold tracking-widest group-hover:text-[#1C1C1C] transition-colors duration-300">
                                                        0{idx + 1}
                                                    </span>
                                                    <span className="text-sm md:text-base font-light tracking-[0.1em] text-[#1C1C1C] group-hover:text-[#1C1C1C] transition-all duration-300 uppercase">
                                                        {item.label}
                                                    </span>
                                                </div>

                                                <motion.div
                                                    className="w-4 h-[1.5px] bg-[#B0AAA0] group-hover:bg-[#8A6E4B] transition-all duration-300"
                                                    whileHover={{ width: 24 }}
                                                />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>

                            {/* Bottom Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="px-8 md:px-10 py-5 border-t border-[#E5E2DD] bg-[#F6F4F0]"
                            >
                                <div className="flex items-center justify-between text-[#9A9A9A] text-[9px] uppercase font-bold tracking-[0.4em]">
                                    <span>Anantham Projects</span>
                                    <span>© 2026</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </>
    );
}
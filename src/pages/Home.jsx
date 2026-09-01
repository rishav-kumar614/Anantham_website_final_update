import React, { useEffect } from 'react';
import Header from '../components/navigation/Header';
import Hero from '../components/sections/Hero';
import LegacyWall from '../components/sections/LegacyWall';
import Team from '../components/sections/Team';
import FounderVideos from '../components/sections/FounderVideos';
import Journey from '../components/sections/Journey';
import LegacyDevelopments from '../components/sections/LegacyDevelopments';
import KeyPillars from '../components/sections/KeyPillars';
import WhySonipat from '../components/sections/WhySonipat';
import AnanthamProjectDetails from '../components/sections/AnanthamProjectDetails';
import InstagramReels from '../components/sections/InstagramReels';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import PageTransition from '../components/transitions/PageTransition';
import SectionTransition from '../components/transitions/SectionTransition';
import useSmoothScroll from '../components/utils/useSmoothScroll';
import CustomCursor from '../components/ui/CustomCursor';
import NoiseOverlay from '../components/ui/NoiseOverlay';

export default function Home() {
    useSmoothScroll();

    useEffect(() => {
        const updateHeight = () => {
            document.body.style.height = 'auto';
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);

        if (window.location.hash === '#contact') {
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 500);
        }

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <PageTransition>
            <div className="bg-[#070708] min-h-[100svh]">
                <CustomCursor />
                <NoiseOverlay />
                <Header />
                <main>
                    {/* 1. Hero - First Impression */}
                    <Hero />

                    {/* 2. Legacy Wall - Horizontal Timeline (1991 - 2025) */}
                    <SectionTransition delay={0.1}>
                        <LegacyWall />
                    </SectionTransition>

                    {/* 3. Leadership, Team & Key Consultants (Matches Original Site format + Presentation Consultants) */}
                    <SectionTransition delay={0.1}>
                        <Team />
                    </SectionTransition>

                    {/* 4. Founder Perspectives (Founder Videos) */}
                    <SectionTransition delay={0.15}>
                        <FounderVideos />
                    </SectionTransition>

                    {/* 5. Our Journey (SYS Developers, NB Constructions, Anantham) */}
                    <SectionTransition delay={0.1}>
                        <Journey />
                    </SectionTransition>

                    {/* 6. Delivered Landmarks & Portfolio (SYS & NB Developments) */}
                    <SectionTransition delay={0.1}>
                        <LegacyDevelopments />
                    </SectionTransition>

                    {/* 7. Key Pillars (Life Centric, Legacy Centric, Future Centric) */}
                    <SectionTransition delay={0.1}>
                        <KeyPillars />
                    </SectionTransition>

                    {/* 8. Anantham 88 - Sector 88 Sonipat Township Blueprint */}
                    <SectionTransition delay={0.1}>
                        <AnanthamProjectDetails />
                    </SectionTransition>

                    {/* 9. Why Sonipat - Location Intelligence & Macro Growth Engines */}
                    <SectionTransition delay={0.1}>
                        <WhySonipat />
                    </SectionTransition>

                    {/* 10. Instagram Reels */}
                    <SectionTransition delay={0.1}>
                        <InstagramReels />
                    </SectionTransition>

                    {/* 11. Contact - Private Consultation Form */}
                    <SectionTransition delay={0.1}>
                        <Contact />
                    </SectionTransition>
                </main>

                <SectionTransition delay={0.2}>
                    <Footer />
                </SectionTransition>
            </div>
        </PageTransition>
    );
}
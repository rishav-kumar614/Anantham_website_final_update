import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth physics for the follower ring
    const springConfig = { damping: 28, stiffness: 220, mass: 0.4 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target && target.closest) {
                const isClickable = target.closest('button, a, .cursor-pointer, input, textarea, [role="button"]');
                setIsHovering(!!isClickable);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible, mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999] hidden lg:block overflow-hidden">
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#C9A961] rounded-full pointer-events-none -ml-1 -mt-1"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
            />

            {/* Follower Ring */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 border border-[#C9A961]/40 rounded-full pointer-events-none -ml-6 -mt-6"
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(201, 169, 97, 0.12)' : 'rgba(201, 169, 97, 0)',
                    borderColor: isHovering ? 'rgba(201, 169, 97, 0.7)' : 'rgba(201, 169, 97, 0.3)',
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />
        </div>
    );
}
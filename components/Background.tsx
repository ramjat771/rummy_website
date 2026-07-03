"use client";

import { motion } from "framer-motion";

const moneyItems = [
    { icon: "💸", left: "5%", top: "8%", size: "text-5xl", duration: 8 },
    { icon: "💰", left: "15%", top: "28%", size: "text-6xl", duration: 10 },
    { icon: "🪙", left: "30%", top: "15%", size: "text-5xl", duration: 7 },
    { icon: "💵", left: "45%", top: "35%", size: "text-6xl", duration: 9 },
    { icon: "💎", left: "60%", top: "12%", size: "text-5xl", duration: 8 },
    { icon: "🪙", left: "75%", top: "22%", size: "text-6xl", duration: 11 },
    { icon: "💸", left: "88%", top: "10%", size: "text-5xl", duration: 9 },

    { icon: "💰", left: "10%", top: "65%", size: "text-6xl", duration: 10 },
    { icon: "💵", left: "28%", top: "80%", size: "text-5xl", duration: 8 },
    { icon: "🪙", left: "45%", top: "72%", size: "text-6xl", duration: 7 },
    { icon: "💸", left: "63%", top: "85%", size: "text-5xl", duration: 9 },
    { icon: "💎", left: "82%", top: "70%", size: "text-5xl", duration: 10 },
];

export default function Background() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Background */}
            <img
                src="/bg.jpg"
                alt="Background"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Golden Glow */}
            <motion.div
                className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[150px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Money */}
            {moneyItems.map((item, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${item.size} select-none`}
                    style={{
                        left: item.left,
                        top: item.top,
                    }}
                    animate={{
                        y: [-30, 30, -30],
                        rotate: [-15, 15, -15],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {item.icon}
                </motion.div>
            ))}

            {/* Bottom Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,black_100%)] opacity-60" />
        </div>
    );
}
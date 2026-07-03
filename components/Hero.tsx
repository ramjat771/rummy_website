"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "@/lottie/rummy.json";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-900 text-center">

            {/* glow background */}
            <div className="absolute h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center px-6">

                <div className="h-56 w-56">
                    <Lottie animationData={animationData} loop autoplay />
                </div>

                <h1 className="mt-6 text-5xl font-extrabold text-white">
                    Rummy APK
                </h1>

                <p className="mt-3 text-green-100 text-lg">
                    Play • Win • Enjoy
                </p>

                <Link
                    href="/download"
                    className="mt-10 rounded-full bg-yellow-400 px-10 py-4 font-bold text-black transition hover:scale-105"
                >
                    Download APK
                </Link>
            </div>
        </section>
    );
}
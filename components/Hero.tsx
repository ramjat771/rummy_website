"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "@/lottie/rummy.json";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-green-900">
            <div className="absolute h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center px-6 text-center">
                <div className="mb-8 h-56 w-56">
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay
                        style={{
                            width: 250,
                            height: 250,
                            border: "2px solid red",
                            background: "#fff"
                        }}
                    />
                </div>

                <h1 className="text-5xl font-extrabold text-white md:text-6xl">
                    Rummy APK
                </h1>

                <p className="mt-4 text-lg text-green-100">
                    Play • Win • Enjoy
                </p>

                <Link
                    href="/download"
                    className="mt-10 rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold text-black shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
                >
                    Download APK
                </Link>
            </div>
        </section>
    );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/lottie/rummy.json";
import Background from "@/components/Background";
import ShareButton from "@/components/ShareButton";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Background />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          className="h-44 w-44 md:h-56 md:w-56"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="h-full w-full"
          />
        </motion.div>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
          Rummy APK
        </h1>

        <p className="mt-2 text-green-100">
          Play • Win • Enjoy
        </p>

        <div className="mt-10 flex flex-col gap-5">
          <Link
            href="/download"
            className="rounded-full bg-yellow-400 px-12 py-4 font-bold text-black transition hover:scale-105"
          >
            ⬇ Download APK
          </Link>

          <ShareButton />
        </div>
      </div>
    </main>
  );
}
"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimateShowElement } from "@/utils/animation";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <div className=" absolute top-0 left-0 w-full flex flex-col gap-5 items-center justify-center h-svh">
      <motion.div
        variants={AnimateShowElement}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center gap-4 text-center"
      >
        <motion.p
          variants={AnimateShowElement}
          className=" bg-white/20 backdrop-blur-md w-full text-center text-4xl p-5 text-white font-semibold lg:rounded-md"
        >
          Bienvenue Dans La premiére agence de location de voiture électrique en
          Tunisie
        </motion.p>
        <motion.span
          variants={AnimateShowElement}
          className="text-white font-semibold p-2 text-sm text-center sm:w-[600px]"
        >
          Bienvenue chez TESLA_ALVT, votre partenaire de confiance pour tous vos
          besoins en location de véhicules. Notre agence met à votre disposition
          une large gamme de véhicules récents et soigneusement entretenus pour
          répondre à toutes vos exigences.
        </motion.span>
        <Link href={"/login"}>
          <motion.button
            variants={AnimateShowElement}
            className=" bg-white w-fit p-3 rounded-lg text-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Commencer à louer
          </motion.button>
        </Link>
      </motion.div>

      <div className="h-svh w-full absolute top-0 left-0 -z-10 ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/abF0uRhidP4hdUBc2Jmir_desktop.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

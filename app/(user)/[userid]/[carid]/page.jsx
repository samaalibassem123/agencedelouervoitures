"use client";
import Header from "@/components/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { motion } from "framer-motion";
import { AnimateShowElement } from "@/utils/animation";

export default function page(url) {
  //get information from the url
  const userid = url.params.userid;
  const carid = url.params.carid;
  const carname = url.searchParams.carname;
  const prix = url.searchParams.prix;
  const carimg = url.searchParams.carimg;

  return (
    <>
      <Header />

      <div className=" lg:grid md:grid-cols-3 h-svh flex flex-col">
        {/*left side*/}
        <ScrollArea className="md:h-fit h-[50%] overflow-y-visible md:border-none border-b-2">
          <motion.div
            variants={AnimateShowElement}
            initial="hidden"
            animate="visible"
            className="w-full h-svh border p-2 flex gap-7 flex-col"
          >
            <motion.div
              variants={AnimateShowElement}
              className="p-2 space-y-4 col-span-1 "
            >
              {" "}
              <motion.h1
                variants={AnimateShowElement}
                className="text-5xl font-semibold"
              >
                {carname}
              </motion.h1>{" "}
              <motion.div variants={AnimateShowElement}>
                <img src={carimg} alt="car" className=" rounded-lg" />
              </motion.div>
              <motion.p
                variants={AnimateShowElement}
                className=" text-sm font-semibold "
              >
                Le Tesla Model Y est un SUV compact 100% électrique qui combine
                praticité et performances. Voici ses principales
                caractéristiques : <br />
                <strong> Design extérieur : </strong>
                <br /> Silhouette aérodynamique, similaire à une Model 3
                surélevée Toit panoramique en verre Poignées de portes
                affleurantes Hauteur surélevée offrant une bonne garde au sol
                <br /> <strong>Intérieur :</strong> <br /> Habitacle minimaliste
                et épuré Grand écran tactile central de 15 pouces 5 places en
                configuration standard (7 places en option) Volume de coffre
                généreux (grâce aux coffres avant et arrière) Banquette arrière
                rabattable 60/40 <br /> Performances (selon les versions) <br />
                <strong> Autonomie :</strong>
                <br /> entre 430 et 533 km (WLTP) 0 à 100 km/h : 3,7 secondes
                (version Performance) <br /> <strong>
                  Vitesse maximale :
                </strong>{" "}
                <br />
                jusqu'à 250 km/h Deux moteurs électriques (transmission
                intégrale)
                <br /> <strong>Équipements notables :</strong> <br /> Autopilot
                de série Caméras de surveillance à 360° Système
                d'infodivertissement Tesla Mises à jour logicielles à distance
                Climatisation bi-zone Accès à la recharge rapide via le réseau
                Superchargeur Tesla Voulez-vous plus de détails sur un aspect
                particulier du Model Y ?
              </motion.p>
            </motion.div>
          </motion.div>
        </ScrollArea>
      </div>
    </>
  );
}

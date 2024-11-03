"use client";
import React from "react";
import CardCar from "./CardCar";
import { motion } from "framer-motion";
import { AnimateShowElement } from "@/utils/animation";
export default function Dashboard() {
  //get cars information from the db
  const cars = [
    {
      carImg: "/Homepage-Model-Y-Desktop-US-v2.avif",
      ModelImg: "/compositor.jpg",
      carTitle: "Model Y",
      prix: "999",
      Range: "337mi",
      TopSpeed: "135mph",
      vitOut: "6.5sec",
    },
    {
      carImg: "/Homepage-Model-X-Desktop-US.avif",
      carTitle: "Model X",
      ModelImg: "/Modelx.jpg",
      prix: "1200",
      Range: "335mi",
      TopSpeed: "149mph",
      vitOut: "3.8sec",
    },
    {
      carImg: "/Homepage-Model-S-Desktop-US.avif",
      ModelImg: "/ModelS.jpg",
      carTitle: "Model S",
      prix: "1500",
      Range: "402mi",
      TopSpeed: "130mph",
      vitOut: "3.1sec",
    },
    {
      carImg: "/Homepage-Model-3-Desktop-US.avif",
      ModelImg: "/Model3.jpg",
      carTitle: "Model 3",
      prix: "1999",
      Range: "363 mi",
      TopSpeed: "125mph",
      vitOut: "4.9sec",
    },
    {
      carImg: "/Homepage-Cybertruck-Desktop-v3.avif",
      ModelImg: "/cyber.jpg",
      carTitle: "Cybertruck",
      prix: "2999",
      Range: "325mi",
      TopSpeed: "125mph",
      vitOut: "4.1sec",
    },
  ];
  return (
    <div className="p-5 flex flex-col gap-3 w-full justify-center">
      <h1 className="font-semibold text-xl m-2 text-center">
        La premiere Agence de location de voiture électique en Tunisie Vous
        represente Leur gamme
      </h1>
      {cars.map((car, index) => (
        <motion.div
          variants={AnimateShowElement}
          initial="hidden"
          animate="visible"
          key={index}
        >
          <CardCar
            cardImg={car.carImg}
            ModelImg={car.ModelImg}
            cardTitle={car.carTitle}
            Range={car.Range}
            TopSpeed={car.TopSpeed}
            vitOut={car.vitOut}
            prix={car.prix}
            carid={index}
          />
        </motion.div>
      ))}
    </div>
  );
}

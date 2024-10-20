import React from "react";
import CrardCar from "./CrardCar";

export default function Dashboard() {
  const cars = [
    {
      carImg: "/Homepage-Model-Y-Desktop-US-v2.avif",
      carTitle: "Model Y",
      prix: "999",
    },
    {
      carImg: "/Homepage-Model-X-Desktop-US.avif",
      carTitle: "Model X",
      prix: "1200",
    },
    {
      carImg: "/Homepage-Model-S-Desktop-US.avif",
      carTitle: "Model 5",
      prix: "1500",
    },
    {
      carImg: "/Homepage-Model-3-Desktop-US.avif",
      carTitle: "Model 3",
      prix: "1999",
    },
    {
      carImg: "/Homepage-Cybertruck-Desktop-v3.avif",
      carTitle: "Cybertruck",
      prix: "2999",
    },
  ];
  return (
    <div className="p-5 flex flex-col gap-3 w-full justify-center">
      <h1 className="font-semibold text-3xl">Notre Gamme:</h1>
      {cars.map((car, index) => (
        <CrardCar
          key={index}
          cardImg={car.carImg}
          cardTitle={car.carTitle}
          prix={car.prix}
        />
      ))}
    </div>
  );
}

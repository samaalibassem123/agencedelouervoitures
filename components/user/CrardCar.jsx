import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
export default function CrardCar({
  cardImg = "/Homepage-Model-Y-Desktop-US-v2.avif",
  cardTitle = "Model Y",
}) {
  return (
    <div className="p-16 relative flex items-center justify-between  flex-col">
      <h1 className="text-center z-10 text-white text-6xl font-semibold">
        {cardTitle}
      </h1>
      <Image
        src={cardImg}
        width={1920}
        height={800}
        alt="car"
        className="object-cover absolute top-0 left-0 -z-20 rounded-xl w-full"
      />
      <Button>Louer</Button>
    </div>
  );
}

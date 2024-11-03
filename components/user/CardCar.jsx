"use client";
import React, { useState } from "react";
import AnimatedNumber from "numbers-animation-react";
import Link from "next/link";

export default function CardCar({
  cardImg,
  ModelImg,
  cardTitle,
  Range,
  TopSpeed,
  vitOut,
  prix,
  carid,
}) {
  const [showBut, setShowBut] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowBut(true)}
      onMouseLeave={() => setShowBut(false)}
      className="p-16 relative flex items-center justify-between h-[400px] hover:h-[600px] transition-all cursor-pointer duration-200 ease-in flex-col  bg-center bg-origin-border bg-cover  grayscale hover:grayscale-0 rounded-lg"
      style={{ backgroundImage: `url(${cardImg})` }}
    >
      <h1 className="text-center text-white text-6xl font-semibold">
        {cardTitle}
      </h1>
      {showBut && (
        <div className="flex items-center flex-col gap-3 w-full">
          <Link
            href={`/user/${carid}?carname=${cardTitle}&prix=${prix}&carimg=${cardImg}&modelimg=${ModelImg}&range=${Range}&topspeed=${TopSpeed}&vitout=${vitOut}`}
          >
            <button
              variant="primary"
              className="transition-all w-[200px]  text-lg bg-white p-2 rounded-lg font-semibold hover:opacity-90"
            >
              Louer
            </button>
          </Link>

          <div className="text-white text-2xl  flex items-center gap-3">
            <span className=" no-underline">Avec</span>
            <span className=" underline">
              <AnimatedNumber
                value={prix}
                startValue={0}
                duration={1000}
                generateCommas={true}
                generateDecimals={false}
              />{" "}
              DT/jour
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

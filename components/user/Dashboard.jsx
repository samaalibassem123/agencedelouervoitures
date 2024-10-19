import React from "react";
import CrardCar from "./CrardCar";

export default function Dashboard() {
  return (
    <div className="p-5 flex flex-col gap-2 w-full justify-center">
      <h1 className=" font-semibold text-2xl">Notre collection</h1>
      <CrardCar />
    </div>
  );
}

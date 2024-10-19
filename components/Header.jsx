import React from "react";

export default function Header() {
  return (
    <div className=" fixed top-0 w-full flex sm:flex-row flex-col sm:items-end gap-1  backdrop-blur-xl text-white bg-black/40 p-5">
      <h1 className=" font-semibold sm:text-4xl text-3xl">TESLA_ALVT</h1>
      <span className="text-sm text-gray-100">
        Agence de Location de Voitures électique
      </span>
    </div>
  );
}

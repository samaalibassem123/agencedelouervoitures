import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { SiTesla } from "react-icons/si";
import Link from "next/link";
export default function Header({ place, styleEdit }) {
  if (place === "home") {
    return (
      <header className=" fixed top-0 w-full flex sm:flex-row flex-col sm:items-end gap-1  backdrop-blur-xl text-white bg-black/40 p-5">
        <div className="flex items-center gap-3 ">
          <SiTesla className="size-10" />
          <h1 className=" font-semibold sm:text-4xl text-xl">TESLA_ALVT</h1>
        </div>

        <span className="text-sm text-gray-100">
          Agence de Location de Voitures électique
        </span>
      </header>
    );
  } else {
    return (
      <header
        className={`flex items-center justify-between  p-5 font-semibold shadow-md z-30 backdrop-blur-xl ${styleEdit} `}
      >
        <Link href="/">
          <div className="flex items-center gap-3 ">
            <SiTesla className="size-10" />
            <div>
              <h1 className="text-xl">TESLA_ALVT</h1>
              <span className=" md:inline-block hidden text-sm  text-gray-900">
                Agence de Location de Voitures électique (Tesla) En Tunisie
              </span>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <span className=" md:inline-block hidden">bassem samaali</span>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <form>
            <Button>Logout</Button>
          </form>
        </div>
      </header>
    );
  }
}

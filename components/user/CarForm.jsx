"use client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function CarForm({
  userid,
  carid,
  carname,
  prix,
  carimg,
  range,
  topSpeed,
  vitOut,
}) {
  const [nbjour, setNbjour] = useState(0);

  return (
    <form className=" lg:grid md:grid-cols-4 h-svh flex flex-col">
      {/*left side*/}
      <div className="col-span-3 border overflow-hidden cursor-pointer">
        <img
          src={carimg}
          className="object-cover object-center hover:scale-125 transition-all ease-in-out -z-20 "
        />
      </div>
      {/*right side*/}
      <ScrollArea className="md:h-svh h-[80%]">
        <div className="flex h-full flex-col p-5 items-center justify-around gap-7 ">
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className=" font-semibold md:text-5xl text-2xl text-center ">
              {carname}
            </h1>
            <div className="flex items-center justify-around w-full">
              <div className="flex flex-col items-center gap-3 w-[100px]">
                <span className="text-lg font-semibold">{range}</span>
                <span className="text-sm">Range(EPA est.)</span>
              </div>
              <hr className="border h-[100px]" />
              <div className="flex flex-col items-center gap-3">
                <span className="text-lg font-semibold">{topSpeed}</span>
                <span className="text-sm">Top Speed</span>
              </div>
              <hr className="border h-[100px]" />
              <div className="flex flex-col items-center gap-3">
                <span className="text-lg font-semibold">{vitOut}</span>
                <span className="text-sm">0-60 mph</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col w-full gap-3">
              <Label className="text-md ">Choisir Le nombre de jour:</Label>
              <Input
                type="number"
                onChange={(e) => setNbjour(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between border rounded-md  p-5 w-full">
            <span className="text-lg font-semibold">
              {prix * nbjour}DT/par {nbjour}
            </span>
            <button
              type="submit"
              className="bg-blue-500 text-white p-5 rounded-lg text-lg hover:opacity-80 font-semibold"
            >
              Louer Maintenant
            </button>
          </div>
        </div>
      </ScrollArea>
    </form>
  );
}

"use client";
import Header from "@/components/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { motion } from "framer-motion";
import { AnimateShowElement } from "@/utils/animation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerWithRange } from "@/components/user/DatePickerWithRange";

export default function page(url) {
  //get information from the url
  const userid = url.params.userid;
  const carid = url.params.carid;
  const carname = url.searchParams.carname;
  const prix = url.searchParams.prix;
  const carimg = url.searchParams.modelimg;
  const range = url.searchParams.range;
  const topSpeed = url.searchParams.topspeed;
  const vitOut = url.searchParams.vitout;

  return (
    <>
      <Header />

      <div className=" lg:grid md:grid-cols-4 h-svh flex flex-col">
        {/*left side*/}
        <div className="col-span-3 border overflow-hidden cursor-pointer">
          <img
            src={carimg}
            className="object-cover object-center hover:scale-125 transition-all ease-in-out -z-20 "
          />
        </div>
        {/*right side*/}
        <ScrollArea className="h-[80%]">
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
            <div>
              <div className="flex md:flex-row flex-col w-full  md:items-center gap-3">
                <Label>Choisir votre Date:</Label>
                <DatePickerWithRange />
              </div>
            </div>

            <div className="flex items-center justify-between border p-5 w-full">
              <span className="text-lg font-semibold">{prix}DT</span>
              <button className="bg-blue-500 text-white p-5 rounded-lg text-lg hover:opacity-80 font-semibold">
                Louer Maintenant
              </button>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}

"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { AnimateShowElement } from "@/utils/animation";
import { redirect } from "next/navigation";

export default function LoginFrom() {
  return (
    <div className="grid md:grid-cols-2 w-full h-svh">
      {/*Right side */}
      <div className="w-full h-svh bg-black md:flex hidden relative ">
        <video
          className=" w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="Demo-Drive-Kiosk-FSD-No-Text.mp4" type="video/mp4" />
        </video>
      </div>
      {/*left side */}

      <motion.div
        variants={AnimateShowElement}
        initial="hidden"
        animate="visible"
        className="flex flex-col  justify-center gap-5 h-svh w-full border p-10 rounded-lg "
      >
        <motion.div
          variants={AnimateShowElement}
          className="flex flex-col gap-2 md:h-svh md:justify-around"
        >
          {/*text appear with the vd*/}
          <div className="md:flex md:flex-col hidden">
            <h1 className="text-2xl font-semibold">
              Full Self-Driving (Supervised)
            </h1>
            <p className="text-sm">
              Vous pourrez expérimenter la conduite entièrement autonome
              (supervisée). Sous votre supervision, le véhicule Tesla naviguera
              automatiquement dans les virages, les intersections et plus encore
              le long de votre itinéraire. Un conseiller Tesla peut vous aider à
              vous installer et vous accompagner pendant le trajet sur demande.
            </p>
          </div>
          <div>
            {/*login with credentials*/}
            <form
              action=""
              className="flex flex-col gap-5 bg-white rounded-lg p-2"
            >
              <h1 className="text-2xl font-semibold ">Login</h1>
              <hr />
              <div>
                <Label>Mail:</Label>
                <Input
                  placeholder="example@gmail.com"
                  name="mail"
                  type="email"
                  required
                />
              </div>
              <div>
                <Label>Password:</Label>
                <Input placeholder="**************" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit">Login</Button>
              </div>
            </form>
            {/*login with google*/}
            <form action="" className="w-full bg-white">
              <Button className="w-full border border-black" variant="primary">
                <div className="flex items-center gap-2">
                  <span>Continue avec Google</span> <FcGoogle />
                </div>
              </Button>
            </form>
          </div>
          {/*redirect to login */}
          <Link href={"/register"} className="underline bg-white p-1">
            Vous n avez pas un compte ?
          </Link>{" "}
          <Link href={"/test"} className="underline bg-white p-1">
            test
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

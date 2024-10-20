"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { motion } from "framer-motion";
import { AnimateShowElement } from "@/utils/animation";
import { ScrollArea } from "../ui/scroll-area";

export default function RegisterForm() {
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
          src="/abF0uRhidP4hdUBc2Jmir_desktop.mp4"
        >
          <source src="/Demo-Drive-Kiosk-FSD-No-Text.mp4" type="video/mp4" />
        </video>
      </div>

      {/*left side */}
      <ScrollArea className="h-svh">
        <motion.div
          variants={AnimateShowElement}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center gap-5 h-svh w-full border md:p-10 rounded-lg "
        >
          <motion.div
            variants={AnimateShowElement}
            className="flex flex-col gap-2 md:h-svh md:justify-around"
          >
            {/*text appear with the vd*/}
            <motion.div
              variants={AnimateShowElement}
              className="md:flex md:flex-col hidden"
            >
              <h1 className="text-2xl font-semibold">
                Full Self-Driving (Supervised)
              </h1>
              <p className="text-sm">
                Vous pourrez expérimenter la conduite entièrement autonome
                (supervisée). Sous votre supervision, le véhicule Tesla
                naviguera automatiquement dans les virages, les intersections et
                plus encore le long de votre itinéraire. Un conseiller Tesla
                peut vous aider à vous installer et vous accompagner pendant le
                trajet sur demande.
              </p>
            </motion.div>

            <motion.div
              variants={AnimateShowElement}
              className="flex flex-col gap-2"
            >
              {/*Register with credentials*/}
              <form
                action=""
                className="flex flex-col gap-5 bg-white rounded-lg p-5 "
              >
                <h1 className="text-2xl font-semibold ">Register</h1>
                <hr />
                <div className="flex w-full gap-3">
                  <div>
                    <Label>Nom:</Label>
                    <Input placeholder="donnez votre nom" name="username" />
                  </div>
                  <div>
                    <Label>Prénom:</Label>
                    <Input
                      placeholder="donnez  votre prénom"
                      name="userFname"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Numero Télephone:</Label>
                  <div className="w-full">
                    <InputOTP maxLength={8} name="tel">
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                      </InputOTPGroup>
                      <InputOTPSeparator />

                      <InputOTPGroup>
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                      </InputOTPGroup>

                      <InputOTPSeparator />

                      <InputOTPGroup>
                        <InputOTPSlot index={5} />
                        <InputOTPSlot index={6} />
                        <InputOTPSlot index={7} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
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
                  <Input
                    placeholder="**************"
                    type="password"
                    required
                    name="password"
                  />
                </div>
                <div>
                  <Label>Confirm Password:</Label>
                  <Input
                    placeholder="**************"
                    type="password"
                    required
                    name="cpassword"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit">Register</Button>
                </div>
              </form>
              {/*login with google*/}
              <form
                action=""
                className="flex items-center p-1 justify-center w-full bg-white"
              >
                <Button
                  className="md:w-full  border border-black"
                  variant="primary"
                >
                  <div className="flex items-center gap-2">
                    <span>Continue avec Google</span> <FcGoogle />
                  </div>
                </Button>
              </form>
            </motion.div>

            {/*redirect to login */}
            <motion.div variants={AnimateShowElement}>
              <Link href={"/login"} className="underline bg-white p-2">
                Connecter avec votre compte
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>{" "}
      </ScrollArea>
    </div>
  );
}

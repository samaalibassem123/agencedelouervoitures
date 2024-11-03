"use server";

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export const SigninWithGoogle = async () => {
  //Add the user to the db if he Didn't Register before
  await signIn("google");
};

export const Logout = async () => {
  await signOut();
};

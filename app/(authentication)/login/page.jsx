import { auth } from "@/auth";
import LoginFrom from "@/components/authentication/LoginFrom";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await auth();
  if (session?.user) {
    redirect("/user");
  } else {
    return (
      <div className=" flex items-center justify-center w-full min-h-svh">
        <LoginFrom />
      </div>
    );
  }
}

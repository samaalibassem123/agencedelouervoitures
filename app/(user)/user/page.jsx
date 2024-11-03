import { auth } from "@/auth";
import Header from "@/components/Header";
import Dashboard from "@/components/user/Dashboard";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await auth();

  if (session?.user) {
    return (
      <div>
        <Header styleEdit={"sticky top-0"} />
        <Dashboard />
      </div>
    );
  } else {
    redirect("/");
  }
}

import Header from "@/components/Header";
import Dashboard from "@/components/user/Dashboard";
import React from "react";

export default function page({ params }) {
  const userID = params.userid;
  return (
    <div>
      <Header styleEdit={"sticky top-0"} />
      <Dashboard userId={userID} />
    </div>
  );
}

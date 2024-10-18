import Image from "next/image";
import Header from "../components/Header";
import WelcomeSection from "@/components/home/WelcomeSection";

export default function Home() {
  return (
    <div className=" relative">
      <WelcomeSection />
    </div>
  );
}

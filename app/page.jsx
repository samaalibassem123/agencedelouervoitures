import WelcomeSection from "@/components/home/WelcomeSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative">
      <Header place={"home"} />
      <WelcomeSection />
    </div>
  );
}

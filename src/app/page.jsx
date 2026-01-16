import CollAndAction from "@/Components/Home/CollAndAction";
import Feature from "@/Components/Home/Feature";
import HeroSection from "@/Components/Home/HeroSection";
import HowToWorkIt from "@/Components/Home/HowToWorkIt";
import HwyChoose from "@/Components/Home/HwyChoose";
import Popular from "@/Components/Home/Populer";
import TiMon from "@/Components/Home/TestiMon";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      {/* 1st */}
      <header className=" w-full">
        <HeroSection></HeroSection>
      </header>
      <main className=" md:my-15 my-8 space-y-9 p-2 md:max-w-[1300px] mx-auto w-full">
        {/* 2nd */}
        <section>
          <Feature></Feature>
        </section>
        {/* 3nd */}
        <section>
          <HowToWorkIt></HowToWorkIt>
        </section>
        {/* 4th */}
        <section>
          <Popular></Popular>
        </section>
        {/* 5th */}
        <section>
          <HwyChoose></HwyChoose>
        </section>
        {/* 6th */}
        <section>
          <TiMon></TiMon>
        </section>
        {/* 7th */}
        <section>
          <CollAndAction></CollAndAction>
        </section>
      </main>
    </div>
  );
}

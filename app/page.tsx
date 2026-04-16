import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experts from "./components/Experts"
import Media from "./components/Media";
import Reviews from "./components/Reviews"

export default function Home() {
  return (
    <div className="w-full">
      {/* Constrained wrapper for the whole page */}
      <div className="w-full mx-auto">

        {/* Hero section: background image covers Header + Hero only */}
        <div
          className="w-full px-4"
          style={{
            backgroundImage: "url('/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Header />
          <Hero />
        </div>

        {/* Services section: sits below, no background image */}
        <div className="w-full bg-[#f8faf9] px-4">
          <Services />
        </div>

        <div className="w-full px-4">
          <Experts />
        </div>

        <div className="w-full px-4">
          <Reviews />
        </div>
      </div>
    </div>
  );
}

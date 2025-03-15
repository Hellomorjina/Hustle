import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import herocard from "/src/assests/herocards.png";

const Hero = () => {
  return (
    <div className="mx-auto px-4 items-center justify-center flex flex-col gap-4 bg-[#E8F2EE]">
      <h1 className="text-[64px]">All in one card.</h1>
      <p>
        Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
        duis ut diam.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" className="bg-[#5BB5A2] text-[#fffff]">
          Open Account
        </Button>
        <p className="text-[#5BB5A2] "> Compare Cards</p>
      </div>

      <Image src={herocard} width={900} height={400} alt="banner" />
    </div>
  );
};

export default Hero;

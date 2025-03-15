import Image from "next/image";
import Link from "next/link";
import React from "react";
import Blog from "@/assests/Blog1.png";
import { Button } from "../ui/button";

const Blogcart = () => {
  return (
    <div className="border p-4 rounded-md shadow-md items-center mx-auto ">
      <Link href={"/"}>
        <Image
          src={Blog}
          width={280}
          height={200}
          alt="banner"
          className=" mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200 items-center"
        />
      </Link>
      <div>
        <h2 className="text-xl font-semibold items-center">
          How To Start Using Banko For Your Startup
        </h2>
        <p className="items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
          accumsan sit amet nulla facilisi morbi.
        </p>
        <Link href={"/"}>
          <Button variant={"default"}>Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Blogcart;

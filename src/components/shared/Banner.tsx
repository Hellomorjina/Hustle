import Image from "next/image";
import React from "react";
import banner from "@/assests/1.png";

const Banner = () => {
  return (
    <div>
      <div className="px-4 py-8 lg:px-8  grid grid-cols-2 md:grid-cols-2 item-center gap-8">
        <div className="space-y-4 fles flex-col">
          <h4 className="text-[20px]">Transactions</h4>
          <h1 className="text-[64px]">Send & receive money instantly</h1>
          <p className="text-[18px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>✔Malesuada Ipsum</p>
          <p>✔Vestibulum</p>
          <p>✔Parturient Lorem</p>
        </div>
        <div className="mx-auto">
          <Image src={banner} width={280} height={200} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

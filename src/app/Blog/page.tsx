import Blogcart from "@/components/shared/Blogcart";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Blogcart />
        <Blogcart />
        <Blogcart />
        <Blogcart />
        <Blogcart />
        <Blogcart />
      </div>
    </>
  );
};

export default page;

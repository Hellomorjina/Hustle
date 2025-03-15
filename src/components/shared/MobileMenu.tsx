"use client";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from "@/components/ui/button";


import { useState } from "react";
const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="lg:hidden">
        <Button onClick={ToggleMenu} variant="outline">
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </Button>
      </div>
    </>
  );
};

export default MobileMenu;

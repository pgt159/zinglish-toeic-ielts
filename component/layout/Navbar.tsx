"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button/Button";

const Navbar = () => {
  const navigateToHome = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };
  return (
    <div className="flex flex-row justify-between items-center py-[28px] px-[112px] w-screen">
      <div className="flex-shrink-0 cursor-pointer" onClick={navigateToHome}>
        <Image src="/assets/logo.png" alt="Logo" width={148} height={41} />
      </div>
      <div className="flex justify-end items-center gap-[30px]">
        <a
          href="#"
          className="text-background text-[16px] font-normal hover:underline"
        >
          Home
        </a>
        <a
          href="#"
          className="text-background text-[16px] font-normal hover:underline"
        >
          TOEIC
        </a>
        <a
          href="#"
          className="text-background text-[16px] font-normal hover:underline"
        >
          IELTS
        </a>
        <a
          href="#"
          className="text-background text-[16px] font-normal hover:underline"
        >
          Features
        </a>
        <a
          href="#"
          className="text-background text-[16px] font-normal hover:underline"
        >
          About
        </a>
      </div>
      <div className="flex justify-end items-center gap-[25px]">
        <a
          href="#"
          className="text-tprimary text-[16px] font-normal hover:underline"
        >
          Login
        </a>
        <Button variant="primary">Get started</Button>
      </div>
    </div>
  );
};

export default Navbar;

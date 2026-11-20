"use client";

import Navbar from "@/component/layout/Navbar";
import Button from "@/component/ui/Button/Button";
import Image from "next/image";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <div className="flex flex-col items-center justify-center h-full font-inter">
      <Navbar></Navbar>
    </div>
  );
}

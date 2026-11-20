"use client";

import Button from "@/component/ui/Button/Button";
import Image from "next/image";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 font-inter">
      <Button variant="primary">Get started</Button>
      <Button variant="secondary">Practice</Button>
      <Button variant="outline">Explore IELTS</Button>
      <Button variant="ghost">Learn more</Button>
    </div>
  );
}

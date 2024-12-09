"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Games = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="grid grid-cols-2 container mt-24 mx-auto px-12 py-4">
        <div
          className="flex flex-col justify-center hover:bg-gray-400 py-2 rounded-md cursor-pointer"
          onClick={() => router.push("/games/tetris")}
        >
          <Image
            src={"/images/tetris-logo.png"}
            width={60}
            height={60}
            alt="dasd"
            className="mx-auto"
          />
          <h1 className="mx-auto text-2xl mt-5">Tetris</h1>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Games;

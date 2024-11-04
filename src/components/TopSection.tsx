"use client";
import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const TopSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e0e0e0] to-[#000000]">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Alireza",
                1000,
                "Fullstack Developer",
                1000,
                "Mobile Developer",
                1000,
                "React Developer",
                1000,
                "...",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a skilled full-stack developer with 9 years in tech,
            transitioning from Android to React and React Native. Proficient in
            Java, Kotlin, JavaScript, and TypeScript, i builds scalable web and
            mobile solutions.
          </p> */}
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-[#0009] text-white"
            >
              Contact Me
            </Link>
            <Link
              href="/files/Alireza_CV.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-[#868686] text-white mt-3"
              download
            >
              <span className="block bg-[#121212] hover:bg-[#868686] rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#757575] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/logo.png"
              alt="Alireza"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopSection;

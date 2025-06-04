"use client";
import TabButton from "@/components/TabButton";
import Image from "next/image";
import { useState, useTransition } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 gap-x-8 gap-y-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Django</li>
        <li>FastAPI</li>
        <li>React</li>
        <li>Next.js</li>
        <li>React Native</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>NestJS</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Engineering</li>
      </ul>
    ),
  },
];
const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    if (isPending) {
    }
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-1">
        <Image alt="s" src="/images/hacker.gif" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m a Full Stack Developer with 9 years of experience building
            robust web and mobile applications. My core strengths lie in
            JavaScript, TypeScript, Python, and frameworks like React, Next.js,
            Node.js, Django, and FastAPI. I design and develop scalable systems
            with clean architecture and efficient performance, using PostgreSQL
            and MongoDB as my go-to databases.
          </p>
          <p className="text-base lg:text-lg mt-5">
            Previously a Senior Android Developer, I’ve successfully
            transitioned into fullstack development, delivering modern web
            platforms and cross-platform mobile apps with React Native. I’m a
            fast learner, collaborative team player, and passionate about clean
            code, good architecture, and continuous improvement.
          </p>
          <p className="text-base lg:text-lg mt-5">
            I’m currently open to freelance or remote opportunities, and ready
            to jump into meaningful projects immediately.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "IntelRisk",
    description:
      "A financial risk management platform used by 50+ clients, featuring real-time analytics and risk forecasting.",
    image: "/images/riscode.png",
    tech: ["React", "Node.js", "Django", "PostgreSQL"],
    github: "#",
    live: "https://intelrisk.vercel.app/login",
  },
  {
    title: "Supafo",
    description:
      "A React Native food delivery app improving order workflows and driver dispatch systems.",
    image: "/images/supafo.png",
    tech: ["React Native", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Portara",
    description:
      "Redesigned UI/UX of two client apps, boosting user engagement by 20% and improving overall performance.",
    image: "/images/jesti.png",
    tech: ["React", "Figma", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "MENA VPN",
    description:
      "Integrated a custom VPN module into a React Native app, expanding secure access for regional users.",
    image: "/images/vpn.png",
    tech: ["React Native", "OpenVPN", "Node.js"],
    github: "#",
    live: "https://menavpn1.com/",
  },
  {
    title: "Finacademy",
    description:
      "A learning platform for finance professionals with custom course management, boosting enrollment by 25%.",
    image: "/images/finacademy.png",
    tech: ["Vue", "NestJS", "PostgreSQL"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-5">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#272323] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  className="text-green-400 hover:underline"
                >
                  Live
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

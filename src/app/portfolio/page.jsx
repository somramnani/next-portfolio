"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import {
  HTML5,
  CSS3,
  Bootstrap,
  JavaScript,
  Handlebars,
  NodeJS,
  Express,
  Passport,
  Sequelize,
  React,
} from "@/app/lib/techBadges";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Date Night",
    desc: "A web app that assists the average person in searching for multiple activities in a given location.",
    img: "/DateNight.png",
    link: "https://date-night-2-456a8b6a285c.herokuapp.com",
    github: "https://github.com/somramnani/date-night-v2",
    tech: [
      HTML5,
      CSS3,
      Bootstrap,
      JavaScript,
      Handlebars,
      NodeJS,
      Express,
      Passport,
      Sequelize,
    ],
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Restaurant Manager",
    desc: "An application where managers can track their employees and make reservations.",
    img: "/restaurant-employees.jpg",
    link: "https://manager-restaurant-4129383b2be4.herokuapp.com",
    github: "https://github.com/somramnani/RestaurantManager",
    tech: [
      HTML5,
      CSS3,
      Bootstrap,
      JavaScript,
      Handlebars,
      NodeJS,
      Express,
      Passport,
      Sequelize,
    ],
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Store",
    desc: "This is a small store application built with React, TypeScript, and Vite. The application displays a store from a JSON file and allows users to add items to a cart.",
    img: "/store.png",
    link: "store-dusky-omega.vercel.app/",
    github: "https://github.com/somramnani/store",
    tech: [React],
  },
  {
    id: 4,
    color: "from-blue-300 to-violet-300",
    title: "2D Fighting Game",
    desc: "The 2D Fighting Game is a two-player fighting game built using vanilla JavaScript and CSS. It features a simple yet engaging combat system where players can choose their characters and battle each other in a classic 2D arena.",
    img: "/fighting-game-demo.png",
    link: "https://fighting-game-psi.vercel.app",
    github: "https://github.com/somramnani/2d-fighting-game",
    tech: [HTML5, CSS3, JavaScript],
  },
];

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex">
        <div className="w-screen min-h-screen p-8 flex flex-col gap-8 ">
          <h1 className="text-center text-6xl font-bold mb-12">Projects</h1>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-8 gap-8"
            >
              {/* Left side: Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              {/* Right side: Info */}
              <div className="flex flex-col justify-center w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h2>

                {item.tech && (
                  <div className="mb-4">
                    {/* <p className="font-semibold text-gray-700">
                      Technologies Used:
                    </p> */}
                    <div className="flex flex-wrap gap-2 items-center">
                      {item.tech.map((tech, index) => (
                        <div
                          className="w-[130px] h-[40px] flex items-center justify-center"
                          key={index}
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            className="h-12 min-w-[120px] object-contain"
                            width={100}
                            height={40}
                            title={tech.name}
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <p className="text-gray-600 mb-6">{item.desc}</p>

                <div className="flex gap-4">
                  <Link href={item.github} target="_blank">
                    <button className="px-4 py-2 bg-gray-800 text-white rounded flex items-center gap-2">
                      <FaGithub className="w-5 h-5" /> <span> GitHub</span>{" "}
                    </button>
                  </Link>
                  <Link href={item.link} target="_blank">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2">
                      <FaGlobe className="w-5 h-5" />
                      <span> Website</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

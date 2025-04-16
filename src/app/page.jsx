"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-scroll">
        {/* Image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/meAndDogArtsy2.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold pt-15">Welcome</h1>
          <p className="md:text-xl">
            Hey! My name is Som and I am a Front End Developer. I have an
            Associate's Degree in Web Development and have also gone to the
            Rutgers Coding Bootcamp. I am currently a fellow at Formation which
            is a competitive engineering Fellowship.
          </p>

          <p className="md:text-xl">
            {" "}
            I love writing code and problem solving. When I am not coding you
            can find me either snowboarding, cooking or playing basketball! 🏂
            👨‍🍳 🏀
          </p>

          <p className="md:text-xl">
            {" "}
            Feel free to reach out to me if you have any questions{" "}
            <a
              href="mailto:som.ramnani@gmail.com"
              className="text-blue-500 underline"
            >
              som.ramnani@gmail.com
            </a>
          </p>
          <div className="flex gap-4 pb-10">
            <Link
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View My Work
            </Link>
            {/* <Link href="/contact" className="p-4 rounded-lg ring-1 ring-black">
              Contact Me{" "}
            </Link> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

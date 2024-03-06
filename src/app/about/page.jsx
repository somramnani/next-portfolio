"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div>
      {" "}
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        About
      </motion.div>
    </div>
  );
};

export default AboutPage;

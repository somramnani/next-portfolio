"use client";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  return (
    <div>
      {" "}
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        Portfolio
      </motion.div>
    </div>
  );
};

export default PortfolioPage;

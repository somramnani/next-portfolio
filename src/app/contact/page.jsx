"use client";

import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div>
      {" "}
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        Contact Page
      </motion.div>
    </div>
  );
};

export default ContactPage;

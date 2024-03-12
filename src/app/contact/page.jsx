"use client";

import { motion } from "framer-motion";

const ContactPage = () => {
  const text = "Say Hello";
  return (
    <div>
      {" "}
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
          {/* Text Container */}
          <div className="h-1/2 lg:h-full lg:w-1/2">
            <motion.div className="div">
              {text.split("").map((letter, index) => {
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
          {/* Form Container */}
          <form className="h-1/2 lg:h-full lg:w-1/2"></form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;

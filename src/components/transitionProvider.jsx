"use client";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      {" "}
      <div
        key={pathName}
        className="w-screen h-screen bg-red-500 bg-gradient-to-b from-blue-50 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initital={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed rounded-b-[100px] bottom-0 z-40"
          animate={{ height: "0vh" }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            transition: { delay: 0.5 },
          }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;

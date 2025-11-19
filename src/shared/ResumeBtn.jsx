import React from "react";
import { motion } from "framer-motion";
import { LuDownload } from "react-icons/lu";

const ResumeBtn = () => {
  return (
    <motion.a
      href=""
      download
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        boxShadow: "0 0 20px rgba(0, 191, 143, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      className="ml-2 btn border-none bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] hover:from-[#00bf8f] hover:via-[#1cd8d2] hover:to-[#302b63] text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-md shadow-[#00bf8f]/40 transition-all duration-500"
    >
      <a href="https://drive.google.com/file/d/1si05AqtKEpk1wYNshPIgAuASA2zK4dUk/view?usp=drive_link">
        Resume
      </a>
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <LuDownload className="text-lg" />
      </motion.div>
    </motion.a>
  );
};

export default ResumeBtn;

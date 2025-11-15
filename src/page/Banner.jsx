import React from "react";
import bannerImg from "../assets/Profile.jpg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { LuArrowRight } from "react-icons/lu";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import ResumeBtn from "../shared/ResumeBtn";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  {
    href: "https://www.linkedin.com/public-profile/settings",
    icon: FaLinkedin,
    size: 25,
  },
  {
    href: "https://www.facebook.com/share/17Fh6kiZNN/",
    icon: FaFacebook,
    size: 25,
  },
  {
    href: "https://github.com/ab-azim",
    icon: BsGithub,
    size: 25,
  },
];

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between gap-16 md:gap-26 items-center rounded-lg p-2 py-16 sm:px-4 md:px-10 xl:px-15">
      {/* Banner Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center lg:text-left space-y-6 max-w-2xl"
      >
        {/* Title */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold md:space-y-3"
          >
            <h3 className="text-secondary text-xl sm:text-2xl md:text-3xl">
              Hello! Meet
            </h3>

            <h1 className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-transparent sm:text-4xl md:text-5xl xl:text-6xl my-1 md:my-2 lg:my-4 lg:ml-20 inline-block">
              JIHAD MIA
            </h1>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl sm:text-[26px] md:text-4xl font-semibold text-[#00bf8f] italic drop-shadow-[0_2px_10px_rgba(0,191,143,0.4)] h-12 lg:h-14"
          >
            <Typewriter
              words={[
                "Web Developer",
                "React Developer",
                "MERN Stack Developer",
                "Frontend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 text-base xl:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 xl:pb-4"
        >
          I am a Frontend Developer who loves transforming ideas into clean,
          responsive, and user-focused web experiences. I enjoy crafting modern
          interfaces with React and the MERN stack, and also exploring Next.js.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
        >
          <a
            href="#projects"
            className="btn  border-violet-300 hover:border-violet-500/50 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 bg-transparent hover:bg-violet-500/10"
          >
            View Projects
            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

          <ResumeBtn />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-5 justify-center lg:justify-start"
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg border border-[#00bf8f]/30 text-gray-200 bg-gradient-to-r from-[#1cd8d2]/10 via-[#00bf8f]/10 to-[#302b63]/10 hover:from-[#00bf8f]/30 hover:via-[#1cd8d2]/30 hover:to-[#302b63]/30 transition-all duration-300 shadow-md hover:shadow-lg shadow-[#00bf8f]/40"
              aria-label={social.label}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Banner Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-64 md:w-[420px] rounded-full relative shadow-md hover:shadow-xl transition-all duration-500 shadow-[#00bf8f]/40"
      >
        {/* Animated Rings */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 rounded-full border-t-4 border-[#1cd8d2]/50 scale-110" />
          <div className="absolute inset-0 rounded-full border-b-4 border-[#302b63]/50 scale-125" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] rounded-full blur-3xl opacity-10 animate-pulse -z-10" />

        <img
          src={bannerImg || "https://i.ibb.co.com/yKJ4N7v/Profile.jpg"}
          alt="Elora"
          className="rounded-full object-cover"
        />

        {/* Floating Badge */}
        <motion.a
          href="#contacts"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 btn lg:btn-lg border-0 bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] rounded-full shadow-md shadow-[#00bf8f]/40 text-sm whitespace-nowrap text-white flex items-center gap-2 transition-all duration-300"
        >
          <HiOutlineMail size={16} />
          Contact Me
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Banner;

import React from "react";
import { motion } from "framer-motion";

const Loading = ({ isComplete = false }) => {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-gray-900">
      ```
      {/* Left Panel - Slides to left */}
      <motion.div
        initial={{ x: 0 }}
        animate={isComplete ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#1a193f]/20 via-[#008a70] to-[#0fa3a0]/25"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#008a70]/15 to-transparent" />
      </motion.div>
      {/* Right Panel - Slides to right */}
      <motion.div
        initial={{ x: 0 }}
        animate={isComplete ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#1a193f]/20 via-[#008a70] to-[#0fa3a0]/25"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-[#008a70]/15 to-transparent" />
      </motion.div>
      {/* Centered Content */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div className="flex flex-col items-center gap-8">
          <div className="name-container">
            <h1 className="text-6xl md:text-8xl font-black tracking-wider text-secondary">
              JIHAD MIA
            </h1>
          </div>

          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="dot"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </motion.div>
      {/* Particle Background */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(
            135deg,
            #0fa3a0 0%,
            #008a70 25%,
            #1a193f 50%,
            #008a70 75%,
            #0fa3a0 100%
          );
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease infinite;
          text-shadow: 0 0 30px rgba(0, 138, 112, 0.4);
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .name-container {
          animation: glowPulse 2s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%,
          100% {
            filter: drop-shadow(0 0 15px rgba(0, 138, 112, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 35px rgba(0, 138, 112, 0.6));
          }
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0fa3a0, #008a70);
          animation: dotPulse 1.5s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        .particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(0, 138, 112, 0.6);
          border-radius: 50%;
          animation: particleFloat linear infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10%,
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;

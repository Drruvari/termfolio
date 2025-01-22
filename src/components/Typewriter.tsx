import { motion } from "framer-motion";
import React from "react";

const Typewriter: React.FC<{ text: string; typingDelay?: number }> = ({ text, typingDelay = 0.009 }) => {
  const words = text.split(" ");

  const variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * typingDelay,
        duration: 0.1,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="flex flex-wrap">
      {words.map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mr-1"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default Typewriter;

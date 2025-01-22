import { motion } from "framer-motion";
import React from "react";
import Help from "./Help";

const Welcome: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-xl uppercase"
    >
      Welcome to kejdi's termfolio. Type
      <span className="text-lime-500"> 'help' </span>
      for available commands.
      <div className="mt-4 text-sm normal-case">
        <Help />
      </div>
      <div className="text-purple-600 mt-4 text-xs sm:text-base">
        <code>
          <pre>
            ███████╗██╗&nbsp;&nbsp;██╗███████╗██╗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██╗
          </pre>
          <pre>
            ██╔════╝██║&nbsp;&nbsp;██║██╔════╝██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║
          </pre>
          <pre>
            ███████╗███████║█████╗&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║
          </pre>
          <pre>
            ╚════██║██╔══██║██╔══╝&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║
          </pre>
          <pre>███████║██║&nbsp;&nbsp;██║███████╗███████╗███████╗</pre>
          <pre>╚══════╝╚═╝&nbsp;&nbsp;╚═╝╚══════╝╚══════╝╚══════╝</pre>
        </code>
      </div>
    </motion.div>
  );
};

export default Welcome;

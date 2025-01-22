import React from "react";
import Typewriter from "../Typewriter";

const Bio: React.FC = () => {
  return (
    <div className="text-white space-y-2 break-normal overflow-wrap text-sm sm:text-base leading-relaxed">
      <Typewriter text="Hey there! I'm a passionate front-end developer with four years of experience crafting intuitive and engaging web experiences using React.js. I thrive on building responsive, user-friendly applications that not only look great but also provide seamless interactions.

      My journey in tech has been fueled by a love for problem-solving and continuous learning. When I'm not coding, you'll probably find me immersed in MMA, a discipline that teaches me resilience, focus, and adaptability—qualities I bring into my work.

      I believe in the power of technology to create meaningful experiences, and I’m always excited to collaborate on innovative projects. Let’s build something amazing together!" />
    </div>
  );
};

export default Bio;

import { motion } from "framer-motion";
import React from "react";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Tailwind CSS", "React", "Next.js"],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="text-green-400">
      {skillCategories.map((category) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold">{category.category}:</h3>
          <ul>
            {category.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;

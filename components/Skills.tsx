"use client";

import {motion} from "framer-motion";
import Skill from "@/components/Skill";
import {Skill as SkillType} from "@/typings";

type Props = {
  skills: SkillType[];
};
function Skills({skills}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col h-screen relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase absolute top-24 tracking-[15px] text-2xl text-gray-500">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm font-medium">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5 md:pt-20 lg:pt-28">
        {skills?.slice(0, skills.length - 2).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;

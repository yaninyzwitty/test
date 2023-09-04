"use client";
import {motion} from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import {Experience} from "@/typings";
import {ExclamationCircleIcon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";

type Props = {
  experiences: Experience[];
};
function Experience({experiences}: Props) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", null!);
    };
  }, []);
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className={`h-screen ${
        show && "bg-green-500"
      } flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center`}
    >
      <h3 className="absolute top-24 tracking-[15px] uppercase text-2xl text-gray-500">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* experience cards */}
        {experiences ? (
          experiences
            ?.sort((a, b) => parseInt(b.DateEnded) - parseInt(a.DateEnded))
            .map((experience, idx) => (
              <ExperienceCard
                key={experience._id}
                experience={experience}
                idx={idx}
              />
            ))
        ) : (
          <ExclamationCircleIcon className="h-10 w-10 text-green-500 animate-spin-" />
        )}
      </div>
    </motion.div>
  );
}

export default Experience;

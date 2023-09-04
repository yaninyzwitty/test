"use client";

import {urlForImage} from "@/sanity/lib/image";
import {Skill} from "@/typings";
import {motion} from "framer-motion";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};
function Skill({directionLeft, skill}: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="rounded-full border-gray-500  h-20 w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 lg:h-32 lg:w-32 filter group-hover:grayscale transition duration-300 ease-in-out flex-shrink-0 object-cover"
        // src="/next-js.svg"
        src={urlForImage(skill?.image.asset).url()}
        alt="avatar"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:h-28 xl:w-28 lg:w-32 lg:h-32 rounded-full z-0">
        <div className="flex items-center justify-evenly h-full">
          <p className="text-3xl font-bold text-black opacity-100 ">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

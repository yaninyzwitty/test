"use client";

import {urlForImage} from "@/sanity/lib/image";
import {Project} from "@/typings";
import {motion} from "framer-motion";

// const projects = [1, 2, 3, 4, 5];
type Props = {
  allProjects: Project[];
};
function Projects({allProjects}: Props) {
  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[15px]  text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex scrollbar-thin overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {allProjects &&
          allProjects?.map((project, idx) => (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen "
              key={idx}
            >
              <motion.img
                // src="https://raw.githubusercontent.com/superneutrino8/netlfix-clone/master/src/NetflixClone.jpg"
                src={urlForImage(project?.image?.asset).url()}
                alt="project_image"
                className=" object-contain w-[600px]  h-[450px]"
                initial={{
                  opacity: 0,
                  y: -100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{once: true}}
              />
              <div className="px-0 md:px-10 max-w-6xl space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case for {1 + idx} of {allProjects.length}
                  </span>{" "}
                  {project.title}
                </h4>
                <p className="text-sm md:font-medium xl:text-lg text-center md:text-left pb-2 tracking-tight">
                  {project.summary}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;

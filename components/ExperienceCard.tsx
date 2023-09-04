import {urlForImage} from "@/sanity/lib/image";
import {Experience} from "@/typings";
import {motion} from "framer-motion";

type Props = {
  experience: Experience;
  idx: number;
};

function ExperienceCard({experience, idx}: Props) {
  const dateStarted = new Date(experience?.DateStarted).toLocaleDateString(
    "en-us",
    {year: "numeric", month: "short"}
  );

  const dateEnded = new Date(experience?.DateEnded).toLocaleDateString(
    "en-us",
    {year: "numeric", month: "short"}
  );
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80  flex-shrink-0 w-[500px] h-[500px] overflow-y-scroll md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{once: true}}
        className="h-16 w-16 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center mt-10"
        src={urlForImage(experience?.companyImage?.asset).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((technology, idx) => (
            <div
              key={technology._id}
              className="flex items-center space-x-2 bg-transparent p-2"
            >
              <img
                src={urlForImage(technology?.image.asset).url()}
                className="w-10 h-10  object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started on {dateStarted} and ended on {dateEnded}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            I worked as a {experience?.jobTitle} from {dateStarted} to{" "}
            {dateEnded}
          </li>
          <li>
            I am{" "}
            {experience?.isCurrentlyWorkingHere !== true
              ? "Not currently working here"
              : "Currently working here"}
          </li>
          <li>
            I used{" "}
            {experience?.technologies
              ?.map((technology, idx) => `${technology.title}`)
              .join(" , ")}{" "}
            while in this company
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

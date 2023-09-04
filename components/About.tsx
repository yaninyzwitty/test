"use client";

import {motion} from "framer-motion";

// function About() {
//   return (
//     <div
//       // className="h-screen relative  text-center md:text-left md:flex-row flex max-w-7xl mx-auto px-10 justify-evenly items-center"
//       className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
//     >
//       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:px-6">
//         About
//       </h3>

//       <motion.img
//         initial={{
//           x: -200,
//           opacity: 0,
//         }}
//         transition={{duration: 1.2}}
//         whileInView={{opacity: 1, x: 0}}
//         viewport={{once: true}}
//         src="https://lh3.googleusercontent.com/a/AAcHTtdGUQSynPCzqhv0isDFHWnVIruJanjFJaYtiDjP_t4U4EU=s461-c-no"
//         alt="image"
//         className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
//       />
//       <div className="space-y-10 px-0 md:px-10 pt-10">
//         <h4 className="text-4xl font-semibold">
//           Here's little
//           <span className="underline decoration-[#F7AB0A]/50"> background</span>
//           <p className="text-base ">
//             I extend my greetings as Ian Mwangi, a proficient Fullstack Software
//             Engineer. My passion for programming ignited during my second year
//             in high school, and since then, I have embarked on an enriching
//             journey through various programming languages. I possess a
//             comprehensive command over languages such as C++, Python, SQL, HTML,
//             and CSS. Presently, my focus is directed towards TypeScript and
//             JavaScript, within which I am deeply engaged.Throughout my
//             professional trajectory, I have consistently sought to expand my
//             expertise by delving into a multitude of libraries and frameworks.
//             My proficiency particularly shines in ReactJS and Next.js, where I
//             have honed my skills to a commendable level. am committed to
//             pursuing excellence in the realm of software engineering and am
//             steadfast in my dedication to continuous learning and innovation.
//           </p>
//         </h4>
//       </div>
//     </div>
//   );
// }

// export default About;
// Import the required modules at the beginning

function About() {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center lg:text-left">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:px-6">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        src="https://lh3.googleusercontent.com/a/AAcHTtdGUQSynPCzqhv0isDFHWnVIruJanjFJaYtiDjP_t4U4EU=s461-c-no"
        alt="image"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-84 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10 pt-10">
        <h4 className="text-4xl font-semibold">
          {`Here's a little`}
          <span className="underline text-[#F7AB0A]"> background</span>{" "}
          {/* Fix the "decoration" property */}
        </h4>
        <p className="text-base">
          I extend my greetings as Ian Mwangi, a proficient Fullstack Software
          Engineer. My passion for programming ignited during my second year in
          high school, and since then, I have embarked on an enriching journey
          through various programming languages. I possess a comprehensive
          command over languages such as C++, Python, SQL, HTML, and CSS.
          Presently, my focus is directed towards TypeScript and JavaScript,
          within which I am deeply engaged. Throughout my professional
          trajectory, I have consistently sought to expand my expertise by
          delving into a multitude of libraries and frameworks. My proficiency
          particularly shines in ReactJS and Next.js, where I have honed my
          skills to a commendable level. I am committed to pursuing excellence
          in the realm of software engineering and am steadfast in my dedication
          to continuous learning and innovation.
        </p>
      </div>
    </div>
  );
}

export default About;

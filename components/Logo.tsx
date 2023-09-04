"use client";

import Link from "next/link";
import {motion} from "framer-motion";

function Logo() {
  return (
    <Link
      href={"#hero"}
      id="logo"
      className="hidden sm:block h-10 w-10 mx-auto sticky bottom-5 cursor-pointer"
    >
      <motion.div
        initial={{opacity: 0, scale: 0.5}}
        transition={{duration: 0.5}}
        whileInView={{opacity: 1, scale: 1}}
        whileTap={{
          opacity: 0,
        }}
        viewport={{once: true}}
        className="flex h-10 w-10 justify-center"
      >
        <img
          src="https://lh3.googleusercontent.com/a/AAcHTtdGUQSynPCzqhv0isDFHWnVIruJanjFJaYtiDjP_t4U4EU=s461-c-no"
          alt="logo"
          className="rounded-full object-cover hover:grayscale-0 cursor-pointer grayscale filter
          "
        />
      </motion.div>
    </Link>
  );
}

export default Logo;

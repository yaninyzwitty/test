"use client";

import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Social} from "@/typings";

type Props = {
  socials: Social[];
};
function Header({socials}: Props) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return;
  return (
    <header className="sticky top-0 p-2 flex items-start xl:items-center justify-between max-w-6xl mx-auto z-20 ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.github.com/yaninyzwitty"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ian-mwangi-a71258242/"
          fgColor="grey"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.quora.com/profile/Ian-Mwangi-85"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/yaninyzwitty"
          fgColor="grey"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://web.facebook.com/ianinyz.witty"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>
      <Link href={"#contact"}>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="grey"
            bgColor="transparent"
          />
          <div>
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get In Touch
            </p>
          </div>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;

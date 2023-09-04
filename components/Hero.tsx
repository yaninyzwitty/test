"use client";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Avatar from "react-avatar";
import Image from "next/image";
import Link from "next/link";
import {PageInfo} from "@/typings";
import {urlForImage} from "@/sanity/lib/image";
import {groq} from "next-sanity";
import {client} from "@/sanity/lib/client";

function Hero() {
  const [text, count] = useTypewriter({
    words: [`Hi, Ian  here...`, "Professional", "Web Developer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="https://lh3.googleusercontent.com/a/AAcHTtdGUQSynPCzqhv0isDFHWnVIruJanjFJaYtiDjP_t4U4EU=s461-c-no"
        alt="avatar"
        width={100}
        height={100}
        className="object-cover mx-auto w-32 h-32 rounded-full"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] max-w-xl">
          <span className="font-bold text-lg">Fullstack</span> Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 px-10">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

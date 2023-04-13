import { mySocials } from "@/config/socials";
import { Icons } from "@/components/Icons";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col  items-start gap-6">
        <h1 className="pb-8 pt-4 text-2xl font-bold leading-[1] tracking-tighter hover:animate-pulse sm:text-4xl md:text-5xl">
          Hello, friend.
        </h1>
        <p className="justify-evenly leading-relaxed tracking-tight text-slate-700">
          I’m a
          {/* <span className="rounded-full border-slate-700 bg-slate-900 p-1 font-bold text-gray-50"> */}
          {/*   full stack  */}
          {/* </span> { // uncomment when become full stack} */}
          {" "}software engineer, based in{" "}
          <span className="rounded-full border-slate-700 bg-slate-900 p-1 font-bold text-gray-50">
            Melbourne, Australia
          </span>
          . At the moment, I&apos;m focused on learning more about full stack
          development on the{" "}
          <span className="italic">web</span>.
        </p>
        <p className="border-t border-slate-100 py-4 pt-12">
          <span className="rounded-lg border-slate-300 p-1 font-mono">
            jvlaj.com{""}
          </span>{" "}
          is my personal website where I share my thoughts and projects.{" "}
        </p>
      </div>
      <div className="flex gap-4"></div>
    </>
  );
}

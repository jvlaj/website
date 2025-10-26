import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";
import { allProjects } from "contentlayer/generated";
import { mySocials } from "@/data/socials";
import { header } from "@/data/header";
import type { CSSProperties } from "react";
import clsx from "clsx";

const fadeInStyle: CSSProperties = {
  animation: "fadeIn 0.5s ease-in-out",
};

export default function Home() {
  const projects = [...allProjects].sort((a, b) => b.coolness - a.coolness);

  return (
    <>
      <section
        style={fadeInStyle}
        className="container m-4 mx-auto px-8 py-12 shadow-xl"
      >
        <div className="grid grid-cols-1 items-center gap-6 md:gap-10 lg:grid-cols-2 lg:gap-12 ">
          <div className="relative mx-auto hidden py-8 lg:inline">
            <Image
              alt="Jason Vlajankov"
              width={400}
              height={400}
              className="pointer-events-none aspect-square select-none overflow-hidden rounded-full border border-gray-200 object-cover object-center transition-colors duration-200 hover:bg-gray-800 hover:text-gray-200 dark:border-slate-700 dark:text-gray-300 dark:hover:bg-gray-200 dark:hover:text-gray-800 lg:order-last"
              src="/images/img.png"
            />
          </div>
          <div className="flex w-full max-w-2xl flex-col justify-center space-y-6 text-center md:max-w-3xl md:text-left lg:mx-0 lg:max-w-[600px]">
            <div className="space-y-3">
              <h2 className="text-balance mx-auto text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:mx-0 md:text-4xl lg:text-4xl xl:text-5xl">
                {header.title}
              </h2>
              <p className="mx-auto break-words text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl md:leading-relaxed lg:mx-0 lg:max-w-[600px] lg:text-lg xl:text-xl">
                {header.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              {mySocials.items.map((social) => (
                <Link
                  key={social.title}
                  style={fadeInStyle}
                  className={clsx(
                    "rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-700  hover:bg-gray-800 hover:text-gray-200 dark:border-slate-700 dark:text-gray-300 dark:hover:bg-gray-200 dark:hover:text-gray-800 md:px-3.5 md:py-1.5",
                    "transition-all duration-300 lg:transform lg:hover:z-10 lg:hover:-translate-y-1 lg:hover:scale-110"
                  )}
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="flex items-center gap-1">
                    {social.icon ? (
                      <social.icon
                        aria-hidden="true"
                        className="h-3 w-3 md:h-4 md:w-4"
                      />
                    ) : null}
                    <span>{social.title}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        style={fadeInStyle}
        className="container m-4 mx-auto px-8 py-12 shadow-xl md:px-12 md:py-24 lg:py-32  "
      >
        <h4 className="my-4 py-4 text-xl font-medium tracking-tighter sm:text-3xl">
          Projects
        </h4>
        <div className="flex flex-col gap-6 lg:grid lg:grid-flow-col lg:gap-8">
          {projects.map((project) => (
            <Card
              key={project._id}
              title={project.title}
              slug={project.slug}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

import { allProjects } from "@/.contentlayer/generated";
import ProjectDetail from "@/components/ProjectDetail";
import { compareDesc } from "date-fns";
import type { CSSProperties } from "react";

const fadeInStyle: CSSProperties = {
  animation: "fadeIn 0.5s ease-in-out",
};

export default function Projects() {
  const projects = [...allProjects].sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <section
      style={fadeInStyle}
      className="container m-4 mx-auto px-8 py-12 shadow-xl md:px-12 md:py-24 lg:py-32"
    >
      <div className="flex flex-col gap-6">
        <h1 className="pb-2 pt-4 text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Projects
        </h1>
        {projects.map((project) => (
          <div key={project._id} style={fadeInStyle}>
            <ProjectDetail {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

import { allProjects } from "@/.contentlayer/generated";
import ProjectDetail from "@/components/ProjectDetail";
import { compareDesc } from "date-fns";
import { clsx } from "clsx";

export default function Projects() {
  const projects = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  let myItems;
  return (
    <div>
      <section className="bg-gray-100 mx-auto container px-8 md:px-12 py-12 md:py-24 lg:py-32  shadow-xl m-4">
        <div
          className="flex-row items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_900px]">
          <h1
            className="pb-8 pt-4 text-2xl font-bold leading-[1] tracking-tighter sm:text-4xl md:text-5xl"
            style={{
              animation: `fadeIn 0.5s ease-in-out`
            }}>
            Projects
          </h1>
          {projects.map((project, index) => <div
              key={index}
              style={{
                animation: `fadeIn 0.5s ease-in-out`
              }}
            >
              <ProjectDetail key={project._id} {...project} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

import { Project } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import clsx from "clsx";

export default function ProjectDetail(project: Project) {
  return (
    <article
      className={clsx(
        "mb-4 scroll-px-1.5 scroll-py-1 gap-6 px-10 py-5 ",
        "duration-400 transition-all  lg:transform lg:hover:z-10 lg:hover:-translate-y-1 lg:hover:scale-110 ",
        "hover:bg-gray-800  hover:shadow-2xl dark:hover:bg-gray-200",
        "hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-600"
      )}
    >
      <Link href={project.slug}>
        <div className="flex items-center justify-between ">
          <h2 className="font-bold">{project.title}</h2>
          <time dateTime={project.date} className="m-2 text-xs ">
            {format(parseISO(project.date), "LLLL d, yyyy")}
          </time>
        </div>
        {project.description ? (
          project.description?.length >= 100 ? (
            <p className="italic text-sm leading-relaxed tracking-tight ">
              {project.description.slice(0, 100) + "..."}
            </p>
          ) : (
            <p className="italic text-sm leading-relaxed tracking-tight ">
              {project.description}
            </p>
          )
        ) : null}
      </Link>
    </article>
  );
}

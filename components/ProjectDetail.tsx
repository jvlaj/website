import { Project } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function ProjectDetail(project: Project) {
  return (
    <article className="mb-4 gap-6 px-10 hover:underline">
      <Link href={project.slug}>
        <div className="flex items-center justify-between">
          <h2 className="font-bold">{project.title}</h2>
          <time dateTime={project.date} className="m-2 text-xs text-gray-600">
            {format(parseISO(project.date), "LLLL d, yyyy")}
          </time>
        </div>
        {project.description ? (
          project.description?.length >= 100 ? (
            <p className="font-italic text-sm leading-relaxed tracking-tight text-slate-700">
              {project.description.slice(0, 100) + "..."}
            </p>
          ) : (
            <p className="font-italic text-sm leading-relaxed tracking-tight text-slate-700">
              {project.description}
            </p>
          )
        ) : null}
      </Link>
    </article>
  );
}

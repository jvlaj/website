import { Project } from "@/.contentlayer/generated";

import Link from "next/link";

export default function ProjectDetail(project: Project) {
  return (
    <article className="mb-4 gap-6 px-10 hover:underline">
      <Link href={project.slug}>
        <h2 className="font-bold">{project.title}</h2>
        {project.description ?
          ((project.description?.length >= 100) ? (
            <p className="font-italic text-sm">{project.description.slice(0, 100) + "..."}</p>
          ) : (
            <p className="font-italic text-sm">{project.description}</p>
          ))
          :(null)}
      </Link>
    </article>
  );
}

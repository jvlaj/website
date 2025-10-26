import { notFound } from "next/navigation";
import { allProjects } from "@/.contentlayer/generated";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface ProjectProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams(params: ProjectProps["params"]) {
  const slug = params.slug.join("/");
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (!project) {
    return null;
  }

  return project;
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  return {
    title: `jvlaj | ${project.title}`,
    description: project.description,
  };
}

export async function generateStaticParams(): Promise<
  ProjectProps["params"][]
> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }));
}

export default async function ProjectPage({ params }: ProjectProps) {
  const project = await getProjectFromParams(params);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <section className="container mx-auto shadow-xl md:px-12 md:py-16 lg:py-24">
        <div className="">
          <article className="prose mx-auto flex-row items-center justify-center gap-6 py-6  dark:prose-invert lg:prose-xl lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_900px]">
            <h1 className="mb-2 text-gray-900 dark:text-gray-100">
              {project.title}
            </h1>
            {project.description && (
              <p className="mt-0 text-xl text-slate-700 dark:text-slate-300">
                {project.description}
              </p>
            )}
            <hr className="my-4" />
            <Mdx code={project.body.code} />
          </article>
        </div>
      </section>
    </div>
  );
}

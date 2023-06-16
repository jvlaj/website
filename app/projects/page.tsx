import {allProjects} from "@/.contentlayer/generated";
import ProjectDetail from "@/components/ProjectDetail";
import { compareDesc } from 'date-fns'

export default function Projects() {
    const projects = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    return (
        <div>
            <h1 className="pb-8 pt-4 text-2xl font-bold leading-[1] tracking-tighter hover:animate-pulse sm:text-4xl md:text-5xl">
                Projects
            </h1>
            <div className="justify-evenly leading-relaxed tracking-tight text-slate-700">
                {projects.map((project) => {
                    return <ProjectDetail key={project._id} {...project} />;
                })}
            </div>
        </div>
    );
}

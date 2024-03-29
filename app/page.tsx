import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import {clsx} from "clsx";
import {allPosts, allProjects} from "contentlayer/generated";
import {compareDesc} from "date-fns";
import ProjectDetail from "@/components/ProjectDetail";

export default async function Home() {
    const projects = allProjects.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    const myItems = [
        {
            item: (
                <div className="">
                    <h1 className="fadeIn 2s pb-8 pt-4 text-2xl font-bold leading-[1] tracking-tighter ease-in-out hover:animate-pulse sm:text-4xl md:text-5xl">
                        Hello, friend.
                    </h1>
                    <p className="justify-evenly pb-6 leading-relaxed text-slate-700">
                        I&apos;m <span className="font-bold">Jason,</span> a
                        software guy based in{" "}
                        <span className="font-bold">Melbourne </span>(Australia), currently
                        seeking software opportunities.

                    </p>
                    <p>
                        You&apos;re on my website.
                    </p>
                    <hr className="m-8"/>
                </div>
            ),
            props: {},
        },
        {
            item: (
                <div className="w-full">
                    <Link
                        href={"/projects"}
                        className={clsx(
                            "rounded-md text-sm font-medium text-slate-800 hover:underline hover:opacity-50 hover:transition-all",
                            "flex-grow"
                        )}
                    >
                        <h3 className="pb-2 pt-2 text-xl font-bold leading-[1] tracking-tighter sm:text-lg md:text-2xl">
                            Recent Projects:
                        </h3>
                    </Link>
                    <div className="justify-evenly leading-relaxed tracking-tight text-slate-700">
                        {projects.slice(0, 1).map((project) => {
                            return <ProjectDetail key={project._id} {...project} />;
                        })}
                    </div>
                    <hr className="m-8"/>
                </div>
            ),
            props: {},
        },
        {
            item: (
                <div className="w-full border-black bg-black">
                    <ContactForm className="bg-white"/>
                </div>
            ),
            props: {},
        },
    ];

    return (
        <div>
            {/* {myItems[0].item} */}
            {myItems.slice(0).map((item, index) => (
                <div
                    key={index}
                    style={{
                        animation: `fadeIn 0.5s ease-in-out`,
                    }}
                >
                    {item.item}
                </div>
            ))}
        </div>
    );
}

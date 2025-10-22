import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import Link from "next/link";
import { clsx } from "clsx";
import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
// import ProjectDetail from "@/components/ProjectDetail";
import Card from "@/components/Card";
import { mySocials } from "@/data/socials";
import Image from "next/image";
import { header } from "@/data/header";

export default async function Home() {
  const projects = allProjects.sort((a, b) => b.coolness - a.coolness);

  const myItems = [
    {
      item: (
        <div>
          <section className="container m-4 mx-auto bg-gray-100 px-8 py-12 shadow-xl md:px-12  md:py-24 lg:py-32">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div className="relative mx-auto hidden py-8 md:py-0 lg:inline">
                <Image
                  alt="Image"
                  width={400}
                  height={400}
                  objectFit="cover"
                  className="aspect-square overflow-hidden rounded-full object-cover object-center lg:order-last"
                  src="/images/img.png"
                />
                <div className="mt-4 flex  justify-center">
                  {mySocials.items.map((social, key, index) => (
                    <Link
                      key={key}
                      id="mail"
                      className="px-4 py-2 text-gray-800 hover:bg-gray-800 hover:text-gray-100"
                      href={social.url}
                      rel="noopener"
                    >
                      <p className="row flex flex-shrink-0">
                        <span className="px-1">
                          {social.icon ? (
                            <social.icon
                              className="m-auto text-center"
                              size="18"
                            />
                          ) : (
                            social.title
                          )}
                        </span>
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    {header.title}
                  </h2>
                  <p className="max-w-[600px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {header.description}
                  </p>
                </div>
                <div className="flex flex-col min-[400px]:flex-row">
                  <Link
                    className="duration-400 mx-2 inline-flex h-9  items-center justify-center overflow-hidden border-2 border-gray-800 px-4 py-4  transition-all hover:bg-gray-900 hover:text-gray-100 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 lg:transform lg:hover:z-10 lg:hover:-translate-y-1 lg:hover:scale-110  "
                    href="resume.pdf"
                  >
                    View Resume
                  </Link>
                  <Link
                    className="duration-400 mx-2 inline-flex h-9    items-center justify-center overflow-hidden border-2 border-gray-800 px-4 py-4  transition-all hover:bg-gray-900 hover:text-gray-100 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 lg:transform lg:hover:z-10 lg:hover:-translate-y-1 lg:hover:scale-110"
                    href="#contact"
                    scroll={true}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      ),
      props: {},
    },
    {
      item: (
        <section
          id="projects"
          className="container m-4 mx-auto px-8 py-12 shadow-xl md:px-12  md:py-24 lg:py-32"
        >
          <h4 className="my-4 py-4 text-xl font-medium tracking-tighter sm:text-3xl">
            projects
          </h4>
          <div className="flex-row items-center justify-between gap-6 lg:grid lg:grid-flow-col ">
            {projects.map((project) => {
              return (
                <Card
                  key={project._id}
                  title={project.title}
                  _slug={project.slug}
                  description={project.description}
                  props={{ ...project }}
                />
              );
            })}
          </div>
        </section>
      ),
      props: {},
    },
    //   {
    //     item: (
    //       <section
    //         className="container m-4 mx-auto bg-gray-100 px-8 py-12 shadow-xl md:px-12 md:py-24 lg:py-32
    //       "
    //       >
    //         <div id="contact" className="">
    //           <div className="max-[400px] flex flex-row gap-2">
    //             <h4 className="my-4 py-4 text-xl font-medium tracking-tighter sm:text-3xl">
    //               contact
    //             </h4>
    //           </div>
    //           <ContactForm className="bg-gray-100" />
    //         </div>
    //       </section>
    //     ),
    //     props: {},
    //   },
  ];

  return (
    <div className={clsx("")}>
      {myItems.map((item, index) => (
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

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import Link from "next/link";
import { clsx } from "clsx";
import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
// import ProjectDetail from "@/components/ProjectDetail";
import Card from "@/components/Card";
import { mySocials } from "@/config/socials";
import Image from "next/image";

export default async function Home() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const myItems = [
    {
      item: (
        <div>
          <section className="bg-gray-100 mx-auto container px-8 md:px-12 py-12 md:py-24 lg:py-32  shadow-xl m-4">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_900px]">
              <div className="mx-auto py-8 md:py-0 hidden lg:inline relative">
                <Image
                  alt="Image"
                  width={400}
                  height={400}
                  objectFit="cover"
                  className="aspect-square overflow-hidden rounded-full object-cover object-center lg:order-last"
                  src="/images/img.png"
                />
                <div className="flex justify-center  mt-4">
                  {mySocials.items.map((social, key, index) => (
                    <Link
                      key={key}
                      id="mail"
                      className="px-4 py-2 text-gray-800 hover:text-gray-100 hover:bg-gray-800"
                      href={social.url}
                      rel="noopener"
                    >
                      <p className="row flex flex-shrink-0">
                        <span className="px-1">
                  {social.icon ? <social.icon className="text-center m-auto" size="18" /> : social.title}
                </span>
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Building the future of Web</h2>
                  <p
                    className="max-w-[600px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&#39;m a software engineer passionate about creating elegant solutions to complex problems. I love
                    working with interesting and new technologies and am always looking for new opportunities to learn and
                    grow.
                  </p>
                </div>
                <div className="flex flex-col min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-9 items-center justify-center  hover:bg-gray-900 hover:text-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  transition-all duration-400 overflow-hidden lg:transform lg:hover:scale-110 hover:shadow-2xl lg:hover:z-10 lg:hover:-translate-y-1 px-4 py-4 border-2 mx-2 border-gray-800  "
                    href="resume.pdf"
                  >
                    View Resume
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center    hover:bg-gray-900 hover:text-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  transition-all duration-400 overflow-hidden lg:transform lg:hover:scale-110 hover:shadow-2xl lg:hover:z-10 lg:hover:-translate-y-1 px-4 py-4 mx-2 border-2 border-gray-800"
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
      props: {}
    },
    {
      item: (
        <section id="projects"
                 className="mx-auto container px-8 md:px-12 py-12 md:py-24 lg:py-32  shadow-xl m-4">
          <h4 className="text-xl font-medium tracking-tighter py-4 my-4 sm:text-3xl">recent
            projects</h4>
          <div
            className="flex-row justify-between lg:grid lg:grid-flow-col items-center gap-6 ">
            {projects.map((project) => {
              return <Card key={project._id} title={project.title} _slug={project.slug}
                           description={project.description} props={{ ...project }} />;
            })}
          </div>
        </section>
      ),
      props: {}
    },
    {
      item: (
        <section className="mx-auto container px-8 md:px-12 py-12 md:py-24 lg:py-32 bg-gray-100 shadow-xl m-4
        ">
          <div id="contact" className="">
            <div className="flex flex-row gap-2 max-[400px]">
              <h4 className="text-xl font-medium tracking-tighter py-4 my-4 sm:text-3xl">contact</h4>
            </div>
            <ContactForm className="bg-gray-100" />
          </div>
        </section>
      ),
      props: {}
    }
  ];

  return <div className={clsx("")}>
    {myItems.map((item, index) => <div
      key={index}
      style={{
        animation: `fadeIn 0.5s ease-in-out`
      }}
    >
      {item.item}
    </div>)}
  </div>;
}

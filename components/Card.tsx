import { Icons } from "./Icons";
import clsx from "clsx";
import { Icon, LucideIcon } from "lucide-react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import Image from "next/image";

interface Props {
  title: string,
  description?: string,
  img?: string,
  _slug: string,
  icon?: LucideIcon,
  props: any
}

export default function Card(props: Props) {
  return (
    <Link
      className="mx-2 group relative inline-flex m-2 items-center justify-center text-sm font-medium hover:bg-gray-900 hover:text-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  transition-all duration-400 overflow-hidden lg:transform lg:hover:scale-110 hover:shadow-2xl lg:hover:z-10 lg:hover:-translate-y-1 px-4 py-4 "
      href={`${props._slug}`}>
      <div
        className="group-hover:text-gray-100"
      >
        {props.img ?
          <Image
            alt={props.title}
            src={props.img}
            height={400}
            width={400} /> : null}
        <h3
          className="group-hover:text-gray-100 py-2 text-xl text-gray-800 tracking-tighter md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-bold justify-between">
          {props.title}
        </h3>
        {/*<time dateTime={props.props.date} className="text-xs text-gray-600 group-hover:text-gray-300 ">*/}
        {/*  {format(parseISO(props.props.date), "LLLL d, yyyy")}*/}
        {/*</time>*/}
        {props.description ? (
          props.description?.length >= 100 ? (
            <p
              className="group-hover:text-gray-300 text-gray-600 text-base/tight">
              {props.description.slice(0, 100) + "..."}
            </p>
          ) : (
            <p
              className="group-hover:text-gray-300 text-gray-600 text-base/tight">
              {props.description}
            </p>
          )
        ) : null}
      </div>
    </Link>
  );
}

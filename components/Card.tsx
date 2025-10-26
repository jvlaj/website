import clsx from "clsx";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import Image from "next/image";

interface CardProps {
  title: string;
  description?: string;
  img?: string;
  date?: string;
  slug: string;
}

export default function Card({
  title,
  description,
  img,
  date,
  slug,
}: CardProps) {
  return (
    <Link
      className={clsx(
        "group relative m-2 inline-flex items-center justify-center overflow-hidden px-4 py-4 text-sm font-medium",
        "transition-all duration-300 lg:transform lg:hover:z-10 lg:hover:-translate-y-1 lg:hover:scale-110",
        "hover:bg-gray-800 hover:text-gray-300 hover:shadow-2xl dark:hover:bg-gray-200 dark:hover:text-gray-600 "
      )}
      href={slug}
    >
      <div className="">
        {img ? <Image alt={title} src={img} height={400} width={400} /> : null}
        <h3
          className={clsx(
            "justify-between py-2 text-xl font-bold tracking-normal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
            "group-hover:text-gray-200 dark:group-hover:text-gray-800"
          )}
        >
          {title}
        </h3>
        {date && (
          <time
            dateTime={date}
            className="text-xs text-gray-600 group-hover:text-gray-300 dark:text-gray-400 dark:group-hover:text-gray-600"
          >
            {format(parseISO(date), "LLLL d, yyyy")}
          </time>
        )}
        {description ? (
          description.length >= 100 ? (
            <p className="text-base/tight text-gray-600 group-hover:text-gray-300 dark:text-gray-300 dark:group-hover:text-gray-600">
              {description.slice(0, 100) + "..."}
            </p>
          ) : (
            <p className="text-base/tight text-gray-600 group-hover:text-gray-300 dark:text-gray-300 dark:group-hover:text-gray-600">
              {description}
            </p>
          )
        ) : null}
      </div>
    </Link>
  );
}

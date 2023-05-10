// import { Post } from "@/types";
import { Post } from "@/.contentlayer/generated";


import Link from "next/link";

export default function PostDetail(post: Post) {
  return (
    <article className="mb-4 gap-6 px-10 hover:underline">
      <Link href={post.slug}>
        <h2 className="font-bold">{post.title}</h2>
        {post.description ?
          ((post.description?.length >= 100) ? (
            <p className="font-italic text-sm">{post.description.slice(0, 100) + "..."}</p>
          ) : (
            <p className="font-italic text-sm">post.description</p>
          ))
          :(null)}
      </Link>
    </article>
  );
}

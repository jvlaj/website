import PostDetail from "@/components/PostDetail";
import { allPosts } from "@/.contentlayer/generated";

export default function Posts() {
  return (
    <>
      <h1 className="pb-8 pt-4 text-2xl font-bold leading-[1] tracking-tighter hover:animate-pulse sm:text-4xl md:text-5xl">
        Posts
      </h1>
      <div className="justify-evenly leading-relaxed tracking-tight text-slate-700">
        {allPosts.map((post) => {
          return <PostDetail key={post._id} {...post} />;
        })}
      </div>
    </>
  );
}

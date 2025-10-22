import Link from "next/link";
import { mySocials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="container m-8 mx-auto mt-8 flex max-w-[600px] flex-col items-center justify-center">
      <div className="mb-4 flex justify-center">
        {mySocials.items.map((social, key, index) => (
          <Link
            key={key}
            className="px-4 py-2 text-gray-800 hover:bg-gray-800 hover:text-gray-100"
            href={social.url}
            rel="noopener"
          >
            <p className="row flex flex-shrink-0">
              <span className="px-1">{social.title}</span>
            </p>
          </Link>
        ))}
      </div>
    </footer>
  );
}

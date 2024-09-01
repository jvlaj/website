import Link from "next/link";
import { mySocials } from "@/config/socials";

export default function Footer() {
  return (
    <footer
      className="max-w-[600px] mx-auto container mt-8 justify-center items-center flex flex-col m-8">
      <div className="flex justify-center mb-4">
        {mySocials.items.map((social, key, index) => (
          <Link
            key={key}
            className="px-4 py-2 text-gray-800 hover:text-gray-100 hover:bg-gray-800"
            href={social.url}
            rel="noopener"
          >
            <p className="row flex flex-shrink-0">
              <span className="px-1">
                  {social.title}
                </span>
            </p>
          </Link>
        ))}
      </div>
    </footer>
  );
}

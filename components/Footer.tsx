import Link from "next/link";
import { mySocials } from "@/config/socials";

export default function Footer() {
  return (
    <footer className="flex h-24 w-full flex-col items-center justify-center border-t -bold border-slate-200 mt-8">
      <div className="flex w-full justify-between px-4">
        {mySocials.items.map((social, index) => (
          <div key={index} className="px-4 py-2 text-sm text-slate-700">
            <Link
              className="hover:underline"
              href={social.url}
              rel="noopener"
            >
              <p className="row flex flex-shrink-0 border-b-2 border-transparent hover:border-current">
                {/* <span className="hidden lg:flex">{social.title}</span> */}

                <span className="px-1">
                  {social.icon ? <social.icon className="text-center m-auto" size="18" /> : social.title}
                </span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
}

import Link from "next/link";
import { mySocials } from "@/config/socials";

export default function Footer() {
  return (
    <footer className="flex h-24 w-full flex-col items-center justify-center border-t border-slate-200">
      <div className="flex items-center justify-center gap-4">
        {mySocials.items.map((social, index) => (
          <div key={index} className="px-4 py-2 text-sm text-slate-700">
            <Link
              className="hover:underline"
              href={social.url}
              target="_blank"
              rel="noopener"
            >
              <p className="row flex">
                <span className="px-1"> {social.title}</span>
                <span className="px-1">
                  {social.icon ? <social.icon size="18" /> : null}
                </span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
}

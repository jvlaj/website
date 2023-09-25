"use client";

import { NavItems } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";
import clsx from "clsx";

export default function NavBar({ items }: NavItems) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="container mx-auto mb-6 flex items-center justify-between">
      <div className="flex w-3/5 flex-grow justify-between">
        {items.map((item, index) => (
          <Link
            key={index}
            href={!item.disabled ? item.url : "#"}
            className={clsx(
              "rounded-md text-sm font-medium text-slate-800 hover:underline hover:opacity-50 hover:transition-all",
              item.disabled && "cursor-not-allowed opacity-50",
              path === item.url && "underline",
              "flex-grow text-center"
            )}
          >
            {item.title === "Home" ? (
              // Render the chevron icon if the item is "Home"
              <span
                className={clsx(
                  "inline-block flex-shrink-0 border-b-2 border-transparent hover:border-current",
                  path == "/" && "border-current"
                )}
              >
                <Icons.chevron />
              </span>
            ) : (
              // Otherwise, render the item title
              <span>{item.title}</span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}

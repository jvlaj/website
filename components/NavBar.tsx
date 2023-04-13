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
    <nav className="flex items-center justify-between px-6 py-3">
      <div>
        <Link href="/">
          <Icons.chevron />
        </Link>
      </div>
      <div className="md:block">
        {items.map((item, index) => (
          <Link
            key={index}
            href={!item.disabled ? item.url : "#"}
            className={clsx(
              "rounded-md px-6 py-3 text-sm font-medium text-slate-800 hover:transition-all hover:opacity-50 hover:underline",
              item.disabled && "cursor-not-allowed opacity-50",
              path === item.url &&
              "underline"
            )}
          >
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

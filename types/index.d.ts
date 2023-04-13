import { LucideIcon } from "lucide-react";

export type NavItems = {
  items: NavItem[];
}

export type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon
  disabled?: boolean;
}

import { LucideIcon } from "lucide-react";

export type Skill = {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export type Skills = {
  items: Skill[];
}
export type NavItems = {
  items: NavItem[];
}

export type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon
  disabled?: boolean;
}

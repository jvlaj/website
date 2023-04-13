import { NavItems } from "@/types";

export const siteNav: NavItems = {
  items: [
    {
      title: "Posts",
      url: "/posts",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "About",
      url: "/",
    },
    {
      title: "nuke.sys",
      url: "/nuke",
      disabled: true,
    },
  ],
};

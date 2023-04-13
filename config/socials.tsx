import { NavItems } from "@/types";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const mySocials: NavItems = {
  items: [
    {
      title: "twitter",
      url: "https://twitter.com/jvlaj",
      icon: Twitter,
    },
    {
      title: "github",
      url: "https://github.com/jvlaj",
      icon: Github,
    },
    {
      title: "linkedin",
      url: "https://linkedin.com/in/jvlaj",
      icon: Linkedin,
    },
    {
      title: "email",
      url: "mailto:jvlaj@proton.me",
      icon: Mail,
    },
  ],
};

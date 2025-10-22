import { NavItems } from "@/types";
import { Github, Linkedin, Mail, Twitter, FileText,} from "lucide-react";

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
      url: "mailto:jvlajankov@gmail.com",
      icon: Mail,
    },
    // {
    //   title: "resume",
    //   url: "/resume.pdf",
    //   icon: FileText
    // }
  ],
};

import { Github, Linkedin, Mail } from "lucide-react";
import publicEmail from "./contactData";

export const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${publicEmail}`,
    color: "hover:text-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/encandia/",
    color: "hover:text-primary",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/candiath",
    color: "hover:text-primary",
  },
];
export default socialLinks;
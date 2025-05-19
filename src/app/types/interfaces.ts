import { LucideIcon } from "lucide-react";

export interface SocialLink {
  href: string;
  icon: LucideIcon;
}

export interface NavLink extends SocialLink {
  title: string;
}

export interface Statistic {
  label: string;
  value: number;
}

export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
  _id: string;
  label: string;
  value: number;
  category: SkillCategory;
}

export interface TabItem {
  value: SkillCategory;
  icon: LucideIcon;
  label: string;
}
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string; 
    _type: "reference";
  };
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  images: SanityImage[];
  tags: string[];
  demoLink: string;
  githubLink: string;
  publishedAt: Date;
  isResponsive: boolean;
}
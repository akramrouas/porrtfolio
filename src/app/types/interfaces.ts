import { LucideIcon } from "lucide-react";

interface SanityReference {
  _type: 'reference';
  _ref: string;
}

interface SanityAsset {
  _type: 'image' | 'file';
  _id: string;
  url?: string;
}

export interface SanityImage {
  _type: 'image';
  asset: SanityReference | SanityAsset;
  alt?: string;
  caption?: string;
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
}

interface SanityImageHotspot {
  _type: 'sanity.imageHotspot';
  x: number;
  y: number;
  height: number;
  width: number;
}

interface SanityImageCrop {
  _type: 'sanity.imageCrop';
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface SocialLink {
  href: string;
  icon: LucideIcon;
  ariaLabel?: string;
}

export interface NavLink extends SocialLink {
  title: string;
  isActive?: boolean;
}

export interface Statistic {
  label: string;
  value: number;
  unit?: string;
}

export type SkillCategory = "frontend" | "backend" | "tools" | string;

export interface Skill {
  _id: string;
  label: string;
  value: number;
  category: SkillCategory;
  icon?: LucideIcon;
}

export interface TabItem {
  value: SkillCategory;
  icon: LucideIcon;
  label: string;
  count?: number;
}

export interface Project {
  _id: string;
  title: string;
  slug?: string;
  description: string;
  images: SanityImage[];
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  publishedAt: string;
  isResponsive: boolean;
  featured?: boolean;
}
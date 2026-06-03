import type { Tag } from "./tag";

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: Tag[];
  featured: boolean;
  year: number;
  repoUrl?: string;
  figmaUrl?: string;
  liveUrl?: string;
};

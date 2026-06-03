import type { Tag } from "./tag";

export type Project = {
  id: string;
  title: string;
  titleCard: string;
  description: string;
  thumbnail: string;
  tags: Tag[];
  featured: boolean;
  year: number;
  repoUrl?: string;
  figmaUrl?: string;
  liveUrl?: string;
};

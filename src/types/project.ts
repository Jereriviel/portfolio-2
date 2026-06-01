export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  featured: boolean;
  repoUrl?: string;
  figmaUrl?: string;
  liveUrl?: string;
};

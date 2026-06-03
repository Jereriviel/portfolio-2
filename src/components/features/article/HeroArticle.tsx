import type { Project } from "../../../types/project";
import { Icon } from "@iconify/react";

type HeroArticleProps = {
  project: Project;
};

const HeroArticle = ({ project }: HeroArticleProps) => {
  return (
    <section className="flex flex-col gap-8 py-8 sm:py-10 md:py-12">
      <h1 className="font-display text-accent text-center text-[40px] break-all uppercase sm:text-5xl md:text-6xl">
        {project.title}
      </h1>
      <img src={project.thumbnail} alt="Thumbnail" />
      <div className="flex justify-center gap-8 uppercase">
        <a className="link" target="blank" href={project.liveUrl}>
          <Icon icon="lucide:globe" />
          <span>Live</span>
        </a>
        <a className="link" target="blank" href={project.repoUrl}>
          <Icon icon="mdi:github" />
          <span>Repo</span>
        </a>
        <a className="link" target="blank" href={project.figmaUrl}>
          <Icon icon="solar:figma-bold" />
          <span>Figma</span>
        </a>
      </div>
    </section>
  );
};

export default HeroArticle;

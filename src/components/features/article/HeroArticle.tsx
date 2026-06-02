import type { Project } from "../../../types/project";

type HeroArticleProps = {
  project: Project;
};

const HeroArticle = ({ project }: HeroArticleProps) => {
  return (
    <section className="py-8 sm:py-10 md:py-12">
      <h1 className="font-display text-accent text-center text-[40px] break-all uppercase sm:text-5xl md:text-6xl">
        {project.title}
      </h1>
    </section>
  );
};

export default HeroArticle;

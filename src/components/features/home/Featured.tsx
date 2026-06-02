import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../../data/projects";

const Featured = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="flex flex-col gap-8 py-8 sm:gap-10 sm:py-10 md:gap-12 md:py-12">
      <div className="flex items-center gap-4">
        <hr className="w-full text-white" />
        <div className="shrink-0">
          <h2 className="font-display text-2xl lowercase sm:text-3xl md:text-4xl">
            Featured Projects
          </h2>
        </div>

        <hr className="w-full text-white" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Featured;

import ProjectCard from "../../cards/ProjectCard";
import { projects } from "../../../data/projects";
import Heading from "../../ui/Heading";

const Featured = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="flex w-full flex-col gap-16 py-8 sm:gap-10 sm:py-10 md:gap-24 md:py-12">
      <Heading heading="Featured Projects" />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Featured;

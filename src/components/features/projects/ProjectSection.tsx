import ProjectCard from "../../ui/cards/ProjectCard";
import { projects } from "../../../data/projects";
import Heading from "../../ui/Heading";

type ProjectSectionProps = {
  year: number;
};

const ProjectSection = ({ year }: ProjectSectionProps) => {
  const filteredProjects = projects.filter((project) => project.year === year);

  return (
    <section className="flex w-full flex-col gap-16 py-8 sm:py-10 md:gap-24 md:py-12">
      <Heading heading={`Noroff Year ${year}`} />
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

import HeroProjects from "../components/features/projects/HeroProjects";
import ProjectSection from "../components/features/projects/ProjectSection";

const ProjectsPage = () => {
  return (
    <>
      <section className="bottom-0 mb-0 w-full px-4 pt-4 pb-8 sm:px-8">
        <HeroProjects />
        <ProjectSection year={2} />
        <ProjectSection year={1} />
      </section>
    </>
  );
};

export default ProjectsPage;

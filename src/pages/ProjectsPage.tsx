import HeroProjects from "../components/features/projects/HeroProjects";
import ProjectSection from "../components/features/projects/ProjectSection";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../utils/ScrollToTop";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Work</title>
        <meta name="description" content="See all my projects." />
      </Helmet>
      <HeroProjects />
      <ScrollToTop />
      <ProjectSection year={2} />
      <ProjectSection year={1} />
    </>
  );
};

export default ProjectsPage;

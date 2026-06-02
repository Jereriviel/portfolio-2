import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import HeroArticle from "../components/features/article/HeroArticle";

const ArticlePage = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return "<p>No project found</p>";
  }

  return (
    <>
      <section className="bottom-0 mb-0 w-full px-4 pt-4 pb-8 sm:px-8">
        <HeroArticle project={project} />
      </section>
    </>
  );
};

export default ArticlePage;

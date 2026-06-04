import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import HeroArticle from "../components/features/article/HeroArticle";
import articleContent from "../utils/articleContent";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../utils/ScrollToTop";

const ArticlePage = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return "<p>No project found</p>";
  }

  const ContentComponent = articleContent[id as keyof typeof articleContent];

  const pageTitle = project
    ? `Portfolio | ${project.title}`
    : "Portfolio | Project";

  const pageDescription =
    project.description.slice(0, 160) || "Look closer at one of my projects.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <ScrollToTop />
      <HeroArticle project={project} />
      {ContentComponent && <ContentComponent />}
    </>
  );
};

export default ArticlePage;

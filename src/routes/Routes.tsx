import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ArticlePage from "../pages/ArticlePage";
import ProjectsPage from "../pages/ProjectsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

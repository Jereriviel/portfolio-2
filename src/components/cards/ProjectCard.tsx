import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { Icon } from "@iconify/react";
import CardTag from "../ui/tags/CardTag";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="bg-gradient flex flex-col justify-between gap-8 rounded-xl border border-white p-4 sm:p-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg uppercase sm:text-xl">
          <span>{"< "}</span>
          {project.titleCard}
          <span>{" >"}</span>
        </h2>
        <img src={project.thumbnail} alt="Thumbnail" />
        <p className="">
          <span>{"{ "}</span>
          {project.description}
          <span>{" }"}</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg uppercase"> {"< Built_with >"}</h3>
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <CardTag key={tag} tag={tag} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Link className="btn_cta btn uppercase" to={`/article/${project.id}`}>
          {"< See_Project >"}
        </Link>
        <div className="flex justify-between">
          <a className="btn btn_link" target="blank" href={project.liveUrl}>
            <Icon icon="lucide:globe" />
            <span>Live</span>
          </a>
          <a className="btn btn_link" target="blank" href={project.repoUrl}>
            <Icon icon="mdi:github" />
            <span>Repo</span>
          </a>
          <a className="btn btn_link" target="blank" href={project.figmaUrl}>
            <Icon icon="solar:figma-bold" />
            <span>Figma</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

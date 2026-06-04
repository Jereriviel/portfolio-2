import type { ReactNode } from "react";
import { Icon } from "@iconify/react";

type TechCardProps = {
  heading: string;
  children: ReactNode;
  iconType: "frontend" | "state" | "ui" | "form" | "test";
};

const TechCard = ({ heading, children, iconType }: TechCardProps) => {
  const iconMap = {
    frontend: "hugeicons:web-design-02",
    state: "gala:data",
    ui: "iconoir:design-nib",
    form: "fluent:form-24-regular",
    test: "tabler:browser-check",
  };

  return (
    <article className="card bg-gradient-transparent gap-6">
      <div className="flex gap-4">
        <Icon icon={iconMap[iconType]} style={{ fontSize: "24px" }} />
        <h3 className="text-lg uppercase">{heading}</h3>
      </div>
      <ul className="flex flex-col gap-4 pl-5.5">{children}</ul>
    </article>
  );
};

export default TechCard;

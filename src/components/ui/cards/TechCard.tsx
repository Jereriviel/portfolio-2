import type { ReactNode } from "react";

type TechCardProps = {
  heading: string;
  children: ReactNode;
};

const TechCard = ({ heading, children }: TechCardProps) => {
  return (
    <article className="card bg-gradient-transparent gap-6">
      <h3 className="text-lg uppercase">{heading}</h3>
      <ul className="flex flex-col gap-4">{children}</ul>
    </article>
  );
};

export default TechCard;

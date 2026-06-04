import type { ReactNode } from "react";
import Heading from "../../ui/Heading";

type TechSectionProps = {
  children: ReactNode;
};

const TechSection = ({ children }: TechSectionProps) => {
  return (
    <section className="flex w-full flex-col gap-16 py-8 sm:py-10 md:gap-24 md:py-12">
      <Heading heading="Technologies" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </section>
  );
};

export default TechSection;

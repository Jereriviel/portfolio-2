import type { ReactNode } from "react";
import Heading from "../../ui/Heading";

type TextSectionProps = {
  heading: string;
  children: ReactNode;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
};

const TextSection = ({
  heading,
  children,
  imageUrl,
  imageAlt,
  reverse,
}: TextSectionProps) => {
  return (
    <section className="flex w-full flex-col gap-8 py-8 sm:gap-10 sm:py-10 md:gap-12 md:py-12">
      <Heading heading={heading} />
      <div
        className={`flex flex-col gap-8 lg:gap-12 xl:flex-row ${
          reverse ? "xl:flex-row-reverse" : ""
        }`}
      >
        <div>
          <img
            src={imageUrl}
            alt={imageAlt}
            className="aspect-5/3 rounded-lg object-cover object-top lg:max-w-150"
          />
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:text-lg lg:flex-1">
          {children}
        </div>
      </div>
    </section>
  );
};

export default TextSection;

import type { ReactNode } from "react";

type TextSectionProps = {
  heading: string;
  children: ReactNode;
  imageUrl: string;
  imageAlt: string;
};

const TextSection = ({
  heading,
  children,
  imageUrl,
  imageAlt,
}: TextSectionProps) => {
  return (
    <section className="flex w-full flex-col gap-8 py-8 sm:gap-10 sm:py-10 md:gap-12 md:py-12">
      <div className="flex items-center gap-4">
        <hr className="w-full text-white" />
        <div className="shrink-0">
          <h2 className="font-display text-xl lowercase sm:text-2xl md:text-3xl">
            {heading}
          </h2>
        </div>
        <hr className="w-full text-white" />
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        <div>
          <img src={imageUrl} alt={imageAlt} className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:text-lg lg:flex-1">
          {children}
        </div>
      </div>
    </section>
  );
};

export default TextSection;

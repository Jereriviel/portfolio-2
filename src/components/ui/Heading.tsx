type HeadingProps = {
  heading: string;
};

const Heading = ({ heading }: HeadingProps) => {
  return (
    <div className="flex items-center gap-4">
      <hr className="w-full text-white/50" />
      <div className="shrink-0">
        <h2 className="font-display text-xl lowercase sm:text-2xl md:text-3xl">
          {heading}
        </h2>
      </div>
      <hr className="w-full text-white/50" />
    </div>
  );
};

export default Heading;

const HeroHome = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12">
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
        <p className="text-xl uppercase md:text-2xl">
          {"< Welcome_to_my_portfolio >"}
        </p>
        <h1 className="font-display text-accent text-center text-[40px] uppercase sm:text-5xl md:text-6xl">
          Carina M. Pedersen
        </h1>
        <p className="max-w-225 text-center text-lg font-extralight sm:text-xl md:text-2xl">
          <span className="text-accent">{"{ "}</span>a front-end developer who
          writes clean and accessible code with a passion for UI design and user
          experience
          <span className="text-accent">{" }"}</span>
        </p>
      </div>
    </section>
  );
};

export default HeroHome;

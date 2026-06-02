const HomePage = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <section className="h-[500px]">Hero</section>
      <section className="h-[500px]">Featured Projects</section>
      <section className="h-[500px]">Technology</section>
      <section className="h-[500px]" id="about-section">
        About
      </section>
    </div>
  );
};

export default HomePage;

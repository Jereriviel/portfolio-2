import HeroHome from "../components/features/home/HeroHome";
import Featured from "../components/features/home/Featured";
import Stack from "../components/features/home/Stack";
import About from "../components/features/home/About";

const HomePage = () => {
  return (
    <>
      <HeroHome />
      <Featured />
      <Stack />
      <About />
    </>
  );
};

export default HomePage;

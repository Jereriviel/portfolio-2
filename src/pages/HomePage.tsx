import HeroHome from "../components/features/home/HeroHome";
import Featured from "../components/features/home/Featured";
import Stack from "../components/features/home/Stack";
import About from "../components/features/home/About";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Home</title>
        <meta
          name="description"
          content="Welcome to Carina M. Pedersen's personal portfolio website"
        />
      </Helmet>
      <HeroHome />
      <Featured />
      <Stack />
      <About />
    </>
  );
};

export default HomePage;

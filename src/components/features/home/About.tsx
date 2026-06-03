import carinaImage from "../../../assets/images/carina.jfif";
import { Icon } from "@iconify/react";
import Heading from "../../ui/Heading";

const About = () => {
  return (
    <section
      id="about-section"
      className="flex w-full flex-col gap-16 py-8 sm:gap-10 sm:py-10 md:gap-24 md:py-12"
    >
      <Heading heading="About" />
      <div className="flex flex-col gap-8 sm:gap-6 md:gap-8 lg:flex-row lg:gap-12">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:text-lg lg:flex-1">
          <p>
            <span className="text-accent">{"{ "}</span> I am 39 years old and
            reside in Bodø, Norway. I have a background as a customer advisor
            and sales consultant in the IT-industry and have recently completed
            a two year front-end development programme at Noroff School of
            Technology and Digital Media.
            <span className="text-accent">{" }"}</span>
          </p>
          <p>
            <span className="text-accent">{"{ "}</span>I love problem-solving
            and being creative, and enjoy learning about and working with modern
            tools and frameworks.
            <span className="text-accent">{" }"}</span>
          </p>
          <p>
            <span className="text-accent">{"{ "}</span>I am passionate about
            turning ideas into life through accessible and user friendly
            interfaces.
            <span className="text-accent">{" }"}</span>
          </p>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row lg:flex-1">
          <div>
            <img
              src={carinaImage}
              alt="Carina"
              className="max-w-50 rounded-lg md:max-w-75"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg uppercase md:text-xl"> {"< Connect >"}</h3>
            <div className="flex flex-col gap-3 md:text-lg">
              <a
                className="link"
                target="blank"
                href="https://www.linkedin.com/in/carina-mariell-pedersen-2a8648403"
              >
                <Icon icon="mdi:linkedin" />
                <span>linkedIn</span>
              </a>
              <a
                className="link"
                target="blank"
                href="https://github.com/Jereriviel"
              >
                <Icon icon="mdi:github" />
                <span>gitHub</span>
              </a>
              <a
                className="link"
                target="blank"
                href="mailto:carina.m.pedersen@gmail.com"
              >
                <Icon icon="ic:baseline-email" />
                <span>email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

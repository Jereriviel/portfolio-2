import cssImg from "../../../assets/icons/devicon--css3.svg";
import figmaImg from "../../../assets/icons/devicon--figma.svg";
import gitImg from "../../../assets/icons/devicon--git.svg";
import gitHubImg from "../../../assets/icons/devicon--github.svg";
import htmlImg from "../../../assets/icons/devicon--html5.svg";
import javaScriptImg from "../../../assets/icons/devicon--javascript.svg";
import mySqlImg from "../../../assets/icons/devicon--mysql.svg";
import postmanImg from "../../../assets/icons/devicon--postman.svg";
import reactImg from "../../../assets/icons/devicon--react.svg";
import tailwindImg from "../../../assets/icons/devicon--tailwindcss.svg";
import typeScriptImg from "../../../assets/icons/devicon--typescript.svg";
import viteImg from "../../../assets/icons/devicon--vitejs.svg";
import Heading from "../../ui/Heading";

const Stack = () => {
  return (
    <section className="flex w-full flex-col gap-16 py-8 sm:py-10 md:gap-24 md:py-12">
      <Heading heading="Stack & Tools" />
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        <div className="tag_stack tag">
          <img src={reactImg} alt="tag" />
          <span>React</span>
        </div>

        <div className="tag_stack tag">
          <img src={typeScriptImg} alt="tag" />
          <span>TypeScript</span>
        </div>

        <div className="tag_stack tag">
          <img src={javaScriptImg} alt="tag" />
          <span>JavaScript</span>
        </div>

        <div className="tag_stack tag">
          <img src={tailwindImg} alt="tag" />
          <span>Tailwind</span>
        </div>

        <div className="tag_stack tag">
          <img src={cssImg} alt="tag" />
          <span>CSS3</span>
        </div>

        <div className="tag_stack tag">
          <img src={htmlImg} alt="tag" />
          <span>HTML5</span>
        </div>

        <div className="tag_stack tag">
          <img src={gitImg} alt="tag" />
          <span>Git</span>
        </div>

        <div className="tag_stack tag">
          <img src={gitHubImg} alt="tag" />
          <span>GitHub</span>
        </div>

        <div className="tag_stack tag">
          <img src={viteImg} alt="tag" />
          <span>Vite</span>
        </div>

        <div className="tag_stack tag">
          <img src={figmaImg} alt="tag" />
          <span>Figma</span>
        </div>

        <div className="tag_stack tag">
          <img src={postmanImg} alt="tag" />
          <span>Postman</span>
        </div>

        <div className="tag_stack tag">
          <img src={mySqlImg} alt="tag" />
          <span>MySQL</span>
        </div>
      </div>
    </section>
  );
};

export default Stack;

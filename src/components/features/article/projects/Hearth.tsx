import TextSection from "../TextSection";
import TechSection from "../TechSection";
import TechCard from "../../../ui/cards/TechCard";
import postImg from "../../../../assets/images/hearth_post.webp";
import profileImg from "../../../../assets/images/hearth_profile.webp";

const Hearth = () => {
  return (
    <>
      <TextSection heading="About" imageUrl={profileImg} imageAlt="Profile">
        <p className="md:text-lg">
          <span className="text-accent">{"{ "}</span>this cross course project
          was built as a part of the JavaScript 2, Workflow and CSS Frameworks
          courses. The goal was to build a frontend user interface for a social
          media application using Noroff's API, TypeScript and Tailwind CSS,
          with automated testing using Vitest and Playwright.
        </p>
        <p>
          the application allows users to create and manage profiles, publish
          and interact with posts, follow other users, and discover content
          through personalized feeds and search functionality.
          <span className="text-accent">{" }"}</span>
        </p>
      </TextSection>
      <TextSection
        heading="Highlights"
        imageUrl={postImg}
        imageAlt="Post"
        reverse={true}
      >
        <p className="md:text-lg">
          <span className="text-accent">{"{ "}</span>create, edit, and manage
          posts, with support for comments.
        </p>
        <p className="md:text-lg">
          browse a global feed of community posts or switch to a dedicated
          following feed.
        </p>
        <p className="md:text-lg">
          explore user profiles, follow other users, view their posts, and
          interact with content across the platform.
          <span className="text-accent">{" }"}</span>
        </p>
      </TextSection>
      <TechSection>
        <TechCard heading="Frontend" iconType="frontend">
          <li className="list-disc">TypeScript</li>
          <li className="list-disc">Tailwind CSS</li>
          <li className="list-disc">Vite</li>
          <li className="list-disc">HTML5</li>
        </TechCard>
        <TechCard heading="State & Data" iconType="state">
          <li className="list-disc">REST API Integration</li>
          <li className="list-disc">Fetch API</li>
          <li className="list-disc">Local Storage</li>
        </TechCard>
        <TechCard heading="UI & UX" iconType="ui">
          <li className="list-disc">Responsive Design</li>
          <li className="list-disc">Accessibility</li>
          <li className="list-disc">Error Modal</li>
          <li className="list-disc">Loading skeletons</li>
          <li className="list-disc">Load More Pagination</li>
        </TechCard>
        <TechCard heading="Forms" iconType="form">
          <li className="list-disc">Form Validation</li>
          <li className="list-disc">Error Handling</li>
          <li className="list-disc">User Authentication</li>
          <li className="list-disc">Post Creation and Editing</li>
        </TechCard>
        <TechCard heading="Testing" iconType="test">
          <li className="list-disc">Vitest</li>
          <li className="list-disc">Playwright</li>
          <li className="list-disc">Unit Testing</li>
          <li className="list-disc">End-to-End Testing</li>
        </TechCard>
      </TechSection>
    </>
  );
};

export default Hearth;

import TextSection from "../TextSection";
import TechSection from "../TechSection";
import searchImg from "../../../../assets/images/meerkat_search.webp";
import cartImg from "../../../../assets/images/meerkat_cart.webp";
import TechCard from "../../../ui/cards/TechCard";

const Meerkat = () => {
  return (
    <>
      <TextSection heading="About" imageUrl={cartImg} imageAlt="Cart">
        <p className="md:text-lg">
          <span className="text-accent">{"{ "}</span>this project was built as a
          part of my JavaScript Frameworks course at Noroff. The goal was to
          build a fully functional, responsive online shop with Vite, React,
          TypeScript and Tailwind, integrated with the Noroff REST API.
        </p>
        <p>
          the application allows users to browse, search and view detailed
          information about each product, as well as add and remove items from
          both a shopping cart and a favourites list. The user can adjust
          quantities and view total cost, and complete a checkout flow. They can
          also send a message through a validated contact form.
          <span className="text-accent">{" }"}</span>
        </p>
      </TextSection>
      <TextSection
        heading="Highlights"
        imageUrl={searchImg}
        imageAlt="Search"
        reverse={true}
      >
        <p className="md:text-lg">
          <span className="text-accent">{"{ "}</span>fully interactive shopping
          cart with instant updates, quantity management, persistent state, and
          a dynamic cart indicator in the header.
        </p>
        <p className="md:text-lg">
          accessible search experience with real-time results and full keyboard
          navigation support.
        </p>
        <p className="md:text-lg">
          contact forms built with React Hook Form and Zod validation, providing
          immediate user feedback.<span className="text-accent">{" }"}</span>
        </p>
      </TextSection>
      <TechSection>
        <TechCard heading="Frontend">
          <li>• React</li>
          <li>• TypeScript</li>
          <li>• Tailwind CSS</li>
          <li>• Vite</li>
          <li>• React Router</li>
        </TechCard>
        <TechCard heading="State & Data">
          <li>• Zustand</li>
          <li>• TanStack Query</li>
        </TechCard>
        <TechCard heading="UI & UX">
          <li>• Headless UI</li>
          <li>• Framer Motion</li>
          <li>• React Toastify</li>
        </TechCard>
        <TechCard heading="Form & Validation">
          <li>• React Hook Form</li>
          <li>• Zod Validation</li>
        </TechCard>
      </TechSection>
    </>
  );
};

export default Meerkat;

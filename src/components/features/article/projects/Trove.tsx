import TextSection from "../TextSection";
import TechSection from "../TechSection";
import TechCard from "../../../ui/cards/TechCard";
import listingImg from "../../../../assets/images/trove_listing.webp";
import profileImg from "../../../../assets/images/trove_profile.webp";

const Trove = () => {
  return (
    <>
      <TextSection heading="About" imageUrl={profileImg} imageAlt="Profile">
        <p className="md:text-lg">
          <span className="text-accent">{"{ "}</span>this project was built as a
          part of my Semester Project 2 course at Noroff. The goal was to build
          a frontend application for Noroff's online auction API, with
          TypeScript and Tailwind CSS.
        </p>
        <p>
          the application allows users to register, browse, and bid on listings,
          as well as create and manage their own listings.
          <span className="text-accent">{" }"}</span>
        </p>
      </TextSection>
      <TextSection
        heading="Highlights"
        imageUrl={listingImg}
        imageAlt="Listing"
        reverse={true}
      >
        <p className="md:text-lg">
          <span className="text-accent">{"{ "}</span>complete bidding system
          with user credits, bid validation, instant feedback, and dynamic
          listing updates after successful bids.
        </p>
        <p className="md:text-lg">
          responsive image gallery with thumbnail navigation, keyboard
          accessibility and placeholder image handling
        </p>
        <p className="md:text-lg">
          search, sorting, filtering, and pagination features to help users
          efficiently browse and discover auction listings.
          <span className="text-accent">{" }"}</span>
        </p>
      </TextSection>
      <TechSection>
        <TechCard heading="Frontend" iconType="frontend">
          <li className="list-disc">TypeScript</li>
          <li className="list-disc">Tailwind CSS</li>
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
          <li className="list-disc">Toasts and inline user feedbackk</li>
          <li className="list-disc">Error Modal</li>
          <li className="list-disc">Loading Skeletons and Buttons</li>
          <li className="list-disc">Load More Pagination</li>
        </TechCard>
        <TechCard heading="Forms" iconType="form">
          <li className="list-disc">Form Validation</li>
          <li className="list-disc">Error Handling</li>
          <li className="list-disc">User Authentication</li>
          <li className="list-disc">Listing Creation and Editing</li>
        </TechCard>
      </TechSection>
    </>
  );
};

export default Trove;

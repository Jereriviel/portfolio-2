import type { Project } from "../types/project";
import thumbnail_meerkat from "../assets/thumbnails/thumbnail_meerkat.webp";
import thumbnail_trove from "../assets/thumbnails/thumbnail_trove.webp";
import thumbnail_hearth from "../assets/thumbnails/thumbnail_hearth.webp";
import thumbnail_holidaze from "../assets/thumbnails/thumbnail_holidaze.webp";
import thumbnail_smartrecipebook from "../assets/thumbnails/thumbnail_smartrecipebook.webp";
import thumbnail_portfolio1 from "../assets/thumbnails/thumbnail_portfolio1.webp";
import thumbnail_backtobasics from "../assets/thumbnails/thumbnail_backtobasics.webp";
import thumbnail_rainydays from "../assets/thumbnails/thumbnail_rainydays.webp";
import thumbnail_sciencemuseum from "../assets/thumbnails/thumbnail_sciencemuseum.webp";
import thumbnail_portfolio2 from "../assets/thumbnails/thumbnail_portfolio2.webp";

export const projects: Project[] = [
  {
    id: "portfolio-year-2",
    title: "Portfolio Year 2",
    titleCard: "Portfolio_Year_2",
    description:
      "personal portfolio showcasing three frontend projects from my second school year",
    thumbnail: thumbnail_portfolio2,
    tags: ["React", "TypeScript", "Tailwind", "Vite", "Figma"],
    featured: false,
    year: 2,
    repoUrl: "https://github.com/Jereriviel/portfolio-2",
    figmaUrl:
      "https://www.figma.com/design/b4iwZGm0XD3HaqBHIJ1tGh/Portfolio-2?node-id=1-2817&t=tJSv804M6uXARjRt-1",
    liveUrl: "https://jereriviel-portfolio.netlify.app/",
  },

  {
    id: "holidaze-booking-application",
    title: "Holidaze Booking App",
    titleCard: "Holidaze_Booking_App",
    description:
      "accommodation booking platform with venue browsing, search and management functionality",
    thumbnail: thumbnail_holidaze,
    tags: ["React", "TypeScript", "Tailwind", "Vite", "Figma"],
    featured: false,
    year: 2,
    repoUrl: "https://github.com/Jereriviel/project-exam-2",
    figmaUrl:
      "https://www.figma.com/design/cfWa93rTWCxTxo0cPyupnG/PE2-Holidaze?node-id=10-2&t=B8HGiCGIoWpcbXoO-1",
    liveUrl: "https://jereriviel-pe2-holidaze.netlify.app/",
  },

  {
    id: "meerkat-online-store",
    title: "Meerkat Online Store",
    titleCard: "Meerkat_Online_Store",
    description:
      "fully functional e-commerce frontend with browsing, search and shopping cart functionality",
    thumbnail: thumbnail_meerkat,
    tags: ["React", "TypeScript", "Tailwind", "Vite", "Figma"],
    featured: true,
    year: 2,
    repoUrl: "https://github.com/Jereriviel/js-frameworks-ca",
    figmaUrl:
      "https://www.figma.com/design/J9cAdEBVpKIsPzytwlSCRJ/JavaScript-Frameworks?node-id=0-1&t=KkDKlvYVyd9XzqSI-1",
    liveUrl: "https://jereriviel-js-frameworks.netlify.app/",
  },

  {
    id: "smart-recipe-book-application",
    title: "Smart Recipe Book",
    titleCard: "Smart_Recipe_Book",
    description:
      "recipe application for creating and editing recipes, with search, filtering and authentication",
    thumbnail: thumbnail_smartrecipebook,
    tags: ["React", "TypeScript", "Tailwind", "Vite", "Figma"],
    featured: false,
    year: 2,
    repoUrl: "",
    figmaUrl:
      "https://www.figma.com/design/FAGzx9gqzNiLzP17GTyMQ1/Smart-Recipe-Book-Design?node-id=0-1&t=Pp6vtXyradlBMZP8-1",
    liveUrl: "https://smart-recipe-book.netlify.app/",
  },

  {
    id: "trove-auction-house",
    title: "Trove Auction House",
    titleCard: "Trove_Auction_House",
    description:
      "auctioning platform with item listings, bidding, filtering, search and user profiles",
    thumbnail: thumbnail_trove,
    tags: ["TypeScript", "Tailwind", "Figma"],
    featured: true,
    year: 2,
    repoUrl: "https://github.com/Jereriviel/semester-project-2",
    figmaUrl:
      "https://www.figma.com/design/JQPGpxgNfymJqX7FX6SJYC/Semester-Project-2?node-id=0-1&t=fBe4B8VICeTaRzdi-1",
    liveUrl: "https://jereriviel-semester-project-2.netlify.app/index.html",
  },

  {
    id: "heart-social-platform",
    title: "Hearth Social Media Platform",
    titleCard: "Hearth_SOME_Platform",
    description:
      "social media platform with post, follow, user profiles and search functionality",
    thumbnail: thumbnail_hearth,
    tags: ["TypeScript", "Tailwind", "Vite", "Figma"],
    featured: true,
    year: 2,
    repoUrl: "https://github.com/Jereriviel/js2-ca",
    figmaUrl:
      "https://www.figma.com/design/hlbKZ2jyst2RDrPUG15300/JS2-CA?node-id=1-980&t=N0ZRw4t2XAaN5X04-1",
    liveUrl: "https://jereriviel-js2-ca.netlify.app/",
  },

  {
    id: "portfolio-year-1",
    title: "Portfolio Year 1",
    titleCard: "Portfolio_Year_1",
    description:
      "personal portfolio showcasing three frontend projects from my first school year",
    thumbnail: thumbnail_portfolio1,
    tags: ["CSS3", "HTML5", "Figma"],
    featured: false,
    year: 1,
    repoUrl: "https://github.com/Jereriviel/portfolio",
    figmaUrl:
      "https://www.figma.com/design/82tF9ON1a5vekicxbSaxyO/Portifolio-website?node-id=0-1&t=q3Y9AIeGMHpRw0LM-1",
    liveUrl: "https://jereriviel.github.io/portfolio/",
  },

  {
    id: "back-to-basics-blog-application",
    title: "Back to Basics Blog",
    titleCard: "Blog_Application",
    description:
      "blog application with features for viewing, creating and managing blog posts",
    thumbnail: thumbnail_backtobasics,
    tags: ["JavaScript", "CSS3", "HTML5", "Figma"],
    featured: false,
    year: 1,
    repoUrl: "https://github.com/Jereriviel/project-exam-1",
    figmaUrl:
      "https://www.figma.com/design/WOJ3hiFtx1W0KMSdCADpQl/FED1-PE1-Jereriviel?node-id=0-1&t=QEtrgYFcBdUNSKSI-1",
    liveUrl: "https://jereriviel.github.io/project-exam-1/index.html",
  },

  {
    id: "rainydays-online-store",
    title: "RainyDays Online Store",
    titleCard: "RainyDays_Store",
    description:
      "responsive, multi-page online store with browsing and shopping cart functionality",
    thumbnail: thumbnail_rainydays,
    tags: ["JavaScript", "CSS3", "HTML5", "Figma"],
    featured: false,
    year: 1,
    repoUrl: "https://github.com/Jereriviel/javascript-1-ca",
    figmaUrl:
      "https://www.figma.com/design/VJqTLHYmgp3CUCMozfGq3t/Rainy-Days-New-JS?node-id=22-4916&t=Q9xpfykoiVSdwkYq-1",
    liveUrl: "https://jereriviel.github.io/javascript-1-ca/index.html",
  },

  {
    id: "community-science-museum-website",
    title: "Science Museum Website",
    titleCard: "Science_Museum",
    description:
      "responsive and accessible multi-page website with browsing and responsive navbar",
    thumbnail: thumbnail_sciencemuseum,
    tags: ["CSS3", "HTML5", "Figma"],
    featured: false,
    year: 1,
    repoUrl: "https://github.com/Jereriviel/semester-project-1",
    figmaUrl:
      "https://www.figma.com/design/JsixZPpZjNhYgKiDQbP2hh/Semester-Project-1?node-id=2001-532&t=I1ixGlSjzTo1zlbJ-1",
    liveUrl: "https://jereriviel.github.io/semester-project-1/",
  },
];

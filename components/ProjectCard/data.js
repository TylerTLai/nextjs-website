import { v4 as uuidv4 } from "uuid";

export const projectData = [
  {
    id: uuidv4(),
    title: "People Pod",
    description:
      "A full-stack personal CRM that allows users to build better relationships.",
    github: "https://github.com/TylerTLai/People-Pod",
    link: "https://people-pod.vercel.app/",
    technologies: ["nextJS", "tailwindCSS", "Prisma"],
  },
  {
    id: uuidv4(),
    title: "Personal Site",
    description: "This personal website used to showcase my projects.",
    github: "https://github.com/TylerTLai/nextjs-website",
    link: "https://www.tylerlai.com/",
    technologies: ["nextJS", "tailwindCSS", "Framer Motion"],
  },
  {
    id: uuidv4(),
    title: "The Guardian",
    description:
      "A React single page application that fetches articles from the Guardian API.",
    github: "https://github.com/TylerTLai/guardian-app",
    link: "https://tylertlai.github.io/guardian-app/#/",
    technologies: ["react", "redux", "styled components", "Guardian API"],
  },
  {
    id: uuidv4(),
    title: "Film Findr v2",
    description:
      "A React single page application that allows users to search for movies.",
    github: "https://github.com/TylerTLai/film-findr-2",
    link: "https://tylertlai.github.io/film-findr-2/#/",
    technologies: ["react", "redux", "styled components", "TMDB API"],
  },
  {
    id: uuidv4(),
    title: "Travel Site",
    description:
      "TRVL is a React single page application that allows users to get travel deals.",
    github: "https://github.com/TylerTLai/react-travel-site",
    link: "https://tylertlai.github.io/react-travel-site/#/",
    technologies: ["react", "react hooks", "CSS"],
  },
  {
    id: uuidv4(),
    title: "Film Findr v1",
    description:
      "A React single page application that allows users to search for movies.",
    github: "https://github.com/TylerTLai/film-findr",
    link: "https://film-findr.netlify.app/",
    technologies: ["react", "CSS", "TMDB API"],
  },
];

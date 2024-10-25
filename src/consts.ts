import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "A Caveman's guide",
  DESCRIPTION: "to surviving the modern industrial landscape",
  EMAIL: "paul.vudmaska@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Health",
};

export const Book: Metadata = {
  TITLE: "Book",
  DESCRIPTION: "A collection of articles about caveman's guide",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/boogerbuttcheeks",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/trevortylerlee",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/trevortylerlee",
  },
];

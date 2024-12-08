import { Site } from "../models/Site";

export const sites: Array<Site> = [
  {
    label: "Home",
    link: "/",
    description: "Home page, nothing special. Description of features in this project.",
    imageSrc: "home.svg",
  },
  {
    label: "Flexbox",
    description: "Page responsible for testing flexbox properites. It's purpose is to measure state menagement tools.",
    link: "/flexbox",
  },
  {
    label: "Grid",
    link: "/grid",
    description: "<TODO>",
  },
  {
    label: "Table",
    link: "/table",
    description: "Table page, page responsible for testing rendering of big amounts of data. It also displays filtering modal.",
  },
  {
    label: "RecRndr",
    link: "/recursive-rendering",
  },
];

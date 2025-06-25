// src/appList.ts
import bluey from "./assets/1.jpg";
import peppa from "./assets/2.jpg";
import thomas from "./assets/3.jpg";
import sesame from "./assets/4.jpg";

export interface AppCard {
  id: string;
  title: string;
  imageSrc: string;
  alt?: string;
  description?: string;
}

export const appList: AppCard[] = [
  {
    id: "bluey",
    title: "LEGO® Bluey™",
    imageSrc: bluey,
    alt: "LEGO Bluey Game",
    description:
      "Explore the world with Bluey in this fun and educational game.",
  },
  {
    id: "peppa",
    title: "LEGO® DUPLO® PEPPA PIG",
    imageSrc: peppa,
    alt: "Peppa Pig Game",
    description:
      "Join Peppa Pig on fun learning adventures made for little ones.",
  },
  {
    id: "thomas",
    title: "Thomas & Friends™: Let’s Roll",
    imageSrc: thomas,
    alt: "Thomas the Train Game",
    description:
      "Ride the rails and solve puzzles with Thomas and his friends.",
  },
  {
    id: "sesame",
    title: "Sesame Street Mecha Builders",
    imageSrc: sesame,
    alt: "Sesame Street Game",
    description:
      "Help Elmo and friends save the day using STEM-powered solutions.",
  },
];

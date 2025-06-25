// src/blogList.ts
import blueyImage from "./assets/3.jpg";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  content: string; // full blog content
}

export const blogList: BlogPost[] = [
  {
    id: "bluey-partnership",
    title: "StoryToys Partners with LEGO & BBC Studios",
    description:
      "This new game brings Bluey into an engaging digital world, designed for children aged 2 to 7...",
    imageSrc: blueyImage,
    content:
      "Full blog post content about the partnership with LEGO and BBC Studios...",
  },
  {
    id: "another-blog",
    title: "Coming Soon: New Educational App for Preschoolers",
    description:
      "We're working on an exciting new app to launch next season...",
    imageSrc: blueyImage,
    content: "This is where the full blog content goes for another blog.",
  },
];

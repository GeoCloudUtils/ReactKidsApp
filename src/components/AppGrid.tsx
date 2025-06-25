import React from "react";
import { AppCard } from "./AppCard";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

export const AppGrid: React.FC = () => {
  const apps = [
    {
      image: img1,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    {
      image: img2,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    {
      image: img3,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    {
      image: img4,
      text: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {apps.map((app, index) => (
          <AppCard key={index} imageSrc={app.image} description={app.text} />
        ))}
      </div>
    </div>
  );
};

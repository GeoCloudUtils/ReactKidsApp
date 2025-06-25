import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-text text-center py-5">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center" style={{ color: "#003366" }}>
          Help children master new skills through play
        </h2>
        <p className="mt-3 text-dark fs-6">
          Browse below for apps that bring joy to children and parents alike.
        </p>
      </div>
    </section>
  );
};

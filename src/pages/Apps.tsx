import React from "react";
import { HeroSection } from "../components/HeroSection";
import { AppGrid } from "../components/AppGrid";
import { ComingSoon } from "../components/ComingSoon";

export const Apps: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AppGrid />
      <ComingSoon />
    </>
  );
};

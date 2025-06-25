import React from "react";

type SectionProps = {
  title?: string;
  children: React.ReactNode;
};
export const Section = ({ children, title }: SectionProps) => {
  return (
    <section>
      <h2 className="mx-auto text-center">{title}</h2>
      <div className="justify-content-center">{children}</div>
    </section>
  );
};

import type { ReactElement } from "react";

type HeadingProps = { title: string; description: string };
export const Heading = ({ title, description }: HeadingProps): ReactElement => {
  return (
    <>
      <h1 className="mx-auto text-center mt-5">{title}</h1>;
      <p className="text-center">{description}</p>
    </>
  );
};

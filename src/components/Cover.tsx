import React from "react";

interface CoverProps {
  imageSrc: string;
}

export function Cover({ imageSrc }: CoverProps): React.ReactElement {
  return (
    <div className="cover-container mt-5">
      <img src={imageSrc} alt="Cover" className="cover-image" />
    </div>
  );
}

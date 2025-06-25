import React from "react";

interface AppCardProps {
  imageSrc: string;
  description: string;
}

export const AppCard: React.FC<AppCardProps> = ({ imageSrc, description }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="ratio ratio-1x1">
          <img
            src={imageSrc}
            className="card-img-top p-2"
            alt="Thumbnail"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-end mt-3">
            <button type="button" className="btn btn-sm btn-outline-dark">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

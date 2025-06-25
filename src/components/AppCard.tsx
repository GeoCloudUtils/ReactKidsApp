import React from "react";
import { useNavigate } from "react-router-dom";

interface AppCardProps {
  id: string;
  imageSrc: string;
  description: string;
}

export const AppCard: React.FC<AppCardProps> = ({
  id,
  imageSrc,
  description,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/apps/${id}`);
  };

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div
          className="ratio ratio-1x1"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
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
            <button
              type="button"
              className="btn btn-sm btn-outline-dark"
              onClick={handleClick}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

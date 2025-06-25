import React from "react";
import { useNavigate } from "react-router-dom";

interface StoryCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const BlogCard: React.FC<StoryCardProps> = ({
  id,
  title,
  description,
  imageSrc,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div
          className="ratio ratio-4x3"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          <img src={imageSrc} className="card-img-top" alt={title} />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5
              className="card-title"
              style={{ cursor: "pointer", color: "#003366" }}
              onClick={handleClick}
            >
              {title}
            </h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="text-end mt-3">
            <button className="btn btn-sm btn-black" onClick={handleClick}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

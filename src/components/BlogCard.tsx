import React from "react";

interface StoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export const BlogCard: React.FC<StoryCardProps> = ({
  title,
  description,
  imageSrc,
  link,
}) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="text-end mt-3">
            <a href={link} className="btn btn-sm btn-black">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

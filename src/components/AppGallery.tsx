import React from "react";
import { useNavigate } from "react-router-dom";
import { appList, type AppCard } from "../appList";

export function AppGallery(): React.ReactElement {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/apps/${id}`);
  };

  return (
    <section className="w-100">
      <div className="container-fluid px-4">
        <div className="row g-4">
          {appList.map((app: AppCard) => (
            <div
              key={app.id}
              className="col-6 col-sm-6 col-md-3 fade-in"
              onClick={() => handleCardClick(app.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="card h-100">
                <img
                  src={app.imageSrc}
                  className="card-img-top card-game"
                  alt={app.alt || app.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{app.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 mb-5">
          <button
            type="button"
            className="btn btn-dark btn-lg"
            onClick={() => navigate("/apps")}
          >
            See all of our apps
          </button>
        </div>
      </div>
    </section>
  );
}

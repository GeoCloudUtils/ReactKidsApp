import React from "react";

interface AppCard {
  title: string;
  imageSrc: string;
  alt?: string;
}

interface AppGalleryProps {
  apps: AppCard[];
}

export function AppGallery({ apps }: AppGalleryProps): React.ReactElement {
  return (
    <section className="w-100">
      <div className="container-fluid px-4">
        <div className="row g-4">
          {apps.map((app, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-3 fade-in">
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
          <button type="button" className="btn btn-dark btn-lg">
            See all of our apps
          </button>
        </div>
      </div>
    </section>
  );
}

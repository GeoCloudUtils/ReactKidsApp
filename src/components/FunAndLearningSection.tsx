import React from "react";

type FunAndLearningSectionProps = {
  image1: string;
  image2: string;
};

export function FunAndLearningSection({
  image1,
  image2,
}: FunAndLearningSectionProps): React.ReactElement {
  return (
    <section className="container py-5">
      <div className="row align-items-center justify-content-center">
        {/* Images Column */}
        <div className="col-md-6 d-flex justify-content-center flex-wrap gap-3">
          <img
            src={image1}
            alt="Child playing"
            className="img-fluid"
            style={{ maxWidth: "48%", borderRadius: "8px" }}
          />
          <img
            src={image2}
            alt="Child learning"
            className="img-fluid"
            style={{ maxWidth: "48%", borderRadius: "8px" }}
          />
        </div>

        {/* Text Column */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h2 className="fw-bold mb-4" style={{ color: "#003366" }}>
            Just the right balance between
            <br />
            <span style={{ color: "#003366" }}>fun and learning</span>
          </h2>
          <p className="mb-3" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Our apps bring together sound pedagogy, exciting characters, and
            free-form play experience.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            You’ll love our apps for their educational value. Your child will
            love them for the rewarding games and familiar characters.
          </p>
        </div>
      </div>
    </section>
  );
}

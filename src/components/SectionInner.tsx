import React from "react";

type SectionInnerProps = {
  imageSrc: string;
};

export function SectionInner({
  imageSrc,
}: SectionInnerProps): React.ReactElement {
  return (
    <section className="container-fluid py-5">
      <div className="row min-vh-50 align-items-stretch">
        <div className="col-md-6 p-0">
          <div className="h-100 w-100">
            <img
              src={imageSrc}
              alt="Children enjoying fun educational time"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center px-4 py-5 text-center">
          <div>
            <p className="mb-4">
              Your kids are restless and you could do with 5 minutes to
              yourself, but you want to give them constructive screen time that
              still feels like a treat.
            </p>
            <p className="mb-0">
              That’s why we make apps for kids that engage them in well-rounded
              activities designed to nurture them and help them grow. You’ll get
              peace of mind seeing your kids learn and have fun at the same
              time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

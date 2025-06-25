import React from "react";

export const ContactSection: React.FC = () => {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        {/* Heading */}
        <h2 className="fw-bold text-primary">Drop us a line</h2>

        {/* Intro paragraph with contact links */}
        <p className="mb-4">
          <strong>
            For any app related question, please contact{" "}
            <a href="mailto:support@storytoys.com" className="text-danger">
              support@storytoys.com
            </a>
            .
          </strong>
          <br />
          You can also view our{" "}
          <a href="#" className="text-decoration-underline">
            FAQ here
          </a>
          .<br />
          For all other enquiries, send us a message via the contact form below.
        </p>

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="p-4 rounded shadow position-relative"
              style={{
                backgroundColor: "#fde8c7",
                border: "4px dashed #f5a623",
              }}
            >
              <form>
                <div className="mb-3 text-start">
                  <label className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label">
                    How Can We Help? <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={4}
                    required
                  ></textarea>
                </div>

                {/* Simulated reCAPTCHA */}
                <div className="mb-3 text-start">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      required
                    />
                    <label className="form-check-label">I'm not a robot</label>
                  </div>
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="mb-3 text-start">
                  <div className="form-check">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      required
                    />
                    <label className="form-check-label">
                      I agree to the{" "}
                      <a href="#" className="text-danger">
                        Privacy Policy
                      </a>
                      <span className="text-danger">*</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 rounded-pill"
                >
                  Get in touch
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Address with Font Awesome icon */}
        <div className="mt-5 text-center">
          <i className="fas fa-map-marker-alt fa-2x text-danger"></i>
          <p className="mb-0 fw-semibold mt-2">
            Exchequer Chambers,
            <br />
            Exchequer St, Dublin,
            <br />
            Dublin 2, Ireland.
          </p>
        </div>
      </div>
    </section>
  );
};

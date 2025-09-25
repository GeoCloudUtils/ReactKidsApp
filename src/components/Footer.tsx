import React from "react";

export function Footer(): React.ReactElement {
  return (
    <footer className="text-white py-4 mt-5 bg-dark">
      <div className="container w-75">
        <div className="row align-items-center text-center text-md-start">
          {/* Links Column */}
          <div className="col-md-4 mb-3 mb-md-0">
            <a href="#" className="text-white me-2">
              Privacy
            </a>{" "}
            |
            <a href="#" className="text-white mx-2">
              Terms
            </a>{" "}
            |
            <a href="#" className="text-white mx-2">
              Cookies
            </a>{" "}
            |
            <a href="#" className="text-white ms-2">
              Contact
            </a>
          </div>

          {/* Social & Info Column */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <div className="mt-2 small">
              © EduKids 2025 All rights reserved.
              <br />
              Developed by EduKids Team.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

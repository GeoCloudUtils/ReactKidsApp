import { Link } from "react-router-dom";

export function Footer(): React.ReactElement {
  return (
    <footer className="text-white py-4 mt-5 bg-dark">
      <div className="container w-75">
        <div className="row align-items-center text-center text-md-start">
          {/* Links Column */}
          <div className="col-md-4 mb-3 mb-md-0">
            <Link to="/privacy" className="text-white me-2">
              Privacy
            </Link>{" "}
            |
            <Link to="/terms" className="text-white mx-2">
              Terms
            </Link>{" "}
            |
            <Link to="/cookies" className="text-white mx-2">
              Cookies
            </Link>{" "}
            |
            <Link to="/contact" className="text-white ms-2">
              Contact
            </Link>
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

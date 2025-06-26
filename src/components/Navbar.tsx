import { NavLink } from "react-router-dom";
import type { ReactElement } from "react";

export function Navbar(): ReactElement {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top px-4 px-md-5">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="/logo.png"
            alt="Logo"
            height="100"
            className="d-inline-block align-text-top me-2"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-2">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold text-primary" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold text-primary" : "")
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold text-primary" : "")
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold text-primary" : "")
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  "nav-link d-flex align-items-center" +
                  (isActive ? " active fw-bold text-primary" : "")
                }
              >
                Apps <span className="ms-1">⭐</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

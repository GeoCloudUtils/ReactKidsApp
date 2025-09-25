import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css"; // optional weights

import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Apps } from "./pages/Apps";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AppDetailPage from "./pages/AppDetailPage";
import BlogDetailPage from "./pages/BlogDetailPage";

import { Home } from "./pages/Home";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/apps/:id" element={<AppDetailPage />} />{" "}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} /> {/* ✅ NEW */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route
          path="*"
          element={<h2 className="text-center my-5">Page Not Found</h2>}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

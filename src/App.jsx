import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OurBranches } from "./Pages/OurBranches.jsx";
import Promotion from "./Pages/Promotion.jsx";
import GalleryPage from "./Pages/Gallery.jsx";
import { ContactUs } from "./Pages/ContactUs.jsx";
import { LoyalityOffer } from "./Pages/LoyalityCard.jsx";
import { Careers } from "./Pages/Careers.jsx";
import FlipBook from "./Pages/FlipBook.jsx";
import OurStores from "./components/Our-Stores/OurStoresPage.jsx";

function App() {
  return (
    <div className="w-full">
      <Router>
        <Routes>
          {/* Routes wrapped in Layout */}
          <Route
            path="*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/branches" element={<OurBranches />} />
                  <Route path="/promotions" element={<Promotion />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/loyality" element={<LoyalityOffer />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/stores" element={<OurStores />} />
                </Routes>
              </Layout>
            }
          />
          {/* FlipBook Route without Layout */}
          <Route path="/pdf/:pdfId" element={<FlipBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

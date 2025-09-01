import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Tour from "./pages/Tours";
import Package1 from "./pages/ToursPackage/Package1";
import Package2 from "./pages/ToursPackage/Package2";

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      {/* Place ScrollToTop here */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Tour />} />
        <Route
          path="/dubai-3-nights-4-days-package-explore-dubai"
          element={<Package1 />}
        />
        <Route path="/dubai-Helicopter-view" element={<Package2 />} />
      </Routes>
    </>
  );
}

export default App;

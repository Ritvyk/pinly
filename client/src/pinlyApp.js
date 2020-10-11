import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";

function PinlyApp() {
  return (
    <div className="bg-gray-200 w-full h-full">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default PinlyApp;

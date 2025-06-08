import React from "react";
import HeroSection from "../sections/HomePage/heroSection";
import TopImagesSection from "../sections/HomePage/topImagesSection";

// Correct typing: it's a function returning a ReactNode (JSX)
const renderHomePage = (): React.ReactNode => {
  return (
    <div className="px-[10px]" >
     <HeroSection />
     <TopImagesSection />
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div> 
      {renderHomePage()} 
    </div>
  );
};

export default HomePage;

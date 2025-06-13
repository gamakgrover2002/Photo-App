import React from "react";
import HeroSection from "../sections/HomePage/heroSection";
import TopImagesSection from "../sections/HomePage/topImagesSection";

const renderHomePage = (): React.ReactNode => {
  return (
    <div className="px-[10px]" >
     <HeroSection />
     <TopImagesSection />
    </div>
  );
};

const CategoryPage: React.FC = () => {
  return (
    <div> 
      {renderHomePage()} 
    </div>
  );
};

export default CategoryPage;

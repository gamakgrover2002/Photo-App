import React from "react";
import UploadPageHeroSection from "../sections/UploadPage/UploadPageHeroSection";
import UploadForm from "../sections/UploadPage/UploadForm";


const renderUploadPage = (): React.ReactNode => {

  return (
    <div className="px-[10px]" >
     <UploadPageHeroSection />
     <UploadForm/>
     <div>
     
     </div>
    </div>
  );
};

const UploadPage: React.FC = () => {
  return (
    <div> 
      {renderUploadPage()} 
    </div>
  );
};

export default UploadPage;

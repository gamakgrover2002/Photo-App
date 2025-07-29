import React, { useEffect, useState } from "react";
import HeroSection from "../sections/HomePage/heroSection";
import TopImagesSection from "../sections/HomePage/topImagesSection";
import type { Images } from "../types/types";
import { getTopData } from "../utils/apiFunctions/apifunctions";

// Correct typing: it's a function returning a ReactNode (JSX)
const renderHomePage = (images:Images[] | null,dataLoading:boolean): React.ReactNode => {
  return (
    <div className="px-[10px]" >

     <HeroSection />
     <TopImagesSection dataLoading={dataLoading} images={images} />
    </div>
  );
};

const HomePage: React.FC = () => {
      const [images, setImages] = useState<Images[] | null>(null);
      const [dataLoading,setDataLoading] = useState<boolean>(false);
      useEffect(() => {
        const fetchData = async () => {
            setDataLoading(true);
            try {
                const res = await getTopData();
                console.log(res);
            setImages(res);

            } catch (error) {
                console.error("Error fetching top data:", error);
            }
            finally{
                setDataLoading(false);
            }
        };

        fetchData();
    }, []);
  return (
    <div> 
      {renderHomePage(images, dataLoading)} 
    </div>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import CategoryPageHeroSection from "../sections/CategoryPage/CategoryPageHeroSection";
import SearchSection from "../sections/CategoryPage/SerachSection";
import { getCategories } from "../utils/apiFunctions/apifunctions";
import type { Category, Images } from "../types/types";

const renderCategoryPage = (setCategory:(category:string)=> void,categoryData:Category[]): React.ReactNode => {
  return (
    <div className="px-[10px]" >
     <CategoryPageHeroSection categoryData={categoryData} setCategory={setCategory} />
     <SearchSection />
    </div>
  );
};

const CategoryPage: React.FC = () => {
  const [currentcategory,setCurrentCategory] = useState("all");
  const [categoryData,setCategoryData] = useState<Images[] | null>(null);
  useEffect(()=>{
    const getCategoryData= async()=>{
      const category =  await  getCategories();
      setCategoryData(category);
    }
    getCategoryData();
  },[])
  return (

    <div> 
      {renderCategoryPage(setCategoryData,categoryData)} 
    </div>
  );
};

export default CategoryPage;

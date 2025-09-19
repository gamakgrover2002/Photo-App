import React, { useEffect, useState } from "react";
import CategoryPageHeroSection from "../sections/CategoryPage/CategoryPageHeroSection";
import SearchSection from "../sections/CategoryPage/SerachSection";
import { fetchCategoryData, fetchCategories } from "../utils/apiFunctions/apifunctions";
import type { Category, Images } from "../types/types";


const CategoryPage: React.FC = () => {
  const [currentCategory,setCurrentCategory] = useState("all");
  const [categories,setCategories] = useState<Category[] | null>(null);
  const [categoryData,setCategoryData] = useState<Images[] | null>(null);
  useEffect(()=>{
    const getCategory= async()=>{
      const categories =  await  fetchCategories();
      setCategories(categories);
    }
    getCategory();
  },[])
  useEffect(()=>{
    const getCategoryData = async(category:string)=>{
      const data = await fetchCategoryData(category);
      setCategoryData(data);

    }
    getCategoryData(currentCategory);
    

  },[currentCategory])
  return (
    <div className="px-[10px]" >
    <CategoryPageHeroSection categories={categories} setCategory={setCurrentCategory} currentCategory={currentCategory} />
    <SearchSection data={categoryData} />
   </div>
  );
};

export default CategoryPage;

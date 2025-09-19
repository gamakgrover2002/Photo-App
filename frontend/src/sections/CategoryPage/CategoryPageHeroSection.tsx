import DropdownComponent from "../../components/Dropdown";
import type { Category } from "../../types/types";

type CategoryPageHeroSectionProps = {
    setCategory:(category: string)=> void
    categories: Category[] |null;
    currentCategory:string
}
const CategoryPageHeroSection: React.FC<CategoryPageHeroSectionProps> = ({setCategory, categories, currentCategory}) => {
    return(
        <div className="flex justify-center flex-col h-[500px] w-full items-center text-center">
            <p className="w-[100%] max-w-[500px] text-5xl mb-[20px] font-bold">Search Images by Category</p>
            <DropdownComponent  categories={categories} setCategory={setCategory} currrentCategory={currentCategory}></DropdownComponent>
     
        </div>
    )
}
export default CategoryPageHeroSection;
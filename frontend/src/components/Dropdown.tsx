import 'bootstrap/dist/css/bootstrap.min.css';
import 'flowbite';
import { useState } from 'react';
import type { Category } from '../types/types';



type DropdownComponentProps = {
  categories: Category[] | null ;
  setCategory: (category: string) => void;
  currrentCategory:string
};

const DropdownComponent: React.FC<DropdownComponentProps> = ({ categories, setCategory,currrentCategory }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownInformationButton"
        onClick={() => setIsVisible((prev) => !prev)}
        className="inline-flex justify-between items-center w-full pl-7 pr-3 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-500"
        type="button"
      >
        {currrentCategory}
        <svg
          className={`w-3 h-3 ml-2 transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownInformation"
        className={`absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-700 transition-all transform  ${
          isVisible ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
        }`}
      >
        <ul className="p-0 text-sm text-gray-700 dark:text-gray-200 !m-0 relative">
          {(categories? categories: []).map((category) => (
            <li key={category.id}>
              <button
                className="w-full text-left px-4 py-2 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-150 text-blue-500"
                onClick={() => {
                  setCategory(category.name);
                  setIsVisible(false);
                }}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownComponent;

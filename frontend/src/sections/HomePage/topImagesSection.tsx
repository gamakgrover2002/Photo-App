import React from 'react';
import ImageContainer from '../../components/ImageContainer';
import type { Images } from '../../types/types';

interface TopImagesSectionProps {
    dataLoading: boolean;
    images: Images[] | null;
}
const TopImagesSection: React.FC<TopImagesSectionProps> = ({dataLoading,images}) => {
   

    return (
        <>
        <p className='font-bold md:text-start md:text-5xl my-2 text-center'>Top Images</p>
        <div className='flex flex-wrap gap-1 justify-between'>
            {!dataLoading ? images?.map((img, index: number) => (
              <ImageContainer
                key={index}
                src={img.imageUrl}
                alt={`img-${index}`}
                category={img.imageCategory} />
            )) : <p>Loading...</p>}
        </div>
        </>
    );
};

export default TopImagesSection;

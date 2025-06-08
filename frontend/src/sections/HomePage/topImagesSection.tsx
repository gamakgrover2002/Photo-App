import React, { useEffect, useState } from 'react';
import { getTopData } from '../../utils/apiFunctions/apifunctions';
import type { Images } from '../../types/types';

const TopImagesSection: React.FC = () => {
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
        <>
        <p className='font-bold md:text-start md:text-5xl my-2 text-center'>Top Images</p>
        <div className='flex flex-wrap gap-1 justify-between'>
            {!dataLoading ? images?.map((img, index) => (
                <div key={index} className='w-[100%] md:w-[32%] max-h-[600px] relative'>
                <p className='text-center py-[12.5px] h-[50px] left-2 rounded-2xl top-2.5 absolute bg-white md:w-[150px]  w-[30%]'>{img.imageCategory}</p>
                <img className='w-full h-full'  src={img.imageUrl} alt={img.imageUrl || `Image ${index}`} />
                </div>
            )) : <p>Loading...</p>}
        </div>
        </>
    );
};

export default TopImagesSection;

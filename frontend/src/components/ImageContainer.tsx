const ImageContainer = ({
    src,
    alt,
    category,
  }: {
    src: string;
    alt: string;
    category: string;
  }) => {
    return (
      <div className="group w-full md:w-[32%] max-h-[600px] relative overflow-hidden rounded-3xl">
        <p className="text-center py-[12.5px] h-[50px] left-2 rounded-2xl top-2.5 absolute bg-white md:w-[150px] w-[30%] z-10">
          {category}
        </p>
        <img className="w-full h-full rounded-3xl object-cover" src={src} alt={alt} />
  
        {/* Buttons that slide up on hover */}
        <div className="absolute bottom-0 left-0 w-full flex justify-around items-center bg-black/60 text-white h-16 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <button className="bg-red-500 px-4 py-1 rounded">Report</button>
          <button className="bg-blue-500 px-4 py-1 rounded">Like</button>
        </div>
      </div>
    );
  };
  
  export default ImageContainer;
  
import type React from "react";

interface UploadInputProps {
  setSelectedFile: (value: File) => void;
}

const UploadInput: React.FC<UploadInputProps> = ({ setSelectedFile }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="w-[800px] h-[300px] relative">
      <label
        htmlFor="category"
        className="text-center w-[400px] h-full flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-300  rounded-lg  transition"
      >
        <img src="/icons/arrow-up.svg" alt="Upload Icon" className="w-[100px]" />
        Drag or drop an image here
        <br />
        or
        <br />
        <span className="mt-2 px-4 py-2  bg-blue-700 text-white rounded hover:bg-white hover:text-blue-700 hover:cursor-pointer">
          Choose file
        </span>
        <input
          type="file"
          id="category"
          name="image"
          className="hidden"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default UploadInput;

import type React from "react";
import { useState } from "react";

interface UploadInputProps {
  setSelectedFile: (value: string) => void;
}

const UploadInput: React.FC<UploadInputProps> = ({ setSelectedFile }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileObject = URL.createObjectURL(file);
      setPreviewUrl(fileObject);
      setSelectedFile(fileObject);
      console.log(fileObject);
    }
  };

  return (
    <div className="w-full h-[300px] relative">
      <label
        htmlFor="category"
        className="text-center w-full h-full !flex !flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 rounded-lg transition px-[20px]"
      >
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Uploaded preview"
            className="mb-2 w-full h-full object-contain"
          />
        )}
        {!previewUrl && (
          <>
            <img src="/icons/arrow-up.svg" alt="Upload Icon" className="w-[75px] m-auto" />
            <p className="m-auto">
            Drag or drop an image here
            <br />
            or
            <br />
            </p>
            <span className="m-auto px-4 py-2 bg-blue-700 text-white rounded hover:bg-white hover:!text-blue-700 hover:cursor-pointer hover:border-blue-700 hover:border-2">
              Choose file
            </span>
          </>
        )}
        <input
          type="file"
          id="category"
          name="image"
          className="hidden"
          onChange={handleChange}
          accept="image/*"
        />
      </label>
    </div>
  );
};

export default UploadInput;

import React, { useState } from 'react';
import { handleUpload } from '../../utils/apiFunctions/apifunctions';
import UploadInput from '../../components/UploadInput';
import ModalComponent from '../../components/Modal';

const UploadForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [category, setCategory] = useState<string>('');
  const [uploadStatus, setUploadStatus] = useState<boolean | null>(null);

  const onSubmit = async () => {
    const result = await handleUpload();
    setUploadStatus(result);
  };

  const toggleModal = () => setUploadStatus(null);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-2xl shadow-md bg-white space-y-4">
<ModalComponent uploadStatus={uploadStatus} toggleModal={toggleModal} />
      <UploadInput setSelectedFile={setSelectedFile} />
      <label htmlFor="categoryInput" className="mt-4 block text-md font-medium text-gray-700 mb-1">
        Category
      </label>
      <input
        name="categoryInput"
        className="p-1 h-[30px] border-gray-300 border w-full focus:border-gray-500"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <div className="w-full flex justify-center">
        <button
          className="align-middle h-[50px] w-[150px] text-white rounded-3xl bg-blue-700 hover:bg-white hover:text-blue-700 hover:cursor-pointer"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UploadForm;

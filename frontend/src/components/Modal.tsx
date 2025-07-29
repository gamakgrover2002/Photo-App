import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

type ModalComponentProps ={
  uploadStatus: boolean | null;
  toggleModal: () => void;
}
const ModalComponent:React.FC<ModalComponentProps> = ({uploadStatus,toggleModal})=>{
    return <Modal className={`${uploadStatus? "bg-green-100 border-green-400 border-2":"bg-red-100 border-2 border-red-400"} w-[600px]  top-0 fixed justify-center `} isOpen={uploadStatus !== null} toggle={toggleModal}>
    <ModalHeader className='text-center text-2xl' toggle={toggleModal}>
      {uploadStatus ? 'Upload Successful' : 'Upload Failed'}
    </ModalHeader>
    <ModalBody className='text-center text-lg'>
      {uploadStatus
        ? 'Your file has been uploaded successfully.'
        : 'There was an error uploading your file. Please try again.'}
    </ModalBody>
    <ModalFooter>
      <Button className='text-center w-[100%]' onClick={toggleModal}>
        Close
      </Button>
    </ModalFooter>
  </Modal>;

}
export default ModalComponent;
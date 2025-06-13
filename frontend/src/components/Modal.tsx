import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

type ModalComponentProps ={
  uploadStatus: boolean | null;
  toggleModal: () => void;
}
const ModalComponent:React.FC<ModalComponentProps> = ({uploadStatus,toggleModal})=>{
    return <Modal className={`${uploadStatus? "bg-green-300":"bg-red-300"} w-[400px] absolute top-0`} isOpen={uploadStatus !== null} toggle={toggleModal}>
    <ModalHeader className='text-center text-2xl' toggle={toggleModal}>
      {uploadStatus ? 'Upload Successful' : 'Upload Failed'}
    </ModalHeader>
    <ModalBody>
      {uploadStatus
        ? 'Your file has been uploaded successfully.'
        : 'There was an error uploading your file. Please try again.'}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggleModal}>
        OK
      </Button>
    </ModalFooter>
  </Modal>;

}
export default ModalComponent;
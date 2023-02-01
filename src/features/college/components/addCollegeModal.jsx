import Modal from "../../../components/ui/modal";
import Formfield from '../../../components/ui/formfield'
import Textarera from '../../../components/ui/textarera'
import Button from "../../../components/ui/button";

const AddCollegeModal = ({
  isOpen,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add College"
      className="w-[30vw]"
    >
      <form className="text-md">
      <Formfield  className={''} name={"name"} type={"text"} id={"collegename"} title={"College Name"} placeholder={"Enter name of college"} required={true} />
        <Formfield  className={'col-span-2'} name={"address"} type={"text"} id={"collegename"} title={"College Location"} placeholder={"Enter location of college"} required={true} />
        <Textarera className={'col-span-3'} name={"description"} type={"text area"} id={"collegename"} title={"Description"} placeholder={"Descriptions"} required={true} />
        <div className="flex justify-end gap-4  ">
        <Button className='bg-gray-900 text-white rounded-md ' buttonText={"Submit"} onClick={()=>{}}/>
        <Button className='bg-gray-400 text-white rounded-md' buttonText={"Cancel"} onClick={()=>{}}>Cancel</Button>   
        </div>
      </form>
    </Modal>
  );
};

export default AddCollegeModal;

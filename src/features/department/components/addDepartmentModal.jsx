import Modal from "../../../components/ui/modal";
import Formfield from '../../../components/ui/formfield'
import Textarera from '../../../components/ui/textarera'
import Button from "../../../components/ui/button";

const AddDepartmentModal = ({
  isOpen,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Department"
      className="w-[30vw]"
    >
      <form className="text-md">
      <Formfield className={'col-span-2'} name={"name"} type={"text"} id={"departmentname"} title={"Department Name"} placeholder={"Enter name of department"} required={true} />
        <Formfield className={'col-span-1'} name={"name"} type={"text"} id={"id"} title={"Department id*"} placeholder={"Enter department id"} required={true} />
        <Textarera  className={'col-span-3'} name={"description"} type={"text area"} id={"name"} title={"Description"} placeholder={"Descriptions"} required={true} />
        <div className="flex justify-end gap-4  ">
        <Button className='bg-gray-900 text-white rounded-md ' buttonText={"Submit"} onClick={()=>{}}/>
        <Button className='bg-gray-400 text-white rounded-md' buttonText={"Cancel"} onClick={()=>{}}>Cancel</Button>   
        </div>
      </form>
    </Modal>
  );
};

export default AddDepartmentModal;

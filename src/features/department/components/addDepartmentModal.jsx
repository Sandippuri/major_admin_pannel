import Modal from "../../../components/ui/modal";
import Inputfield from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";

const AddDepartmentModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Department"
      className="w-[30vw]"
    >
      <form className="text-md">
        <Inputfield
          name={"name"}
          type={"text"}
          id={"departmentname"}
          title={"Department Name"}
          placeholder={"Enter name of department"}
          required={true}
        />
        <Inputfield
          name={"name"}
          type={"text"}
          id={"id"}
          title={"Department id*"}
          placeholder={"Enter department id"}
          required={true}
        />
        <Textarera
          name={"description"}
          type={"text area"}
          id={"name"}
          title={"Description"}
          placeholder={"Descriptions"}
          required={true}
        />
        <div className="flex justify-end gap-4  ">
          <Button
            className="btn-primary"
            buttonText={"Submit"}
            onClick={() => {}}
          />
        </div>
      </form>
    </Modal>
  );
};

export default AddDepartmentModal;

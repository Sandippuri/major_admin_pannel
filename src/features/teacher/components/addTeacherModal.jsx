import Modal from "../../../components/ui/modal";
import InputField from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";

const AddTeacherModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Teacher"
      className="w-[30vw]"
    >
      <form className="text-md">
        <InputField
          name={"name"}
          type={"text"}
          id={"name"}
          title={"Teacher Name"}
          placeholder={"Enter name of teacher"}
          required={true}
        />
        <InputField
          name={"name"}
          type={"text"}
          id={"id"}
          title={"Teacher id"}
          placeholder={"Enter the id of teacher"}
          required={true}
        />
        <InputField
          name={"name"}
          type={"text"}
          id={"post"}
          title={"Post"}
          placeholder={"Enter the post of teacher"}
          required={true}
        />
        <InputField
          name={"name"}
          type={"text"}
          id={"name"}
          title={"Department"}
          placeholder={"Enter the department"}
          required={true}
        />
        <Textarera
          name={"description"}
          type={"text area"}
          id={"collegename"}
          title={"Description (Optional)"}
          placeholder={"Descriptions"}
          required={true}
        />
        <div className="flex justify-end gap-4  ">
          <Button
            className="btn-primary "
            buttonText={"Submit"}
            onClick={() => {}}
          />
        </div>
      </form>
    </Modal>
  );
};

export default AddTeacherModal;

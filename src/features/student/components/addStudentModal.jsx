import Modal from "../../../components/ui/modal";
import Formfield from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";

const AddStudentModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Student"
      className="w-[30vw]"
    >
      <form className="text-md">
        <Formfield
          className={""}
          name={"name"}
          type={"text"}
          id={"studentname"}
          title={"Student Name"}
          placeholder={"Enter name of student"}
          required={true}
        />
        <Formfield
          className={""}
          name={"name"}
          type={"text"}
          id={"id"}
          title={"Section"}
          placeholder={"Enter the section"}
          required={true}
        />
        <Formfield
          className={""}
          name={"name"}
          type={"text"}
          id={"id"}
          title={"Roll No."}
          placeholder={"Enter the roll no."}
          required={true}
        />
        <Textarera
          className={"col-span-3"}
          name={"description"}
          type={"text area"}
          id={"collegename"}
          title={"Description (Optional)"}
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

export default AddStudentModal;

import Modal from "../../../components/ui/modal";
import InputField from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";

const AddCollegeModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add College"
      className="w-[30vw]"
    >
      <form className="text-md">
        <InputField
          name={"name"}
          type={"text"}
          id={"collegename"}
          title={"College Name"}
          placeholder={"Enter name of college"}
          required={true}
        />
        <InputField
          name={"address"}
          type={"text"}
          id={"collegename"}
          title={"College Location"}
          placeholder={"Enter location of college"}
          required={true}
        />
        <Textarera
          name={"description"}
          type={"text area"}
          id={"collegename"}
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

export default AddCollegeModal;

import Modal from "../../../components/ui/modal";
import Inputfield from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";

const AddResultModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Result"
      className="w-[30vw]"
    >
      <form className="text-md">
        <Inputfield
          name={"title"}
          type={"text"}
          id={"name"}
          title={"Title"}
          placeholder={"Enter the notice"}
          required={true}
        />
        <Inputfield
          name={"date"}
          type={"date"}
          id={"id"}
          title={"Date*"}
          placeholder={"Enter date in yyyy-mm-dd format"}
          required={true}
        />

        <Textarera
          name={"description"}
          type={"text area"}
          id={"name"}
          title={"Description (optional)"}
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

export default AddResultModal;

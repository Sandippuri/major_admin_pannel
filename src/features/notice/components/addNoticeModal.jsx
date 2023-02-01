import Modal from "../../../components/ui/modal";
import Formfield from "../../../components/ui/formfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";

const AddNoticeModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add College"
      className="w-[30vw]"
    >
      <form className="text-md">
        <Formfield
          className={"col-span-1"}
          name={"title"}
          type={"text"}
          id={"name"}
          title={"Title"}
          placeholder={"Enter the notice"}
          required={true}
        />
        <Formfield
          className={"col-span-1"}
          name={"date"}
          type={"date"}
          id={"id"}
          title={"Date*"}
          placeholder={"Enter date in yyyy-mm-dd format"}
          required={true}
        />

        <Textarera
          className={"col-span-3"}
          name={"description"}
          type={"text area"}
          id={"name"}
          title={"Description (optional)"}
          placeholder={"Descriptions"}
          required={true}
        />
        <div className="flex justify-end gap-4  ">
          <Button
            className="bg-gray-900 text-white rounded-md "
            buttonText={"Submit"}
            onClick={() => {}}
          />
          <Button
            className="bg-gray-400 text-white rounded-md"
            buttonText={"Cancel"}
            onClick={() => {}}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddNoticeModal;

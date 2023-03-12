import Modal from "../../../components/ui/modal";
import InputField from "../../../components/ui/inputfield";
import SelectField from "../../../components/ui/selectfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";

const AddSectionModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Section"
      className="w-[30vw]"
    >
      <form className="text-md">
        <InputField
          name={"sectionName"}
          type={"text"}
          id={"sectionName"}
          title={"Section Name"}
          placeholder={"eg. BCT-AB"}
          required={true}
          className={"mb-2"}
        />
        <SelectField
          name={"batch"}
          id={"batch"}
          title={"Batch"}
          required={true}
          className={"my-2"}
          options={[
            { value: "2075", label: "2075" },
            { value: "2076", label: "2076" },
            { value: "2077", label: "2077" },
            { value: "2078", label: "2078" },
          ]}
        />
        <div className="flex justify-end gap-4 mt-4 ">
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

export default AddSectionModal;

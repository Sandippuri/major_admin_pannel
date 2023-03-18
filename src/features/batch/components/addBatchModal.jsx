import { useState } from "react";
import Modal from "../../../components/ui/modal";
import InputField from "../../../components/ui/inputfield";
import SelectField from "../../../components/ui/selectfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";
import { useAddBatchMutation } from "../../../redux-toolkit/apiSlices/batch";
import { toast } from "react-toastify";

const AddBatchModal = ({ isOpen, closeModal }) => {
  const [batch, setBatch] = useState({});
  const [addBatch, response] = useAddBatchMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addBatch(batch);
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Batch added successfully");
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Batch"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <label
          htmlFor="batchYear"
          className="block mb-2 text-sm font-medium text-primary"
        >
          Batch Year
        </label>
        <input
          type="text"
          onChange={(e) => setBatch({ ...batch, year: Number(e.target.value) })}
          name="batchYear"
          id="batchYear"
          className="input-field"
          placeholder="Enter batch year"
          required
        />
        <div className="flex justify-end gap-4 mt-4 ">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default AddBatchModal;

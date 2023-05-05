import Modal from "../../../components/ui/modal";
import { useState, useEffect } from "react";
import Inputfield from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import {
  useGetSingleBatchQuery,
  useEditBatchMutation,
} from "../../../redux-toolkit/apiSlices/batch";
import Button from "../../../components/ui/button";
import { toast } from "react-toastify";

const EditBatchModal = ({ isOpen, closeModal, batchId }) => {
  console.log(batchId);
  const { data: singleBatch } = useGetSingleBatchQuery(batchId);
  const [editedData, setEditedData] = useState(null);
  const [editBatch] = useEditBatchMutation();
  const singleBatchValue = singleBatch?.value;
  useEffect(() => {
    if (singleBatchValue) {
      setEditedData(singleBatchValue);
    }
  }, [singleBatchValue]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await editBatch({
        ID: batchId,
        year: editedData.year,
      });
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Batch Edited successfully");
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
      title="Edit Batch"
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
          value={editedData?.year || ""}
          onChange={(e) =>
            setEditedData({ ...editedData, year: Number(e.target.value) })
          }
          name="batchYear"
          id="batchYear"
          className="input-field"
          placeholder="Enter batch year"
          required
        />
        <div className="flex justify-end gap-4 mt-4  ">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default EditBatchModal;

import Modal from "../../../components/ui/modal";
import { useState, useEffect } from "react";
import Inputfield from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import {
  useGetSingleCollegeQuery,
  useEditCollegeMutation,
} from "../../../redux-toolkit/apiSlices/college";
import Button from "../../../components/ui/button";
import { toast } from "react-toastify";

const EditCollegeModal = ({ isOpen, closeModal, collegeId }) => {
  console.log(collegeId);
  const { data: singleCollege } = useGetSingleCollegeQuery(collegeId);
  const [editedData, setEditedData] = useState(null);
  const [editCollege] = useEditCollegeMutation();
  const singleCollegeValue = singleCollege?.value;
  useEffect(() => {
    if (singleCollegeValue) {
      setEditedData(singleCollegeValue);
    }
  }, [singleCollegeValue]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await editCollege({
        ID: collegeId,
        name: editedData.name,
        location: editedData.location,
      });
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("College Edited successfully");
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
      title="Edit College"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <label
          htmlFor="collegeName"
          className="block mb-2 text-sm font-medium text-primary"
        >
          College Name
        </label>
        <input
          type="text"
          value={editedData?.name || " "}
          onChange={(e) =>
            setEditedData({ ...editedData, name: e.target.value })
          }
          name="collegeName"
          id="collegeName"
          className="input-field"
          placeholder="Enter name of College"
          required
        />
        <label
          htmlFor="collegeName"
          className="block mb-2 text-sm font-medium text-primary"
        >
          Location
        </label>
        <input
          type="text"
          value={editedData?.location || " "}
          onChange={(e) =>
            setEditedData({ ...editedData, location: e.target.value })
          }
          name="collegeName"
          id="collegeName"
          className="input-field"
          placeholder="Enter name of College"
          required
        />
        <div className="flex justify-end gap-4 mt-4  ">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default EditCollegeModal;

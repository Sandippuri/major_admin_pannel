import Modal from "../../../components/ui/modal";
import { useState, useEffect } from "react";
import Inputfield from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import {
  useGetSingleDepartmentQuery,
  useEditDepartmentMutation,
} from "../../../redux-toolkit/apiSlices/department";
import Button from "../../../components/ui/button";
import { toast } from "react-toastify";

const EditDepartmentModal = ({ isOpen, closeModal, departmentId }) => {
  console.log(departmentId);
  const { data: singleDepartment } = useGetSingleDepartmentQuery(departmentId);
  const [editedData, setEditedData] = useState(null);
  const [editDepartment] = useEditDepartmentMutation();
  const singleDepartmentValue = singleDepartment?.value;
  useEffect(() => {
    if (singleDepartmentValue) {
      setEditedData(singleDepartmentValue);
    }
  }, [singleDepartmentValue]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await editDepartment({
        ID: departmentId,
        name: editedData.name,
      });
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Department Edited successfully");
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
      title="Edit Department"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <label
          htmlFor="departmentName"
          className="block mb-2 text-sm font-medium text-primary"
        >
          Department Name
        </label>
        <input
          type="text"
          value={editedData?.name || " "}
          onChange={(e) =>
            setEditedData({ ...editedData, name: e.target.value })
          }
          name="departmentName"
          id="departmentName"
          className="input-field"
          placeholder="Enter name of department"
          required
        />
        <div className="flex justify-end gap-4 mt-4  ">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default EditDepartmentModal;

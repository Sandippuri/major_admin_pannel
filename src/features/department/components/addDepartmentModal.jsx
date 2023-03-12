import Modal from "../../../components/ui/modal";
import { useState } from "react";
import Inputfield from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import { useAddDepartmentMutation } from "../../../redux-toolkit/apiSlices/department";
import Button from "../../../components/ui/button";
import { toast } from "react-toastify";

const AddDepartmentModal = ({ isOpen, closeModal }) => {
  const [department, setDepartment] = useState(null);
  const [addDepartment] = useAddDepartmentMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addDepartment(department);
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Department added successfully");
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
      title="Add Department"
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
          onChange={(e) =>
            setDepartment({ ...department, name: e.target.value })
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

export default AddDepartmentModal;

import React, { useState } from "react";
import Modal from "../../../components/ui/modal";
import Inputfield from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";
import { useAddStudentMutation } from "../../../redux-toolkit/apiSlices/student";
import { toast } from "react-toastify";
const AddStudentModal = ({ isOpen, closeModal }) => {
  const [student, setStudent] = useState(null);
  const [addStudent, response] = useAddStudentMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addStudent(student);
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Student added successfully");
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
    // closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Student"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <Inputfield
          className={""}
          name={"name"}
          type={"text"}
          title={"Student Name"}
          placeholder={"Enter name of student"}
          required={true}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        />
        <Inputfield
          className={""}
          name={"citizenshipNumber"}
          type={"text"}
          title={"Citizenship Number"}
          placeholder={"Enter the section"}
          required={true}
          onChange={(e) =>
            setStudent({ ...student, citizenshipNumber: e.target.value })
          }
        />
        <Inputfield
          className={""}
          name={"dateOfBirth"}
          type={"date"}
          title={"Date of Birth"}
          placeholder={"Date of Birth"}
          required={true}
          onChange={(e) =>
            setStudent({ ...student, dateOfBirth: e.target.value })
          }
        />
        <Inputfield
          className={""}
          name={"sectionId"}
          type={"number"}
          id={"id"}
          title={"Section"}
          placeholder={"Section"}
          required={true}
          onChange={(e) =>
            setStudent({ ...student, sectionId: e.target.value })
          }
        />
        <div className="flex justify-end gap-4 mt-4">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default AddStudentModal;

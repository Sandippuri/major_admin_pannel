import React, { useState } from "react";
import Modal from "../../../components/ui/modal";
import Inputfield from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";
import { useAddStudentMutation } from "../../../redux-toolkit/apiSlices/student";
import { useGetAllSectionsQuery } from "../../../redux-toolkit/apiSlices/section";
import { toast } from "react-toastify";
const AddStudentModal = ({ isOpen, closeModal }) => {
  const [student, setStudent] = useState(null);
  const [addStudent] = useAddStudentMutation();

  const { data: sectionData, isLoading } = useGetAllSectionsQuery();

  console.log(sectionData);

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
          name={"rollNumber"}
          type={"text"}
          title={"Roll Number"}
          placeholder={"Enter the section"}
          required={true}
          onChange={(e) =>
            setStudent({ ...student, rollNumber: e.target.value })
          }
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
        <div>
          <label
            htmlFor="college"
            className="block mb-2 text-sm font-medium text-primary"
          >
            Section
          </label>
          <select
            name="college"
            className="input-field"
            onChange={(e) => {
              setStudent({
                ...student,
                sectionId: Number(e.target.value),
              });
            }}
          >
            <option value="">Select Section</option>
            {sectionData?.value.map((section) => (
              <option key={section.id} value={Number(section.id)}>
                {section.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default AddStudentModal;

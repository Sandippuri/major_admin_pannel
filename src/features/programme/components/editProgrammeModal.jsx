import Modal from "../../../components/ui/modal";
import { useState, useEffect } from "react";
import InputField from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import { useGetAllDepartmentsQuery } from "../../../redux-toolkit/apiSlices/department";
import {
  useEditProgrammeMutation,
  useGetSingleProgrammeQuery,
} from "../../../redux-toolkit/apiSlices/programme";
import Button from "../../../components/ui/button";
import { toast } from "react-toastify";

const EditProgrammeModal = ({ isOpen, closeModal, programmeId }) => {
  console.log(programmeId);
  const { data: departmentData } = useGetAllDepartmentsQuery();
  const { data: singleProgramme } = useGetSingleProgrammeQuery(programmeId);
  const [editProgramme] = useEditProgrammeMutation();
  const [editedData, setEditedData] = useState(null);
  const singleProgrammeValue = singleProgramme?.value;
  useEffect(() => {
    if (singleProgrammeValue) {
      setEditedData(singleProgrammeValue);
    }
  }, [singleProgrammeValue]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await editProgramme({
        ID: programmeId,
        name: editedData.name,
      });
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Programme Edited successfully");
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
      title="Edit Programme"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <InputField
          name={"programme"}
          type={"text"}
          id={"programme"}
          title={"Programme Name"}
          placeholder={"eg. BCT"}
          required={true}
          className={"mb-2"}
          onChange={(e) => {
            setEditedData({ ...editedData, name: e.target.value });
          }}
        />
        <InputField
          name={"fullName"}
          type={"text"}
          id={"fullName"}
          title={"Full Name"}
          placeholder={"eg. Bachelor of Civil Engineering"}
          required={true}
          className={"mb-2"}
          onChange={(e) => {
            setEditedData({ ...editedData, full_name: e.target.value });
          }}
        />
        <label
          htmlFor="campusProgramme"
          className="block mb-2 text-sm font-medium text-primary"
        >
          Department
        </label>
        <select
          name="campusProgramme"
          className="input-field"
          onChange={(e) => {
            setEditedData({
              ...editedData,
              department_id: Number(e.target.value),
            });
          }}
        >
          {departmentData?.value.map((department) => (
            <option key={department.ID} value={Number(department.ID)}>
              {department.name}
            </option>
          ))}
        </select>
        <div className="flex justify-end gap-4 mt-4 ">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default EditProgrammeModal;

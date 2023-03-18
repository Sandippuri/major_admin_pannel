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

const EditSubjectModal = ({ isOpen, closeModal, programmeId }) => {
  const { data: departmentData } = useGetAllDepartmentsQuery();
  const { data: singleProgramme } = useGetSingleProgrammeQuery(programmeId);
  const [editProgramme] = useEditProgrammeMutation();
  const [editedData, setEditedData] = useState(null);

  const singleProgrammeValue = singleProgramme?.value;
  console.log(singleProgrammeValue);
  useEffect(() => {
    if (singleProgrammeValue) {
      setEditedData(singleProgrammeValue);
    }
  }, [singleProgrammeValue]);
  // console.log(editedData);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await editProgramme({
        ID: programmeId,
        name: editedData.name,
        full_name: editedData.full_name,
        department_id: editedData.department_id,
      });
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Subject Edited successfully");
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
      title="Edit Subject"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <label
          htmlFor="programme"
          className="block mb-2 text-sm font-medium text-primary"
        >
          Programme Name
        </label>
        <input
          type="text"
          value={editedData?.name || ""}
          onChange={(e) =>
            setEditedData({ ...editedData, name: e.target.value })
          }
          name="programme"
          id="programme"
          className="input-field"
          placeholder="eg. BCT"
          required
        />
        <label
          htmlFor="programmeFullname"
          className="block mb-2 text-sm font-medium text-primary"
        >
          Programme Name
        </label>
        <input
          type="text"
          value={editedData?.full_name || ""}
          onChange={(e) =>
            setEditedData({ ...editedData, full_name: e.target.value })
          }
          name="programmeFullname"
          id="programmeFullname"
          className="input-field"
          placeholder="eg. Computer Engineering"
          required
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
          <option value={editedData?.department_id}>
            {editedData?.department?.name}
          </option>
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

export default EditSubjectModal;

import { useState } from "react";
import Modal from "../../../components/ui/modal";
import InputField from "../../../components/ui/inputfield";
import SelectField from "../../../components/ui/selectfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";
import { useAddProgrammeMutation } from "../../../redux-toolkit/apiSlices/programme";
import { useGetAllDepartmentsQuery } from "../../../redux-toolkit/apiSlices/department";
import { toast } from "react-toastify";

const AddCollegeProgrammeModal = ({ isOpen, closeModal }) => {
  const [programme, setProgramme] = useState(null);
  const [addProgramme, response] = useAddProgrammeMutation();
  const { data: departmentData } = useGetAllDepartmentsQuery();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addProgramme(programme);
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Programme added successfully");
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
      title="Add programme"
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
            setProgramme({ ...programme, name: e.target.value });
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
            setProgramme({ ...programme, full_name: e.target.value });
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
            setProgramme({
              ...programme,
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

export default AddCollegeProgrammeModal;

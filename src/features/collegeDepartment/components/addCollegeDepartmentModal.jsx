import { useState } from "react";
import Modal from "../../../components/ui/modal";
import SelectField from "../../../components/ui/selectfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";
import { useGetAllDepartmentsQuery } from "../../../redux-toolkit/apiSlices/department";
import { useGetAllProgrammesQuery } from "../../../redux-toolkit/apiSlices/programme";
import {
  useGetAllCollegesQuery,
  useAddCollegeMutation,
} from "../../../redux-toolkit/apiSlices/college";

const AddCollegeDepartmentModal = ({ isOpen, closeModal }) => {
  const [college, setCollege] = useState({});
  const { data: collegeData } = useGetAllCollegesQuery();
  const { data: departmentData } = useGetAllDepartmentsQuery();
  const [addCollege, response] = useAddCollegeMutation();
  console.log(collegeData);

  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, address } = e.target.elements;
    setCollege({
      name: name.value,
      location: address.value,
    });
    console.log(college);
    const response = await addCollege(college);
    console.log(response);
    // closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add College Department"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <SelectField
          name={"college"}
          id={"college"}
          title={"College"}
          required={true}
          className={"mb-2"}
          options={collegeData?.value.map((college) => {
            return {
              value: college.id,
              label: college.name,
            };
          })}
        />
        <label
          htmlFor="campusDepartment"
          className="block my-1 text-sm font-medium text-primary"
        >
          Select Department
        </label>
        <div className="flex flex-col gap-1">
          {departmentData?.value.map((department) => {
            return (
              <label key={department.ID}>
                <input className="m-1" type="checkbox" />
                {department.name}
              </label>
            );
          })}
        </div>
        <div className="flex justify-end gap-4 mt-4  ">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default AddCollegeDepartmentModal;

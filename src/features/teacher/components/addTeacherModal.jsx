import React, { useState } from "react";
import Modal from "../../../components/ui/modal";
import InputField from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import {
  useGetAllCollegesQuery,
  useGetSingleCollegeQuery,
} from "../../../redux-toolkit/apiSlices/college";
import Button from "../../../components/ui/button";
import { useGetAllDepartmentsQuery } from "../../../redux-toolkit/apiSlices/department";
import { useAddTeacherMutation } from "../../../redux-toolkit/apiSlices/teacher";
import { toast } from "react-toastify";

const AddTeacherModal = ({ isOpen, closeModal }) => {
  const [teacher, setTeacher] = useState(null);
  const [selectedCollegeID, setSelectedCollegeID] = useState(null);
  const { data: departmentData } = useGetAllDepartmentsQuery();
  const { data: collegeData, isLoading } = useGetAllCollegesQuery();
  const { data: singleCollege } = useGetSingleCollegeQuery(selectedCollegeID);
  const [addTeacher] = useAddTeacherMutation();
  console.log("singleCollege", singleCollege);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(teacher);
    const teacherData = {
      data: {
        attributes: {
          title: teacher.title,
          full_name: teacher.full_name,
          post: teacher.post,
          campusDepartmentId: teacher.campusDepartmentId,
        },
      },
    };
    console.log(teacherData);
    try {
      const response = await addTeacher(teacherData);
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Teacher added successfully");
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
      title="Add Teacher"
      className="w-[30vw]"
    >
      <form onSubmit={handleSubmit} className="text-md flex flex-col gap-2">
        <div>
          <label
            htmlFor="campusProgramme"
            className="block mb-2 text-sm font-medium text-primary"
          >
            Select Title
          </label>
          <select
            name="campusProgramme"
            className="input-field"
            onChange={(e) => {
              setTeacher({ ...teacher, title: e.target.value });
            }}
          >
            <option value="">Select Title</option>
            <option value="Doctor">Dr.</option>
            <option value="Professor">Prof.</option>
            <option value="Professor Doctor">Prof. Dr.</option>
            <option value="Associate Professor">Assoc Prof.</option>
            <option value="Assistant Professor">Asst Prof.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
        </div>
        <InputField
          name={"name"}
          type={"text"}
          id={"name"}
          title={"Full Name"}
          required={true}
          onChange={(e) => {
            setTeacher({ ...teacher, full_name: e.target.value });
          }}
        />
        <InputField
          name={"name"}
          type={"text"}
          id={"post"}
          title={"Post"}
          required={true}
          onChange={(e) => {
            setTeacher({ ...teacher, post: e.target.value });
          }}
        />
        <div>
          <label
            htmlFor="campusProgramme"
            className="block mb-2 text-sm font-medium text-primary"
          >
            College
          </label>
          <select
            name="campusProgramme"
            className="input-field"
            onChange={(e) => {
              setSelectedCollegeID(e.target.value);
            }}
          >
            <option value="">Select College</option>
            {collegeData?.value.map((college) => (
              <option key={college.ID} value={Number(college.ID)}>
                {college.name}
              </option>
            ))}
          </select>
        </div>
        <div>
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
              setTeacher({
                ...teacher,
                campusDepartmentId: Number(e.target.value),
              });
            }}
          >
            <option value="">Select Department</option>
            {singleCollege?.value?.campusDepartments?.map(
              (collegeDepartment) => (
                <option
                  key={collegeDepartment.ID}
                  value={Number(collegeDepartment.ID)}
                >
                  {collegeDepartment?.department?.name}
                </option>
              )
            )}
          </select>
        </div>

        <div className="flex justify-end gap-4 mt-4 ">
          <Button className="btn-primary " buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default AddTeacherModal;

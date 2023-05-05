import Modal from "../../../components/ui/modal";
import { useState, useEffect } from "react";
import InputField from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import { useGetAllDepartmentsQuery } from "../../../redux-toolkit/apiSlices/department";
import {
  useGetAllCollegesQuery,
  useGetSingleCollegeQuery,
} from "../../../redux-toolkit/apiSlices/college";
import {
  useEditProgrammeMutation,
  useGetSingleProgrammeQuery,
} from "../../../redux-toolkit/apiSlices/programme";
import { useGetSingleCollegeDepartmentQuery } from "../../../redux-toolkit/apiSlices/collegeDepartment";
import { useGetSingleTeacherQuery } from "../../../redux-toolkit/apiSlices/teacher";
import Button from "../../../components/ui/button";
import { toast } from "react-toastify";

const EditTeacherModal = ({ isOpen, closeModal, teacherID }) => {
  const [selectedCollegeID, setSelectedCollegeID] = useState(null);
  console.log(teacherID);
  const { data: departmentData } = useGetAllDepartmentsQuery();
  const { data: collegeData, isLoading } = useGetAllCollegesQuery();
  const { data: singleTeacher } = useGetSingleTeacherQuery(teacherID);
  const { data: singleCollege } = useGetSingleCollegeQuery(selectedCollegeID);
  const [editProgramme] = useEditProgrammeMutation();
  const [editedData, setEditedData] = useState(null);
  const singleTeacherValue = singleTeacher?.data?.data;
  console.log(singleTeacher?.data?.campusdepartment);
  useEffect(() => {
    if (singleTeacherValue) {
      setEditedData(singleTeacherValue);
    }
  }, [singleTeacherValue]);
  // console.log(editedData);
  const submitHandler = async (e) => {
    e.preventDefault();
    const teacherEditedData = {
      data: {
        attributes: {
          title: editedData.title,
          first_name: editedData.first_name,
          last_name: editedData.last_name,
          post: editedData.post,
          campusDepartmentId: editedData.campusDepartmentId,
        },
      },
    };
    try {
      const response = await editProgramme();
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
            value={editedData?.title || ""}
            onChange={(e) => {
              setEditedData({ ...editedData, title: e.target.value });
            }}
          >
            <option value="">Select Title</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
            <option value="Prof. Dr.">Prof. Dr.</option>
            <option value="Assoc Prof.">Assoc Prof.</option>
            <option value="Asst Prof.">Asst Prof.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
        </div>
        <InputField
          name={"name"}
          type={"text"}
          id={"name"}
          title={"First Name"}
          required={true}
          value={editedData?.first_name || ""}
          onChange={(e) => {
            setEditedData({ ...editedData, first_name: e.target.value });
          }}
        />
        <InputField
          name={"name"}
          type={"text"}
          id={"id"}
          title={"Last Name"}
          required={true}
          value={editedData?.last_name || ""}
          onChange={(e) => {
            setEditedData({ ...editedData, last_name: e.target.value });
          }}
        />
        <InputField
          name={"name"}
          type={"text"}
          id={"post"}
          title={"Post"}
          value={editedData?.post || ""}
          required={true}
          onChange={(e) => {
            setEditedData({ ...editedData, post: e.target.value });
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
            value={editedData?.campusdepartment?.campus?.ID}
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
            value={editedData?.campusdepartment?.department?.ID}
            onChange={(e) => {}}
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

export default EditTeacherModal;

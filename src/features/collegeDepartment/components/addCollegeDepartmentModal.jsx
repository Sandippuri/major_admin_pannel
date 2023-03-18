import { useState, useEffect } from "react";
import Modal from "../../../components/ui/modal";
import Button from "../../../components/ui/button";
import { useGetAllDepartmentsQuery } from "../../../redux-toolkit/apiSlices/department";
import { useAddCollegeDepartmentMutation } from "../../../redux-toolkit/apiSlices/collegeDepartment";
import {
  useGetAllCollegesQuery,
  useAddCollegeMutation,
} from "../../../redux-toolkit/apiSlices/college";
import { toast } from "react-toastify";

const AddCollegeDepartmentModal = ({ isOpen, closeModal }) => {
  const [collegeDepartment, setCollegeDepartment] = useState({});
  const [selectedDepartmentIds, setSelectedDepartmentIds] = useState([]);
  const { data: collegeData } = useGetAllCollegesQuery();
  const { data: departmentData } = useGetAllDepartmentsQuery();
  const [addCollegeDepartment] = useAddCollegeDepartmentMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addCollegeDepartment({
        ...collegeDepartment,
        department_ids: selectedDepartmentIds,
      });
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Campus Deaprtment added successfully");
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
      title="Add College Department"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <label
          htmlFor="college"
          className="block mb-2 text-sm font-medium text-primary"
        >
          College
        </label>
        <select
          name="college"
          className="input-field"
          onChange={(e) => {
            setCollegeDepartment({
              ...collegeDepartment,
              campus_id: Number(e.target.value),
            });
          }}
        >
          <option value="">Select College</option>
          {collegeData?.value.map((college) => (
            <option key={college.ID} value={Number(college.ID)}>
              {college.name}
            </option>
          ))}
        </select>
        <label
          htmlFor="campusDepartment"
          className="block mt-4 mb-1 text-sm font-medium text-primary"
        >
          Select Department
        </label>
        <div className="flex flex-col gap-1">
          {departmentData?.value.map((department) => {
            return (
              <label key={department.ID}>
                <input
                  className="m-1"
                  type="checkbox"
                  onChange={(e) => {
                    // add to list
                    const { value, checked } = e.target;
                    console.log(department.ID, checked);
                    if (checked) {
                      console.log("checked");
                      setSelectedDepartmentIds([
                        ...selectedDepartmentIds,
                        department.ID,
                      ]);
                    } else {
                      // remove from list
                      console.log("unchecked");
                      setSelectedDepartmentIds(
                        selectedDepartmentIds.filter(
                          (id) => id !== department.ID
                        )
                      );
                    }
                  }}
                />
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

import { useState } from "react";
import Modal from "../../../components/ui/modal";
import SelectField from "../../../components/ui/selectfield";
import Button from "../../../components/ui/button";
import { useGetSingleDepartmentQuery } from "../../../redux-toolkit/apiSlices/department";
import { useGetSingleCollegeQuery } from "../../../redux-toolkit/apiSlices/college";
import { useParams, useNavigate } from "react-router-dom";
import { useAddDepartmentProgrammeMutation } from "../../../redux-toolkit/apiSlices/collegeProgramme";
import { toast } from "react-toastify";

const AddDepartmentProgrammeModal = ({
  isOpen,
  closeModal,
  collegeDepartmentId,
}) => {
  const [selectedDepartmentId, setSelectedDepartmentId] = useState();
  const [selectedProgrammeIds, setSelectedProgrammeIds] = useState([]);
  const { data: singleCollege } = useGetSingleCollegeQuery(collegeDepartmentId);
  const [departmentProgramme, setDepartmentProgramme] = useState();
  console.log("departmentid", selectedDepartmentId);
  const { data: programmeData } =
    useGetSingleDepartmentQuery(selectedDepartmentId);
  const [addDepartmentProgramme] = useAddDepartmentProgrammeMutation();

  console.log(singleCollege);
  // console.log(programmeData);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addDepartmentProgramme({
        ...departmentProgramme,
        programme_ids: selectedProgrammeIds,
      });
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Campus Department added successfully");
        closeModal();
        navigate(0);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title={singleCollege?.value?.name}
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <div className="flex flex-col gap-2">
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
                const index = e.target.selectedIndex;
                const el = e.target.childNodes[index];
                const option = el.getAttribute("id");

                setDepartmentProgramme({
                  ...departmentProgramme,
                  campus_department_id: Number(e.target.value),
                });
                setSelectedDepartmentId(option);
              }}
            >
              <option value="">Select Department</option>
              {singleCollege?.value?.campusDepartments?.map(
                (campusDepartment) => (
                  <option
                    key={campusDepartment?.ID}
                    id={Number(campusDepartment?.department?.ID)}
                    value={Number(campusDepartment?.ID)}
                  >
                    {campusDepartment?.department?.name}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="campusProgramme"
              className="block mb-1 text-sm font-medium text-primary"
            >
              Select Programmes
            </label>
            {programmeData?.value?.programmes?.length === 0 ? (
              <p className="text-red-500 text-sm">No programs found</p>
            ) : (
              programmeData?.value?.programmes?.map((programme) => {
                return (
                  <label key={programme.ID}>
                    <input
                      className="m-1"
                      type="checkbox"
                      onChange={(e) => {
                        // add to list
                        if (e.target.checked) {
                          console.log("checked");
                          setSelectedProgrammeIds([
                            ...selectedProgrammeIds,
                            programme.ID,
                          ]);
                        } else {
                          // remove from list
                          console.log("unchecked");
                          setSelectedProgrammeIds(
                            selectedProgrammeIds.filter(
                              (id) => id !== programme.ID
                            )
                          );
                        }
                      }}
                    />
                    {programme.name}
                  </label>
                );
              })
            )}
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-4  ">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default AddDepartmentProgrammeModal;

import React, { useState } from "react";
import Modal from "../../../components/ui/modal";

import InputField from "../../../components/ui/inputfield";
import SelectField from "../../../components/ui/selectfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";
import { toast } from "react-toastify";
import { useAddSectionMutation } from "../../../redux-toolkit/apiSlices/section";
import { useGetAllBatchesQuery } from "../../../redux-toolkit/apiSlices/batch";
import {
  useGetAllCollegesQuery,
  useAddCollegeMutation,
  useGetSingleCollegeQuery,
} from "../../../redux-toolkit/apiSlices/college";
import { useGetAllDepartmentsQuery } from "../../../redux-toolkit/apiSlices/department";
import { useAddCollegeDepartmentMutation } from "../../../redux-toolkit/apiSlices/collegeDepartment";

const AddSectionModal = ({ isOpen, closeModal }) => {
  const [section, setSection] = useState(null);
  const [collegeProgrammes, setcollegeProgrammes] = useState(null);
  const [collegeID, setCollegeID] = useState(null);
  const [addSection] = useAddSectionMutation();
  const { data: batchData, isLoading } = useGetAllBatchesQuery();
  const { data: collegeData } = useGetAllCollegesQuery();
  const { data: singleCollegeData } = useGetSingleCollegeQuery(collegeID);
  console.log(singleCollegeData);
  const { data: departmentData } = useGetAllDepartmentsQuery();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addSection(section);
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
    closeModal();
  };

  // const programmeData = singleCollegeData?.value?.campusDepartments?.map(
  //   (collegeDepartment) => {
  //     collegeDepartment?.campusProgrammes?.map((campusProgramme) => {
  //       console.log("campus:programmes:", campusProgramme);
  //     });
  //   }
  // );

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Section"
      className="w-[30vw]"
    >
      <form className="flex flex-col text-md gap-1" onSubmit={submitHandler}>
        <InputField
          name={"section-name"}
          type={"text"}
          id={"section-name"}
          title={"Section Name"}
          required={true}
          className={"mb-2"}
          onChange={(e) => {
            setSection({ ...section, name: e.target.value });
          }}
        />
        <InputField
          name={"section-name"}
          type={"text"}
          id={"section-name"}
          title={"Group"}
          required={true}
          className={"mb-2"}
          onChange={(e) => {
            setSection({ ...section, group: e.target.value });
          }}
        />
        <div>
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
              setCollegeID(e.target.value);
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
            htmlFor="college"
            className="block mb-2 text-sm font-medium text-primary"
          >
            Batch
          </label>
          <select
            name="batch"
            className="input-field"
            onChange={(e) => {
              setSection({
                ...section,
                batch: Number(e.target.value),
              });
            }}
          >
            <option value="">Select Batch</option>
            {batchData?.value?.map((batch) => (
              <option key={batch.ID} value={batch.year}>
                {batch.year}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="programmes"
            className="block mb-2 text-sm font-medium text-primary"
          >
            Programmes
          </label>
          <select
            name="programmes"
            className="input-field"
            onChange={(e) => {
              setSection({
                ...section,
                campusProgrammeId: Number(e.target.value),
              });
            }}
          >
            <option value="">Select Programme</option>
            {singleCollegeData?.value?.campusDepartments?.map(
              (collegeDepartment) => {
                return collegeDepartment?.campusProgrammes?.map(
                  (campusProgramme) => {
                    // console.log("campus:programmes:", campusProgramme);
                    return (
                      <option
                        key={campusProgramme.ID}
                        value={campusProgramme.ID}
                      >
                        {campusProgramme.programme.name}
                      </option>
                    );
                  }
                );
              }
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

export default AddSectionModal;

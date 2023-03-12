import { useState } from "react";
import Modal from "../../../components/ui/modal";
import SelectField from "../../../components/ui/selectfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";
import { useGetAllCollegesQuery } from "../../../redux-toolkit/apiSlices/college";

const AddCollegeProgrammeModal = ({ isOpen, closeModal }) => {
  const [college, setCollege] = useState({});
  const { data: collegeData } = useGetAllCollegesQuery();

  const submitHandler = async (e) => {
    e.preventDefault();
    // closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add College Programme"
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
        <SelectField
          name={"programme"}
          id={"programme"}
          title={"Programme"}
          required={true}
          className={"mt-2"}
          options={[
            {
              value: "2075",
              label: "BCT",
            },
            { value: "2076", label: "BEX" },
            { value: "2077", label: "BLI" },
            { value: "2078", label: "AERO" },
          ]}
        />
        <div className="flex justify-end gap-4 mt-4  ">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default AddCollegeProgrammeModal;

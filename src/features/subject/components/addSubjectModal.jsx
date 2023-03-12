import { useState } from "react";
import Modal from "../../../components/ui/modal";
import InputField from "../../../components/ui/inputfield";
import Checkbox from "../../../components/ui/checkbox";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";
import { useAddCollegeMutation } from "../../../redux-toolkit/apiSlices/college";

const AddSubjectModal = ({ isOpen, closeModal }) => {
  const [college, setCollege] = useState({});
  const [addCollege, response] = useAddCollegeMutation();
  const [practical, setPractical] = useState(false);

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
      title="Add Subject"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <InputField
          name={"courseID"}
          type={"text"}
          id={"courseID"}
          title={"Course ID"}
          placeholder={"Unique Course ID"}
          required={true}
          className={"m-1"}
        />
        <InputField
          name={"courseName"}
          type={"text"}
          id={"courseName"}
          title={"Course Name"}
          placeholder={"E.G. Computer Networks"}
          required={true}
          className={"m-1"}
        />
        <InputField
          name={"marks"}
          type={"text"}
          id={"marks"}
          title={"Full Marks"}
          // placeholder={"100"}
          required={true}
          className={"m-1"}
        />
        <InputField
          name={"passMarks"}
          type={"text"}
          id={"passMarks"}
          title={"Pass Marks"}
          // placeholder={"100"}
          required={true}
          className={"m-1"}
        />
        <Checkbox title="Practical" onClick={() => setPractical(!practical)} />
        {practical && (
          <>
            <InputField
              name={"practicalMarks"}
              type={"text"}
              id={"practicalMarks"}
              title={"Practical Marks"}
              // placeholder={"100"}
              required={true}
              className={"m-1"}
            />
            <InputField
              name={"practicalPassMarks"}
              type={"text"}
              id={"practicalPassMarks"}
              title={"Practical Pass Marks"}
              // placeholder={"100"}
              required={true}
              className={"m-1"}
            />
          </>
        )}
        <div className="flex justify-end gap-4 mt-4 ">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default AddSubjectModal;

import { useState } from "react";
import Modal from "../../../components/ui/modal";
import InputField from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";
import { useAddCollegeMutation } from "../../../redux-toolkit/apiSlices/college";
import { toast } from "react-toastify";

const AddCollegeModal = ({ isOpen, closeModal }) => {
  const [college, setCollege] = useState(null);
  const [addCollege] = useAddCollegeMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addCollege(college);
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("College added successfully");
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
    // alert(error.message);
  };
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add College"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <InputField
          name={"name"}
          type={"text"}
          id={"collegename"}
          className="my-1"
          title={"College Name"}
          placeholder={"Enter name of college"}
          required={true}
          onChange={(e) => setCollege({ ...college, name: e.target.value })}
        />
        <InputField
          name={"address"}
          type={"text"}
          id={"collegename"}
          className="my-1"
          title={"College Location"}
          placeholder={"Enter location of college"}
          required={true}
          onChange={(e) => setCollege({ ...college, location: e.target.value })}
        />
        <div className="flex justify-end gap-4  mt-4">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default AddCollegeModal;

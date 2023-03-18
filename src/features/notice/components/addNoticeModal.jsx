import React, { useState } from "react";
import Modal from "../../../components/ui/modal";
import Inputfield from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import Button from "../../../components/ui/button";
import { useAddNoticeMutation } from "../../../redux-toolkit/apiSlices/notice";
import { toast } from "react-toastify";

const AddNoticeModal = ({ isOpen, closeModal }) => {
  const [notice, setNotice] = useState(null);
  const [addNotice] = useAddNoticeMutation();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addNotice(notice);
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Department added successfully");
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
      title="Add Notice"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <Inputfield
          name={"title"}
          type={"text"}
          id={"name"}
          title={"Title"}
          placeholder={"Enter the notice"}
          required={true}
          onChange={(e) => setNotice({ ...notice, title: e.target.value })}
        />

        <Textarera
          name={"description"}
          id={"description"}
          title={"Description"}
          placeholder={"Descriptions"}
          required={true}
          onChange={(e) => setNotice({ ...notice, details: e.target.value })}
        />
        <div className="flex justify-end gap-4  mt-4">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default AddNoticeModal;

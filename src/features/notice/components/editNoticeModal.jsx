import Modal from "../../../components/ui/modal";
import { useState, useEffect } from "react";
import InputField from "../../../components/ui/inputfield";
import Textarera from "../../../components/ui/textarera";
import { useGetAllDepartmentsQuery } from "../../../redux-toolkit/apiSlices/department";
import {
  useEditNoticeMutation,
  useGetSingleNoticeQuery,
} from "../../../redux-toolkit/apiSlices/notice";
import Button from "../../../components/ui/button";
import { toast } from "react-toastify";

const EditnoticeModal = ({ isOpen, closeModal, noticeId }) => {
  console.log(noticeId);
  const { data: singlenotice } = useGetSingleNoticeQuery(noticeId);
  const [editNotice] = useEditNoticeMutation();
  const [editedData, setEditedData] = useState(null);

  const singlenoticeValue = singlenotice?.value;
  console.log(singlenoticeValue);
  useEffect(() => {
    if (singlenoticeValue) {
      setEditedData(singlenoticeValue);
    }
  }, [singlenoticeValue]);
  // console.log(editedData);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await editNotice({
        id: noticeId,
        title: editedData.title,
        details: editedData.details,
      });
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Notice Edited successfully");
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
      title="Edit notice"
      className="w-[30vw]"
    >
      <form className="text-md" onSubmit={submitHandler}>
        <label
          htmlFor="notice_name"
          className="block mb-2 text-sm font-medium text-primary"
        >
          Title
        </label>
        <input
          type="text"
          value={editedData?.title || ""}
          onChange={(e) =>
            setEditedData({ ...editedData, title: e.target.value })
          }
          name="notice_name"
          id="notice_name"
          className="input-field"
          placeholder="eg. BCT"
          required
        />
        <label
          htmlFor="notice_details"
          className="block mb-2 text-sm font-medium text-primary"
        >
          Details
        </label>
        <textarea
          type="text"
          value={editedData?.details || ""}
          onChange={(e) =>
            setEditedData({ ...editedData, details: e.target.value })
          }
          name="notice_details"
          id="notice_details"
          className="input-field"
          placeholder=""
          rows={3}
          required
        />
        <div className="flex justify-end gap-4 mt-4 ">
          <Button className="btn-primary" buttonText={"Submit"} />
        </div>
      </form>
    </Modal>
  );
};

export default EditnoticeModal;

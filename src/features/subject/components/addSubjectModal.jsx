import { useState } from "react";
import Modal from "../../../components/ui/modal";
import InputField from "../../../components/ui/inputfield";
import Button from "../../../components/ui/button";
import { useAddSubjectMutation } from "../../../redux-toolkit/apiSlices/subject";
import { toast } from "react-toastify";

const AddSubjectModal = ({ isOpen, closeModal }) => {
  const [subject, setSubject] = useState(null);
  const [addSubject] = useAddSubjectMutation();
  const [practical, setPractical] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await addSubject(subject);
      console.log(response);
      if (response?.error?.status === 400) {
        toast.error(response?.error?.data?.error);
      } else {
        toast.success("Subject added successfully");
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
      title="Add Subject"
      className="w-[30vw]"
    >
      <form className=" flex flex-col text-md gap-1" onSubmit={submitHandler}>
        <InputField
          name={"courseID"}
          type={"text"}
          id={"courseID"}
          title={"Course ID"}
          placeholder={"Unique Course ID"}
          required={true}
          className={"m-1"}
          onChange={(e) => {
            setSubject({ ...subject, courseId: e.target.value });
          }}
        />
        <InputField
          name={"courseName"}
          type={"text"}
          id={"courseName"}
          title={"Course Name"}
          placeholder={"E.G. Computer Networks"}
          required={true}
          className={"m-1"}
          onChange={(e) => {
            setSubject({ ...subject, fullName: e.target.value });
          }}
        />
        <InputField
          name={"theoryMarks"}
          type={"text"}
          id={"theoryMarks"}
          title={"Theory Marks"}
          // placeholder={"100"}
          required={true}
          className={"m-1"}
          onChange={(e) => {
            setSubject({ ...subject, theory_marks: Number(e.target.value) });
          }}
        />
        <InputField
          name={"assessmentMarks"}
          type={"text"}
          id={"assessmentMarks"}
          title={"Assessment Marks"}
          // placeholder={"100"}
          required={true}
          className={"m-1"}
          onChange={(e) => {
            setSubject({
              ...subject,
              assessment_marks: Number(e.target.value),
            });
          }}
        />
        <InputField
          name={"passpercent"}
          type={"text"}
          id={"passpercent"}
          title={"Pass Percentage"}
          // placeholder={"100"}
          required={true}
          className={"m-1"}
          onChange={(e) => {
            setSubject({
              ...subject,
              passPercent: Number(e.target.value),
            });
          }}
        />
        <label className=" text-sm font-medium text-primary flex gap-1 ml-1 ">
          <input
            className=""
            type="checkbox"
            onChange={(e) => {
              e.target.checked ? setPractical(true) : setPractical(false);
            }}
            // onClick={() => setPractical(!practical)}
          />
          <p>Practical</p>
        </label>
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
              onChange={(e) => {
                setSubject({
                  ...subject,
                  practical: {
                    ...practical,
                    marks: Number(e.target.value),
                  },
                });
              }}
            />
            <InputField
              name={"practicalPassPercentage"}
              type={"text"}
              id={"practicalPassPercentage"}
              title={"Practical Pass Percentage"}
              // placeholder={"100"}
              required={true}
              className={"m-1"}
              onChange={(e) => {
                setSubject({
                  ...subject,
                  practical: {
                    ...practical,
                    passPercent: Number(e.target.value),
                  },
                });
              }}
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

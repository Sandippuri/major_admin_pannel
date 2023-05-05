import React, { useState } from "react";
import Modal from "../../../components/ui/modal";
import Inputfield from "../../../components/ui/inputfield";
import Button from "../../../components/ui/button";
import { useAddResultMutation } from "../../../redux-toolkit/apiSlices/result";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddGradeSheetModal = ({ isOpen, closeModal }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [partOption, setPartOption] = useState("I");
  const [examYear, setExamYear] = useState("");
  const [programme, setProgramme] = useState("");
  const [typeOption, setTypeOption] = useState("Regular");
  const [selectDropdownOption, setSelectDropdownOption] = useState("I");
  const [addResult] = useAddResultMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("ExamYear", examYear);
      formData.append("Programme", programme);
      formData.append("Type", typeOption);
      formData.append("Year", selectDropdownOption);
      formData.append("Part", partOption);
      console.log(formData);

      try {
        await axios
          .post(
            "http://result.timalsinasagar.com.np/gradesheet/upload/",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3R1ZGVudElkIjotMSwidGVhY2hlcklkIjotMSwiaWF0IjoxNjgyOTMyOTg1fQ.BmlLC9xQkGELZEl0_ND1x9-cPUlVGxQbWDB3mbICJQQ",
              },
            }
          )
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              toast.success("Gradesheet added successfully");
              closeModal();
              navigate(0);
            }
          });
      } catch (error) {
        toast.error(error?.response?.data);
      }
      // try {
      //   const response = await addResult(formData);
      //   // console.log(response);
      //   console.log(response);
      // } catch (error) {
      //   console.error(error);
      // }
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Gradesheet"
      className="w-[30vw]"
    >
      <form className="text-md flex flex-col gap-2" onSubmit={handleSubmit}>
        <Inputfield
          name={"title"}
          type={"text"}
          id={"name"}
          title={"Exam Year"}
          onChange={(e) => setExamYear(e.target.value)}
          placeholder={"Enter the notice"}
          required={true}
        />
        <Inputfield
          name={"title"}
          type={"text"}
          id={"name"}
          title={"Programme"}
          onChange={(e) => setProgramme(e.target.value)}
          placeholder={"Enter programme"}
          required={true}
        />
        <div className="flex gap-20">
          <div className="flex flex-col">
            <label htmlFor="type" className="text-sm font-medium text-primary">
              Select Type
            </label>
            <div name="type" className="flex gap-2">
              <input
                type="radio"
                id="regular"
                name="regular"
                value="Regular"
                checked={typeOption === "Regular"}
                onChange={(e) => setTypeOption(e.target.value)}
              />
              <label htmlFor="regular">Regular</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="back"
                name="back"
                value="Back"
                checked={typeOption === "Back"}
                onChange={(e) => setTypeOption(e.target.value)}
              />
              <label htmlFor="back">Back</label>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="part" className="text-sm font-medium text-primary">
              Select Part
            </label>
            <div name="part" className="flex gap-2">
              <input
                type="radio"
                id="first"
                name="first"
                value="I"
                checked={partOption === "I"}
                onChange={(e) => setPartOption(e.target.value)}
              />
              <label htmlFor="first">I</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="second"
                name="second"
                value="II"
                checked={partOption === "II"}
                onChange={(e) => setPartOption(e.target.value)}
              />
              <label htmlFor="II">II</label>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="sumbolsheet"
            className="text-sm font-medium text-primary"
          >
            Upload Symbol Number Sheet
          </label>
          <input
            name="file"
            type="file"
            accept=".csv"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            title="Symbol Number Sheet"
            required={true}
            className="input-field file:border-none file:bg-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="select" className="text-sm font-medium text-primary">
            Select an option
          </label>
          <select
            id="select"
            className="input-field"
            placeholder="Select year"
            value={selectDropdownOption}
            onChange={(e) => setSelectDropdownOption(e.target.value)}
          >
            <option value="I">First Year</option>
            <option value="II">Second Year</option>
            <option value="III">Third Year</option>
            <option value="Iv">Fourth Year</option>
          </select>
        </div>

        <div className="flex justify-end gap-4  ">
          <Button
            type="submit"
            className="btn-primary "
            buttonText={"Submit"}
          />
        </div>
      </form>
    </Modal>
  );
};

export default AddGradeSheetModal;

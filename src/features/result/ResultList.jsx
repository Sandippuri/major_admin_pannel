import React, { useState } from "react";
import AddResultModal from "./components/addResultModal";
import AddGradesheetModal from "./components/addGradesheetModal";
import { useGetAllPublishedQuery } from "../../redux-toolkit/apiSlices/result";
import Tables from "../../components/table/tables";

const ResultList = () => {
  const [addResultModalOpen, setAddResultModalOpen] = useState(false);
  const [addGradesheetModalOpen, setGradesheetModalOpen] = useState(false);

  // const dispatch = useDispatch();
  const { data, isLoading } = useGetAllPublishedQuery();
  // const data = useSelector()
  console.log(data);
  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "Exam Year", selector: (row) => row.ExamYear, sortable: true },
    { name: "Year", selector: (row) => row.Year, sortable: true },
    { name: "Part", selector: (row) => row.Part, sortable: true },
    { name: "Type", selector: (row) => row.Type, sortable: true },
    { name: "Programme", selector: (row) => row.Programme, sortable: true },
    {
      name: "Grade Sheet Uploaded",
      cell: (row) => (
        <input
          type="checkbox"
          disabled={true}
          checked={Boolean(!row.GradesheetUploaded)}
        />
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full mx-5 my-5">
        <div className="flex w-full justify-between px-4 py-2">
          <h2 className="text-xl font-bold">Results</h2>
          <div className="flex gap-2">
            <button
              className="btn btn-primary"
              onClick={() => setAddResultModalOpen(true)}
            >
              + Add Symbol No. Sheet
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setGradesheetModalOpen(true)}
            >
              + Add GradeSheet
            </button>
          </div>
        </div>

        <div>
          {isLoading && (
            <h1 className="text-4xl text-center text-black">Loading...</h1>
          )}
          {!!data && <Tables data={data?.value} columns={columns} />}
        </div>
      </div>
      <AddResultModal
        isOpen={addResultModalOpen}
        closeModal={() => setAddResultModalOpen(false)}
      />
      <AddGradesheetModal
        isOpen={addGradesheetModalOpen}
        closeModal={() => setGradesheetModalOpen(false)}
      />
    </>
  );
};

export default ResultList;

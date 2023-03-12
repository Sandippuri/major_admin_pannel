import React, { useState } from "react";
import AddResultModal from "./components/addResultModal";
import { useNavigate } from "react-router-dom";
import { useGetAllMarksQuery } from "../../redux-toolkit/apiSlices/result";
import Tables from "../../components/table/tables";

const ResultList = () => {
  const [addResultModalOpen, setAddResultModalOpen] = useState(false);
  // const dispatch = useDispatch();
  const { data, isLoading } = useGetAllMarksQuery();
  const navigate = useNavigate();
  // const data = useSelector()
  console.log(data);
  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "Student Name", selector: (row) => row.name, sortable: true },
    { name: "Total Marks", selector: (row) => row.totalmarks, sortable: true },
    { name: "Percentage", selector: (row) => row.percentage, sortable: true },
  ];

  return (
    <>
      <div className="flex flex-col w-full mx-5 my-5">
        <div className="flex w-full justify-between px-4 py-2">
          <h2 className="text-xl font-bold">Results</h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddResultModalOpen(true)}
          >
            + Add Results
          </button>
        </div>

        <div>
          {isLoading && (
            <h1 className="text-4xl text-center text-black">Loading...</h1>
          )}
          {!!data && <Tables data={data} columns={columns} />}
        </div>
      </div>
      <AddResultModal
        isOpen={addResultModalOpen}
        closeModal={() => setAddResultModalOpen(false)}
      />
    </>
  );
};

export default ResultList;

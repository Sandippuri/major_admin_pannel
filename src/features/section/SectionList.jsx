import React, { useState } from "react";
import AddSectionModal from "./components/addSectionModal";
import { useNavigate } from "react-router-dom";
import { useGetAllSectionsQuery } from "../../redux-toolkit/apiSlices/section";
import Tables from "../../components/table/tables";

const SectionList = () => {
  const [addSectionModalOpen, setAddSectionModalOpen] = useState(false);
  // const dispatch = useDispatch();
  const { data, isLoading } = useGetAllSectionsQuery();
  const navigate = useNavigate();
  // const data = useSelector()
  console.log(data);
  const sectionData = data?.value;
  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "Section Name", selector: (row) => row.name, sortable: true },
    { name: "Batch", selector: (row) => row.name, sortable: true },
  ];

  return (
    <>
      <div className="flex flex-col w-full mx-5 my-5">
        <div className="flex w-full justify-between px-4 py-2">
          <h2 className="text-xl font-bold">Sections</h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddSectionModalOpen(true)}
          >
            + Add Sections
          </button>
        </div>

        <div>
          {isLoading && (
            <h1 className="text-4xl text-center text-black">Loading...</h1>
          )}
          {!!data && <Tables data={sectionData} columns={columns} />}
        </div>
      </div>
      <AddSectionModal
        isOpen={addSectionModalOpen}
        closeModal={() => setAddSectionModalOpen(false)}
      />
    </>
  );
};

export default SectionList;

import React, { useState } from "react";
import AddSectionModal from "./components/addSectionModal";
import {
  useGetAllSectionsQuery,
  useDeleteSectionMutation,
} from "../../redux-toolkit/apiSlices/section";
import { MdOutlineDelete } from "react-icons/md";
import Tables from "../../components/table/tables";
import DeleteModal from "./components/deleteModal";
import { toast } from "react-toastify";

const SectionList = () => {
  const [addSectionModalOpen, setAddSectionModalOpen] = useState(false);
  const [sectionID, setSectionID] = useState();
  const [deleteSection] = useDeleteSectionMutation();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  // const dispatch = useDispatch();
  const { data, isLoading } = useGetAllSectionsQuery();
  // const data = useSelector()
  console.log(data);
  const sectionData = data?.value;
  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "Section Name", selector: (row) => row.name, sortable: true },
    { name: "Batch", selector: (row) => row.batch, sortable: true },
    { name: "Group", selector: (row) => row.group, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <button
          id={row.id}
          onClick={() => {
            setSectionID(row.id);
            setDeleteModalOpen(true);
          }}
          // onClick={() => deleteDepartment(row.ID)}
          className="text-primary hover:text-red-500"
        >
          <MdOutlineDelete size={24} />
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <>
      <div className="flex flex-col mx-5 my-5">
        <div className="flex w-full justify-between px-4 py-2">
          <h2 className="text-xl font-bold">Sections</h2>

          <div className="flex items-center gap-4">
            <button
              className="btn btn-primary"
              onClick={() => setAddSectionModalOpen(true)}
            >
              + Add Sections
            </button>
          </div>
        </div>

        <div className="my-2">
          {isLoading && (
            <div className=" h-[80vh] flex justify-center items-center">
              <div
                className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          )}
          {!!data && <Tables data={sectionData} columns={columns} />}
        </div>
      </div>
      <AddSectionModal
        isOpen={addSectionModalOpen}
        closeModal={() => setAddSectionModalOpen(false)}
      />

      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteSection(sectionID);
            console.log(response);
            if (response) {
              toast.success("Programme deleted successfully");
              setDeleteModalOpen(false);
            } else {
              toast.error(response?.error?.data?.error);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </>
  );
};

export default SectionList;

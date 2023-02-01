import React,{useState} from "react";
import { useGetAllDepartmentsQuery } from "../../redux-toolkit/apiSlices/department";
import { useNavigate } from "react-router-dom";
import Tables from "../../components/tables";
import AddDepartmentModal from "./components/addDepartmentModal";

const DepartmentList = () => {
  const [addDepartmentModalOpen, setAddDepartmentModalOpen] = useState(false);
  // con[st dispatch = useDispatch();
  const { data, isLoading } = useGetAllDepartmentsQuery();
  const navigate = useNavigate();
  // const data = useSelector()
  console.log(data);
  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "Department name", selector: (row) => row.name, sortable: true },
    { name: "Description", selector: (row) => row.description, sortable: true },
  ];

  return (
    <>
      <div className="flex flex-col w-full mx-5 my-5">
        <div className="flex w-full justify-between mb-3">
          <h2 className="text-xl font-bold">Department Details </h2>
          <button
            className="bg-gray-900 text-white rounded-md px-4 py-2"
            onClick={() => setAddDepartmentModalOpen(true)}
          >
            + Add Department
          </button>
        </div>
        <div>
          {isLoading && (
            <h1 className="text-4xl text-center text-black">Loading...</h1>
          )}
          {!!data && <Tables data={data} columns={columns} />}
        </div>
      </div>
      <AddDepartmentModal
        isOpen={addDepartmentModalOpen}
        closeModal={() => setAddDepartmentModalOpen(false)}
      />
    </>
  );
};

export default DepartmentList;

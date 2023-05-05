import React, { useState } from "react";
import AddAdminModal from "./components/addAdminModal";
import { useGetAllUsersQuery } from "../../redux-toolkit/apiSlices/auth";
import Tables from "../../components/table/tables";

const CreateUser = () => {
  const [addAdminModalOpen, setAddAdminModalOpen] = useState(false);
  // const dispatch = useDispatch();
  const { data, isLoading } = useGetAllUsersQuery();
  // const data = useSelector()
  console.log(data);
  const columns = [
    { name: "S No.", selector: (row) => row.id, sortable: true },
    { name: "Username", selector: (row) => row.username, sortable: true },
    { name: "Role", selector: (row) => row.role, sortable: true },
  ];

  return (
    <>
      <div className="flex flex-col w-full mx-5 my-5">
        <div className="flex w-full justify-between px-4 py-2">
          <h2 className="text-xl font-bold">Results</h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddAdminModalOpen(true)}
          >
            + Add Users
          </button>
        </div>

        <div>
          {isLoading && (
            <h1 className="text-4xl text-center text-black">Loading...</h1>
          )}
          {!!data && <Tables data={data?.value} columns={columns} />}
        </div>
      </div>
      <AddAdminModal
        isOpen={addAdminModalOpen}
        closeModal={() => setAddAdminModalOpen(false)}
      />
    </>
  );
};

export default CreateUser;

import React, { useState } from "react";
import { useGetSingleCollegeQuery } from "../../redux-toolkit/apiSlices/college";
import { useDeleteCollegeDepartmentMutation } from "../../redux-toolkit/apiSlices/collegeDepartment";
import Card from "../../components/ui/card";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import DeleteModal from "./components/deleteModal";
import { toast } from "react-toastify";

const CollegeDepartmentDetails = () => {
  const [campusDepartmentId, setcampusDepartmentId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const { collegeDepartmentId } = useParams();
  console.log(collegeDepartmentId);
  const { data: collegeDepartmentData, isLoading } =
    useGetSingleCollegeQuery(collegeDepartmentId);

  const [deleteCollegeDepartment] = useDeleteCollegeDepartmentMutation();
  // const collegeDepartmentValue = collegeDepartmentData?.value;
  console.log(collegeDepartmentData);
  //   console.log(collegeDepartmentValue);
  return (
    <div className="flex flex-col">
      <div>CollegeDepartmentDetails</div>
      <div>
        <h1 className="text-2xl font-semibold">
          {collegeDepartmentData?.value?.name}
        </h1>
        {collegeDepartmentData?.value?.campusDepartments.length === 0 ? (
          <p>No Departments found !</p>
        ) : (
          collegeDepartmentData?.value?.campusDepartments?.map(
            (campusDepartment) => {
              return (
                <Card key={campusDepartment.ID} className="my-1 w-1/2">
                  <div className="flex justify-between">
                    <p>{campusDepartment?.department?.name}</p>
                    <button
                      className="text-primary hover:text-red-500"
                      onClick={() => {
                        setcampusDepartmentId(campusDepartment.ID);
                        setDeleteModalOpen(true);
                      }}
                    >
                      {" "}
                      <MdOutlineDelete size={24} />
                    </button>
                  </div>
                </Card>
              );
            }
          )
        )}
      </div>
      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteCollegeDepartment(campusDepartmentId);
            console.log(response);
            if (response?.error?.status === 400) {
              toast.error(response?.error?.data?.error);
            } else {
              toast.success("College Department deleted successfully");
              setDeleteModalOpen(false);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </div>
  );
};

export default CollegeDepartmentDetails;

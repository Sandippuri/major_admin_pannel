import React, { useState } from "react";
import { useGetSingleCollegeQuery } from "../../redux-toolkit/apiSlices/college";
import { useDeleteCollegeDepartmentMutation } from "../../redux-toolkit/apiSlices/collegeDepartment";
import Card from "../../components/ui/card";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import DeleteModal from "./components/deleteModal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AddDepartmentProgrammeModal from "./components/addDepartmentProgrammeModal";
const CollegeDepartmentDetails = () => {
  const navigate = useNavigate();
  const [campusDepartmentId, setcampusDepartmentId] = useState();
  const [addDepartmentProgrammeModalOpen, setAddDepartmentProgrammeModalOpen] =
    useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const { collegeDepartmentId } = useParams();
  const { data: collegeDepartmentData, isLoading } =
    useGetSingleCollegeQuery(collegeDepartmentId);

  const [deleteCollegeDepartment] = useDeleteCollegeDepartmentMutation();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">College Department Details</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setAddDepartmentProgrammeModalOpen(true);
          }}
        >
          + Add Department Programs
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-semibold my-2">
          {collegeDepartmentData?.value?.name}
        </h1>
        {collegeDepartmentData?.value?.campusDepartments.length === 0 ? (
          <p>No Departments found !</p>
        ) : (
          collegeDepartmentData?.value?.campusDepartments?.map(
            (campusDepartment) => {
              return (
                <Card key={campusDepartment.ID} className="my-1 w-1/2 px-4">
                  <div className="flex flex-row justify-between ">
                    <div
                      className="flex flex-col justify-between w-full "
                      onClick={() =>
                        navigate(
                          `/college_department/${collegeDepartmentData?.value?.ID}/department_programme/${campusDepartment.ID}`
                        )
                      }
                    >
                      <p
                        className="text-sm text-blue-500 mb-1"
                        // onClick={() =>
                        //   navigate(
                        //     `/college_department/${collegeDepartmentData?.value?.ID}/department_programme/${campusDepartment.ID}`
                        //   )
                        // }
                      >
                        {campusDepartment?.department?.name}
                      </p>
                      <div className="flex flex-col">
                        {campusDepartment?.campusProgrammes.length === 0 ? (
                          <p className="text-red-500 text-sm ml-4">
                            No Programs found
                          </p>
                        ) : (
                          campusDepartment?.campusProgrammes?.map(
                            (campusProgramme) => {
                              return (
                                <h2
                                  key={campusProgramme?.programme?.ID}
                                  className="text-lg"
                                >
                                  {campusProgramme?.programme?.name} -{" "}
                                  {campusProgramme?.programme?.full_name}
                                </h2>
                              );
                            }
                          )
                        )}
                      </div>
                    </div>
                    <button
                      className="text-primary hover:text-red-500"
                      onClick={() => {
                        setcampusDepartmentId(campusDepartment.ID);
                        setDeleteModalOpen(true);
                      }}
                    >
                      <MdOutlineDelete size={24} />
                    </button>
                  </div>
                </Card>
              );
            }
          )
        )}
      </div>
      <AddDepartmentProgrammeModal
        collegeDepartmentId={collegeDepartmentId}
        isOpen={addDepartmentProgrammeModalOpen}
        closeModal={() => setAddDepartmentProgrammeModalOpen(false)}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        onClick={async () => {
          try {
            const response = await deleteCollegeDepartment(campusDepartmentId);
            console.log(response);
            if (response?.error?.originalStatus === 400) {
              toast.error(response?.error?.data);
            } else {
              toast.success("College Department deleted successfully");
              setDeleteModalOpen(false);
              navigate(0);
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

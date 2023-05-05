import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleStudentQuery } from "../../redux-toolkit/apiSlices/student";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";

const StudentDetails = () => {
  const { studentID } = useParams();
  const { data, isLoading } = useGetSingleStudentQuery(studentID);
  console.log(data);
  return (
    <div className="mx-5 my-5">
      <div className="flex justify-between  px-4 py-2">
        <h1 className="text-xl font-bold">Student Details</h1>
        <div className="flex gap-2">
          <p className="text-sm text-gray-500">
            {" "}
            Added on: {new Date(data?.value?.createdAt).toDateString()}
          </p>
          <button className="bg-primary text-white hover:bg-green-500 px-1 rounded-sm">
            {" "}
            <MdOutlineModeEditOutline size={20} />
          </button>
        </div>
      </div>
      <div className="w-2/3 grid grid-cols-2 gap-6 px-4 py-2">
        <div>
          <img
            className="w-full h-96 object-cover rounded-md"
            src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg"
            alt="ds"
          />
        </div>
        <div>
          <div className="flex flex-col justify-between">
            <h2 className="text-xl font-bold">Personal Information</h2>
            <div className="mx-2 flex flex-col">
              <h2 className="text-lg text-gray-500">
                Full Name: {data?.value?.name}
              </h2>
              <h2 className="text-lg text-gray-500">
                Date of Birth:{" "}
                {new Date(data?.value?.dateOfBirth).toDateString()}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* <h2>{data?.value?.name}</h2> */}
    </div>
  );
};

export default StudentDetails;

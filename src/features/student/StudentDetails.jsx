import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleStudentQuery } from "../../redux-toolkit/apiSlices/student";
const StudentDetails = () => {
  const { studentID } = useParams();
  const { data, isLoading } = useGetSingleStudentQuery(studentID);
  console.log(data);
  return <div>StudentDetails</div>;
};

export default StudentDetails;

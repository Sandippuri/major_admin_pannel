import DashboadLayout from "../../components/layout/DashboadLayout";
import Home from "../../pages";
import College from "../../pages/college";
import {
  CollegeDepartment,
  CollegeDepartmentDetails,
  DepartmentProgramDetails,
} from "../../pages/collegeDepartment";
import { Student, StudentDetails } from "../../pages/student";
import Teacher from "../../pages/teacher";
import Department from "../../pages/department";
import Notice from "../../pages/notice";
import Result from "../../pages/result";
import store from "../../redux-toolkit";
import { redirect } from "react-router-dom";
import Programme from "../../pages/programme";
import CollegeProgramme from "../../pages/collegeProgramme";
import Batch from "../../pages/batch";
import Subject from "../../pages/subject";
import Section from "../../pages/section";
import CreateUser from "../../features/authentication/CreateUser";

const privateRoutes = [
  {
    element: <DashboadLayout />,
    loader: () => {
      const { user } = store.getState();
      if (!user.isUserAuthenticated) {
        throw redirect("/login");
      }

      return null;
    },
    children: [
      // superadmin Routes
      { path: "/", element: <College /> },
      { path: "/colleges", element: <College /> },
      { path: "/college_department", element: <CollegeDepartment /> },
      {
        path: "/college_department/:collegeDepartmentId",
        element: <CollegeDepartmentDetails />,
      },
      {
        path: "/college_department/:collegeDepartmentId/department_programme/:departmentProgrammeId",
        element: <DepartmentProgramDetails />,
      },
      { path: "/students", element: <Student /> },
      { path: "students/:studentID", element: <StudentDetails /> },
      { path: "/teachers", element: <Teacher /> },
      { path: "/departments", element: <Department /> },
      { path: "/programmes", element: <Programme /> },
      { path: "/college_programme", element: <CollegeProgramme /> },
      { path: "/notices", element: <Notice /> },
      { path: "/subjects", element: <Subject /> },
      { path: "/batch", element: <Batch /> },
      { path: "/sections", element: <Section /> },
      { path: "/results", element: <Result /> },
      { path: "/createUser", element: <CreateUser /> },

      //admin routes
      // { path: "/dashboard", element: <Home /> },
      { path: "/oldquestions", element: <College /> },
      { path: "/notes", element: <Student /> },
      { path: "/events", element: <Teacher /> },
    ],
  },
];

export default privateRoutes;

import DashboadLayout from "../../components/layout/DashboadLayout";
import Home from "../../pages"
import College from "../../pages/college"
import Student from "../../pages/student"
import Teacher from "../../pages/teacher"
import Department from "../../pages/department"
import Notice from "../../pages/notice"
import Result from "../../pages/result"

const privateRoutes = [
    {
      element: <DashboadLayout/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/colleges", element: <College /> },
        { path: "/students", element: <Student /> },
        { path: "/teachers", element: <Teacher /> },
        { path: "/departments", element: <Department /> },
        { path: "/notices", element: <Notice /> },
        { path: "/results", element: <Result/> },
        // { path: "/addCollege", element: <AddCollege /> },
        // { path: "/add-teacher", element: <Homepage /> },
        // { path: "/add-student", element: <Homepage /> },
        // { path: "/add-notice", element: <Homepage /> },
        // { path: "/add-department", element: <Homepage /> },
    ],
    }
  ];

export default privateRoutes;

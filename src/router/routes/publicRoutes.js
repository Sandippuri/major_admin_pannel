import DashboadLayout from "../../components/layout/DashboadLayout";
import Login from "../../features/authentication/Login"

const publicRoutes = [
    {
      element: <DashboadLayout />,
      children: [
        { path: "/login", element: <Login/> },
    ],
    }
  ];

export default publicRoutes;

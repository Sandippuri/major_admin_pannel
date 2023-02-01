import DashboadLayout from "../../components/layout/DashboadLayout";
import PageNotFound from "../../pages/PageNotFound";

const missingRoutes = [
    {
      element: <DashboadLayout />,
      children: [{ path: "*", element: <PageNotFound/> }],
    }
  ];

export default missingRoutes;

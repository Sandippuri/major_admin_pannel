import Login from "../../features/authentication/Login";
import store from "../../redux-toolkit";
import { redirect } from "react-router-dom";

const publicRoutes = [
  {
    loader: () => {
      const { user } = store.getState();
      if (user.isUserAuthenticated) {
        throw redirect("/colleges");
      }
      return null;
    },
    children: [{ path: "/login", element: <Login /> }],
  },
];

export default publicRoutes;

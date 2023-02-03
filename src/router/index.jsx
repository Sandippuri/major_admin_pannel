import { RouterProvider, createBrowserRouter } from "react-router-dom";
import  publicRoutes  from "./routes/publicRoutes";
import  privateRoutes  from "./routes/privateRoutes";
import  missingRoutes  from "./routes/missingRoutes.js";

const allRoutes = [
  ...publicRoutes,
  ...privateRoutes,
  ...missingRoutes 
]

const Router = () => {
    const router = createBrowserRouter(allRoutes);
  return  <RouterProvider router={router}/>;

}

export default Router
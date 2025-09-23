import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "flowbite";
import {
  HomeLayout,
  ErrorLayout,
  Login,
  Profile,
  Register,
  Landing,
  Logout,
} from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as logoutAction } from "./pages/Profile";
import { loader } from "./pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "profile",
        element: <Profile />,
        loader: loader,
        action: logoutAction,
      },
    ],
  },
  {
    path: "error",
    element: <ErrorLayout />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

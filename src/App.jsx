import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Service, ErrorPage } from "./pages";
import RootLayout from "./Layouts/RootLayout";
import AboutLayout from "./Layouts/AboutLayout";
import UserLayout from "./Layouts/UserLayout";
import User from "./pages/user/User";
import UserErrorPage from "./pages/user/UserErrorPage";
import UserDetail from "./pages/user/UserDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutLayout />,
        children: [
          {
            path: "vision",
            element: <h4>Vision...</h4>,
          },
          {
            path: "mision",
            element: <h4>Mision...</h4>,
          },
          {
            path: "goal",
            element: <h4>Goal...</h4>,
          },
        ],
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "user",
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <User />,
          },
          {
            path: ":id",
            element: <UserDetail />,
            errorElement: <UserErrorPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

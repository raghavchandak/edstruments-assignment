import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import One from "../pages/One";
import Two from "../pages/Two";
import Three from "../pages/Three";
import Navbar from "../components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/one",
        element: <One />,
      },
      {
        path: "/two",
        element: <Two />,
      },
      {
        path: "/three",
        element: <Three />,
      },
    ],
  },
]);

function NavbarWrapper() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default router;

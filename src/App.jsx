import React from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProject from "./Components/AddProject";
import CreateSpaceCard from "./pages/CreateSpaceCard";
import MainBody from "./Layout.js/MainBody";
import Login from "./pages/LoginPage";
import Register from "./pages/Register";
import SpaceDashboard from "./pages/SpaceDashboard";
import ProjectDashboard from "./Components/ProjectDashboard";

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <Navigate to='/register' />
    },
    {
      path: "/login",
      element: <Login />,

    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <MainBody />,
      children: [
        {
          path: 'spaceDashboard',
          element: <SpaceDashboard />
        },
        {
          path:'projectDashboard/:spaceId',
          element: <ProjectDashboard/>
        },
        {
          path: "createSpace",
          element: <CreateSpaceCard />,
        },
        {
          path: "addProject",
          element: <AddProject />,
        },
      ],
    }

  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;

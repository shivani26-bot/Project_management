import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProject from "./Components/AddProject";
import CreateSpaceCard from "./Components/CreateSpaceCard";
import MainBody from "./Components/MainBody";
import Dashboard from "./Components/Dashboard";
import Login from "./pages/LoginPage";
import Register from "./pages/Register";

function App() {
  const appRouter = createBrowserRouter([
     {
path: "/login",
      element: <Login />,
      
    },
         {
path: "/register",
      element: <Register/>,
      
    },
    {
      path: "/",
      element: <MainBody />,
      children: [
       
        {
          path:'dashboard',
          element: <Dashboard/>
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

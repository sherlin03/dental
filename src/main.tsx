import React from "react";
import ReactDOM from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CommonLayout from "./shared/layouts/CommonLayout";
import Home from "./pages/home";
import About from "./pages/about";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PatientExperience from "./pages/patientExperience";
import Contact from "./pages/contact";
import Service from "./pages/dentelservices";

// ..


const router = createHashRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "patientExperience", element: <PatientExperience /> },
      { path: "contact", element: <Contact /> },
      { path: "/service", element: <Service /> },
    ],
  },
]);
const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

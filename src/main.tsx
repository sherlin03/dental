import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CommonLayout from "./shared/layouts/CommonLayout";
import Home from "./pages/home";
import About from "./pages/about";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PatientExperience from "./pages/patientExperience";
import Contact from "./pages/contact";
// ..
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/patientExperience", element: <PatientExperience /> },
      { path: "/contact", element: <Contact /> },
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

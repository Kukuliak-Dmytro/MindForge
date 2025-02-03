import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import  Home from "./pages/Home.tsx";
import  Contact  from "./pages/Contact.tsx";
import './global-styles.scss'
const router = createBrowserRouter([
  {
    path: "/MindForge/",
    element: <App />,
    children: [
      {
        path: "/MindForge/",
        element: <Home />,
      },
      {
        path: "/MindForge/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
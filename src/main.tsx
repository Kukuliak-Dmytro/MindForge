import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import  Home from "./pages/employer/Home.tsx"
import './globalStyles.scss'
const router = createBrowserRouter([
  {
    path: "/MindForge/",
    element: <App />,
    children: [
      {
        path: "/MindForge/",
        element: <Home />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
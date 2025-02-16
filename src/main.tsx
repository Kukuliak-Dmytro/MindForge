import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/employer/home/Home.tsx"
import Catalog from './pages/employer/catalog/Catalog.tsx';
import SpecialistProfile from './pages/employer/specialistProfile/SpecialistProfile.tsx';
import MyProfile from './pages/employer/myProfile/MyProfile.tsx';
import { store } from './state/store.ts';
import { Provider } from 'react-redux';
import './globalStyles.css'
import './variables.css'
// all the default routes are for the employer
// add /employee for the path to the employee routes
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
        path:'/MindForge/catalog',
        element:<Catalog/>
      },
      {
        path:'/MindForge/catalog/:id',
        element:<SpecialistProfile/>
      },
      {
        path:'/MindForge/myProfile',
        element:<MyProfile/>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import Home from './home.tsx';
import Shop from './shop.tsx'
import './App.css'


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      { path: "/shop", element: <Shop /> },
      { path: "/home", element: <Home />}
    ],
  },

]);
// ]);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

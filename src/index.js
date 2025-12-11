import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Add } from "./Pages/Add";
import { Dashboard } from "./Pages/Dashboard";
import { Edit } from "./Pages/Edit";
import { View } from "./Pages/View";
import { Login } from "./Pages/Login";
import { ViewAll } from "./Pages/ViewAll";



const routerVariable=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Dashboard />
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/add",
        element:<Add></Add>
      },
      {
        path:"/edit",
        element:<Edit></Edit>
      },
      {
        path:"/viewall",
        element:<ViewAll></ViewAll>
      },
      {
        path:"viewall/view/:resId",
        element:<View></View>
      },
      {
        path: "*",
        element: <h1>Page not found Please check your URL</h1>,
      },

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={routerVariable}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
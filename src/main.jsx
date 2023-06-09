import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddUser from './components/AddUser/AddUser.jsx';
import Home from './components/Home/Home.jsx';
import Layout from './Layout/Layout.jsx';
import Update from './components/Update/Update.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/chocolates')
      },
      {
        path: "add-chocolate",
        element: <AddUser />,
      },
      {
        path: "update/:id",
        element: <Update />,
        loader: ({ params }) => fetch(`http://localhost:5000/chocolate/${params.id}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

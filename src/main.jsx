import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './AllComponents/Layout/layout';
import Home from './AllComponents/Home/Home';
import Login from './AllComponents/Login/Login';
import Register from './AllComponents/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import DashBoard from './AllComponents/DashBoard/DashBoard';
import PrivateRoutes from './PrivateProtectedRoutes/PrivateRoutes';
import UserProfile from './AllComponents/DashBoard/Pages/UserProfile';
import CreateTask from './AllComponents/DashBoard/Pages/CreateTask';
import ToDo from './AllComponents/DashBoard/Pages/ToDo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AllList from './AllComponents/DashBoard/Pages/AllList';
import EditTodo from './AllComponents/DashBoard/Pages/EditTodo';
import OurUsers from './AllComponents/DashBoard/Pages/OurUsers';
import TermsAndConditions from './AllComponents/TermsAndConditions/TermsAndConditions';
import UpdatedUser from './AllComponents/DashBoard/Pages/UpdatedUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signUp',
      element: <Register></Register>
    },
    {
      path: '/terms',
      element: <TermsAndConditions></TermsAndConditions>
    },
  ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
    children:[
      {
      
        path: '/dashboard',
        element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
    },
      {
      
        path: '/dashboard/createTask',
        element: <PrivateRoutes><CreateTask></CreateTask></PrivateRoutes>
    },
    {
      
        path: '/dashboard/toDo',
        element: <PrivateRoutes><ToDo></ToDo></PrivateRoutes>
    },
    {
        path: '/dashboard/allList',
        element: <PrivateRoutes><AllList></AllList></PrivateRoutes>
    },
    {
        path: '/dashboard/outUser',
        element: <PrivateRoutes><OurUsers></OurUsers></PrivateRoutes>
    },
    {
      path:'/dashboard/editItem/:id',
      element: <EditTodo></EditTodo>,
      loader:({params})=>fetch(`https://task-management-server-sepia.vercel.app/createTask/${params.id}`)
    },
    {
      path:'/dashboard/updateUser',
      element: <UpdatedUser></UpdatedUser>
    },
  ]
  }
  
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)

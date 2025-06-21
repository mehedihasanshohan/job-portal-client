import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/register/Register';
import SignIn from '../pages/signin/SignIn';
import JobDetails from '../pages/JobDetails/JobDetails';
import PrivateRoute from './PrivateRoute';
import JobApply from './../pages/JobApply/JobApply';

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/jobs/:id',
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        },
        {
          path: '/jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
      ]
    },
  ]);

  export default router
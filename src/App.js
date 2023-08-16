import './App.css';
import Navbar from "./component/navbar/Navbar.js";
import Home from "./component/home/Home.js"
import About from "./component/about/About.js"
import NotFound from './component/notfound/NotFound';
import SignUpMain from './component/auth/signup/SignUpMain';
import LoginMain from './component/auth/login/LoginMain';
import Profile from './component/profile/Profile';
import JobsPage from './component/jobPage/JobsPage';
import Footer from './component/footer/Footer';
import JobProviderForm from './component/jobProviderForm/JobProviderForm';
import UserInfoForm from './component/userInfoForm/UserInfoForm';
import { useSelector, useDispatch } from "react-redux";
import EditJobMain from './component/editJobs/EditJobMains.js';
import { addDataInProfile } from './all-redux/features/profile-data-slice/ProfileDataSlice';
import { addData } from './all-redux/features/job-data-slice/JobDataSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { BASE_URL } from './component/helper';
import Disclaimer from './component/disclaimer/Disclaimer';
import Contact from './component/contact/Contact';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
// Defining a layout component with Navbar, content (Outlet), and Footer
const Layout = () => {
  return (<>
    <Navbar />
    <Outlet />
    <Footer />
  </>)
}

// Creating the main router configuration with nested routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/jobpage",
        element: <JobsPage />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/notfound",
        element: <NotFound />
      },
      {
        path: "/signupmain",
        element: <SignUpMain />
      },
      {
        path: "/jobproviderform",
        element: <JobProviderForm />
      },
      {
        path: "/userinfoform",
        element: <UserInfoForm />
      },
      {
        path: "/loginmain",
        element: <LoginMain />
      },
      {
        path: "/editjobmain/:id",
        element: <EditJobMain />
      },
      {
        path:"/disclaimer",
        element:<Disclaimer/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },

]);


function App() {
  const dispatch = useDispatch()
  const userSignUpData = useSelector((state) => state.newLocalStoreData)
  // useEffect hook to fetch user profile from the server
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataResponse = await axios.get(`${BASE_URL}/api/post/getUserInfo/${userSignUpData.id}`);
        const userInfo = userDataResponse.data;
        { userSignUpData ? dispatch(addDataInProfile(userInfo)) : dispatch(addDataInProfile(null)) }
        dispatch(addDataInProfile(userInfo))
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchUserData();
  },[userSignUpData.id]);

  // useEffect hook to fetch all jobs from the server
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/post/getJobs`)
        dispatch(addData(res.data))
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchAllJobs()
  }, [userSignUpData])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

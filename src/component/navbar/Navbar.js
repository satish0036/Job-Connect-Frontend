import React, { useState } from 'react';
import './Navbar.css'; // Create a separate CSS file for styling
import { Link } from "react-router-dom";
import { AlignJustify, X } from 'react-feather';
import { useSelector, useDispatch } from "react-redux";

import { addLogout } from '../../all-redux/features/localstore-data-slice/LocalstoreDataSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../helper.js";
import { resetProfileData } from '../../all-redux/features/profile-data-slice/ProfileDataSlice';
const Navbar = () => {
  const userSignUpData = useSelector((state) => state.newLocalStoreData)

  // State to track whether the mobile navigation menu is open or closed
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the mobile navigation menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  // Getting user image from UserImageSlice through Redux.
  const profileDetails = useSelector((state) => state.updatedProfile)
  console.log(profileDetails)

  // Getting user data from LocalstoreDataSlice through Redux.
  const userData = useSelector((state) => state.newLocalStoreData)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to handle user logout
  const handelLogout = async (e) => {
    e.preventDefault();
    try {
      // Making a POST request to log out the user
      await axios.post(`${BASE_URL}/api/auth/logout/`, { withCredentials: true })


      // Dispatching the addLogout action to reset user data in Redux store
      dispatch(addLogout(null))
      dispatch(resetProfileData())
      localStorage.setItem("userData", JSON.stringify(null));
      navigate("/")
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand logo and link to home page */}
        <Link to="/" className="brand-logo"> <img className='profileImg' src="https://i.ibb.co/W04Vyzw/Screenshot-30.png" alt='img' />JobConnect</Link>

        {/* Mobile navigation menu */}
        <div onClick={handleToggle} className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/jobpage">Job Page</Link>
          <Link to="/about">About</Link>

          {/* <Link to="/notfound">Services</Link> */}
          <Link to="/notfound">Contact</Link>

          {/* Conditionally rendering "Logout" or "Log In" link based on user authentication status */}
          {userData.id ?
            <Link onClick={handelLogout} >Logout</Link> :
            <Link to="/loginmain">Log In</Link>}

          {/* Link to the user profile page with user profile image */}
          {
            userSignUpData.id ? (
              profileDetails.profilePicture ? (<Link to="/profile"> <img className='profileImg' src={profileDetails.profilePicture} alt='img' /></Link>)
                : (<Link to="/profile"><img className='profileImg' src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt='img' /></Link>)
            )
              : ("")
          }
          {/* { profileDetails.profilePicture ?<Link to="/profile"><img className='profileImg' src={profileDetails.profilePicture} alt='img' /></Link>:<Link to="/loginmain"><img className='profileImg' src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt='img' /></Link>} */}
        </div>

        {/* Mobile navigation menu toggle icon */}
        <div className="navbar-toggle" onClick={handleToggle}>
          {isOpen ? (<i><X /></i>) : (<i><AlignJustify /></i>)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

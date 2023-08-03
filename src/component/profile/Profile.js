import React from 'react';
import './profile.css';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import JobRow from '../jobPage/jobRow/JobRow';

function Profile() {
    //Featching SignUp data from redux tha is coming through cookies
    const userSignUpData = useSelector((state) => state.newLocalStoreData)

      // fetching all jobs from the redux
    const allJobs = useSelector((state) => state.newData.JobData)

    // fetching user details from the redux
    const profileDetails=useSelector((state)=>state.updatedProfile)

       
    return (
        <>
            <div className='profile_layout'>
                <div className="profile">
                    {profileDetails.profilePicture ? (<img src={profileDetails.profilePicture} alt="img" className="profile-picture" />) : (<img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" alt="img" className="profile-picture" />)}
                    <h1 className="name">{profileDetails.fullName}</h1>
                    {profileDetails.fullName ? "" : <h4>Hello {userSignUpData.username},</h4>}
                    <p className="bio">{profileDetails.bio}</p>
                    <p><Link to="/userinfoform" className="Complete-ur-profile" >Complete your profile</Link></p>
                    <p><Link to="/jobproviderform" className="Complete-ur-profile">Post Jobs as Employer</Link></p>
                    <p><Link to="/jobpage" className="Complete-ur-profile">Get Started as Job Seeker</Link></p>

                </div>
                <div className='profile_details'>
                    <div className="profile-column">
                        <h2>Contact Information</h2>
                        <p>Email: {userSignUpData.email}</p>
                        <p>Contact Number: {userSignUpData.mobile}</p>

                        <h2>Professional Information</h2>
                        <p>Work Experience: {profileDetails.workExperience}</p>
                        <p>Education:{profileDetails.education} </p>

                        <h2>Skills and Portfolio</h2>
                        <p>Skills: {profileDetails.skills}</p>
                        <p>
                            Resume: <a href={profileDetails.resume} target="_blank" rel="noreferrer">View Resume</a>
                        </p>
                        <p>
                            Portfolio: <a href={profileDetails.portfolioLink} target="_blank" rel="noreferrer">View Portfolio</a>
                        </p>
                        <h2>Job Preferences</h2>
                        <p>Job Preferences: {profileDetails.jobPreferences}</p>
                        <p>Availability: {profileDetails.availability}</p>
                    </div>
                    <div className="profile-column">
                        <h2>LinkedIn Profile</h2>
                        <p>
                            LinkedIn Profile:{" "}
                            <a href={profileDetails.linkedInProfile} target="_blank" rel="noreferrer" >View LinkedIn Profile</a>
                        </p>

                        <h2>Additional Information</h2>
                        <p>{profileDetails.additionalInfo}</p>

                        <h2>References</h2>
                        <p>{profileDetails.reference1}</p>

                        <h2>Work Authorization and Salary Expectations</h2>
                        <p>Work Authorization: {profileDetails.workAuthorization}</p>
                        <p>Salary Expectations: {profileDetails.salaryExpectations}</p>

                        <h2>Preferred Communication</h2>
                        <p>Preferred Communication: {profileDetails.preferredCommunication}</p>
                    </div>
                </div>

            </div>
            <div className='jobsOnProfile'>
                {/* Displaying all jobs posted by the user */}
                <h2>All Job Posted By You</h2>
                {allJobs ? allJobs.map((job, index) => (

                    job.uid === userSignUpData.id ? <JobRow key={index} jobData={job} id={userSignUpData.id} /> : ""
                )) : ""}
            </div>

        </>

    );
}

export default Profile;

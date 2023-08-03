import React, { useState } from 'react';
import './JobRow.css';
import { useSelector ,useDispatch } from "react-redux";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {BASE_URL} from "../../helper.js"
import { useNavigate } from 'react-router-dom';
import { deleteJob } from '../../../all-redux/features/job-data-slice/JobDataSlice';
const JobRow = ({ jobData }) => {
  // State to track whether the job details are shown or hidden
  const [showDetails, setShowDetails] = useState(false);
  // console.log(jobData)

  // Toggling the visibility of job details when the "Details" div is clicked
  const handleToggleDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  // Accessing the user signup data from the Redux store using the useSelector hook
  const userSignUpData = useSelector((state) => state.newLocalStoreData)

  const navigate=useNavigate()
  // Function to handle the deletion of a job
  const dispatch=useDispatch()
  const handelDelete = async (id) => {
    try {
      // Making a DELETE request to the server to delete the job with the given ID
      await axios.delete(`${BASE_URL}/api/post/deleteJob/` + id)
      // Reloading the page to reflect the updated job list
      // window.location.reload()
      dispatch(deleteJob(id))
      navigate("/jobpage")
      
    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <div className="job-row">
        <div className="job-info">
          <div className="company-name">Company : {jobData.companyName}</div>
          <div className="job-title">Job Title : {jobData.jobTitle}</div>

          <div className="experience-level">Experience : {jobData.experianceLevel}</div>
          <a href={jobData.jobLink} className="company-registration" target="_blank" rel="noreferrer">Apply Here</a>
          <a href={jobData.companyWebsite} className="company-website" target="_blank" rel="noreferrer">Company WebSite</a>
          {/* "Details" div to toggle the visibility of additional job details */}
          <div className='company-details' onClick={handleToggleDetails}>Details</div>
        </div>

        {showDetails && (
          <div className="job-details-card">
            <div className="job-details-content">
              <div>
                <strong>Application Deadline:</strong> {jobData.applicationDeadLine}
              </div>
              <div>
                <strong>Benefit and Perks:</strong> {jobData.benifitAndPerks}
              </div>
              <div>
                <strong>Company Culture:</strong> {jobData.companyCulture}
              </div>
              <div>
                <strong>Contact Person:</strong> {jobData.contactPerson}
              </div>
              <div>
                <strong>Contact Email:</strong> {jobData.contactEmail}
              </div>
              <div>
                <strong>Contact Phone Number:</strong> {jobData.contactPhoneNumber}
              </div>
              <div>
                <strong>Expected Start Date:</strong> {jobData.expectedStartDate}
              </div>
              <div>
                <strong>Interview Schedule:</strong> {jobData.interviewSchedule}
              </div>
              <div>
                <strong>Job Description:</strong> {jobData.jobDescription}
              </div>
              <div>
                <strong>Opportunity for Growth:</strong> {jobData.oppertunityForGrowth}
              </div>
              <div>
                <strong>Qualification:</strong> {jobData.qualification}
              </div>
              <div>
                <strong>Salary:</strong> {jobData.salary}
              </div>
              {/* Displaying options for deleting and updating the job if the user is the owner */}
              <div>
                {userSignUpData.id === jobData.uid ? <>
                  <button className='delete' onClick={() => handelDelete(jobData.id)}>Delete</button>
                  <button className='update' ><Link to={`/editjobmain/${jobData.id}`} >Update</Link></button>
                </> : ""}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JobRow;

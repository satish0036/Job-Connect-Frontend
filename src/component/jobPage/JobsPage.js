import { useState } from 'react';
import './JobsPage.css';
import JobRow from './jobRow/JobRow.js';
import { useSelector } from 'react-redux';
const JobsPage = () => {

  const [searchValue, setSearchValue] = useState({
    companyName: "",
    jobTitle: "",

  })
  const handelChange = (e) => {
    setSearchValue({ ...searchValue, [e.target.name]: e.target.value })
  }
 
  console.log(searchValue)

  const allJobs = useSelector((state) => state.newData.JobData)
  console.log(allJobs)
  return (<>
    <h2 className='job-page-heading'>Your Job, Your Reach</h2>
    <div className='search-layout'>
      <input type='text ' placeholder='Search by Company Name' name="companyName" onChange={handelChange} className='search-bar' />
      <input type='text ' placeholder='Search by Job Title' name='jobTitle' onChange={handelChange} className='search-bar' />

    </div>

    <div className="jobs-page">
      {/* Rendering the list of jobs using the allJobss state */}
      {/* {allJobs ? allJobs.map((job, index) => (
        <JobRow key={index} jobData={job} />
      )):""} */}
      {
        allJobs
          ? allJobs
            .filter((job) => job.jobTitle.toLowerCase().indexOf(searchValue.jobTitle.toLowerCase()) !== -1)
            .filter((job) => job.companyName.toLowerCase().indexOf(searchValue.companyName.toLowerCase()) !== -1)
            .map((job, index) => <JobRow key={index} jobData={job} />)
          : ""
      }
    </div>
  </>
  );
};

export default JobsPage;

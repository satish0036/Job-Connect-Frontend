import './JobsPage.css';
import JobRow from './jobRow/JobRow.js';
import {useSelector } from 'react-redux';
const JobsPage = () => {



  const allJobs=useSelector((state)=>state.newData.JobData)
  console.log(allJobs)
  return (<>
    <h2 className='job-page-heading'>Your Job, Your Reach</h2>
    <div className="jobs-page">
      {/* Rendering the list of jobs using the allJobss state */}
      {allJobs ? allJobs.map((job, index) => (
        <JobRow key={index} jobData={job} />
      )):""}
    </div>
  </>
  );
};

export default JobsPage;

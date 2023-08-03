import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Home = () => {
  const userSignUpData = useSelector((state) => state.newLocalStoreData)
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h2>Your Gateway to Job Opportunities</h2>
          <p>
            JobConnect is a revolutionary platform that connects job seekers with their dream jobs
            and empowers employers to find the perfect candidates.
          </p>
          <div className="cta-buttons">
          <Link to="/jobpage" className='cta-link'><div className="cta-button"> Get Started as Job Seeker </div></Link> 
          {userSignUpData.id?<Link to="/jobproviderform" className='cta-link'><div className="cta-button"> Post Jobs as Employer  </div></Link>:<Link to="/loginmain" className='cta-link'><div className="cta-button"> Post Jobs as Employer  </div></Link>}

          </div>
        </div>
      </section>
      <section className="features" id="features">
        <div className="feature">
          <i className="fa fa-users"></i>
          <h3>Extensive Network</h3>
          <p>
            Our extensive network connects you with a wide range of job seekers or employers,
            increasing your chances of finding the right match.
          </p>
        </div>
        <div className="feature">
          <i className="fa fa-search"></i>
          <h3>Advanced Search</h3>
          <p>
            Use our advanced search filters to find jobs that match your skills or candidates that
            fit your job requirements.
          </p>
        </div>
        <div className="feature">
          <i className="fa fa-handshake-o"></i>
          <h3>Personalized Matches</h3>
          <p>
            We use AI-driven algorithms to provide personalized job recommendations and candidate
            matches for you.
          </p>
        </div>
        <div className="feature">
          <i className="fa fa-smile-o"></i>
          <h3>User-Friendly Experience</h3>
          <p>
            JobConnect offers a seamless and intuitive user experience, making job searching and
            candidate hiring a breeze.
          </p>
        </div>
        <div className="feature">
          <i className="fa fa-smile-o"></i>
          <h3>How It Works</h3>
          <p>
            Discovering your dream job or the perfect candidate is easier than ever with JobConnect.
            Our simple process takes you from sign-up to success!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

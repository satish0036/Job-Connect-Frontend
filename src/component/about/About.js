import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="section">
        <h2>Our Story</h2>
        <p>
          JobConnect was founded in 2023 with a vision to revolutionize the job market by
          connecting job seekers with their dream jobs and empowering employers to find the
          perfect candidates seamlessly.
        </p>
      </section>
      <section className="section">
        <h2>Our Mission</h2>
        <p>
          At JobConnect, our mission is to simplify and streamline the job search and recruitment
          process, making it faster, more efficient, and rewarding for both job seekers and
          employers.
        </p>
      </section>
      <section className="section">
        <h2>Our Team</h2>
        <p>
          Our passionate and dedicated team at JobConnect is committed to delivering the best
          experience to our users. With expertise in technology, recruitment, and AI-driven
          algorithms, we work together to bridge the gap between job seekers and employers.
        </p>
      </section>
      <section className="section">
        <h2>Why Choose JobConnect</h2>
        <p>
          - Personalized Job Recommendations: Our AI-powered algorithms match job seekers with
          tailored job opportunities based on their skills and preferences.
        </p>
        <p>
          - Advanced Job Search Filters: JobConnect offers advanced search filters, enabling users
          to find jobs that perfectly match their requirements.
        </p>
        <p>
          - Seamless Hiring Process: For employers, JobConnect streamlines the recruitment process,
          making it easy to find and hire the best talent for their organizations.
        </p>
      </section>
    </div>
  );
};

export default About;

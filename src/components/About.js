import React from 'react';
import '../css/about.css';
import matlabimg from '../images/oscilloscope.png';
function About() {
  return (
    <div>

      <div className='about-container'>
        <div className='about-text'>
          <h2 className="about-subtitle">Site Info</h2>
          <h3>
            Welcome to the EE Hub! This platform provides diverse study materials for Cal Poly SLO EE courses. Take every resource with a grain of salt, as not everything is correct, but grades will be posted next to the material if there is one avaliable.
          </h3>

          <h3>Contributors: williepog#8786</h3>
          <img className="image" src={matlabimg} alt="matlab" width={'200px'} />
        </div>
      </div>
    </div>
  );
}

export default About;

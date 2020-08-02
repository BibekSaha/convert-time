import React from 'react';
import Footer from '../Footer/Footer';
import './About.css';
import bibekSahaImage from '../../assets/Bibek-Saha.png';

const About = () => {
  return (
    <div className="About">
      <img id="bibek-saha-image" alt="bibek saha" src={bibekSahaImage} />
      <p>
        Hi! I am <strong>Bibek Saha</strong> and I created this very simple webapp<br /><br />
        I love watching movies so I often visit wikipedia to get the information about movies<br /><br />
        And more than often I look at the duration and it's in minutes so I always needed to convert the time in hours manually<br /><br />
        So I created this tool to convert the time (in Hours, Minutes or Seconds) into days hours minutes and seconds
      <Footer />
      </p>
    </div>
  );
};

export default About;
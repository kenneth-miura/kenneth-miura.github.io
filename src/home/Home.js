import React from 'react';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Home.css";

const Home = () => {
  return (<div className="home-page-container">
    <h1> Kenneth Miura</h1>
    <h2>Computer Science Student | Full Stack & Mobile Dev</h2>
    <div className="horiz-container">
      <a className="hoverable-logo" href='https://www.linkedin.com/in/kenneth-miura/'>
        <FontAwesomeIcon icon={faLinkedin}/>
      </a>
      <a className="hoverable-logo" href='https://github.com/kenneth-miura'>
        <FontAwesomeIcon icon={faGithub}/>
      </a>
      <a className="hoverable-logo" href="mailto:kenneth.t.miura@gmail.com">
        <FontAwesomeIcon icon={faEnvelope}/>
      </a>

    </div>

  </div>)

};

export default Home;

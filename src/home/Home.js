import React from 'react';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Home.css";

const Home = () => {
  return (<div className="content-container">
    <div className="vert-container">

    <h1> Kenneth Miura</h1>
    <h2>Computer Science Student | Full Stack & Mobile Dev</h2>
    <div className="horiz-container">
      <a className="hoverable-logo" href='https://www.linkedin.com/in/kenneth-miura/'>
        <FontAwesomeIcon icon={faLinkedin} size="4x" color="gray"/>
      </a>
      <a className="hoverable-logo" href='https://github.com/kenneth-miura'>
        <FontAwesomeIcon icon={faGithub} size="4x" color="gray"/>
      </a>
      <a className="hoverable-logo" href="mailto:kenneth.t.miura@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="4x" color="gray"/>
      </a>

    </div>
      <h1> About Me</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    </div>

  </div>)

};

export default Home;

import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="side-nav-container">
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/experience"> Experience</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <div className='horiz-container'>
        <a className="logo" href='https://www.linkedin.com/in/kenneth-miura/'>
          <FontAwesomeIcon icon={faLinkedin} size='2x'/>
        </a>
        <a className="logo" href='https://github.com/kenneth-miura'>
          <FontAwesomeIcon icon={faGithub} size='2x'/>
        </a>
        <a className="logo" href="mailto:kenneth.t.miura@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size='2x'/>
        </a>

      </div>
    </div>
  )
}

export default SideNav

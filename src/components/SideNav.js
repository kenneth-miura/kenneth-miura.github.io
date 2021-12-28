import React from 'react';
import {Link} from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/experience"> Experience</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </div>
  )
}

export default SideNav

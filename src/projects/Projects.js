import React from 'react';
import "./Projects.css";
import WorkCard from '../components/WorkCard';
const Projects = () => {
  return (
  <div className='content-container start-aligned-flex'>
    <WorkCard picture={'/imgs/CourseScheduler.png'} link={"https://github.com/kenneth-miura/course-project-tut0201-007"} header="Course Scheduler" title="Intern" location="Rockville, MD" date="06/2020 - 08/2020" blurb="CLI course scheduling" tags={["python", "flask"]}/>
  </div>)

}

export default Projects;

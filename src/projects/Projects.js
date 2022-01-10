import React from 'react';
import "./Projects.css";
import WorkCard from '../components/WorkCard';

const Projects = () => {
  return (
  <div className='content-container start-aligned-flex'>
    <WorkCard picture={'/imgs/CourseScheduler.png'} link={"https://github.com/kenneth-miura/course-project-tut0201-007"} header = "Intelligent Automation, Inc" title="Intern" location="Rockville, MD" date="06/2020 - 08/2020" blurb="I worked at Intelligent Automation, Inc as a Software Intern in the Robotics and Electromechanical Systems department, where I worked on Computer Vision algorithms " tags={["python", "flask", "Javascript", "Java", "test", "bruh"]}/>
  </div>)

}

export default Projects;

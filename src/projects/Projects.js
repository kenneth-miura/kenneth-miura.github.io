import React from 'react';
import "./Projects.css";
import WorkCard from '../components/WorkCard';

const projects = require("../assets/projects.json");

const Projects = () => {
  const projectCards = []
  for (const projectName in projects){
    const project = projects[projectName];
    const picture = project["picture-location"];
    const link = project["link"];
    const bullets = project["bullets"]
    const tags = project["tags"];
    const imageType = project["image-type"]
    console.log(project)


    projectCards.push(
      <WorkCard
        picture={picture}
        imageType={imageType}
        link={link}
        header={projectName}
        bullets={bullets}
        tags={tags}
      />
    )
  }
  return (
  <div className='content-container start-aligned-flex'>
    {projectCards}
  </div>)

}

export default Projects;

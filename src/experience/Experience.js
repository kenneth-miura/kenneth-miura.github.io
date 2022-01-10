import React from 'react';
import WorkCard from '../components/WorkCard';

const experiences = require('../assets/experience.json');

console.log(experiences);

const Experience = () => {
  const experienceCards = [];

  for (const companyName in experiences){
    const company = experiences[companyName];
    const picture = company["picture-location"];
    const link = company["link"];
    const title = company["title"];
    const location = company["location"];
    const date = company["date"];
    const blurb = company["blurb"];
    const tags = company["tags"];


    experienceCards.push(
      <WorkCard
        picture={picture}
        link={link}
        header={companyName}
        title={title}
        location={location}
        date={date}
        blurb={blurb}
        tags={tags}
      />
    )
  }

  return (
  <div className='content-container start-aligned-flex'>
    {experienceCards}
  </div>)

}

export default Experience;

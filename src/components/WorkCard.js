import React from "react";
import "./WorkCard.css";
import {faCalendarAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const WorkCard = (props) => {
  return (
  <div>
    <div className="horiz-container">
      <a href={props.link}>
        <img src={props.picture} alt={props.altText}/>
      </a>
      <div className="work-card-content-container">
        <h4>{props.header}</h4>
        {props.title && <p>{props.title}</p>}
        {props.location && <p>
          <FontAwesomeIcon icon={faMapMarkerAlt}/>
          {" " + props.location}
        </p>}
        {props.date && <p>
          <FontAwesomeIcon icon={faCalendarAlt}/>
          {" " + props.date}
        </p>}
        {props.blurb && <p className="blurb">{props.blurb}</p>}
        <hr/>
        <div className="horiz-container">
          {
            props.tags.map(tag => {
              return (<div className="tag">
                {tag}

              </div>)
            })
          }

        </div>
      </div>
    </div>

  </div>)

}

export default WorkCard



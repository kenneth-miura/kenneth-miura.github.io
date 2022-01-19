import React from "react";
import "./WorkCard.css";
import {faCalendarAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const WorkCard = (props) => {
  let isWork = props.date && props.location
  return (
  <div>
    <div className="horiz-container">
      <a href={props.link}>
      <div className="work-card-content-container">
        <h4>{props.header + " - " + props.title}</h4>
        {isWork && <div className="horiz-container">
          <div className="work-info">
            <FontAwesomeIcon icon={faMapMarkerAlt}/>
            {" " + props.location}
          </div>
          <div> | </div>
          <div className="work-info">
            <FontAwesomeIcon icon={faCalendarAlt}/>
            {" " + props.date}
          </div>

        </div>}
        {props.blurb && <p className="blurb">{props.blurb}</p>}
        <hr/>
        <div className="tag-container">
          {
            props.tags.map(tag => {
              return (<div className="tag">
                {tag}

              </div>)
            })
          }

        </div>
      </div>
      </a>
    </div>

  </div>)

}

export default WorkCard



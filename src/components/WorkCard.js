import React from "react";
import "./WorkCard.css";

const WorkCard = (props) => {
  return (
  <div>
    <div className="work-card-container">
      <a href={props.link}>
        <img className={props.imageType + "-img"} src={props.picture} alt={props.altText}/>
      </a>
      <div className="work-card-content-container">
        <h4>{props.header}</h4>
        {props.blurb && <p className="blurb">{props.blurb}</p>}
        <ul>
          {
            props.bullets.map(bullet => {
              return (<li>
                {bullet}
              </li>)
            })
          }
        </ul>
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
    </div>

  </div>)

}

export default WorkCard



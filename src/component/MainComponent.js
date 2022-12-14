import React from 'react';
import '../App.css';
import Path from '../images/Path.png';
import './data'


function mainComponent(props) {
  return (
    <div className='container'>
        <img className='image' src={props.ImageUrl} alt="" />
      <div className="page">
        <div className="location">
          <img className="path" src={Path} alt="" />
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google map</a>
        </div>
        <div className="title">{props.title}</div>
        <div className="date">
          <p className="startdate">{props.startDate}</p><p className="enddate"> - {props.endDate}</p>
        </div>
        <div className="description"> {props.description} </div>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default mainComponent
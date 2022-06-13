import React, { Component } from 'react';
import "./About.css";
import profile_picture from '../assets/headshot.jpg';
export default class About extends Component {
  render() {
    return (
      <div>
       <div class="split left">
         <div className="centered">
           <img
             className="profile_image"
             src={profile_picture}
             alt="Profile Pic"
             ></img>
         </div>
       </div>
       <div className="split right">
         <div className="centered">
           <div className="name_title">Vincent Wilson</div>
           <div className="brief_description">
             Rising Junior studying Computer Science at the University
             of Washington
           </div>
         </div>
       </div>
     </div>
    )
  }
}

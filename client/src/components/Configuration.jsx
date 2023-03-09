import React from 'react';
import { useState } from 'react';
import Gears from '../../dist/gears.png';

const Configuration = ({ configVisible, groupList, onShowConfig, getGroupMembers, onStart, onNewGroup }) => {

  if (configVisible) {
    return (
      <div>
        <div className="configurationContainer">
          <div className="groupSelection">
            <div className="configHeader">
              <div className="aTrail"/>
              <div className="bTrail"/>
              <div className="cTrail"/>
              <div className="dTrail"/>
              <div className="eTrail"/>
              <div className="fTrail"/>
              <div className="gTrail"/>
            </div>
            <img className="gearIcon" src={Gears}/>
            <div className="testingFont">Select a Group</div>
            <select className="groupOptions" onChange={(e) => getGroupMembers(e)}>
              <option selected>Groups</option>{
              groupList.map((groupName) => {
                return <option id={groupName}>{groupName}</option>
              })
            }
            </select>
            <p className="addNewTeamLink" onClick={ ()=> {
              onShowConfig();
              onNewGroup();
            }}>or add a new team here</p>
            <div className="testingFont">Select Duration of Animation</div>
            <select className="durationOptions">
              <option>5 seconds</option>
              <option>10 seconds</option>
              <option>15 seconds</option>
            </select>
            <button className="startAnimation" onClick={ () => {
              onShowConfig();
              onStart();
            }}>START</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Configuration;

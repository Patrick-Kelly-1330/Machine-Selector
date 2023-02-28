import React from 'react';
import { useState } from 'react';

const Configuration = ({ configVisible, groupList, onShowConfig, getGroupMembers, onStart, onNewGroup }) => {

  if (configVisible) {
    return (
      <div>
        <div className="configurationContainer">
          <div className="groupSelection">
            <h1>select a group</h1>
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
            <h1>Select Duration of Animation</h1>
            <select className="durationOptions">
              <option>5 seconds</option>
              <option>10 seconds</option>
              <option>15 seconds</option>
            </select>
            <button className="startAnimation" onClick={ () => {
              onShowConfig();
              onStart();
            }}>Start!</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Configuration;

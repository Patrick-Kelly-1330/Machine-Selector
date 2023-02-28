import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Machine from './Machine.jsx';
import Configuration from './Configuration.jsx';
import NewGroup from './NewGroup.jsx';
import Winner from './Winner.jsx';

const App = () => {

  const [configVisible, setConfigVisible] = useState(false);
  const [newGroupVisible, setNewGroupVisible] = useState(false);
  // TODO: update status of winnerVisible to true once machine has ended animation
  const [winnerVisible, setWinnerVisible] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const [names, setNames] = useState([]);

  const onShowConfig = () => {
    setConfigVisible(!configVisible);
  }

  const getGroupNames = () => {
    Axios.get('/getTeams')
      .then((response) => {
        let collectGroupNames = [];
        response.data.map((group) => {
          collectGroupNames.push(group.name);
        })
        setGroupList(collectGroupNames);
      })
  }

  const getGroupMembers = (e) => {
    e.preventDefault();
    let groupNameSelected = e.target.value;
    Axios.get(`/getTeam/${groupNameSelected}`, {
      params: {name: groupNameSelected}
    })
      .then((response) => {
        console.log('response ', response.data);
        let names = response.data.split(',')
        let collectNames = [];
        names.map((name) => {
          collectNames.push(name);
        })
        let newCollection = collectNames[0].split(',');
        setNames(collectNames);
      })
  }

  const onStart = () => {
    console.log('names ', names);
  }

  const onNewGroup = () => {
    setNewGroupVisible(!newGroupVisible);
  }

  const onCreateGroup = (e, newTeamInformation) => {
    e.preventDefault();
    console.log('team INFO', newTeamInformation);
    Axios({
      method:'post',
      url:'/newTeam',
      data: {
        name: newTeamInformation.name,
        team: newTeamInformation.team,
      }
    })
    .then((res)=> {
      console.log("RESPONSE FROM SERVER ", res);
    })
    .catch((err) => {
      console.log('unable to create new team ', err);
    })
  }

  useEffect (() => {
    getGroupNames();
  }, []);

  return (
    <div>
      <div className="newSelection" onClick={onShowConfig}>New Animation</div>
      <Machine names={names}/>
      <Configuration
        configVisible={configVisible}
        groupList={groupList}
        onShowConfig={onShowConfig}
        getGroupMembers={getGroupMembers}
        onStart={onStart}
        onNewGroup={onNewGroup}
      />
      <NewGroup newGroupVisible={newGroupVisible} onNewGroup={onNewGroup} onCreateGroup={onCreateGroup}/>
      <Winner winnerVisible={winnerVisible} />
    </div>
  );
}

export default App;

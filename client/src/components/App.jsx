import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Machine from './Machine.jsx';
import Configuration from './Configuration.jsx';
import NewGroup from './NewGroup.jsx';
import Winner from './Winner.jsx';

const App = () => {

  const [configVisible, setConfigVisible] = useState(false);
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
        let collectNames = [];
        response.data.map((name) => {
          console.log('NAME from API', name);
          collectNames.push(name);
        })
        setNames(collectNames);
      })
  }

  const onStart = () => {
    console.log('names ', names);
  }

  useEffect (() => {
    getGroupNames();
  }, []);

  return (
    <div>
      <div className="newDecision" onClick={onShowConfig}>New Animation</div>
      <Machine names={names}/>
      <Configuration
        configVisible={configVisible}
        groupList={groupList}
        onShowConfig={onShowConfig}
        getGroupMembers={getGroupMembers}
        onStart={onStart}
      />
      <NewGroup />
      <Winner />
    </div>
  );
}

export default App;

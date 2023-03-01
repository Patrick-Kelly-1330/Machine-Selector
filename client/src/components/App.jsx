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
  const [winnerVisible, setWinnerVisible] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const [names, setNames] = useState([]);
  const [winner, setWinner] = useState('');

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
    setTimeout(() => {
      const randomeInteger = Math.floor(Math.random() * names.length);
      const winningMember = names[randomeInteger];
      console.log('first ', winningMember);
      setWinner(winningMember);
      const findWinnerBucket = document.getElementById(winningMember);
      findWinnerBucket.style.zIndex = "1";
      const offsetTopWinner = findWinnerBucket.offsetTop;
      const offsetLeftWinner = findWinnerBucket.offsetLeft;
  }, 10000);
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

  useEffect (() => {
    if (winner.length > 0) {
      setTimeout(() => {
       setWinnerVisible(!winnerVisible);
     }, 100);
    }
  }, [winner])

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
      <Winner winnerVisible={winnerVisible} winner={winner} setWinnerVisible={setWinnerVisible}/>
    </div>
  );
}

export default App;

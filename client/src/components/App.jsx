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
      const winningBall = document.getElementById("rampBall");
      winningBall.remove();
      findWinnerBucket.style.zIndex = "1";
      const offsetTopWinner = findWinnerBucket.offsetTop;
      const offsetLeftWinner = findWinnerBucket.offsetLeft;
  }, 12000);
    const animateTipper = document.getElementById("DT");
    const animateDominos = document.getElementById("DO");
    const animateBall = document.getElementById("DB");
    const animatePlatform = document.getElementById("PF");
    const animatePlatformBox = document.getElementById("PB");
    const animateRampBall = document.getElementById("rampBall");

    const animateDominoA = document.getElementById("A");
    const animateDominoB = document.getElementById("B");
    const animateDominoC = document.getElementById("C");
    const animateDominoD = document.getElementById("D");
    const animateDominoE = document.getElementById("E");
    const animateDominoF = document.getElementById("F");
    const animateDominoG = document.getElementById("G");
    const animateDominoH = document.getElementById("H");
    const animateDominoI = document.getElementById("I");
    const animateDominoJ = document.getElementById("J");

    animateTipper.classList.add('dominoTipperAnimate');
    animateBall.classList.add('dominoBallAnimate');
    animatePlatform.classList.add('platformAnimate');
    animatePlatformBox.classList.add('platformBoxAnimate');
    animateRampBall.classList.add('rampBallAnimate');


    animateDominoA.classList.add('dominoAAnimate');
    animateDominoB.classList.add('dominoBAnimate');
    animateDominoC.classList.add('dominoCAnimate');
    animateDominoD.classList.add('dominoDAnimate');
    animateDominoE.classList.add('dominoEAnimate');
    animateDominoF.classList.add('dominoFAnimate');
    animateDominoG.classList.add('dominoGAnimate');
    animateDominoH.classList.add('dominoHAnimate');
    animateDominoI.classList.add('dominoIAnimate');
    animateDominoJ.classList.add('dominoJAnimate');
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
     }, 2000);
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
      <NewGroup newGroupVisible={newGroupVisible} onNewGroup={onNewGroup} onCreateGroup={onCreateGroup} onShowConfig={onShowConfig}/>
      <Winner winnerVisible={winnerVisible} winner={winner} setWinnerVisible={setWinnerVisible}/>
    </div>
  );
}

export default App;

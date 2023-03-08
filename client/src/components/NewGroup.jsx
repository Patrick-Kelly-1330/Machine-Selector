import React from 'react';
import { useState } from 'react';

const NewGroup = ({ newGroupVisible, onNewGroup, onCreateGroup, onShowConfig }) => {

  const [newTeam, setNewTeam] = useState([]);
  const [newTeamName, setNewTeamName] = useState('');
  const [newName, setNewName] = useState('');
  const [groupDetails, setGroupDetails] = useState({});

  const onName = (e) => {
    setNewName(e.target.value);
  }

  const onNewTeamName = (e) => {
    setNewTeamName(e.target.value);
  }

  const onNewMember = (e) => {
    e.preventDefault();
    setNewTeam([...newTeam, newName]);
    setGroupDetails( {
      name: newTeamName,
      team: newTeam,
    })
    console.log("GROUP INFO IN MODAL ", groupDetails);
  }

  if (newGroupVisible) {
    return (
      <div>
        <div className="newGroupCongifurationContainer">
         <div className="groupCreation">
           <div className="configHeader">
             <div className="aTrail"/>
             <div className="bTrail"/>
             <div className="cTrail"/>
             <div className="dTrail"/>
             <div className="eTrail"/>
             <div className="fTrail"/>
             <div className="gTrail"/>
           </div>
           <div className="exitContainer">
             <input type="submit" className="submit exit" value="x" onClick={() => {
                onNewGroup();
                onShowConfig();
              }}/>
           </div>
           <form className="newNameForm">
            <label className="newName">
              <div className="testingFont">New Group Name</div>
              <input className="textInput" type="text" onChange={onNewTeamName}/>
            </label>
           </form>
           <form className="newMemberForm">
            <label className="newMember">
              <div  className="testingFont">New Group Member</div>
              <input className="textInput" type="text" onChange={onName}/>
            </label>
            <input className="submit" type="submit" value="add new member" onClick={onNewMember}/>
           </form>
           <div className="testingFont">Current Group</div>
           <div className="newGroupList">{
             newTeam.map((member) => {
              return <div className="newName">{member}</div>
             })
           }
           </div>
           <form className="createNewGroup">
            <label>
              <input value="Create Group" className="submitGroup" type="submit" onClick={(e) => {
                onCreateGroup(e, groupDetails);
                onNewGroup();
              }}/>
            </label>
           </form>
         </div>
        </div>
      </div>
    );
  } else {
    return null
  }
}

export default NewGroup;

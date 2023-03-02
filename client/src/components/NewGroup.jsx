import React from 'react';
import { useState } from 'react';

const NewGroup = ({ newGroupVisible, onNewGroup, onCreateGroup, onShowConfig }) => {

  //TODO: create dynamic list
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
           <div className="exitContainer">
             <button className="submit" className="exit" value="x" onClick={() => {
                onNewGroup();
                onShowConfig();
              }}/>
           </div>
           <form className="newNameForm">
            <label>New Group Name
              <input type="text" onChange={onNewTeamName}/>
            </label>
           </form>
           <form className="newMemberForm">
            <label>Group Member
              <input type="text" onChange={onName}/>
            </label>
            <input className="submit" type="submit" value="add new member" onClick={onNewMember}/>
           </form>
           <h1>Current Group</h1>
           <div className="newGroupList">{
             newTeam.map((member) => {
              return <div>{member}</div>
             })
           }
           </div>
           <form className="createNewGroup">
            <label>Create Group
              <input className="submit" type="submit" onClick={(e) => {
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

import React from 'react';
import GroupMembers from './GroupMembers.jsx';

const Machine = ({ groupNames }) => {

  return (
    <div>
      <h1>Machine</h1>
      <GroupMembers groupNames={groupNames} />
    </div>
  );
}

export default Machine;

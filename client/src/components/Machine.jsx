import React from 'react';
import GroupMembers from './GroupMembers.jsx';

const Machine = ({ names }) => {

  return (
    <div>
      <h1>Machine</h1>
      <GroupMembers names={names} />
    </div>
  );
}

export default Machine;

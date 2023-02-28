import React from 'react';

const GroupMembers = ({ names }) => {

  return (
    <div>
      <div className="groupList">{
        names.map((member) => {
          return <div className="individual">{member}</div>
        })
      }
      </div>
    </div>
  );
}

export default GroupMembers;

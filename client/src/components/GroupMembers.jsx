import React from 'react';

const GroupMembers = ({ names }) => {

  return (
      <div className="groupList">{
        names.map((member) => {
          return (
            <div>
              <div className="individual" id={member}>{member}</div>
              <div className="hiddenWinner"/>
            </div>
          )
        })
      }
      </div>
  );
}

export default GroupMembers;

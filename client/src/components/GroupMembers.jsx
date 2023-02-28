import React from 'react';

const GroupMembers = ({groupNames }) => {

  const sampleFiller = ['tom','michlle','josh'];

  return (
    <div>
      <div className="groupList">{
        sampleFiller.map((member) => {
          return <div>{member}</div>
        })
      }
      </div>
    </div>
  );
}

export default GroupMembers;

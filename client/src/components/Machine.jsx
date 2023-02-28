import React from 'react';
import GroupMembers from './GroupMembers.jsx';

const Machine = ({ names }) => {

  return (
    <div>
      <h1>Machine</h1>
      <div className="machineContainer">
        <div className="dominosAndBall">
          <div className="dominoBallContainer">
            <div className="dominoBall"/>
          </div>
          <div className="dominosContainer">
            <div className='dominoA'></div>
            <div className='dominoB'></div>
            <div className='dominoC'></div>
            <div className='dominoD'></div>
            <div className='dominoE'></div>
            <div className='dominoF'></div>
            <div className='dominoG'></div>
            <div className='dominoH'></div>
            <div className='dominoI'></div>
            <div className='dominoJ'></div>
          </div>
        </div>
        <div className="boxWithPlatform">
        </div>
        <div className="rampWithBall">
        </div>
        <div className="pegs">
        </div>
        <GroupMembers names={names} />
      </div>
    </div>
  );
}

export default Machine;

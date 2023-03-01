import React from 'react';
import GroupMembers from './GroupMembers.jsx';

const Machine = ({ names }) => {

  return (
    <div>
      <h1>Machine</h1>
      < div className="machineContainer">
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
        <div className="boxWithPlatformContainer">
          <div className="platformBox"/>
          <div className="platform"/>
          <div className="platformBall"/>
        </div>
        <div className="rampWithBall">
          <div id="rampBall"/>
          <div className="ramp">
            <div className="rampRight"/>
          </div>
        </div>
        <div className="pegsContainer">
          <div className="pegRow1">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
          </div>
          <div className="pegRow2">
            <div/>
            <div/>
            <div/>
            <div/>
          </div>
          <div className="pegRow3">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
          </div>
        </div>
        <div className='groupMemberContainer'>
          <GroupMembers names={names} />
        </div>
      </div>
    </div>
  );
}

export default Machine;

import React from 'react';
import GroupMembers from './GroupMembers.jsx';
import factory from '../../dist/factory.png';

const Machine = ({ names }) => {

  return (
    <div>
      <div className="machineContainer">
          <img className="backgroundImage" src={factory}/>
        <div className="dominosAndBall">
          <div className="dominoBallContainer">
            <div className="dominoBall" id="DB"/>
          </div>
          <div className="dominosContainer" id="DO">
            <div className='dominoA' id="A"></div>
            <div className='dominoB' id="B"></div>
            <div className='dominoC' id="C"></div>
            <div className='dominoD' id="D"></div>
            <div className='dominoE' id="E"></div>
            <div className='dominoF' id="F"></div>
            <div className='dominoG' id="G"></div>
            <div className='dominoH' id="H"></div>
            <div className='dominoI' id="I"></div>
            <div className='dominoJ' id="J"></div>
          </div>
          <div className="dominoTipper" id="DT" />
        </div>
        <div className="dominoShelf"/>
        <div className="boxWithPlatformContainer">
          <div className="platformBox" id="PB"/>
          <div className="platform" id="PF"/>
          <div className="platformBall"/>
        </div>
        <div className="ballPlatformShelf"/>
        <div className="rampWithBall">
          <div id="rampBall"/>
          <div className="ramp">
            <div className="rampRight"/>
          </div>
        </div>
        <div className="rampShelf"/>
        <div className="shelfContainer">
          <div className="shelfRowOne">
            <div className="visibleShelf"/>
            <div className="hiddenShelf"/>
            <div className="hiddenShelf"/>
            <div className="visibleShelf"/>
            <div className="hiddenShelf"/>
            <div className="visibleShelf"/>
          </div>
          <div className="shelfRowTwo">
            <div className="visibleShelf"/>
            <div className="visibleShelf"/>
            <div className="visibleShelf"/>
            <div className="hiddenShelf"/>
          </div>
          <div className="shelfRowThree">
            <div className="visibleShelf"/>
            <div className="hiddenShelf"/>
            <div className="hiddenShelf"/>
            <div className="visibleShelf"/>
            <div className="hiddenShelf"/>
            <div className="visibleShelf"/>
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

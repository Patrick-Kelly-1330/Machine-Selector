import React from 'react';

const Winner = ({ winnerVisible, winner, setWinnerVisible}) => {
  if (winnerVisible) {
    return (
      <div>
        <div className="congratulationsContainer">
        <div className="winnerBorder">
          <div className="winnerSelection">
          <div className="winnerConfetti">
            <div className="aC"/>
            <div className="bC"/>
            <div className="cC"/>
            <div className="dC"/>
            <div className="eC"/>
            <div className="fC"/>
            <div className="gC"/>
          </div>
            <p className="congratulations">Congratulations</p>
            <h1 className="winner">{winner}</h1>
          </div>
          <button className="exitWinner" onClick={ () => {
            setWinnerVisible(!winnerVisible)
            window.location.reload(false);
          }}>exit</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Winner;

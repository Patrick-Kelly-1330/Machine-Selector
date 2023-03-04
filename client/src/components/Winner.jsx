import React from 'react';

const Winner = ({ winnerVisible, winner, setWinnerVisible}) => {
  if (winnerVisible) {
    return (
      <div>
        <div className="congratulationsContainer">
          <div className="winnerBorder">
            <div className="winnerSelection">
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

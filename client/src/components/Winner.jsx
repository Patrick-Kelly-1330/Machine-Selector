import React from 'react';

const Winner = ({ winnerVisible, winner }) => {
  console.log("WI ", winnerVisible)
  if (winnerVisible) {
    return (
      <div>
        <div className="congratulationsContainer">
          <p className="congratulations">Congratulations</p>
          <h1 className="winner">{winner}</h1>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Winner;

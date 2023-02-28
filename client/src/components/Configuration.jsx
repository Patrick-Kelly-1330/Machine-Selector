import React from 'react';

const Configuration = ({ configVisible }) => {

  if (configVisible) {
    return (
      <div>Hello from Configuration
      </div>
    );
  } else {
    return null;
  }
}

export default Configuration;

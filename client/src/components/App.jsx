import React from 'react';
import { useState } from 'react';
import Machine from './Machine.jsx';
import Configuration from './Configuration.jsx';
import NewGroup from './NewGroup.jsx';
import Winner from './Winner.jsx';

const App = () => {

  const [configVisible, setConfigVisible] = useState(false);

  const onShowConfig = () => {
    setConfigVisible(!configVisible);
    console.log('configVisible ', configVisible);
  }

  return (
    <div>
      <div className="newDecision" onClick={onShowConfig}>New Animation</div>
      <Machine />
      <Configuration configVisible={configVisible}/>
      <NewGroup />
      <Winner />
    </div>
  );
}

export default App;

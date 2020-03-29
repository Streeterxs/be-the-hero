import React, {useState} from 'react';
import Routes from './routes';

import './styles.css'

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;

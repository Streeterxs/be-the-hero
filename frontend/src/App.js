import React, {useState} from 'react';
import { Logon as Logon } from './Pages/Logon';

import './styles.css'

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <Logon/>
    </div>
  );
}

export default App;

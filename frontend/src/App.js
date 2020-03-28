import React, {useState} from 'react';

import Header from './Header';

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={()=>{setCounter(++counter);}}>Incrementador</button>
    </div>
  );
}

export default App;

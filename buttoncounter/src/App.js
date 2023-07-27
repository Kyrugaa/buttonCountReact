import React, {useState} from 'react';

function App() {

    const [counter, setCounter] = useState(0)
    function countUp(){
      setCounter(counter + 1)
    }

  return(

    <div>

    <h1>Button Counter</h1>
    <p>Zähler: {counter}</p>
    <button className="button" onClick= {countUp}>+ 1</button>

    </div>
  );
}


export default App;
import './App.css';
import Calculator from './components/Calculator';
import { useState } from 'react';

function App() {
  const [numberOfCalculators, setNumberOfCalculators] = useState([])

  function addCalculator(){
    let currentNumber = [...numberOfCalculators]
    currentNumber.push('2')
    setNumberOfCalculators(currentNumber)
  }
  function deleteCalculator(){
    let currentNumber = [...numberOfCalculators]
    currentNumber.pop()
    setNumberOfCalculators(currentNumber)
  }

  return (
    <div className="App">
      <button className='button' onClick={()=>{addCalculator()}}>Create New Calculator</button>
      <button className='button' onClick={()=>{deleteCalculator()}}>Remove Newest Calculator</button>
        {numberOfCalculators.map((thing) => {
          // if it works it works
          return <Calculator />
        })}
    </div>
  );
}

export default App;

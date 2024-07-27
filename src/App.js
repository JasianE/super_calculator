import './App.css';
import calculatorCreator from './logic/main';
import digit from './components/digit';

function App() {
  let total = calculatorCreator()
  let myValue = total.useTheFunctions(10, 3, 'add')

  const numPads = []
  for(let i = 0; i < 9; i++){
    numPads.push(digit(i+1, () => {return 'hi'}))
  }
  return (
    <div className="App">
      <div className='container'>
        {numPads}
      </div>
    </div>
  );
}

export default App;

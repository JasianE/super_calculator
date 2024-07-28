import './App.css';
import calculatorCreator from './logic/main';
import digit from './components/digit';
import { useState } from 'react';

function App() {
  let total = calculatorCreator()
  let myValue = total.useTheFunctions(10, 3, 'add')
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')

  function doNumbers(value, type){
    if(operator=='' && type == 'number'){
      let holder = num1
      holder = holder.split('')
      holder.push(value)
      holder = holder.join('')
      setNum1(holder)
    }
    else if(operator == "" && type == 'operator'){
      switch(value){
        case "/":
          setOperator("/")
          break;
        case "+":
          setOperator("+")
          break;
        case "-":
          setOperator("-")
          break;
        case "*":
          setOperator("*")
          break;
      }
    } 
    else if(operator !== '' && type == 'number'){
      let holder = num2
      holder = holder.split('')
      holder.push(value)
      holder = holder.join('')
      setNum2(holder)
    }
    else if(operator !== '' && num2 != '' && value == '='){
      let firstNum = Number(num1)
      let secondNum = Number(num2)
      let localTotal = 0

      switch(operator){
        case '/':
          localTotal = firstNum/secondNum
          break;
        case '+':
          localTotal = firstNum + secondNum
          break;
        case '-':
          localTotal = firstNum - secondNum
          break;
        case '*':
          localTotal = firstNum * secondNum
          break;
      }
      setResult(localTotal)
    }
  }
  const numPads = []

  for(let i = -1; i < 9; i++){
    numPads.push(digit(i+1, doNumbers, 'number'))
  }

  numPads.push(digit('/', doNumbers, 'operator'))
  numPads.push(digit('*', doNumbers, 'operator'))
  numPads.push(digit('+', doNumbers, 'operator'))
  numPads.push(digit('-', doNumbers, 'operator'))
  numPads.push(digit('.', doNumbers, 'number'))
  numPads.push(digit('=', doNumbers, 'finish'))

  console.log(num1, operator, num2)
  return (
    <div className="App">
      <div className='container'>
        {numPads}
        {operator}
        {num1}
        {num2}
        <h1>Result: {result}</h1>
      </div>
    </div>
  );
}

export default App;

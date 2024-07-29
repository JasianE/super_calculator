import React, {useState} from "react";
import calculatorCreator from "../logic/main";
import Draggable, {DraggableCore} from 'react-draggable';
import digit from "./digit";
import "../App.css"

function Calculator(){
    const [num1, setNum1] = useState('')
    const [num1Decimal, setNum1Decimal] = useState(false)
    const [num2, setNum2] = useState('')
    const [num2Decimal, setNum2Decimal] = useState(false)
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState('')
  
    function doNumbers(value, type){
      if(operator == '' && type == 'number'){
        if(num1 == '' && (value == '0' || value == '.')){
          return ''
        }
        else if(value == '.' && num1Decimal == false){
          setNum1Decimal(true)
        }
        else if(value == '.' && num1Decimal == true){
          return ''
        }
        let holder = num1
        holder = holder.split('')
        holder.push(value)
        holder = holder.join('')
        setNum1(holder)
        setResult('')
      }
      else if(operator == "" && type == 'operator' && num1 !== ''){
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
        if(num2 == '' && (value == '0' || value == '.')){
          return ''
        }
        else if(value == '.' && num2Decimal == false){
          setNum2Decimal(true)
        }
        else if(value == '.' && num2Decimal == true){
          return ''
        }
        let holder = num2
        holder = holder.split('')
        holder.push(value)
        holder = holder.join('')
        setNum2(holder)
      }
      else if(operator !== '' && num2 != '' && value == '='){
        let calculator = calculatorCreator()
        let firstNum = Number(num1)
        let secondNum = Number(num2)
        let localTotal = calculator.useTheFunctions(firstNum, secondNum, operator)
        setResult(localTotal)
        setNum1('')
        setNum2('')
        setOperator('')
        console.log(num1,num2,operator)
      }
    }
    const numPads = []
  
    for(let i = 8; i > 5; i--){
      numPads.push(digit(i+1, doNumbers, 'number'))
    }
    numPads.push(digit('/', doNumbers, 'operator'))
    for(let i = 5; i > 2; i--){
        numPads.push(digit(i+1, doNumbers, 'number'))
    }
    numPads.push(digit('*', doNumbers, 'operator'))
    for(let i = 2; i > -1; i--){
        numPads.push(digit(i+1, doNumbers, 'number'))
    }
    numPads.push(digit('-', doNumbers, 'operator'))
    numPads.push(digit('0', doNumbers, 'number'))
    numPads.push(digit('.', doNumbers, 'number'))
    numPads.push(digit('=', doNumbers, 'finish'))
    numPads.push(digit('+', doNumbers, 'operator'))
  
    return (
        <Draggable>
            <div className='container'>
                <div className="screen">
                    <h1>{num1}</h1>
                    <h1>{operator}</h1>
                    <h1>{num2}</h1>
                    <h1>{result}</h1>
                </div>
                <div className="numpads">
                    {numPads}
                </div>
            </div>
        </Draggable>
    )
}

export default Calculator
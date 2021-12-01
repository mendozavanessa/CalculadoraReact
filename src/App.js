
import './App.css';
import React, {useState} from 'react';

const AppCalculadora = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0);

  const allClear = () => {
    setNumber1("");
    setNumber2("");
    setCurrentOperation("");
    setResult("");
  }

  const Del = () => {
    if(currentOperation === "") {
      setNumber1(number1.slice(0, -1));
    }else {
      if(currentOperation != "") {
        if(number2 != "") {
          setNumber2(number2.slice(0, -1));
        }else {
          setCurrentOperation(currentOperation.slice(0, -1));
        }
      }
    }
  }

  const clickNumber = (val) => {
    if(currentOperation === "") {
      setNumber1(number1 + val);
    }else {
      setNumber2(number2 + val);
    }
  }

  const clickOperation = (val) => setCurrentOperation(val);

  const getResult = () => {
    switch(currentOperation) {
      case "+":
        setResult(Number(number1) + Number(number2));
        break;
      case "-":
        setResult(Number(number1) - Number(number2));
        break;
      case "*":
        setResult(Number(number1) * Number(number2));
        break;
      case "/":
        setResult(Number(number1) / Number(number2));
        break;
    }
  }

  return (
    <div className="App">
      <h1 className="title">CALCULADORA</h1>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{currentOperation ? number1 + currentOperation + number2 : ""}</div>
          <div className="current-operand">{result ? result : (!currentOperation ? number1 :  "")}</div>
        </div>
        <button onClick={allClear} className="span-two">AC</button>
        <button onClick={Del} >DEL</button>
        <button onClick={() => {clickOperation("/")}} >/</button>
        <button onClick={() => {clickNumber(7)}} >7</button>
        <button onClick={() => {clickNumber(8)}} >8</button>
        <button onClick={() => {clickNumber(9)}} >9</button>
        <button onClick={() => {clickOperation("*")}} >*</button>
        <button onClick={() => {clickNumber(4)}} >4</button>
        <button onClick={() => {clickNumber(5)}} >5</button>
        <button onClick={() => {clickNumber(6)}} >6</button>
        <button onClick={() => {clickOperation("+")}} >+</button>
        <button onClick={() => {clickNumber(1)}} >1</button>
        <button onClick={() => {clickNumber(2)}} >2</button>
        <button onClick={() => {clickNumber(3)}} >3</button>
        <button onClick={() => {clickOperation("-")}} >-</button>
        <button onClick={() => {clickNumber(".")}} >.</button>
        <button onClick={() => {clickNumber(0)}} >0</button>
        <button onClick={getResult} className="span-two">=</button>
      </div>
      <div className="footer">© 2021 Mendoza Inoñan Vanessa</div>
    </div>
  );
}

export default AppCalculadora;

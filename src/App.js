import { useState } from "react";

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    )
    {
      return;
    }

    setCalc(calc + value);

    if (
      (!ops.includes(value))
    )

    setResult(eval(calc + value).toString())  
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const del = () => {
    setCalc(calc.slice(0,-1))
  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
      <button 
        onClick = {() => updateCalc(i.toString())}
        key={i}>
        {i}
      </button>
      )
    }
    return digits;
  }
  return (
    <div className="App">
       <div className="calculator">
         <div className="display">
           {result ? <span>({result})</span> : ''}
           &nbsp;
           {calc || "0"}
         </div>
         <div className="operators">
           <button onClick = {() => updateCalc('/')}>/</button>
           <button onClick = {() => updateCalc('*')}>*</button>
           <button onClick = {() => updateCalc('+')}>+</button>
           <button onClick = {() => updateCalc('-')}>-</button>

           <button onClick = {del}>DEL</button>
         </div>
         <div className="digits">
           {createDigits()}
           <button onClick = {() => updateCalc('0')}>0</button>
           <button onClick = {() => updateCalc('.')}>.</button>

           <button onClick = {calculate}>=</button>
         </div>
       </div>
    </div>
  );
}

export default App;

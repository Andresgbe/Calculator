import './Styles/App.css';
import { useState } from 'react';


function App() {

    const [result, setResult] = useState('');

    const clear = () => {
      setResult('');
    }

    const handleClick = (e) => {
      setResult(result.concat(e.target.name));
    }

    const backspace = () => {
      setResult(result.slice(0, result.length - 1));
    }

    const calculate = () => {
        try{
          setResult(eval(result).toString()); 
        } catch(err)  {
          setResult("Error")
        }
    }

  return (
  <div className="App">     
    <div>
         <input type="text" value={result} />
    </div>

    <div className='grid'>
            <button className='operator' onClick={() => {clear()}} id="clear">Clear</button>
            <button className='operator' onClick={backspace} id="backspace">C</button>
            <button className='operator' name="/" onClick={handleClick}>&divide;</button>

            <button name="7" className='number' onClick={handleClick}>7</button>
            <button name="8" className='number' onClick={handleClick}>8</button>
            <button name="9" className='number' onClick={handleClick}>9</button>
            <button name="*" className='operator' onClick={handleClick}>&times;</button>
  
            <button name="4" className='number' onClick={handleClick}>4</button>
            <button name="5" className='number' onClick={handleClick}>5</button>
            <button name="6" className='number' onClick={handleClick}>6</button>
            <button name="-" className='operator' onClick={handleClick}>-</button>
     
    
            <button name="1" className='number' onClick={handleClick}>1</button>
            <button name="2" className='number' onClick={handleClick}>2</button>
            <button name="3" className='number' onClick={handleClick}>3</button>
            <button name="+" className='operator' onClick={handleClick}>+</button>
      
            <button name="." className='operator' onClick={handleClick}>.</button>
            <button name="0" className='number' onClick={handleClick}>0</button>
            <button id="result" className='operator' onClick={calculate}>=</button>
      </div>
    </div>
    
  );
}

export default App;



import './App.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { incrementByAmout, decrementByAmout, addInterest, charges } from './store/counter'; 
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState(0) 
  const count = useSelector((state) => state.counter.value)
  
  const dispatch = useDispatch()

  const handleDeposit = (event) => { 
    event.preventDefault();
    dispatch(incrementByAmout(Number(userInput)))
    setUserInput(0)
  }
  const handleWithdraw = (event) => {
    event.preventDefault();
    dispatch(decrementByAmout(Number(userInput)))
    setUserInput(0)
  }

  const handleInterest = (event) => {
    event.preventDefault();
    dispatch(addInterest());
  }
  
  const handleCharges = (event) => {
    event.preventDefault();
    dispatch(charges())
  }
  
  
  return (
    <div className="App">
      <div>
        <label>
        <h1>Balance:</h1>
        <h1>{count}</h1>

        <input type="text" name="value" onChange={(e) => setUserInput(e.target.value)} value={userInput}></input> <br />

        <button className='Buttons' onClick={handleDeposit}>Deposit</button>
        <button className='Buttons' onClick={handleWithdraw}>Withdraw</button>
        <button className='Buttons' onClick={handleInterest}>Add Interest</button>
        <button className='Buttons' onClick={handleCharges}>Charges</button>

        </label>

      </div>
    </div>
  );
}

export default App;

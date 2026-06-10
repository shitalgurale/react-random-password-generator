
import { useState } from 'react';
import './App.css';
import { lc, nc, sp, uc } from './Data/PassChar';

function App() {

  let [upperCase,setUpperCase] = useState(false)

  let [lowerCase,setLowerCase] = useState(false)

  let [number,setNumber] = useState(false)

  let [symbol, setSymbol] = useState(false)

  let [passwordLen,setPasswordLen] =useState(10)

  let [fpass,setFpass] =useState('')


  let createPassword=()=>{
    let finalPass=''
    let charSet=''

    if (upperCase || lowerCase || number || symbol){
      if(upperCase) charSet+=uc;
        if(lowerCase) charSet+=lc;
          if(number) charSet+=nc;
            if(symbol) charSet+=sp

            for(let i=0;i<passwordLen;i++){
              finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))


            }

            setFpass(finalPass)
              
    }
    else{
      alert("Please select at least 1 option...")
    }

  }

  let copyPass=()=>{

    navigator.clipboard.writeText(fpass)
  }
  return (
    <>
    <div className='passwordBox'>
      <h2>Password Generator</h2>
      <div className='passwordBoxIn'>
        <input type='text' readOnly value={fpass} />
        <button onClick={copyPass}>Copy</button> 

      </div>
      <div className='passlength'>
        <label>Password Length</label>
        <input type='number' max={20} min={10} value={passwordLen} onChange={(event)=>setPasswordLen(event.target.value)} />

      </div>

      <div className='passlength'>
        <label>Include Uppercase Letters</label>
        <input type='checkbox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)} max={20}/>

      </div>
      <div className='passlength'>
        <label>Include Lowercase Letters</label>
        <input type='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)} max={20}/>

      </div>
      <div className='passlength'>
        <label>Include Numbers</label>
        <input type='checkbox' checked={number} onChange={()=>setNumber(!number)} max={20}/>

      </div>

      <div className='passlength'>
        <label>Include Symbols</label>
        <input type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)} max={20}/>

      </div>
      <button className='btn' onClick={createPassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;

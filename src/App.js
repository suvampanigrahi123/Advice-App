import React, { useEffect, useState } from 'react';
import './App.css'
const App = () => {
  const [advice,setAdvice]=useState("");
  useEffect(()=>{
    FetchAdvice();
  },[])
  function FetchAdvice(){
    const id=Math.floor(Math.random()*100)-1;
    console.log(id);
    fetch(`https://api.adviceslip.com/advice/${id}`).then((result)=>{
      result.json().then((resp)=>{
        // console.log(resp.slip.advice);
        console.log(resp);
        setAdvice(resp.slip.advice);
      })
    })
  }
  // setInterval(()=>{
  //   FetchAdvice()
  // },5000);
  return(
    <div className="app">
    <div className='card'>
    <p>{advice}</p>
    <button className='Button' onClick={FetchAdvice} >
    <span>Give Me Advice.!</span>
    </button>
    </div>
  </div>
  ); 
};

export default App;

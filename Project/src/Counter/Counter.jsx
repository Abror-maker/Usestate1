import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
        const [son1, son2]=useState(1)


    function bolish(){
        son2(son1/2)
    }

function ayrish(){
        son2(son1-1)
}

 function qoshish(){
        son2(son1+1)
 }
function kopaytirish(){
        son2(son1*5)
}
function sozi(){
        son2("Salom")
}

function tiklash(){
    son2(0)
}
  return (
    <div className='asosiy'>
      <h1>{son1}</h1>
      <button onClick={qoshish} >sonni 2+ qo'shish </button>
      <button onClick={kopaytirish} > sonnni 5x ko'paytirish</button>
      <button onClick={bolish} >sonni 2ga bo'lish</button>
      <button onClick={ayrish} >sonni ayrish</button>
      <button onClick={sozi} >Salom so'zi </button>
      <button onClick={tiklash}>0 ga tiklash</button>
    </div>
  )
}

export default Counter

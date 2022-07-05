import React, { useState } from 'react'


const Calculates = () => {
  const [numb,setNumb] = useState ("");

const backspace = () => {
try {
  setNumb(numb.slice(0,-1))
}  catch (error) {
  setNumb("")
}
}

const delsayi = () => {
  setNumb("")
}

 

const calculate = () => {
  try {
    setNumb(eval(numb))
  } catch (error) {
    setNumb("Error")
  }
}

  return (
    <div class="box">
      <h3>Hesap Makinesi</h3>
      <input 
      type="text" 
      value={numb || '0'} 
      onChange={(e)=> setNumb(e.target.value) } 
      className="displayed"
      />
      <button value="AC" onClick={() => backspace ()} class="button orange" >AC</button>
      <button value="DEL" onClick={() => delsayi ()} class="button orange" >DEL</button>
      
      <button onClick={(e)=> setNumb(Math.sqrt(numb) + e.target.value)} class="button pink" >x2</button>
      <button value="%" onClick={(e)=> setNumb(numb + e.target.value)} class="button pink">%</button>
       <button value="1" onClick={(e)=> setNumb(numb + e.target.value)} class="button black" >1</button>
      <button value="2" onClick={(e)=> setNumb(numb + e.target.value)} class="button black" >2</button>
      <button value="3" onClick={(e)=> setNumb(numb + e.target.value)} class="button black" >3</button>
      <button value="+" onClick={(e)=> setNumb(numb + e.target.value)} class="button pink">+</button>
      <button value="4" onClick={(e)=> setNumb(numb + e.target.value)} class="button black" >4</button>
      <button value="5" onClick={(e)=> setNumb(numb + e.target.value)} class="button black" >5</button>
      <button value="6" onClick={(e)=> setNumb(numb + e.target.value)} class="button black" >6</button>
      <button value="-" onClick={(e)=> setNumb(numb + e.target.value)} class="button pink">-</button>
      <button value="7" onClick={(e)=> setNumb(numb + e.target.value)} class="button black" >7</button>
      <button value="8" onClick={(e)=> setNumb(numb + e.target.value)} class="button black" >8</button>
      <button value="9" onClick={(e)=> setNumb(numb + e.target.value)} class="button black" >9</button>
      <button value="*" onClick={(e)=> setNumb(numb + e.target.value)} class="button pink">*</button>
      <button value="0" onClick={(e)=> setNumb(numb + e.target.value)} class="button black" >0</button>
      <button value="." onClick={(e)=> setNumb(numb + e.target.value)} class="button pink">.</button>
      <button value="=" onClick={() => calculate ()} class="button orange" >=</button>
      <button value="/" onClick={(e)=> setNumb(numb + e.target.value)} class="button pink">/</button>
      
     
     
     </div>
  )
}

export default Calculates 

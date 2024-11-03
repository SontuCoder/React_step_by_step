import { useState } from 'react';
import './App.css'

function App(){

//==================================//
//      Before Hooks
//==================================//
// let counter =15;
// function addValue(){
//   counter++;
//   console.log("Add butdon is clicked",counter);
// }
// const removeValue=()=>{
//   counter--;
//   console.log("Remove butdon is clicked",counter);
// }

//==================================//
//      After Hooks
//==================================//

let [counter,setCounter] = useState(15);

function addValue(){
  counter++;
  setCounter(counter);
  console.log("Add butdon is clicked",counter);
}
const removeValue=()=>{
  setCounter(counter-1);
  console.log("Remove butdon is clicked",counter);
}



  return (
    <>
      <h1>Hi, Sontu</h1>
      <h3>Counter Value: {counter}</h3>
      <br />
      <button className='button' onClick={addValue}>Add value by 1</button>
      <br />
      <br />
      <button className='button' onClick={removeValue}>Remove value by 1</button>
    </>
  )
}

export default App

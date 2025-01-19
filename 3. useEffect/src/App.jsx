import { useEffect, useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');
  const [loding, setLoding] = useState(true);

  // const p =document.getElementById("effect");

  // useEffect(()=>{
  //   p.innerText = `now value ${count}`;
  // },[count])


  const sayHello = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello");
      }, 3000);
    });
  };

  useEffect(()=>{
    sayHello().then(data=>{
      setData(data);
      setLoding(false);
    })
  });


  return (
    <div className="bg-slate-400 px-10 py-10">
      {/* <div className="">
        <p className=''>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Add number</button>
        <p id='effect'></p>
      </div> */}

      { loding?(<h1>
        Data Loading ...
      </h1>
      ):(<h1>{data}</h1>)}

</div>
  )
}

export default App;

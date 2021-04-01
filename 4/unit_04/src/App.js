import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  let addRef2 = React.createRef();
  let addRef5 = React.createRef();
  let OutRef5 = React.createRef();

  const [output6, Setout6] = useState('');
  let addRef6 = React.createRef();

  let OutRef7 = React.createRef();
  let addRef7 = React.createRef();

  //const [output8, Setout8] = useState('');
  let addRef8 = React.createRef();
  let OutRef8 = React.createRef();

  let OutRef9 = React.createRef();
  let addRef9 = React.createRef();

  let addRef10 = React.createRef();


  function task1() {
    console.log('task2');
  }

  function task2() {
    //task-2.classList.add('active'); // тут не работает
   // console.log(addRef2.current.className); // получил класс task-2
    addRef2.current.className = 'active + task-2';
  }

  
  function task3(event) {
    //console.log(textInput.current.value);
    console.log(event.target.value);
  }


  function task4(event) {

    console.count(event.target.value);
    
  }

  function task5(event) {

    console.log('task5');
    if(addRef5.current.checked) {
        console.log(event.target.value); // 55
        console.log(addRef5.current.value); // 55
        OutRef5.current.innerHTML = addRef5.current.value;
    }
    
  }

  function task6(event) {
    //console.log('task6');
    Setout6(addRef6.current.value);
  }

  
  function task7(event) {

    console.log(addRef7.current.className); // block-7
   
    function randomInt(a, b) {
         a = Math.ceil(a);
         b = Math.floor(b);
         return Math.floor(Math.random() * (b - a + 1)) + a; 
       }

       let color1 = randomInt(0, 255);
       let color2 = randomInt(0, 255);
       let color3 = randomInt(0, 255);
   
       let rgb = 'rgb(' +color1+ ','+color2+ ','+color3+')';

       addRef7.current.style.background = rgb; 

        console.log( addRef7.current.className); // rgb(157,255,222)
  
   
   }
   

  function task8(event) {
 
    if(isNaN(event.target.value)) {
      OutRef8.current.innerHTML += "0";
    } else {
      OutRef8.current.innerHTML += "1";
    }
    //console.log(event.target.value);
  }

  function task9(event) {
    console.log(addRef9.current.value);
    OutRef9.current.innerHTML = addRef9.current.value; 
  }

  let ar10 = [5, 6, 7];
  function task10() {
     let num = Number(addRef10.current.value); // number
     ar10.push(num);
     console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={()=>task2()} ref={addRef2}></div>
      </section>

      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput = {task3} />
      </section>

      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>

      <section>
        <h2>Task 5</h2>
        <input className="task-5" type="checkbox" value="55" onChange={task5} ref={addRef5} />
        <div className="out-5" ref={OutRef5}></div>
      </section>

      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={addRef6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{output6}</div>
      </section>

      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={addRef7}></div>
        <button className="task-7" onClick={task7} >Color</button>
      </section>

      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ref={addRef8}></input>
        <div className="out-8" ref={OutRef8}></div>
      </section>

      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={addRef9}></input>
        <div className="out-9" ref={OutRef9}></div>
      </section>

      <section>
        <h2>Task 10</h2> 
        <input type="number" className="i-10" ref={addRef10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;

import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  let myRef1 = React.createRef();
  const [st1, setSt1] = useState('');

  let [st2, setSt2] = useState(0);

  const [st3, setSt3] = useState('');

  const [st4, setSt4] = useState(0); 

  const [st5, setSt5] = useState('');

  const [st6, setSt6] = useState('');

  const [st7, setSt7] = useState('');
  let myRef7 = React.createRef('');

  const [st8, setSt8] = useState('');
  let myRef8 = React.createRef('');
  
  const [st9, setSt9] = useState('');

  const [st10, setSt10] = useState('');
  let myRef10 = React.createRef('');



  function task1(event) {
    console.log(myRef1.current.value); //получаю из инпута
    setSt1(myRef1.current.value); // вывожу
  }

  function task2() {
    let currentCount = st2;
    currentCount++;
    setSt2(currentCount); 
  }

  function task3(event) {
    console.log(event.target.value); 
    setSt3(event.target.value); 
  }

  function task4() {
    let currentCount = st4;
    currentCount++;
    setSt4(currentCount); 
  }

  function task5(event) {
    if(event.target.checked) {
      setSt5(event.target.value);
    } else {
      setSt5(0);
    }
  }

  function task6(event) {
    console.log(event.target.value);
    setSt6(event.target.value);
  }

  function task7(event) {
    function randomInt(a, b) {
      a = Math.ceil(a);
      b = Math.floor(b);
      return Math.floor(Math.random() * (b - a + 1)) + a; 
    }

    let color1 = randomInt(0, 255);
    let color2 = randomInt(0, 255);
    let color3 = randomInt(0, 255);

    let rgb = 'rgb(' +color1+ ','+color2+ ','+color3+')';
    
    myRef7.current.style.background = rgb;
    setSt7(rgb); 
   
   }

  
   function task8(event) {
      let out = st8;
        if(isNaN(event.target.value)) {
          out += '0';
          myRef8.current.innerHTML += out;
          console.log(myRef8.current.value); // значение инпута
        } else {
          out += '1';
          myRef8.current.innerHTML += out;
        }
        setSt8(out);  
  }


  function task9(event) {
    setSt9(event.target.value);
  }

  function task10() {
    setSt10(myRef10.current.value);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		  <input type="text" ref={myRef1} />
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>

      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>

      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>

      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>

      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        <div>{st5}</div>
      </section>

      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>

      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={myRef7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>

      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ref={myRef8}></input>
        <div>{st8}</div>
      </section>

      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={myRef10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div >Тут выводим - форма вывода любая!<br/> <b>{st10}</b></div>
      </section>
    </>
  );
}

export default App;

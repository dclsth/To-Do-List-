import { useState } from 'react';
import Task from "./function/task.js";
// import "./App.css";


function App() {

  const [taskNm, settaskNm] = useState("");
  const [time, settime] = useState("");
  const [tasklist, settasklist] = useState([]);
  const addtask = () => {
    settasklist([...tasklist, { taskN: taskNm, time: time }]);
    settaskNm("");
    settime("");
  };





  return (
    <body>
  <div className="App">
    

  <div className="input"> 
  <h1> My To Do List</h1>      
      <label>Task: </label>

      <br />

      <input type="text" id="task" 
      onChange = {(e) => {settaskNm(e.target.value)
      }}/>

      <br />

      <label>Time: </label>

      <br />

      <input type="text" id="time"  
      onChange = {(e) => {settime(e.target.value)
      }}/>

      <br />

      <input type="submit" id="button" onClick = {addtask} />
  </div>

  <div className="result">
      {tasklist.map((taskN) => {
    
    
        return <Task taskNm={taskN.taskN} time={taskN.time} />  

        /* taskN yang menyimpan seluruh objek, maka dari itu nyari time harus melalui taskN*/
      })} 
  </div>
    
  </div>
  </body>
  );
}

export default App;

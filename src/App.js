import { useState } from 'react';
import Task from "./function/task.js";

function App() {

  const [taskname, settaskname] = useState("");
  const [time, settime] = useState("");
  const [tasklist, settasklist] = useState([]);
  const addtask = () => {
    settasklist([...tasklist, { task: taskname, time: time }]);
    settaskname("");
    settime("");
  };

  return (
    <div className="App">

      <label>Task: </label>

      <br />

      <input type="text" id="task" 
      onChange = {(e) => {settaskname(e.target.value)
      }}/>

      <br />

      <label>Time: </label>

      <br />

      <input type="text" id="time"
      onChange = {(e) => {settime(e.target.value)
      }}/>

      <br />

      <input type="submit" onClick = {addtask} />

      {tasklist.map((task) => {
        return <Task taskname={task.task} time={task.time} />
      })} 

     


    </div>
  );
}

export default App;

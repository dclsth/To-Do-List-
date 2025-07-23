//import "../App.css";

export default function Task({taskNm, time}) {
  return (
    <div className="result">
    <h1>Task: {taskNm} </h1>
    <h1>Time to Complete: {time} </h1>
    </div>
  );
}

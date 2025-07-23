//import "../App.css";

export default function Task({taskNm, time}) {
  return (
    <div className="result">
    <h3>Task: {taskNm} </h3>
    <h3>Time to Complete: {time} </h3>
    </div>
  );
}

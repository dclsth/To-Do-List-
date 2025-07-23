export default function Task({taskname, time}) {
  return (
    <div className="task">
    <h1>Task: {taskname} </h1>
    <h1>Time to Complete: {time} </h1>
    </div>
  );
}

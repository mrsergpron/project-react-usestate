import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState([]);

  const add = (value) => {
    console.log('value', value);
    setTask([
      ...task,
      {
        id: new Date().getTime(),
        data: new Date().toDateString(),
        title: value,
      },
    ]);
  };

  const del = () => {
    setTask([]);
  };

  const delTask = (id) => {
    setTask(task.filter((i) => i.id !== id));
  };
  return (
    <div className="App">
      <h1>TODOLIST</h1>

      <TodoList task={task} delTask={delTask} />
      <Form add={add} del={del} />
    </div>
  );
}

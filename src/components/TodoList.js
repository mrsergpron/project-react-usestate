import "../styles.css";

const TodoList = ({ task, delTask }) => (
  <ul>
    {task.map((i) => (
      <li key={i.id}>
        <div>{i.data}</div>
        <div>{i.title}</div>
        <div>
          <button onClick={() => delTask(i.id)}>
            <i class="fas fa-times"></i>
          </button>
        </div>
      </li>
    ))}
  </ul>
);

export default TodoList;

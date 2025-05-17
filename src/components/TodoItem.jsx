function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
      <div className="todo-item">
        <span
          className={`todo-text ${todo.completed ? "completed" : ""}`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    );
  }
  
  export default TodoItem;
  
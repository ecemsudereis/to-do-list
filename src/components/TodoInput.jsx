import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "0.5rem", width: "250px" }}
      />
      <button type="submit" style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>
        Add
      </button>
    </form>
  );
}

export default TodoInput;

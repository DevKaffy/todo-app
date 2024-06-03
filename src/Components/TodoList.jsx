import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <section style={{ width: "50%", margin: "5rem auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>TO-DO-LIST</h1>
        <div>
          <input
            style={{
              fontSize: "1.6rem",
              padding: "10px",
              border: "2px solid brown",
              borderRadius: "5px 0 0 5px",
            }}
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button
            style={{
              fontSize: "1.7rem",
              fontWeight: "bold",
              padding: "11px 20px",
              border: "none",
              cursor: "pointer",
              color: "white",
              backgroundColor: "green",
              borderRadius: "0 5px 5px 0",
            }}
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {tasks.map((task, index) => (
            <li
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                backgroundColor: "white",
                border: "3px solid cornsilk",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                padding: "15px",
              }}
              key={index}
            >
              <span style={{ flex: "1", paddingRight: "10px" }}>{task}</span>
              <button
                style={{
                  fontSize: "1.7rem",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: "5px",
                }}
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                style={{
                  fontSize: "1.7rem",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  color: "white",
                  borderRadius: "5px",
                  backgroundColor: "deepskyblue",
                  padding: "8px 12px",
                  marginLeft: "10px",
                  fontSize: "1.4rem",
                }}
                onClick={() => moveTaskUp(index)}
              >
                👆
              </button>
              <button
                style={{
                  fontSize: "1.7rem",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  color: "white",
                  borderRadius: "5px",
                  backgroundColor: "deepskyblue",
                  padding: "8px 12px",
                  marginLeft: "10px",
                  fontSize: "1.4rem",
                }}
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TodoList;

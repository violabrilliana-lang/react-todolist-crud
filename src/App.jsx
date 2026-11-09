import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Go to gym", priority: "High", status: "To Do" },
    { id: 2, title: "Read a book", priority: "Low", status: "Done" },
    { id: 3, title: "Go to market", priority: "Medium", status: "In Progress" },
    {
      id: 4,
      title: "Restart Learning Solidworks",
      priority: "High",
      status: "To Do",
    },
    {
      id: 5,
      title: "change slider to scroll",
      priority: "High",
      status: "Done",
    },
    {
      id: 6,
      title: "To publish the article",
      priority: "Medium",
      status: "In Progress",
    },
  ]);

  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSaveTask = (task) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
      setEditingTask(null);
    } else {
      setTasks([task, ...tasks]);
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold mb-0 text-dark">Task List</h2>
          <button
            className="btn btn-primary px-4 py-2 rounded-3 fw-semibold"
            style={{ backgroundColor: "#6c5ce7", borderColor: "#6c5ce7" }}
            onClick={() => {
              setEditingTask(null);
              setShowForm(!showForm);
            }}
          >
            {showForm ? "Close Form" : "+ Add Task"}
          </button>
        </div>

        {/* Form area */}
        {(showForm || editingTask) && (
          <TaskForm
            onSaveTask={handleSaveTask}
            editingTask={editingTask}
            onCancelEdit={() => {
              setEditingTask(null);
              setShowForm(false);
            }}
          />
        )}

        {/* Task List */}
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;

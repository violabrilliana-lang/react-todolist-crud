import React, { useState, useEffect } from "react";

const TaskForm = ({ onSaveTask, editingTask, onCancelEdit }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("To Do");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setPriority(editingTask.priority);
      setStatus(editingTask.status);
    } else {
      setTitle("");
      setPriority("Low");
      setStatus("To Do");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSaveTask({
      id: editingTask ? editingTask.id : Date.now(),
      title,
      priority,
      status,
    });

    setTitle("");
    setPriority("Low");
    setStatus("To Do");
  };

  return (
    <div className="card shadow-sm border-0 mb-4 rounded-3">
      <div className="card-body p-4">
        <h5 className="card-title fw-bold mb-3">
          {editingTask ? "Edit Task" : "Add New Task"}
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-5">
              <label className="form-label small text-muted fw-semibold">
                Task Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter task title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label small text-muted fw-semibold">
                Priority
              </label>
              <select
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label small text-muted fw-semibold">
                Status
              </label>
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
          </div>
          <div className="mt-3 d-flex gap-2 justify-content-end">
            {editingTask && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onCancelEdit}
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="btn btn-primary px-4"
              style={{ backgroundColor: "#6c5ce7", borderColor: "#6c5ce7" }}
            >
              {editingTask ? "Update Task" : "+ Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;

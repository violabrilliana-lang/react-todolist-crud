import React from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  // Fungsi penentu warna badge Priority
  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case "High":
        return "text-danger fw-bold"; // Merah[cite: 2]
      case "Medium":
        return "text-warning fw-bold"; // Kuning[cite: 2]
      case "Low":
        return "text-success fw-bold"; // Hijau[cite: 2]
      default:
        return "text-secondary";
    }
  };

  // Status visual / Icon indikator status
  const renderStatusBadge = (status) => {
    switch (status) {
      case "Done":
        return (
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-secondary-subtle text-secondary px-3 py-2 rounded-pill">
              Done
            </span>
            <i className="bi bi-check-circle text-primary fs-5"></i>
          </div>
        );
      case "In Progress":
        return (
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-secondary-subtle text-secondary px-3 py-2 rounded-pill">
              In Progress
            </span>
            <i className="bi bi-arrow-repeat text-primary fs-5"></i>
          </div>
        );
      default: // To Do
        return (
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-secondary-subtle text-secondary px-3 py-2 rounded-pill">
              To Do
            </span>
            <i className="bi bi-circle text-secondary fs-5"></i>
          </div>
        );
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-5 text-muted">
        <p>No tasks available. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="card border-0 shadow-sm rounded-4 p-3 bg-white"
        >
          <div className="card-body d-flex align-items-center justify-content-between py-1">
            {/* Title */}
            <div style={{ flex: 2 }}>
              <span className="text-muted d-block small mb-1">Task</span>
              <span className="fw-semibold text-dark">{task.title}</span>
            </div>

            {/* Priority */}
            <div style={{ flex: 1 }}>
              <span className="text-muted d-block small mb-1">Priority</span>
              <span className={getPriorityBadgeClass(task.priority)}>
                {task.priority}
              </span>
            </div>

            {/* Status */}
            <div
              style={{ flex: 1.5 }}
              className="d-flex align-items-center justify-content-start"
            >
              {renderStatusBadge(task.status)}
            </div>

            {/* Action Buttons (Edit & Delete) */}
            <div className="d-flex gap-2">
              <button
                className="btn btn-light btn-sm text-secondary rounded-3 border"
                onClick={() => onEdit(task)}
                title="Edit Task"
              >
                <i className="bi bi-pencil-square"></i>
              </button>
              <button
                className="btn btn-light btn-sm text-danger rounded-3 border"
                onClick={() => onDelete(task.id)}
                title="Delete Task"
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

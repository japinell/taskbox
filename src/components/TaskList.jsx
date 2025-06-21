import React from "react";
import Task from "./Task";

const TaskList = ({ loading, tasks, onArchiveTask, onPinTask }) => {

  if (loading) {
    return <div className="list-items">Loading...</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">No tasks found</div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task) => {
        <Task
          key={task.id}
          task={task}
          onArchiveTask={onArchiveTask}
          onPinTask={onPinTask}
        />;
      })}
    </div>
  );
};

export default TaskList;

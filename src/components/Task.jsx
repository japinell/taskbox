import React from "react";

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div classname="list-item">
      <label htmlFor="title" aria-label={title}>
        <input type="text" value={title} readOnly={true} name="title" />
      </label>
    </div>
  );
};

export default Task;

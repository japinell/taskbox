import Task from "./Task.jsx";

export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "First Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};

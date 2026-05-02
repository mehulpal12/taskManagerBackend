import Task from "../models/task.model.js";

export const createTask = async (data: any) => {
  return await Task.create(data);
};

export const updateTaskStatus = async (taskId: string, status: string) => {
  const validStatuses = ["todo", "in-progress", "done"];
  if (!validStatuses.includes(status.toLowerCase())) {
    throw new Error(`Invalid status: ${status}. Must be one of ${validStatuses.join(", ")}`);
  }
  
  return await Task.findByIdAndUpdate(
    taskId, 
    { status: status.toLowerCase() }, 
    { new: true }
  );
};



export const updateTask = async (
  taskId: string,
  userId: string,
  updateData: any,
  isAdmin: boolean
) => {
  const task = await Task.findById(taskId);

  if (!task) {
    throw new Error("Task not found");
  }

  // RBAC check
  if (!isAdmin && task.assignedTo?.toString() !== userId) {
    throw new Error("Access Denied: You can only update tasks assigned to you.");
  }

  Object.assign(task, updateData);

  await task.save();

  return task;
};

export const getTasks = async (projectId: string) => {
  return await Task.find({ project: projectId });
};

export const getAllTasks = async () => {
  const tasks = await Task.find();
  console.log("ALL TASKS COUNT:", tasks.length);
  return tasks;
};

export const getTaskById = async (taskId: string) => {
  return await Task.findById(taskId);
};
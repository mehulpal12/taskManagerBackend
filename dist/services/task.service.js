import Task from "../models/task.model.js";
export const createTask = async (data) => {
    return await Task.create(data);
};
export const updateTaskStatus = async (taskId, status) => {
    return await Task.findByIdAndUpdate(taskId, { status }, { new: true });
};
export const updateTask = async (taskId, userId, updateData, isAdmin) => {
    const task = await Task.findById(taskId);
    if (!task) {
        throw new Error("Task not found");
    }
    // RBAC check
    if (!isAdmin && task.assignedTo?.toString() !== userId) {
        throw new Error("Not allowed to update this task");
    }
    Object.assign(task, updateData);
    await task.save();
    return task;
};
export const getTasks = async (projectId) => {
    return await Task.find({ project: projectId });
};
export const getAllTasks = async () => {
    const check = await Task.find();
    console.log("ALL TASKS AFTER CREATE:", check.length);
    return await Task.find();
};
export const getTaskById = async (taskId) => {
    return await Task.findById(taskId);
};
//# sourceMappingURL=task.service.js.map
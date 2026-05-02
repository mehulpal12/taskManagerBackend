import * as TaskService from "../services/task.service.js";
import Project from "../models/project.model.js";
export const createTask = async (req, res) => {
    const task = await TaskService.createTask({
        ...req.body,
        project: req.params.projectId,
    });
    const check = await TaskService.getAllTasks();
    console.log("ALL TASKS AFTER CREATE:", check.length);
    res.json(task);
};
export const updateStatus = async (req, res) => {
    const task = await TaskService.updateTaskStatus(req.params.id, req.body.status);
    res.json(task);
};
export const getTasks = async (req, res) => {
    const tasks = await TaskService.getTasks(req.params.projectId);
    res.json(tasks);
};
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskService.getAllTasks();
        return res.status(200).json(tasks);
    }
    catch (err) {
        return res.status(500).json({
            message: err.message || "Failed to fetch tasks",
        });
    }
};
export const getTaskById = async (req, res) => {
    const task = await TaskService.getTaskById(req.params.id);
    res.json(task);
};
export const updateTask = async (req, res) => {
    try {
        const { taskId, projectId } = req.params;
        const userId = req.user.id;
        // Check role inside project
        const project = await Project.findById(projectId);
        const member = project?.members.find((m) => m.user.toString() === userId);
        if (!member) {
            return res.status(403).json({ message: "Not a project member" });
        }
        const isAdmin = member.role === "admin";
        const updatedTask = await TaskService.updateTask(taskId, userId, req.body, isAdmin);
        res.status(200).json({
            message: "Task updated successfully",
            task: updatedTask,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//# sourceMappingURL=task.controller.js.map
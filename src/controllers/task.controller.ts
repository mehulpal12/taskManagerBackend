import * as TaskService from "../services/task.service.js";
import Project from "../models/project.model.js";

export const createTask = async (req: any, res: any) => {
  try {
    const task = await TaskService.createTask({
      ...req.body,
      project: req.params.projectId,
    });

    res.status(201).json(task);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const changeTaskStatus = async (req: any, res: any) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;
    const userId = req.user.id;

    // 1. Find the task to get the project ID
    const task = await TaskService.getTaskById(taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });

    // 2. Check if user is a member of the project
    const project = await Project.findById(task.project);
    if (!project) return res.status(404).json({ message: "Project not found" });

    const isMember = project.members.some(
      (m: any) => m.user && m.user.toString() === userId
    );

    if (!isMember) {
      return res.status(403).json({ message: "Access Denied: You must be a project member to update task status" });
    }

    // 3. Update the status
    const updatedTask = await TaskService.updateTaskStatus(taskId, status);

    res.status(200).json({
      message: "Status updated successfully",
      task: updatedTask,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getTasks = async (req: any, res: any) => {
  try {
    const tasks = await TaskService.getTasks(req.params.projectId);
    res.json(tasks);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllTasks = async (req: any, res: any) => {
   try {
    const tasks = await TaskService.getAllTasks();
    return res.status(200).json(tasks);
  } catch (err:any) {
    return res.status(500).json({
      message: err.message || "Failed to fetch tasks",
    });
  }
};

export const getTaskById = async (req: any, res: any) => {
  try {
    const task = await TaskService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTask = async (req: any, res: any) => {
  try {
    const { taskId, projectId } = req.params;
    const userId = req.user.id;

    const project = await Project.findById(projectId);
    if (!project) {
        return res.status(404).json({ message: "Project not found" });
    }

    const member = project.members.find(
      (m: any) => m.user && m.user.toString() === userId
    );

    if (!member) {
      return res.status(403).json({ message: "Not a project member" });
    }

    const isAdmin = member.role === "admin";

    const updatedTask = await TaskService.updateTask(
      taskId,
      userId,
      req.body,
      isAdmin
    );

    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { isProjectAdmin } from "../middleware/rbac.middleware.js";
import * as TaskController from "../controllers/task.controller.js";

const router = express.Router();

// Create task → ADMIN ONLY
router.post(
  "/:projectId",
  authMiddleware,
  isProjectAdmin,
  TaskController.createTask
);

// Get all tasks (Admin/Global view)
router.get(
  "/all",
  authMiddleware,
  TaskController.getAllTasks
);

// Get task by ID - Moved UP to prevent shadowing by :projectId
router.get(
  "/single/:id",
  authMiddleware,
  TaskController.getTaskById
);

// Get tasks by project
router.get(
  "/:projectId",
  authMiddleware,
  TaskController.getTasks
);

// Dedicated status update route (Any member can update)
router.patch(
  "/status/:taskId",
  authMiddleware,
  TaskController.changeTaskStatus
);

// Update task status (legacy/detailed route)
router.patch(
  "/:projectId/:taskId/status",
  authMiddleware,
  TaskController.updateTask
);

// Update ANY task details
router.patch(
  "/:projectId/:taskId",
  authMiddleware,
  TaskController.updateTask
);



export default router;
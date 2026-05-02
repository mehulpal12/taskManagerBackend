import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { isProjectAdmin } from "../middleware/rbac.middleware.js";
import * as TaskController from "../controllers/task.controller.js";
const router = express.Router();
// Create task → ADMIN ONLY
router.post("/:projectId", authMiddleware, isProjectAdmin, TaskController.createTask);
router.get("/all", TaskController.getAllTasks);
router.get("/:projectId", authMiddleware, TaskController.getTasks);
router.get("/:id", authMiddleware, TaskController.getTaskById);
// Update ANY task → ADMIN ONLY
router.patch("/:projectId/:taskId", authMiddleware, isProjectAdmin, TaskController.updateTask);
export default router;
//# sourceMappingURL=task.routes.js.map
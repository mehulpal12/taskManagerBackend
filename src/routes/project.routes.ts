import express from "express";
import {authMiddleware}  from "../middleware/auth.middleware.js";
import * as ProjectController from "../controllers/project.controller.js";
import { isProjectAdmin } from "../middleware/rbac.middleware.js";
const router = express.Router();

router.post("/", authMiddleware, ProjectController.createProject);
router.get("/", authMiddleware, ProjectController.getProjects);


router.post(
  "/:projectId/add-member",
  authMiddleware,
  isProjectAdmin,
  ProjectController.addMember
);
// REMOVE MEMBER
router.delete(
  "/:projectId/remove-member/:userId",
  authMiddleware,
  isProjectAdmin,
  ProjectController.removeMember
);

// GET MEMBERS (must be member at least)
router.get(
  "/:projectId/members",
  authMiddleware,
  ProjectController.getMembers // ideally add isProjectMember here
);

// UPDATE ROLE
router.patch(
  "/:projectId/update-role/:userId",
  authMiddleware,
  isProjectAdmin,
  ProjectController.updateRole
);


export default router;

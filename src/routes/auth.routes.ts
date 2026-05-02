import express from "express";
import * as AuthController from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", AuthController.signup);
router.post("/register", AuthController.signup); // Alias for frontend consistency
router.post("/login", AuthController.login);
router.get("/users", AuthController.getAllUsers);

export default router;
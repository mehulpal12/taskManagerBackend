import express from "express";
import * as AuthController from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
export default router;
//# sourceMappingURL=auth.routes.js.map
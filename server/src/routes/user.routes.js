import { Router } from "express";
import { createUser } from "../controllers/user.contollers.js";
import { loginUser } from "../controllers/user.contollers.js";
import { validateInfo } from "../middlewares/user.middleware.js";
const router = Router();

router.post("/register", validateInfo, createUser);
router.post("/login", loginUser);

export default router;

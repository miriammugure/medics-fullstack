import { Router } from "express";
import { medsController } from "../controllers/medicine.controllers.js";
import { getMedicine } from "../controllers/medicine.controllers.js";

const router = Router();

router.post("/medicine", medsController);
router.get("/medicine", getMedicine);
export default router;

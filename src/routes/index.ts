import { Router } from "express";
import userRoutes from "./userRoutes";
import authRoutes from "./auth.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);


export default router;
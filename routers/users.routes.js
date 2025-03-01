import { Router } from "express";
import {
  getUserById,
  login,
  register,
} from "../controllers/users.controller.js";
import jwtMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user/:id", jwtMiddleware, getUserById);
export default router;

import { Router } from "express";
import {
  getUserById,
  login,
  register,
} from "../controllers/users.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user/:id", getUserById);
export default router;

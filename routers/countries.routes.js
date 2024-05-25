import { Router } from "express";
import { getCountries } from "../controllers/countries.controller.js";

const router = Router();

router.get("/list", getCountries);

export default router;

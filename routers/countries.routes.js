import { Router } from "express";
import {
  createCountry,
  deleteCountry,
  getCountries,
  getCountry,
  updateCountry,
} from "../controllers/countries.controller.js";

const router = Router();
//CRUD : create read update delete
router.get("/list", getCountries);
router.post("/create", createCountry);
router.delete("/delete/:id", deleteCountry);
router.get("/list/:id", getCountry);
router.put("/update/:id", updateCountry);
/*router.get("/list/:id", getCountry);*/
export default router;

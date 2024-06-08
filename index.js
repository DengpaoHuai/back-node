import express from "express";
import cors from "cors";
import router from "./routers/countries.routes.js";
import userRouter from "./routers/users.routes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

export const secret = "mysecret";

const app = express();

mongoose.connect("mongodb://localhost:27017/formation");

app.use(cors());
app.use(bodyParser.json());
app.use("/countries", router);

app.use("/users", userRouter);

//app.use('interests', router);

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

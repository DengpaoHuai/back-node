import express from "express";
import cors from "cors";
import router from "./routers/countries.routes.js";

const app = express();
app.use(cors());
app.use("/countries", router);

//app.use('interests', router);

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

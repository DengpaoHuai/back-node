import jwt from "jsonwebtoken";
import { secret } from "../index.js";

const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (token) {
    try {
      const result = jwt.verify(token, secret);
      console.log(result);
      const userId = result.id;
      req.userId = userId;
      return next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }
  return res.status(401).json({ message: "Unauthorized" });
};

export default jwtMiddleware;

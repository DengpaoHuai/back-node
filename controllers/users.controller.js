import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secret } from "../index.js";

export const register = async (req, res) => {
  console.log(req.body);

  const monPasswordCompletementCacheEtSecurise = await bcrypt.hash(
    req.body.password,
    10
  );
  console.log(monPasswordCompletementCacheEtSecurise);
  await User.create({
    name: req.body.name,
    email: req.body.email,
    password: monPasswordCompletementCacheEtSecurise,
    country: "6663f656300c92bb299116ab",
  });
  res.json({ message: "User registered successfully" });
};

export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email: email });

  if (user) {
    const compare = await bcrypt.compare(password, user.password);
    if (compare) {
      //jwt
      const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1h" });
      return res.json({ token: token });
    }
  }
  return res.status(401).json({ message: "Incorrect credentials" });
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  if (id === req.userId) {
    const user = await User.findById(id).populate("country");
    return res.json(user);
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

import User from "../models/users.model.js";
import bcrypt from "bcrypt";

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
      return res.json({ message: "Login successful" });
    } else {
      return res.json({ message: "Invalid password" });
    }
  }
  return res.json({ message: "User not found" });
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).populate("country");
  res.json(user);
};

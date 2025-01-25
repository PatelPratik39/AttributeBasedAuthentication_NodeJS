import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/env.js";

const user = {
  id: 1,
  name: "Prats",
  role: "manager",
  department: " IT",
  accessLevel: 4
};
console.log(user);

const token = jwt.sign(user, jwtSecret, { expiresIn: "1h" });
console.log(`JWT token for ${user.role} : ${token}`);

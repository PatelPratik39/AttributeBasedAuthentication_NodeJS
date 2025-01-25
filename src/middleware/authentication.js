import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/env";

export const verifyToken = (req, res, next) => {
  let token;
  let headers = req.headers.Authorization || req.headers.authorization;

  if ((authHeader = req.headers.startsWith("Bearer"))) {
    token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "No token, authorization denied "
      });
    }

    // decode the token
    try {
      const decode = jwt.verify(token, jwtSecret);
      req.user = decode;
      next();
    } catch (error) {
      res.status(400).json({ status: 400, message: "Token is not valid" });
    }
  } else {
    return res
      .status(401)
      .json({ status: 401, message: "No token, authorization denied " });
  }
};

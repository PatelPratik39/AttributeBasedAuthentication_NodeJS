import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/env.js";

export const verifyToken = (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;

  // Check if Authorization header exists and starts with "Bearer"
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1]; // Extract the token after "Bearer "
    // Check if token is missing
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "No token, authorization denied"
      });
    }

    // Decode the token
    try {
      const decoded = jwt.verify(token, jwtSecret); // Verify and decode the token
      req.user = decoded; // Attach the decoded user to the request object
      next(); // Call the next middleware
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: "Token is not valid"
      });
    }
  } else {
    // If no Authorization header is found
    return res.status(401).json({
      status: 401,
      message: "No token, authorization denied"
    });
  }
};

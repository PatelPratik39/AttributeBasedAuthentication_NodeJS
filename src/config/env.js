import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT || "5002";
export const jwtSecret = process.env.JWT_SECRET || "defaultSecret";

console.log("JWT_SECRET:", jwtSecret); // Add this line for debugging

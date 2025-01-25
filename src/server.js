import express from "express";
import cors from "cors";
import { port } from "./config/env.js";
import projectRoute from "./routes/projectRoutes.js";
import errorHandler from "./middleware/errorhandler.js";

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/project", projectRoute);

// ERROR HANDLING
app.use(errorHandler);

// APP LISTEN
app.listen(port, () => {
  console.log(`Server is running at PORT = ${port}`);
});

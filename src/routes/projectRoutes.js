import { verify } from "jsonwebtoken";
import express from "express";

const router = express.router();

// Route to view a project
router.get("/:id", verifyToken, viewProject);

// Route to update a project

router.put("/:id", verifyToken, updateProject);

export default router;
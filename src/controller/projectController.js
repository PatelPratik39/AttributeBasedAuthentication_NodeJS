import { projects } from "../data/projectData.js";
import { authorize } from "../middleware/authorize.js";
import { canViewProject, canUpdateProject } from "../policies/projectPolicy.js";

// Standardize response function
const handleResponse = (res, status, message, project = null) => {
  res.status(status).json({
    status,
    message,
    project
  });
};

export const viewProject = (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = getProjectById(projectId, res);
  console.log("Project is : ", project);
  authorize(canViewProject, project)(req, res, () => {
    handleResponse(res, 200, "Project retreived successfully", project);
  });
};

export const updateProject = (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = getProjectById(projectId, res);
  console.log("Project is : ", project);
  authorize(canUpdateProject, project)(req, res, () => {
    handleResponse(res, 200, "Project updated successfully", project);
  })
};

export const getProjectById = (id, res) => {
  const project = projects.find((project) => project.id === id);
  if (!project) handleResponse(res, 404, "Project not found");

  return project;
};

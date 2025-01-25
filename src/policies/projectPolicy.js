export const canViewProject = (user, project) => {

    if (!user || !project) {
      console.error("User or project is undefined");
      return false; // Deny access if user or project is missing
    }

  return (
    user.role === "admin" ||
    user.department === project.department ||
    (user.accessLevel >= project.accessLevel && project.team.includes(user.id))
  );
};

export const canUpdateProject = (user, project) => {

    if (!user || !project) {
      console.error("User or project is undefined");
      return false; // Deny access if user or project is missing
    }
  return (
    user.role === "admin" ||
    (user.role === "manager" && user.department === project.department) ||
    project.team.includes(user.id)
  );
};

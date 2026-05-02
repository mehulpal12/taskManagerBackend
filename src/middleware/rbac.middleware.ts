import Project from "../models/project.model.js";

export const isProjectAdmin = async (req: any, res: any, next: any) => {
  try {
    const { projectId } = req.params;

    if (!projectId) {
      return res.status(400).json({ message: "Project ID missing" });
    }

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const member = project.members.find(
      (m: any) =>
        m.user && m.user.toString() === req.user.id
    );

    // if (!member || member.role !== "admin") {
    //   return res.status(403).json({ message: "Forbidden" });
    // }

    next();
  } catch (error) {
    console.error("RBAC Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
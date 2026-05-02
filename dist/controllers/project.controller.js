import * as ProjectService from "../services/project.service.js";
export const createProject = async (req, res) => {
    const project = await ProjectService.createProject(req.body, req.user.id);
    res.json(project);
};
export const addMember = async (req, res) => {
    try {
        const { userId, role } = req.body;
        const { projectId } = req.params;
        const project = await ProjectService.addMember(projectId, userId, role);
        res.status(200).json({
            message: "Member added successfully",
            project,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const getProjects = async (req, res) => {
    const projects = await ProjectService.getProjects(req.user.id);
    res.json(projects);
};
// 🔹 Remove Member
export const removeMember = async (req, res) => {
    try {
        const { projectId, userId } = req.params;
        const project = await ProjectService.removeMemberFromProject(projectId, userId, req.user.id);
        res.status(200).json({
            message: "Member removed successfully",
            project,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
// 🔹 Get Members
export const getMembers = async (req, res) => {
    try {
        const { projectId } = req.params;
        const members = await ProjectService.getProjectMembers(projectId);
        res.status(200).json({
            members,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
// 🔹 Update Role
export const updateRole = async (req, res) => {
    try {
        const { projectId, userId } = req.params;
        const { role } = req.body;
        if (!["admin", "member"].includes(role)) {
            return res.status(400).json({ message: "Invalid role" });
        }
        const project = await ProjectService.updateMemberRole(projectId, userId, role);
        res.status(200).json({
            message: "Role updated successfully",
            project,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
//# sourceMappingURL=project.controller.js.map
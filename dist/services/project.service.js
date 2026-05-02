import Project from "../models/project.model.js";
export const createProject = async (data, userId) => {
    return await Project.create({
        ...data,
        createdBy: userId,
        members: [{ user: userId, role: "admin" }]
    });
};
export const getProjects = async (userId) => {
    return await Project.find({ "members.user": userId });
};
export const addMember = async (projectId, userId, role) => {
    const project = await Project.findById(projectId);
    if (!project) {
        throw new Error("Project not found");
    }
    // Check if user already exists
    const alreadyMember = project.members.find((m) => m.user.toString() === userId);
    if (alreadyMember) {
        throw new Error("User already in project");
    }
    project.members.push({
        user: userId,
        role: role || "member",
    });
    await project.save();
    return project;
};
// 🔹 Remove Member
export const removeMemberFromProject = async (projectId, userId, currentUserId) => {
    const project = await Project.findById(projectId);
    if (!project)
        throw new Error("Project not found");
    // Prevent removing creator (important)
    if (project.createdBy?.toString() === userId) {
        throw new Error("Cannot remove project owner");
    }
    const isMember = project.members.some((m) => m.user.toString() === userId);
    if (!isMember) {
        throw new Error("User is not a member");
    }
    project.members = project.members.filter((m) => m.user.toString() !== userId);
    await project.save();
    return project;
};
// 🔹 Get Members
export const getProjectMembers = async (projectId) => {
    const project = await Project.findById(projectId)
        .populate("members.user", "name email");
    if (!project)
        throw new Error("Project not found");
    return project.members;
};
// 🔹 Update Role
export const updateMemberRole = async (projectId, userId, role) => {
    const project = await Project.findById(projectId);
    if (!project)
        throw new Error("Project not found");
    const member = project.members.find((m) => m.user.toString() === userId);
    if (!member) {
        throw new Error("User not in project");
    }
    member.role = role;
    await project.save();
    return project;
};
//# sourceMappingURL=project.service.js.map
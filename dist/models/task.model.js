import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title: String,
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
        type: String,
        enum: ["todo", "in-progress", "done"],
        default: "todo"
    },
    dueDate: Date,
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium"
    }
}, { timestamps: true });
export default mongoose.model("Task", taskSchema);
//# sourceMappingURL=task.model.js.map
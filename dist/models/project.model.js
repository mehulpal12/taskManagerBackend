import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    name: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    members: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            role: {
                type: String,
                enum: ["admin", "member"],
                default: "member"
            }
        }
    ],
}, { timestamps: true });
export default mongoose.model("Project", projectSchema);
//# sourceMappingURL=project.model.js.map
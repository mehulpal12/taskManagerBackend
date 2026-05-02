import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: mongoose.Types.ObjectId | null;
    assignedTo?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: mongoose.Types.ObjectId | null;
    assignedTo?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: mongoose.Types.ObjectId | null;
    assignedTo?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: mongoose.Types.ObjectId | null;
    assignedTo?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: mongoose.Types.ObjectId | null;
    assignedTo?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: mongoose.Types.ObjectId | null;
    assignedTo?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: mongoose.Types.ObjectId | null;
    assignedTo?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: mongoose.Types.ObjectId | null;
    assignedTo?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=task.model.d.ts.map
export declare const createTask: (data: any) => Promise<import("mongoose").Document<unknown, {}, {
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
export declare const updateTaskStatus: (taskId: string, status: string) => Promise<(import("mongoose").Document<unknown, {}, {
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}) | null>;
export declare const updateTask: (taskId: string, userId: string, updateData: any, isAdmin: boolean) => Promise<import("mongoose").Document<unknown, {}, {
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
export declare const getTasks: (projectId: string) => Promise<(import("mongoose").Document<unknown, {}, {
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
export declare const getAllTasks: () => Promise<(import("mongoose").Document<unknown, {}, {
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
export declare const getTaskById: (taskId: string) => Promise<(import("mongoose").Document<unknown, {}, {
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    status: "done" | "todo" | "in-progress";
    priority: "low" | "medium" | "high";
    title?: string | null;
    dueDate?: NativeDate | null;
    project?: import("mongoose").Types.ObjectId | null;
    assignedTo?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}) | null>;
//# sourceMappingURL=task.service.d.ts.map
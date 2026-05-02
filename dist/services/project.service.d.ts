export declare const createProject: (data: any, userId: string) => Promise<import("mongoose").Document<unknown, {}, {
    members: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    members: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
export declare const getProjects: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, {
    members: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    members: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
export declare const addMember: (projectId: string, userId: string, role: "admin" | "member") => Promise<import("mongoose").Document<unknown, {}, {
    members: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    members: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
export declare const removeMemberFromProject: (projectId: string, userId: string, currentUserId: string) => Promise<import("mongoose").Document<unknown, {}, {
    members: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    members: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
export declare const getProjectMembers: (projectId: string) => Promise<import("mongoose").Types.DocumentArray<{
    user: import("mongoose").Types.ObjectId;
    role: "admin" | "member";
}, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
    user: import("mongoose").Types.ObjectId;
    role: "admin" | "member";
}, {}, {}> & {
    user: import("mongoose").Types.ObjectId;
    role: "admin" | "member";
}>>;
export declare const updateMemberRole: (projectId: string, userId: string, role: "admin" | "member") => Promise<import("mongoose").Document<unknown, {}, {
    members: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    members: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, import("mongoose").Types.Subdocument<import("mongodb").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
//# sourceMappingURL=project.service.d.ts.map
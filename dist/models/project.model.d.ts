import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    members: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    members: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    members: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    members: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    members: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    members: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    members: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    members: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }, {}, {}> & {
        user: mongoose.Types.ObjectId;
        role: "admin" | "member";
    }>;
    name?: string | null;
    createdBy?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=project.model.d.ts.map
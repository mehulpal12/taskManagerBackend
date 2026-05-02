import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    userName: string;
    email: string;
    password: string;
    fullName: string;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userName: string;
    email: string;
    password: string;
    fullName: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userName: string;
    email: string;
    password: string;
    fullName: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userName: string;
    email: string;
    password: string;
    fullName: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    userName: string;
    email: string;
    password: string;
    fullName: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    userName: string;
    email: string;
    password: string;
    fullName: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    userName: string;
    email: string;
    password: string;
    fullName: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userName: string;
    email: string;
    password: string;
    fullName: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=user.model.d.ts.map
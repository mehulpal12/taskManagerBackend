export declare const signup: (data: any) => Promise<{
    userName: string;
    email: string;
    fullName: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    _id: import("mongoose").Types.ObjectId;
    __v: number;
}>;
export declare const login: (data: any) => Promise<{
    user: import("mongoose").Document<unknown, {}, {
        userName: string;
        email: string;
        password: string;
        fullName: string;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        userName: string;
        email: string;
        password: string;
        fullName: string;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    };
    token: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map
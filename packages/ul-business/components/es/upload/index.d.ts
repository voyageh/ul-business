import upload from "./src/upload.vue";
export declare const UlUpload: import("ul-utils").SFCWithInstall<import("vue").DefineComponent<{
    tip: StringConstructor;
    size: {
        type: import("vue").PropType<"" | "small" | "mini">;
        default: string;
    };
    limitSize: {
        type: NumberConstructor;
        default: number;
    };
    accept: {
        type: import("vue").PropType<"" | "image" | "video" | "word" | "excel" | "pdf" | "compress">;
        default: string;
    };
    beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
        (): (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
        (): (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    beforeRemove: {
        readonly type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onChange: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onPreview: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: import("element-plus").UploadFile) => void) | (() => (uploadFile: import("element-plus").UploadFile) => void) | {
        (): (uploadFile: import("element-plus").UploadFile) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import("element-plus").UploadFile) => void) | (() => (uploadFile: import("element-plus").UploadFile) => void) | {
        (): (uploadFile: import("element-plus").UploadFile) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
    headers: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
    data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
    multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
    drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    withCredentials: BooleanConstructor;
    showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
    fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
    httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
        (): import("element-plus").UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
        (): import("element-plus").UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
    disabled: BooleanConstructor;
    limit: NumberConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tip: StringConstructor;
    size: {
        type: import("vue").PropType<"" | "small" | "mini">;
        default: string;
    };
    limitSize: {
        type: NumberConstructor;
        default: number;
    };
    accept: {
        type: import("vue").PropType<"" | "image" | "video" | "word" | "excel" | "pdf" | "compress">;
        default: string;
    };
    beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
        (): (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
        (): (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    beforeRemove: {
        readonly type: import("vue").PropType<(uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onChange: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onPreview: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: import("element-plus").UploadFile) => void) | (() => (uploadFile: import("element-plus").UploadFile) => void) | {
        (): (uploadFile: import("element-plus").UploadFile) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (uploadFile: import("element-plus").UploadFile) => void) | (() => (uploadFile: import("element-plus").UploadFile) => void) | {
        (): (uploadFile: import("element-plus").UploadFile) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | (() => (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void) | {
        (): (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => void, boolean>;
    action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
    headers: {
        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
    data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
    multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
    drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    withCredentials: BooleanConstructor;
    showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
    fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
    autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
    httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
        (): import("element-plus").UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
        (): import("element-plus").UploadRequestHandler;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
    disabled: BooleanConstructor;
    limit: NumberConstructor;
}>>, {
    type: string;
    name: string;
    size: "" | "small" | "mini";
    disabled: boolean;
    data: Record<string, any>;
    limitSize: number;
    accept: "" | "image" | "video" | "word" | "excel" | "pdf" | "compress";
    beforeUpload: (rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
    onRemove: (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    onChange: (uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    onPreview: (uploadFile: import("element-plus").UploadFile) => void;
    onSuccess: (response: any, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    onProgress: (evt: import("element-plus").UploadProgressEvent, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    onError: (error: Error, uploadFile: import("element-plus").UploadFile, uploadFiles: import("element-plus").UploadFiles) => void;
    onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
    action: string;
    method: string;
    multiple: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    drag: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    withCredentials: boolean;
    showFileList: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    fileList: import("element-plus").UploadUserFile[];
    autoUpload: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    listType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
    httpRequest: import("element-plus").UploadRequestHandler;
}>> & Record<string, any>;
export default UlUpload;
export type UploadInstance = InstanceType<typeof upload>;

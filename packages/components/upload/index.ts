import { withInstall } from "ul-utils";
import upload from "./src/upload.vue";

export const UlUpload = withInstall(upload);

export default UlUpload;
export * from "./src/type";
export type UlUploadInstance = InstanceType<typeof upload>;

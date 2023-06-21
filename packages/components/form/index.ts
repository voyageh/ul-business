import { withInstall } from "ul-utils";
import Form from "./src/form.vue";

export const UlForm = withInstall(Form);

export default UlForm;

export * from "./src/type";
export type FormInstance = InstanceType<typeof Form>;

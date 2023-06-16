import { withInstall } from "ul-utils";
import form from "./src/form.vue";

export const UlForm = withInstall(form);

export default UlForm;

export * from "./src/type";
export type FormInstance = InstanceType<typeof form>;

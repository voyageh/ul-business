import { withInstall } from "ul-utils";
import table from "./src/table.vue";

export const UlTable = withInstall(table);

export default UlTable;
export * from "./src/type";
export type TableInstance = InstanceType<typeof table>;

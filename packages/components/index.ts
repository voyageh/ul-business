export * from "./menu";
export * from "./form";
export * from "./table";
export * from "./upload";

import { makeInstaller } from "./installer";
import components from "./component";
export default makeInstaller(components);

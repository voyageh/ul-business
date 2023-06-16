export * from "./menu";
export * from "./form";
export * from "./table";
export * from "./upload";

import { makeInstaller } from "./installer";
import components from "./component";
console.log(components);
export default makeInstaller(components);

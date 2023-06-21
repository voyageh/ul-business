import { UlMenu as f, UlMenuItem as x } from "./menu/index.mjs";
import { UlForm as n } from "./form/index.mjs";
import { UlTable as U } from "./table/index.mjs";
import { UlUpload as i } from "./upload/index.mjs";
import { makeInstaller as o } from "./installer.mjs";
import r from "./component.mjs";
import { formProps as b } from "./form/src/type.mjs";
import { tableProps as I } from "./table/src/type.mjs";
const t = o(r);
export {
  n as UlForm,
  f as UlMenu,
  x as UlMenuItem,
  U as UlTable,
  i as UlUpload,
  t as default,
  b as formProps,
  I as tableProps
};

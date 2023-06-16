import { UlMenu as f, UlMenuItem as n } from "./menu/index.mjs";
import { UlForm as a } from "./form/index.mjs";
import { UlTable as U } from "./table/index.mjs";
import { UlUpload as d } from "./upload/index.mjs";
import { makeInstaller as r } from "./installer.mjs";
import o from "./component.mjs";
import { formProps as u } from "./form/src/type.mjs";
import { tableProps as I } from "./table/src/type.mjs";
console.log(o);
const t = r(o);
export {
  a as UlForm,
  f as UlMenu,
  n as UlMenuItem,
  U as UlTable,
  d as UlUpload,
  t as default,
  u as formProps,
  I as tableProps
};

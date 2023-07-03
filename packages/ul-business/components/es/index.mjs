import { UlMenu as f, UlMenuItem as a } from "./menu/index.mjs";
import { UlForm as s } from "./form/index.mjs";
import { UlTable as U } from "./table/index.mjs";
import { UlUpload as u } from "./upload/index.mjs";
import { makeInstaller as o } from "./installer.mjs";
import r from "./component.mjs";
import { formProps as b } from "./form/src/type.mjs";
import { default as c } from "element-plus/es/components/table/src/table/defaults";
import { tableProps as M } from "./table/src/type.mjs";
import { uploadProps as k } from "./upload/src/type.mjs";
const t = o(r);
export {
  s as UlForm,
  f as UlMenu,
  a as UlMenuItem,
  U as UlTable,
  u as UlUpload,
  t as default,
  c as elTableProps,
  b as formProps,
  M as tableProps,
  k as uploadProps
};

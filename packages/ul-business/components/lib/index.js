"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("./menu/index.js"),l=require("./form/index.js"),o=require("./table/index.js"),t=require("./upload/index.js"),n=require("./installer.js"),r=require("./component.js"),u=require("./form/src/type.js"),s=require("./table/src/type.js");console.log(r.default);const i=n.makeInstaller(r.default);exports.UlMenu=e.UlMenu;exports.UlMenuItem=e.UlMenuItem;exports.UlForm=l.UlForm;exports.UlTable=o.UlTable;exports.UlUpload=t.UlUpload;exports.formProps=u.formProps;exports.tableProps=s.tableProps;exports.default=i;
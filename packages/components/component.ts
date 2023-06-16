import { UlMenu, UlMenuItem } from "./menu";
import form from "./form";
import table from "./table";
import upload from "./upload";

import type { Plugin } from "@vue/runtime-core";
export default [UlMenu, UlMenuItem, form, table, upload] as Plugin[];

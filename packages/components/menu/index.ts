import { withInstall } from "ul-utils";
import Menu from "./src/menu.vue";
import MenuItem from "./src/menu-item.vue";

export const UlMenu = withInstall(Menu);

export default UlMenu;
export const UlMenuItem = withInstall(MenuItem);

export * from "./src/types/menu";
export * from "./src/types/menu-item";

import { ElMenu as c } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/menu/style/css";
import { defineComponent as p, computed as i, resolveComponent as a, openBlock as t, createBlock as o, mergeProps as _, withCtx as d, createElementBlock as f, Fragment as g, renderList as h } from "vue";
import k from "./types/menu.mjs";
const E = /* @__PURE__ */ p({
  name: "ul-menu",
  __name: "menu",
  props: k,
  setup(r) {
    const e = r, m = i(() => ({
      "--selected-bg-color": e.selectBgColor,
      "--menu-item-width": e.width
    }));
    return (l, B) => {
      const u = a("ul-menu-item"), s = c;
      return t(), o(s, _({ class: "ul-menu" }, e, { style: m.value }), {
        default: d(() => [
          (t(!0), f(g, null, h(l.menus, (n) => (t(), o(u, {
            key: n.id,
            menu: n
          }, null, 8, ["menu"]))), 128))
        ]),
        _: 1
      }, 16, ["style"]);
    };
  }
});
export {
  E as default
};

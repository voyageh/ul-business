import { ElMenu as u } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/menu/style/css";
import { defineComponent as p, computed as i, resolveComponent as a, openBlock as t, createBlock as n, mergeProps as _, withCtx as d, createElementBlock as f, Fragment as g, renderList as h } from "vue";
import B from "./types/menu.mjs";
import C from "../../node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.mjs";
const P = /* @__PURE__ */ p({
  name: "ul-menu",
  __name: "menu",
  props: B,
  setup(m) {
    const e = m, l = i(() => {
      var o = C(e.selectBgColor).setAlpha(0.8).toString();
      return {
        "--hover-bg-color": o,
        "--selected-bg-color": e.selectBgColor,
        "--menu-item-width": e.width
      };
    });
    return (o, k) => {
      const c = a("ul-menu-item"), s = u;
      return t(), n(s, _({ class: "ul-menu" }, e, { style: l.value }), {
        default: d(() => [
          (t(!0), f(g, null, h(o.menus, (r) => (t(), n(c, {
            key: r.id,
            menu: r
          }, null, 8, ["menu"]))), 128))
        ]),
        _: 1
      }, 16, ["style"]);
    };
  }
});
export {
  P as default
};

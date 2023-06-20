import { ElMenu as p } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/menu/style/css";
import { defineComponent as r, computed as i, resolveComponent as _, openBlock as t, createBlock as n, mergeProps as a, unref as d, withCtx as f, createElementBlock as g, Fragment as h, renderList as k } from "vue";
import B from "./types/menu.mjs";
const C = r({ name: "ul-menu" }), v = /* @__PURE__ */ r({
  ...C,
  props: B,
  setup(m) {
    const e = m, l = i(() => ({
      "--selected-bg-color": e.selectBgColor,
      "--menu-item-width": e.width
    }));
    return (u, w) => {
      const s = _("ul-menu-item"), c = p;
      return t(), n(c, a({ class: "ul-menu" }, e, { style: d(l) }), {
        default: f(() => [
          (t(!0), g(h, null, k(u.menus, (o) => (t(), n(s, {
            key: o.id,
            menu: o
          }, null, 8, ["menu"]))), 128))
        ]),
        _: 1
      }, 16, ["style"]);
    };
  }
});
export {
  v as default
};

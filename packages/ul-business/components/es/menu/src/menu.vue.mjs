import { defineComponent as l, computed as _, resolveComponent as o, openBlock as t, createBlock as r, mergeProps as a, unref as i, withCtx as d, createElementBlock as f, Fragment as g, renderList as h } from "vue";
import k from "./types/menu.mjs";
const B = l({ name: "ul-menu" }), x = /* @__PURE__ */ l({
  ...B,
  props: k,
  setup(m) {
    const e = m, u = _(() => ({
      "--selected-bg-color": e.selectBgColor,
      "--menu-item-width": e.width
    }));
    return (s, C) => {
      const c = o("ul-menu-item"), p = o("el-menu");
      return t(), r(p, a({ class: "ul-menu" }, e, { style: i(u) }), {
        default: d(() => [
          (t(!0), f(g, null, h(s.menus, (n) => (t(), r(c, {
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
  x as default
};

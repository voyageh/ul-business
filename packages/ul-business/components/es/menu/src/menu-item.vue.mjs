import { defineComponent as s, computed as g, resolveComponent as m, openBlock as u, createBlock as r, unref as n, withCtx as t, createVNode as l, createElementVNode as B, toDisplayString as a, createElementBlock as C, Fragment as N, renderList as V, createTextVNode as b } from "vue";
import z from "./types/menu-item.mjs";
import { Icon as p } from "@iconify/vue";
const E = s({ name: "ul-menu-item" }), F = /* @__PURE__ */ s({
  ...E,
  props: z,
  setup(d) {
    const i = d, o = g(() => i.parent + i.menu.path);
    return (e, v) => {
      const c = m("el-icon"), _ = m("menu-item", !0), f = m("el-sub-menu"), h = m("el-menu-item");
      return e.menu.children && e.menu.children.length > 0 ? (u(), r(f, {
        key: 0,
        index: n(o)
      }, {
        title: t(() => [
          l(c, { size: 20 }, {
            default: t(() => [
              l(n(p), {
                icon: e.menu.meta.icon
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          B("span", null, a(e.menu.name), 1)
        ]),
        default: t(() => [
          (u(!0), C(N, null, V(e.menu.children, (k, y) => (u(), r(_, {
            key: y,
            menu: k,
            parent: n(o)
          }, null, 8, ["menu", "parent"]))), 128))
        ]),
        _: 1
      }, 8, ["index"])) : (u(), r(h, {
        key: 1,
        index: n(o),
        id: n(o)
      }, {
        default: t(() => [
          l(c, { size: 20 }, {
            default: t(() => [
              l(n(p), {
                icon: e.menu.meta.icon
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          b(" " + a(e.menu.name), 1)
        ]),
        _: 1
      }, 8, ["index", "id"]));
    };
  }
});
export {
  F as default
};

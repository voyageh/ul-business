import { ElIcon as k, ElSubMenu as v, ElMenuItem as E } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/menu-item/style/css";
import "element-plus/es/components/sub-menu/style/css";
import "element-plus/es/components/icon/style/css";
import { defineComponent as y, computed as g, resolveComponent as B, openBlock as o, createBlock as u, withCtx as n, createVNode as m, unref as l, createElementVNode as C, toDisplayString as a, createElementBlock as I, Fragment as N, renderList as V, createTextVNode as b } from "vue";
import z from "./types/menu-item.mjs";
import { Icon as p } from "@iconify/vue";
const j = /* @__PURE__ */ y({
  name: "ul-menu-item",
  __name: "menu-item",
  props: z,
  setup(c) {
    const r = c, t = g(() => r.parent + r.menu.path);
    return (e, M) => {
      const i = k, d = B("menu-item", !0), s = v, _ = E;
      return e.menu.children && e.menu.children.length > 0 ? (o(), u(s, {
        key: 0,
        index: t.value
      }, {
        title: n(() => [
          m(i, { size: 20 }, {
            default: n(() => [
              m(l(p), {
                icon: e.menu.meta.icon
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          C("span", null, a(e.menu.name), 1)
        ]),
        default: n(() => [
          (o(!0), I(N, null, V(e.menu.children, (f, h) => (o(), u(d, {
            key: h,
            menu: f,
            parent: t.value
          }, null, 8, ["menu", "parent"]))), 128))
        ]),
        _: 1
      }, 8, ["index"])) : (o(), u(_, {
        key: 1,
        index: t.value,
        id: t.value
      }, {
        default: n(() => [
          m(i, { size: 20 }, {
            default: n(() => [
              m(l(p), {
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
  j as default
};
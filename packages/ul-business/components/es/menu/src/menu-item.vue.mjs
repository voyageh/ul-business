import { ElIcon as E, ElSubMenu as y, ElMenuItem as g } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/menu-item/style/css";
import "element-plus/es/components/sub-menu/style/css";
import "element-plus/es/components/icon/style/css";
import { defineComponent as a, computed as B, resolveComponent as C, openBlock as m, createBlock as u, unref as n, withCtx as t, createVNode as r, createElementVNode as I, toDisplayString as c, createElementBlock as N, Fragment as V, renderList as b, createTextVNode as z } from "vue";
import M from "./types/menu-item.mjs";
import { Icon as p } from "@iconify/vue";
const S = a({ name: "ul-menu-item" }), q = /* @__PURE__ */ a({
  ...S,
  props: M,
  setup(d) {
    const i = d, o = B(() => i.parent + i.menu.path);
    return (e, v) => {
      const l = E, s = C("menu-item", !0), _ = y, f = g;
      return e.menu.children && e.menu.children.length > 0 ? (m(), u(_, {
        key: 0,
        index: n(o)
      }, {
        title: t(() => [
          r(l, { size: 20 }, {
            default: t(() => [
              r(n(p), {
                icon: e.menu.meta.icon
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          I("span", null, c(e.menu.name), 1)
        ]),
        default: t(() => [
          (m(!0), N(V, null, b(e.menu.children, (h, k) => (m(), u(s, {
            key: k,
            menu: h,
            parent: n(o)
          }, null, 8, ["menu", "parent"]))), 128))
        ]),
        _: 1
      }, 8, ["index"])) : (m(), u(f, {
        key: 1,
        index: n(o),
        id: n(o)
      }, {
        default: t(() => [
          r(l, { size: 20 }, {
            default: t(() => [
              r(n(p), {
                icon: e.menu.meta.icon
              }, null, 8, ["icon"])
            ]),
            _: 1
          }),
          z(" " + c(e.menu.name), 1)
        ]),
        _: 1
      }, 8, ["index", "id"]));
    };
  }
});
export {
  q as default
};

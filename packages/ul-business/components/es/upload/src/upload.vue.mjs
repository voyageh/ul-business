import { ElIcon as U, ElButton as b, ElUpload as j, ElDialog as S } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/dialog/style/css";
import "element-plus/es/components/upload/style/css";
import "element-plus/es/components/button/style/css";
import "element-plus/es/components/icon/style/css";
import { defineComponent as h, computed as z, ref as _, openBlock as s, createElementBlock as I, createVNode as c, mergeProps as P, unref as v, createSlots as C, withCtx as l, createBlock as g, createTextVNode as N, createElementVNode as w, toDisplayString as T, renderList as D, renderSlot as L } from "vue";
import { uploadProps as M } from "./type.mjs";
import { Icon as O } from "@iconify/vue";
import { ElMessage as d } from "element-plus";
const R = { class: "ul-upload" }, q = { class: "el-upload__tip" }, A = ["src"], G = h({ name: "UlUpload" }), oe = /* @__PURE__ */ h({
  ...G,
  props: M,
  setup(E) {
    const o = E, r = {
      image: ["png", "jpg", "jpeg", "ico", "gif"],
      video: ["mp4", "avi", "wmv", "rmvb", "mov", "mkv"],
      pdf: ["pdf"],
      word: ["doc", "docx"],
      excel: ["xls", "xlsx"],
      compress: ["zip", "rar"]
    }, y = z(() => o.accept ? o.accept.split(",").map((e) => r[e]).flat().map((e) => `.${e}`).join(",") : ""), m = _(""), i = _(!1), $ = (e) => {
      var p;
      let t = [];
      o.accept ? o.accept.split(",").forEach((a) => {
        r[a] && t.push(...r[a]);
      }) : t = Object.values(r).flat();
      const n = (p = e.name.split(".").pop()) == null ? void 0 : p.toLowerCase();
      return n && t.indexOf(n) === -1 ? (d.warning(`文件类型只能是${t.join("，")}！`), !1) : (e.size / 1024 / 1024 > o.limitSize && d.warning(`文件大小不能超过${o.limitSize}MB！`), !1);
    }, x = (e) => {
      m.value = e.url, i.value = !0;
    }, V = () => {
    }, k = () => {
      d.warning(`文件上传数量不得超过${o.limit}个`);
    };
    return (e, t) => {
      const n = U, p = b, a = j, B = S;
      return s(), I("div", R, [
        c(a, P(e.$props, {
          accept: v(y),
          "before-upload": $,
          "on-preview": x,
          "on-remove": V,
          "on-exceed": k
        }), C({
          default: l(() => [
            e.$props.listType === "picture-card" ? (s(), g(n, { key: 0 }, {
              default: l(() => [
                c(v(O), { icon: "mdi:plus" })
              ]),
              _: 1
            })) : (s(), g(p, {
              key: 1,
              type: "primary"
            }, {
              default: l(() => [
                N("上传")
              ]),
              _: 1
            }))
          ]),
          _: 2
        }, [
          e.tip ? {
            name: "tip",
            fn: l(() => [
              w("div", q, T(e.tip), 1)
            ]),
            key: "0"
          } : void 0,
          D(e.$slots, (u, f) => ({
            name: f,
            fn: l(() => [
              L(e.$slots, f)
            ])
          }))
        ]), 1040, ["accept"]),
        c(B, {
          modelValue: i.value,
          "onUpdate:modelValue": t[0] || (t[0] = (u) => i.value = u)
        }, {
          default: l(() => [
            w("img", {
              "w-full": "",
              src: m.value,
              alt: "Preview Image"
            }, null, 8, A)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
export {
  oe as default
};

import { defineComponent as y, computed as E, ref as v, resolveComponent as s, openBlock as c, createElementBlock as S, createVNode as d, mergeProps as U, unref as g, createSlots as z, withCtx as l, createBlock as w, createTextVNode as C, createElementVNode as h, toDisplayString as P, renderList as I, renderSlot as N } from "vue";
import { uploadProps as T } from "./type.mjs";
import { Icon as L } from "@iconify/vue";
import { ElMessage as m } from "element-plus";
const M = { class: "ul-upload" }, O = { class: "el-upload__tip" }, D = ["src"], R = y({ name: "UlUpload" }), J = /* @__PURE__ */ y({
  ...R,
  props: T,
  setup($) {
    const o = $, n = {
      image: ["png", "jpg", "jpeg", "ico", "gif"],
      video: ["mp4", "avi", "wmv", "rmvb", "mov", "mkv"],
      pdf: ["pdf"],
      word: ["doc", "docx"],
      excel: ["xls", "xlsx"],
      compress: ["zip", "rar"]
    }, x = E(() => o.accept ? o.accept.split(",").map((e) => n[e]).flat().map((e) => `.${e}`).join(",") : ""), u = v(""), i = v(!1), V = (e) => {
      var p;
      let t = [];
      o.accept ? o.accept.split(",").forEach((r) => {
        n[r] && t.push(...n[r]);
      }) : t = Object.values(n).flat();
      const a = (p = e.name.split(".").pop()) == null ? void 0 : p.toLowerCase();
      return a && t.indexOf(a) === -1 ? (m.warning(`文件类型只能是${t.join("，")}！`), !1) : (e.size / 1024 / 1024 > o.limitSize && m.warning(`文件大小不能超过${o.limitSize}MB！`), !1);
    }, b = (e) => {
      u.value = e.url, i.value = !0;
    }, k = () => {
    }, j = () => {
      m.warning(`文件上传数量不得超过${o.limit}个`);
    };
    return (e, t) => {
      const a = s("el-icon"), p = s("el-button"), r = s("el-upload"), B = s("el-dialog");
      return c(), S("div", M, [
        d(r, U(e.$props, {
          accept: g(x),
          "before-upload": V,
          "on-preview": b,
          "on-remove": k,
          "on-exceed": j
        }), z({
          default: l(() => [
            e.$props.listType === "picture-card" ? (c(), w(a, { key: 0 }, {
              default: l(() => [
                d(g(L), { icon: "mdi:plus" })
              ]),
              _: 1
            })) : (c(), w(p, {
              key: 1,
              type: "primary"
            }, {
              default: l(() => [
                C("上传")
              ]),
              _: 1
            }))
          ]),
          _: 2
        }, [
          e.tip ? {
            name: "tip",
            fn: l(() => [
              h("div", O, P(e.tip), 1)
            ]),
            key: "0"
          } : void 0,
          I(e.$slots, (f, _) => ({
            name: _,
            fn: l(() => [
              N(e.$slots, _)
            ])
          }))
        ]), 1040, ["accept"]),
        d(B, {
          modelValue: i.value,
          "onUpdate:modelValue": t[0] || (t[0] = (f) => i.value = f)
        }, {
          default: l(() => [
            h("img", {
              "w-full": "",
              src: u.value,
              alt: "Preview Image"
            }, null, 8, D)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
export {
  J as default
};

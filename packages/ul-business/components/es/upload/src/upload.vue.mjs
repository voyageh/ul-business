import { ElIcon as k, ElButton as B, ElUpload as U, ElDialog as b } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/dialog/style/css";
import "element-plus/es/components/upload/style/css";
import "element-plus/es/components/button/style/css";
import "element-plus/es/components/icon/style/css";
import { defineComponent as j, computed as x, ref as v, openBlock as s, createElementBlock as S, normalizeClass as C, createVNode as c, mergeProps as I, createSlots as P, withCtx as l, createBlock as _, unref as D, createTextVNode as M, createElementVNode as g, toDisplayString as N, renderList as T, renderSlot as L } from "vue";
import { uploadProps as O } from "./type.mjs";
import { Icon as R } from "@iconify/vue";
import { ElMessage as m } from "element-plus";
import { flatMapDeep as q } from "lodash";
const A = { class: "el-upload__tip" }, G = ["src"], te = /* @__PURE__ */ j({
  name: "UlUpload",
  __name: "upload",
  props: O,
  setup(w) {
    const t = w, r = {
      image: ["png", "jpg", "jpeg", "ico", "gif"],
      video: ["mp4", "avi", "wmv", "rmvb", "mov", "mkv"],
      pdf: ["pdf"],
      word: ["doc", "docx"],
      excel: ["xls", "xlsx"],
      compress: ["zip", "rar"]
    }, E = x(() => {
      if (t.accept) {
        const e = t.accept.split(",").map((o) => r[o]);
        return q(e).map((o) => `.${o}`).join(",");
      }
      return "";
    }), d = v(""), i = v(!1), $ = (e) => {
      var p;
      let o = [];
      t.accept ? t.accept.split(",").forEach((n) => {
        r[n] && o.push(...r[n]);
      }) : o = Object.values(r).flat();
      const a = (p = e.name.split(".").pop()) == null ? void 0 : p.toLowerCase();
      return a && o.indexOf(a) === -1 ? (m.warning(`文件类型只能是${o.join("，")}！`), !1) : (e.size / 1024 / 1024 > t.limitSize && m.warning(`文件大小不能超过${t.limitSize}MB！`), !1);
    }, h = (e) => {
      d.value = e.url, i.value = !0;
    }, y = () => {
    }, z = () => {
      m.warning(`文件上传数量不得超过${t.limit}个`);
    };
    return (e, o) => {
      const a = k, p = B, n = U, V = b;
      return s(), S("div", {
        class: C(["ul-upload", [e.size && `ul-upload__${e.size}`]])
      }, [
        c(n, I(e.$props, {
          accept: E.value,
          "before-upload": $,
          "on-preview": h,
          "on-remove": y,
          "on-exceed": z
        }), P({
          default: l(() => [
            e.$props.listType === "picture-card" ? (s(), _(a, { key: 0 }, {
              default: l(() => [
                c(D(R), { icon: "mdi:plus" })
              ]),
              _: 1
            })) : (s(), _(p, {
              key: 1,
              type: "primary"
            }, {
              default: l(() => [
                M("上传")
              ]),
              _: 1
            }))
          ]),
          _: 2
        }, [
          e.tip ? {
            name: "tip",
            fn: l(() => [
              g("div", A, N(e.tip), 1)
            ]),
            key: "0"
          } : void 0,
          T(e.$slots, (u, f) => ({
            name: f,
            fn: l(() => [
              L(e.$slots, f)
            ])
          }))
        ]), 1040, ["accept"]),
        c(V, {
          modelValue: i.value,
          "onUpdate:modelValue": o[0] || (o[0] = (u) => i.value = u)
        }, {
          default: l(() => [
            g("img", {
              "w-full": "",
              src: d.value,
              alt: "Preview Image"
            }, null, 8, G)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 2);
    };
  }
});
export {
  te as default
};

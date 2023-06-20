import { ElFormItem as L, ElCol as $, ElRow as x, ElForm as z } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/form/style/css";
import "element-plus/es/components/row/style/css";
import "element-plus/es/components/col/style/css";
import "element-plus/es/components/form-item/style/css";
import { defineComponent as P, ref as j, watch as v, openBlock as l, createBlock as d, mergeProps as f, withCtx as i, createElementBlock as c, Fragment as V, renderList as O, createVNode as A, toDisplayString as C, resolveDynamicComponent as D, createCommentVNode as F, renderSlot as G } from "vue";
import { formProps as H } from "./type.mjs";
import J from "./handleConetnt.mjs";
import { isEqual as K, cloneDeep as U } from "lodash";
const M = { key: 0 }, Q = { key: 0 }, T = P({ name: "UlForm" }), se = /* @__PURE__ */ P({
  ...T,
  props: H,
  emits: ["update:modelValue"],
  setup(B, { expose: I, emit: R }) {
    const _ = B, y = j(), r = j({});
    let m = {};
    v(
      () => _.content,
      (e) => {
        const { formatObj: t, defaulValue: a } = J(e);
        m = t, r.value = Object.assign(a, r.value);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const N = () => {
      const { content: e, modelValue: t, ...a } = _;
      return a;
    }, g = (e) => {
      const {
        id: t,
        type: a,
        component: u,
        default: s,
        str: p,
        forceDisabled: o,
        inputFormat: n,
        outputFormat: E,
        el: W,
        hide: X,
        span: Y,
        ...q
      } = e;
      return q;
    }, b = (e) => {
      let t = !e;
      return typeof e == "function" && (t = !e(r.value)), t;
    }, k = () => {
      let e = U(r.value) || {};
      return Object.keys(e).forEach((t) => {
        var a, u, s;
        if (e[t] && ((a = m[t]) != null && a.outputFormat)) {
          const p = (s = (u = m[t]).outputFormat) == null ? void 0 : s.call(u, e);
          Object.assign(e, p);
        }
      }), e;
    }, w = (e) => {
      let t = U(e) || {};
      return Object.keys(t).forEach((a) => {
        var u, s, p;
        if (t[a] && ((u = m[a]) != null && u.inputFormat)) {
          const o = m[a] && ((p = (s = m[a]).inputFormat) == null ? void 0 : p.call(s, t));
          Object.assign(t, o);
        }
      }), t;
    }, S = (e) => {
      r.value = w(e);
    };
    return _.modelValue && (v(
      () => _.modelValue,
      (e) => {
        if (e && !K(e, r.value)) {
          const t = w(e);
          r.value = Object.assign({}, r.value, t);
        }
      },
      {
        immediate: !0,
        deep: !0
      }
    ), v(
      () => r.value,
      async () => {
        const e = await k();
        R("update:modelValue", e);
      },
      {
        deep: !0,
        immediate: !0
      }
    )), I({
      getValue: k,
      setValue: S,
      elFrom: y
    }), (e, t) => {
      const a = L, u = $, s = x, p = z;
      return l(), d(p, f({
        ref_key: "formRef",
        ref: y,
        class: "ul-form"
      }, N(), { model: r.value }), {
        default: i(() => [
          (l(!0), c(V, null, O(e.content, (o) => (l(), c(V, null, [
            o.type === "row" && o.items ? (l(), d(s, {
              key: 0,
              gutter: 20
            }, {
              default: i(() => [
                (l(!0), c(V, null, O(o.items || [], (n) => (l(), c(V, {
                  key: n.id
                }, [
                  b(n.hide) ? (l(), d(u, {
                    key: 0,
                    xs: { span: 24 },
                    sm: { span: 12 },
                    md: { span: 8 },
                    lg: { span: n.span || 6 }
                  }, {
                    default: i(() => [
                      A(a, f({
                        prop: n.id
                      }, g(n)), {
                        default: i(() => [
                          e.disabled && !o.forceDisabled ? (l(), c("span", M, C(n.str ? r.value[n.str] : r.value[n.id]), 1)) : (l(), d(D(n.type || n.component), f({ key: 1 }, n.el, {
                            modelValue: r.value[n.id],
                            "onUpdate:modelValue": (E) => r.value[n.id] = E
                          }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                        ]),
                        _: 2
                      }, 1040, ["prop"])
                    ]),
                    _: 2
                  }, 1032, ["lg"])) : F("", !0)
                ], 64))), 128))
              ]),
              _: 2
            }, 1024)) : F("", !0),
            b(o.hide) ? (l(), d(a, f({
              key: 1,
              prop: o.id
            }, g(o)), {
              default: i(() => [
                e.disabled && !o.forceDisabled ? (l(), c("span", Q, C(o.str ? r.value[o.str] : r.value[o.id]), 1)) : (l(), d(D(o.type || o.component), f({ key: 1 }, o.el, {
                  modelValue: r.value[o.id],
                  "onUpdate:modelValue": (n) => r.value[o.id] = n
                }), null, 16, ["modelValue", "onUpdate:modelValue"]))
              ]),
              _: 2
            }, 1040, ["prop"])) : F("", !0)
          ], 64))), 256)),
          G(e.$slots, "last")
        ]),
        _: 3
      }, 16, ["model"]);
    };
  }
});
export {
  se as default
};

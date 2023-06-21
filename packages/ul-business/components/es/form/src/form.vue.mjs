import { ElFormItem as q, ElCol as x, ElRow as L, ElForm as $ } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/form/style/css";
import "element-plus/es/components/row/style/css";
import "element-plus/es/components/col/style/css";
import "element-plus/es/components/form-item/style/css";
import { defineComponent as z, ref as C, watch as v, openBlock as n, createBlock as p, mergeProps as i, withCtx as d, createElementBlock as m, Fragment as b, renderList as D, createVNode as A, resolveDynamicComponent as y, toDisplayString as V, createCommentVNode as F, renderSlot as G } from "vue";
import { formProps as H } from "./type.mjs";
import J from "./handleConetnt.mjs";
import { isEqual as K, cloneDeep as U } from "lodash";
const M = { key: 1 }, Q = { key: 0 }, T = { key: 1 }, W = { key: 0 }, me = /* @__PURE__ */ z({
  name: "UlForm",
  __name: "form",
  props: H,
  emits: ["update:modelValue"],
  setup(P, { expose: B, emit: I }) {
    const _ = P, g = C(), a = C({});
    let f = {};
    v(
      () => _.content,
      (e) => {
        const { formatObj: l, defaulValue: r } = J(e);
        f = l, a.value = Object.assign(r, a.value);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const R = () => {
      const { content: e, modelValue: l, ...r } = _;
      return r;
    }, k = (e) => {
      const {
        id: l,
        type: r,
        component: s,
        default: u,
        str: c,
        forceDisabled: o,
        inputFormat: t,
        outputFormat: O,
        el: X,
        hide: Y,
        span: Z,
        label: h,
        ...S
      } = e;
      return S;
    }, w = (e) => {
      let l = !e;
      return typeof e == "function" && (l = !e(a.value)), l;
    }, E = () => {
      let e = U(a.value) || {};
      return Object.keys(e).forEach((l) => {
        var r, s, u;
        if (e[l] && ((r = f[l]) != null && r.outputFormat)) {
          const c = (u = (s = f[l]).outputFormat) == null ? void 0 : u.call(s, e);
          Object.assign(e, c);
        }
      }), e;
    }, j = (e) => {
      let l = U(e) || {};
      return Object.keys(l).forEach((r) => {
        var s, u, c;
        if (l[r] && ((s = f[r]) != null && s.inputFormat)) {
          const o = f[r] && ((c = (u = f[r]).inputFormat) == null ? void 0 : c.call(u, l));
          Object.assign(l, o);
        }
      }), l;
    }, N = (e) => {
      a.value = j(e);
    };
    return _.modelValue && (v(
      () => _.modelValue,
      (e) => {
        if (e && !K(e, a.value)) {
          const l = j(e);
          a.value = Object.assign({}, a.value, l);
        }
      },
      {
        immediate: !0,
        deep: !0
      }
    ), v(
      () => a.value,
      async () => {
        const e = await E();
        I("update:modelValue", e);
      },
      {
        deep: !0,
        immediate: !0
      }
    )), B({
      getValue: E,
      setValue: N,
      elFrom: g
    }), (e, l) => {
      const r = q, s = x, u = L, c = $;
      return n(), p(c, i({
        ref_key: "formRef",
        ref: g,
        class: "ul-form"
      }, R(), { model: a.value }), {
        default: d(() => [
          (n(!0), m(b, null, D(e.content, (o) => (n(), m(b, null, [
            o.type === "row" && o.items ? (n(), p(u, {
              key: 0,
              gutter: 20
            }, {
              default: d(() => [
                (n(!0), m(b, null, D(o.items || [], (t) => (n(), m(b, {
                  key: t.id
                }, [
                  w(t.hide) ? (n(), p(s, {
                    key: 0,
                    xs: { span: 24 },
                    sm: { span: 12 },
                    md: { span: 8 },
                    lg: { span: t.span || 6 }
                  }, {
                    default: d(() => [
                      A(r, i({
                        prop: t.id
                      }, k(t)), {
                        label: d(() => [
                          t.label && typeof t.label == "function" ? (n(), p(y(t.label()), { key: 0 })) : (n(), m("span", M, V(t.label), 1))
                        ]),
                        default: d(() => [
                          e.disabled && !o.forceDisabled ? (n(), m("span", Q, V(t.str ? a.value[t.str] : a.value[t.id]), 1)) : (n(), p(y(t.type || t.component), i({ key: 1 }, t.el, {
                            modelValue: a.value[t.id],
                            "onUpdate:modelValue": (O) => a.value[t.id] = O
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
            w(o.hide) ? (n(), p(r, i({
              key: 1,
              prop: o.id
            }, k(o)), {
              label: d(() => [
                o.label && typeof o.label == "function" ? (n(), p(y(o.label()), { key: 0 })) : (n(), m("span", T, V(o.label), 1))
              ]),
              default: d(() => [
                e.disabled && !o.forceDisabled ? (n(), m("span", W, V(o.str ? a.value[o.str] : a.value[o.id]), 1)) : (n(), p(y(o.type || o.component), i({ key: 1 }, o.el, {
                  modelValue: a.value[o.id],
                  "onUpdate:modelValue": (t) => a.value[o.id] = t
                }), null, 16, ["modelValue", "onUpdate:modelValue"]))
              ]),
              _: 2
            }, 1040, ["prop"])) : F("", !0)
          ], 64))), 256)),
          G(e.$slots, "final")
        ]),
        _: 3
      }, 16, ["model"]);
    };
  }
});
export {
  me as default
};

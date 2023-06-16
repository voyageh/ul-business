import { defineComponent as B, ref as C, watch as y, resolveComponent as V, openBlock as a, createBlock as c, mergeProps as f, withCtx as i, createElementBlock as d, Fragment as v, renderList as D, createVNode as $, toDisplayString as U, resolveDynamicComponent as E, createCommentVNode as g, renderSlot as x } from "vue";
import { formProps as z } from "./type.mjs";
import A from "./handleConetnt.mjs";
import { isEqual as G, cloneDeep as P } from "lodash";
const H = { key: 0 }, J = { key: 0 }, K = B({ name: "UlForm" }), h = /* @__PURE__ */ B({
  ...K,
  props: z,
  emits: ["update:modelValue"],
  setup(I, { expose: N, emit: R }) {
    const _ = I, F = C(), n = C({});
    let m = {};
    y(
      () => _.content,
      (e) => {
        const { formatObj: o, defaulValue: l } = A(e);
        m = o, n.value = Object.assign(l, n.value);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const S = () => {
      const { content: e, modelValue: o, ...l } = _;
      return l;
    }, b = (e) => {
      const {
        id: o,
        type: l,
        component: u,
        default: s,
        str: p,
        forceDisabled: t,
        inputFormat: r,
        outputFormat: O,
        el: M,
        hide: Q,
        span: T,
        ...L
      } = e;
      return L;
    }, k = (e) => {
      let o = !e;
      return typeof e == "function" && (o = !e(n.value)), o;
    }, w = () => {
      let e = P(n.value) || {};
      return Object.keys(e).forEach((o) => {
        var l, u, s;
        if (e[o] && ((l = m[o]) != null && l.outputFormat)) {
          const p = (s = (u = m[o]).outputFormat) == null ? void 0 : s.call(u, e);
          Object.assign(e, p);
        }
      }), e;
    }, j = (e) => {
      let o = P(e) || {};
      return Object.keys(o).forEach((l) => {
        var u, s, p;
        if (o[l] && ((u = m[l]) != null && u.inputFormat)) {
          const t = m[l] && ((p = (s = m[l]).inputFormat) == null ? void 0 : p.call(s, o));
          Object.assign(o, t);
        }
      }), o;
    }, q = (e) => {
      n.value = j(e);
    };
    return _.modelValue && (y(
      () => _.modelValue,
      (e) => {
        if (e && !G(e, n.value)) {
          const o = j(e);
          n.value = Object.assign({}, n.value, o);
        }
      },
      {
        immediate: !0,
        deep: !0
      }
    ), y(
      () => n.value,
      async () => {
        const e = await w();
        R("update:modelValue", e);
      },
      {
        deep: !0,
        immediate: !0
      }
    )), N({
      getValue: w,
      setValue: q,
      elFrom: F
    }), (e, o) => {
      const l = V("el-form-item"), u = V("el-col"), s = V("el-row"), p = V("el-form");
      return a(), c(p, f({
        ref_key: "formRef",
        ref: F,
        class: "ul-form"
      }, S(), { model: n.value }), {
        default: i(() => [
          (a(!0), d(v, null, D(e.content, (t) => (a(), d(v, null, [
            t.type === "row" && t.items ? (a(), c(s, {
              key: 0,
              gutter: 20
            }, {
              default: i(() => [
                (a(!0), d(v, null, D(t.items || [], (r) => (a(), d(v, {
                  key: r.id
                }, [
                  k(r.hide) ? (a(), c(u, {
                    key: 0,
                    xs: { span: 24 },
                    sm: { span: 12 },
                    md: { span: 8 },
                    lg: { span: r.span || 6 }
                  }, {
                    default: i(() => [
                      $(l, f({
                        prop: r.id
                      }, b(r)), {
                        default: i(() => [
                          e.disabled && !t.forceDisabled ? (a(), d("span", H, U(r.str ? n.value[r.str] : n.value[r.id]), 1)) : (a(), c(E(r.type || r.component), f({ key: 1 }, r.el, {
                            modelValue: n.value[r.id],
                            "onUpdate:modelValue": (O) => n.value[r.id] = O
                          }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                        ]),
                        _: 2
                      }, 1040, ["prop"])
                    ]),
                    _: 2
                  }, 1032, ["lg"])) : g("", !0)
                ], 64))), 128))
              ]),
              _: 2
            }, 1024)) : g("", !0),
            k(t.hide) ? (a(), c(l, f({
              key: 1,
              prop: t.id
            }, b(t)), {
              default: i(() => [
                e.disabled && !t.forceDisabled ? (a(), d("span", J, U(t.str ? n.value[t.str] : n.value[t.id]), 1)) : (a(), c(E(t.type || t.component), f({ key: 1 }, t.el, {
                  modelValue: n.value[t.id],
                  "onUpdate:modelValue": (r) => n.value[t.id] = r
                }), null, 16, ["modelValue", "onUpdate:modelValue"]))
              ]),
              _: 2
            }, 1040, ["prop"])) : g("", !0)
          ], 64))), 256)),
          x(e.$slots, "last")
        ]),
        _: 3
      }, 16, ["model"]);
    };
  }
});
export {
  h as default
};

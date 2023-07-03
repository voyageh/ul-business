import { ElIcon as ie, ElButton as re, ElFormItem as ce, ElTableColumn as pe, ElPopconfirm as ue, ElTable as de, ElPagination as fe, ElDialog as me, ElLoadingDirective as _e } from "element-plus/es";
import "element-plus/es/components/base/style/css";
import "element-plus/es/components/loading/style/css";
import "element-plus/es/components/dialog/style/css";
import "element-plus/es/components/pagination/style/css";
import "element-plus/es/components/table/style/css";
import "element-plus/es/components/popconfirm/style/css";
import "element-plus/es/components/table-column/style/css";
import "element-plus/es/components/form-item/style/css";
import "element-plus/es/components/button/style/css";
import "element-plus/es/components/icon/style/css";
import { defineComponent as ye, useCssVars as ge, inject as be, ref as V, reactive as A, resolveComponent as ve, openBlock as a, createElementBlock as m, createVNode as r, withCtx as o, unref as P, createTextVNode as _, createCommentVNode as B, createElementVNode as S, renderSlot as R, withDirectives as ke, createBlock as f, mergeProps as b, Fragment as E, renderList as W, normalizeProps as q, resolveDynamicComponent as D, toDisplayString as F, createSlots as he, nextTick as Ce } from "vue";
import { tableProps as Ve } from "./type.mjs";
import { Icon as L } from "@iconify/vue";
import { get as x } from "lodash";
import Pe from "element-plus/es/components/table/src/table/defaults";
const Ee = { class: "ul-table" }, De = {
  key: 0,
  class: "ul-table__search"
}, Fe = { class: "ul-table__content" }, Se = { class: "table-head" }, Te = { key: 1 }, ze = { key: 1 }, Ne = { key: 1 }, $e = { class: "operate-box" }, Ke = { class: "dialog-footer" }, Qe = /* @__PURE__ */ ye({
  name: "UlTable",
  __name: "table",
  props: Ve,
  setup(G) {
    const s = G;
    ge((e) => ({
      "8cd1ef16": e.opWidth,
      "0efe32e9": e.pagingAlign
    }));
    const u = be("table"), T = s.pageKey ?? (u == null ? void 0 : u.sizeKey) ?? "pageSize", z = s.sizeKey ?? (u == null ? void 0 : u.pageKey) ?? "PageNo", N = V(), $ = V(!1), I = V([]), K = V(0), k = A({
      [T]: 1,
      [z]: 10
    }), H = (e) => {
      const t = {};
      return Object.keys(Pe).forEach((l) => {
        e[l] && (t[l] = e[l]);
      }), t;
    }, U = (e) => {
      const { label: t, component: l, el: p, children: y, ...d } = e;
      return d;
    }, v = async () => {
      var e, t;
      if (s.getList) {
        $.value = !0;
        const l = (t = (e = N.value) == null ? void 0 : e.getValue) == null ? void 0 : t.call(e), p = await s.getList({
          ...k,
          ...l
        }), y = s.dataPath ?? (u == null ? void 0 : u.dataPath) ?? "data", d = s.totalPath ?? (u == null ? void 0 : u.totalPath) ?? "total";
        I.value = x(p, y), K.value = x(p, d), $.value = !1;
      }
    };
    s.immediate && v();
    const J = () => {
      var e, t, l;
      (l = (t = (e = N.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || l.call(t), v();
    }, M = (e) => {
      k[z] = e, v();
    }, Q = (e) => {
      k[T] = e, v();
    }, i = A({
      visible: !1,
      title: "",
      disabled: !1,
      saveType: ""
    }), h = V(), X = () => {
      var e, t, l;
      (l = (t = (e = h.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || l.call(t);
    }, Y = () => {
      if (s.onNew) {
        s.onNew();
        return;
      }
      i.title = "新增", i.visible = !0, i.disabled = !1, i.saveType = "new";
    }, O = async (e) => {
      let t = e;
      s.getDetail && (t = await s.getDetail(e)), Ce(() => {
        var l, p;
        (p = (l = h.value) == null ? void 0 : l.setValue) == null || p.call(l, t);
      });
    }, Z = async (e) => {
      s.deleteSumbit && s.deleteSumbit(e);
    }, ee = async (e) => {
      if (s.onEdit) {
        s.onEdit(e);
        return;
      }
      i.title = "编辑", i.visible = !0, i.disabled = !1, i.saveType = "edit", O(e);
    }, te = async (e) => {
      if (s.onView) {
        s.onView(e);
        return;
      }
      i.title = "查看", i.visible = !0, i.disabled = !0, O(e);
    }, oe = async () => {
      var e, t, l;
      (l = (t = (e = h.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.validate) == null || l.call(t, async (p) => {
        var d, g;
        if (!p)
          return;
        let y = s.newSumbit;
        if (i.saveType === "edit" && (y = s.editSumbit), y) {
          const w = (g = (d = h.value) == null ? void 0 : d.getValue) == null ? void 0 : g.call(d);
          await y(w) !== !1 && (i.visible = !1, v());
        }
      });
    };
    return (e, t) => {
      const l = ie, p = re, y = ce, d = ve("ul-form"), g = pe, w = ue, j = de, ne = fe, le = me, ae = _e;
      return a(), m("div", Ee, [
        e.searchForms.length > 0 ? (a(), m("div", De, [
          r(d, {
            ref_key: "searchForm",
            ref: N,
            content: e.searchForms,
            inline: ""
          }, {
            final: o(() => [
              r(y, null, {
                default: o(() => [
                  r(p, {
                    type: "primary",
                    onClick: v
                  }, {
                    icon: o(() => [
                      r(l, null, {
                        default: o(() => [
                          r(P(L), { icon: "ep:search" })
                        ]),
                        _: 1
                      })
                    ]),
                    default: o(() => [
                      _(" 查询 ")
                    ]),
                    _: 1
                  }),
                  r(p, { onClick: J }, {
                    icon: o(() => [
                      r(l, null, {
                        default: o(() => [
                          r(P(L), { icon: "ep:refresh" })
                        ]),
                        _: 1
                      })
                    ]),
                    default: o(() => [
                      _(" 重置 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["content"])
        ])) : B("", !0),
        S("div", Fe, [
          S("div", Se, [
            r(p, {
              type: "primary",
              onClick: Y
            }, {
              icon: o(() => [
                r(l, null, {
                  default: o(() => [
                    r(P(L), { icon: "ep:plus" })
                  ]),
                  _: 1
                })
              ]),
              default: o(() => [
                _(" 新增 ")
              ]),
              _: 1
            }),
            R(e.$slots, "head")
          ]),
          ke((a(), f(j, b({ border: "" }, H(e.$props), {
            data: I.value,
            "element-loading-text": "正在努力加载..."
          }), {
            default: o(() => [
              (a(!0), m(E, null, W(e.columns, (n) => (a(), m(E, null, [
                n.children ? (a(), f(g, q(b({ key: 0 }, U(n))), {
                  header: o(() => [
                    n.label && typeof n.label == "function" ? (a(), f(D(n.label()), { key: 0 })) : (a(), m("span", Te, F(n.label), 1))
                  ]),
                  default: o(() => [
                    (a(!0), m(E, null, W(n.children, (c) => (a(), f(g, b({
                      key: c.prop
                    }, U(c)), {
                      header: o(() => [
                        c.label && typeof c.label == "function" ? (a(), f(D(c.label()), { key: 0 })) : (a(), m("span", ze, F(c.label), 1))
                      ]),
                      default: o(({ row: C }) => [
                        c.component ? (a(), f(D(c.component), b({
                          key: 0,
                          modelValue: C[c.prop],
                          "onUpdate:modelValue": (se) => C[c.prop] = se
                        }, c.el), null, 16, ["modelValue", "onUpdate:modelValue"])) : (a(), m(E, { key: 1 }, [
                          _(F(C[c.prop]), 1)
                        ], 64))
                      ]),
                      _: 2
                    }, 1040))), 128))
                  ]),
                  _: 2
                }, 1040)) : (a(), f(g, q(b({ key: 1 }, U(n))), {
                  header: o(() => [
                    n.label && typeof n.label == "function" ? (a(), f(D(n.label()), { key: 0 })) : (a(), m("span", Ne, F(n.label), 1))
                  ]),
                  default: o(({ row: c }) => [
                    n.component ? (a(), f(D(n.component), b({
                      key: 0,
                      modelValue: c[n.prop],
                      "onUpdate:modelValue": (C) => c[n.prop] = C
                    }, n.el), null, 16, ["modelValue", "onUpdate:modelValue"])) : (a(), m(E, { key: 1 }, [
                      _(F(c[n.prop]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1040))
              ], 64))), 256)),
              e.hasOperateColumn && e.columns.length > 0 ? (a(), f(g, {
                key: 0,
                label: "操作",
                align: "center",
                fixed: "right"
              }, {
                default: o(({ row: n }) => [
                  S("div", $e, [
                    r(p, {
                      link: "",
                      type: "primary",
                      onClick: (c) => te(n)
                    }, {
                      default: o(() => [
                        _("查看")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    r(p, {
                      link: "",
                      type: "primary",
                      onClick: (c) => ee(n)
                    }, {
                      default: o(() => [
                        _("编辑")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    r(w, {
                      title: "确定要删除该数据吗?",
                      "confirm-button-type": "danger",
                      "confirm-button-text": "删除",
                      onClick: Z
                    }, {
                      reference: o(() => [
                        r(p, {
                          link: "",
                          type: "danger"
                        }, {
                          default: o(() => [
                            _("删除")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    R(e.$slots, "extraOp")
                  ])
                ]),
                _: 3
              })) : B("", !0)
            ]),
            _: 3
          }, 16, ["data"])), [
            [ae, $.value]
          ]),
          e.hasPagination && K.value > 0 ? (a(), f(ne, b({
            key: 0,
            class: "paging-box",
            layout: "total, sizes, prev, pager, next, jumper",
            background: "",
            small: ""
          }, e.pagingAttr, {
            "current-page": k[P(T)],
            "page-size": k[P(z)],
            total: K.value,
            onSizeChange: M,
            onCurrentChange: Q
          }), null, 16, ["current-page", "page-size", "total"])) : B("", !0)
        ]),
        r(le, {
          modelValue: i.visible,
          "onUpdate:modelValue": t[2] || (t[2] = (n) => i.visible = n),
          title: i.title,
          onClose: X
        }, he({
          default: o(() => [
            r(d, {
              ref_key: "dialogForm",
              ref: h,
              disabled: i.disabled,
              content: e.forms
            }, null, 8, ["disabled", "content"])
          ]),
          _: 2
        }, [
          i.disabled ? void 0 : {
            name: "footer",
            fn: o(() => [
              S("span", Ke, [
                r(p, {
                  onClick: t[0] || (t[0] = (n) => i.visible = !1)
                }, {
                  default: o(() => [
                    _("取消")
                  ]),
                  _: 1
                }),
                r(p, {
                  type: "primary",
                  onClick: t[1] || (t[1] = (n) => oe())
                }, {
                  default: o(() => [
                    _(" 保存 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            key: "0"
          }
        ]), 1032, ["modelValue", "title"])
      ]);
    };
  }
});
export {
  Qe as default
};

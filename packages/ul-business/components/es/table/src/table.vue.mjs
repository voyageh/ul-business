import { ElIcon as ie, ElButton as re, ElFormItem as pe, ElTableColumn as ce, ElPopconfirm as ue, ElTable as de, ElPagination as me, ElDialog as fe, ElLoadingDirective as _e } from "element-plus/es";
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
import { defineComponent as ge, useCssVars as ye, inject as be, ref as V, reactive as A, resolveComponent as ve, openBlock as a, createElementBlock as m, createVNode as r, withCtx as o, unref as P, createTextVNode as f, createCommentVNode as B, createElementVNode as S, renderSlot as R, withDirectives as ke, createBlock as d, mergeProps as b, Fragment as E, renderList as W, normalizeProps as q, resolveDynamicComponent as D, toDisplayString as F, createSlots as he, nextTick as Ce } from "vue";
import { tableProps as Ve } from "./type.mjs";
import { Icon as L } from "@iconify/vue";
import { get as x } from "lodash";
import Pe from "element-plus/es/components/table/src/table/defaults";
const Ee = { class: "ul-table" }, De = {
  key: 0,
  class: "ul-table__search"
}, Fe = { class: "ul-table__content" }, Se = { class: "table-head" }, ze = { key: 1 }, Te = { key: 1 }, Ke = { key: 1 }, Ne = { class: "operate-box" }, $e = { class: "dialog-footer" }, Qe = /* @__PURE__ */ ge({
  name: "UlTable",
  __name: "table",
  props: Ve,
  setup(G) {
    const s = G;
    ye((e) => ({
      ac10425c: e.opWidth,
      c7bada74: e.pagingAlign
    }));
    const _ = be("table", {
      sizeKey: "pageSize",
      pageKey: "pageNo",
      dataPath: "data",
      totalPath: "total"
    }), z = s.pageKey ?? _.pageKey, T = s.sizeKey ?? _.sizeKey, K = V(), N = V(!1), I = V([]), $ = V(0), k = A({
      [z]: 1,
      [T]: 10
    }), H = (e) => {
      const t = {};
      return Object.keys(Pe).forEach((n) => {
        e[n] && (t[n] = e[n]);
      }), t;
    }, U = (e) => {
      const { label: t, component: n, el: c, children: g, ...u } = e;
      return u;
    }, v = async () => {
      var e, t;
      if (s.getList) {
        N.value = !0;
        const n = (t = (e = K.value) == null ? void 0 : e.getValue) == null ? void 0 : t.call(e), c = await s.getList({
          ...k,
          ...n
        }), g = s.dataPath ?? (_ == null ? void 0 : _.dataPath), u = s.totalPath ?? (_ == null ? void 0 : _.totalPath);
        I.value = x(c, g), $.value = x(c, u), N.value = !1;
      }
    };
    s.immediate && v();
    const J = () => {
      var e, t, n;
      (n = (t = (e = K.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || n.call(t), v();
    }, M = (e) => {
      k[T] = e, v();
    }, Q = (e) => {
      k[z] = e, v();
    }, i = A({
      visible: !1,
      title: "",
      disabled: !1,
      saveType: ""
    }), h = V(), X = () => {
      var e, t, n;
      (n = (t = (e = h.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || n.call(t);
    }, Y = () => {
      if (s.onNew) {
        s.onNew();
        return;
      }
      i.title = "新增", i.visible = !0, i.disabled = !1, i.saveType = "new";
    }, O = async (e) => {
      let t = e;
      s.getDetail && (t = await s.getDetail(e)), Ce(() => {
        var n, c;
        (c = (n = h.value) == null ? void 0 : n.setValue) == null || c.call(n, t);
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
      var e, t, n;
      (n = (t = (e = h.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.validate) == null || n.call(t, async (c) => {
        var u, y;
        if (!c)
          return;
        let g = s.newSumbit;
        if (i.saveType === "edit" && (g = s.editSumbit), g) {
          const w = (y = (u = h.value) == null ? void 0 : u.getValue) == null ? void 0 : y.call(u);
          await g(w) !== !1 && (i.visible = !1, v());
        }
      });
    };
    return (e, t) => {
      const n = ie, c = re, g = pe, u = ve("ul-form"), y = ce, w = ue, j = de, le = me, ne = fe, ae = _e;
      return a(), m("div", Ee, [
        e.searchForms.length > 0 ? (a(), m("div", De, [
          r(u, {
            ref_key: "searchForm",
            ref: K,
            content: e.searchForms,
            inline: ""
          }, {
            final: o(() => [
              r(g, null, {
                default: o(() => [
                  r(c, {
                    type: "primary",
                    onClick: v
                  }, {
                    icon: o(() => [
                      r(n, null, {
                        default: o(() => [
                          r(P(L), { icon: "ep:search" })
                        ]),
                        _: 1
                      })
                    ]),
                    default: o(() => [
                      f(" 查询 ")
                    ]),
                    _: 1
                  }),
                  r(c, { onClick: J }, {
                    icon: o(() => [
                      r(n, null, {
                        default: o(() => [
                          r(P(L), { icon: "ep:refresh" })
                        ]),
                        _: 1
                      })
                    ]),
                    default: o(() => [
                      f(" 重置 ")
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
            r(c, {
              type: "primary",
              onClick: Y
            }, {
              icon: o(() => [
                r(n, null, {
                  default: o(() => [
                    r(P(L), { icon: "ep:plus" })
                  ]),
                  _: 1
                })
              ]),
              default: o(() => [
                f(" 新增 ")
              ]),
              _: 1
            }),
            R(e.$slots, "head")
          ]),
          ke((a(), d(j, b({ border: "" }, H(e.$props), {
            data: I.value,
            "element-loading-text": "正在努力加载..."
          }), {
            default: o(() => [
              (a(!0), m(E, null, W(e.columns, (l) => (a(), m(E, null, [
                l.children ? (a(), d(y, q(b({ key: 0 }, U(l))), {
                  header: o(() => [
                    l.label && typeof l.label == "function" ? (a(), d(D(l.label()), { key: 0 })) : (a(), m("span", ze, F(l.label), 1))
                  ]),
                  default: o(() => [
                    (a(!0), m(E, null, W(l.children, (p) => (a(), d(y, b({
                      key: p.prop
                    }, U(p)), {
                      header: o(() => [
                        p.label && typeof p.label == "function" ? (a(), d(D(p.label()), { key: 0 })) : (a(), m("span", Te, F(p.label), 1))
                      ]),
                      default: o(({ row: C }) => [
                        p.component ? (a(), d(D(p.component), b({
                          key: 0,
                          modelValue: C[p.prop],
                          "onUpdate:modelValue": (se) => C[p.prop] = se
                        }, p.el), null, 16, ["modelValue", "onUpdate:modelValue"])) : (a(), m(E, { key: 1 }, [
                          f(F(C[p.prop]), 1)
                        ], 64))
                      ]),
                      _: 2
                    }, 1040))), 128))
                  ]),
                  _: 2
                }, 1040)) : (a(), d(y, q(b({ key: 1 }, U(l))), {
                  header: o(() => [
                    l.label && typeof l.label == "function" ? (a(), d(D(l.label()), { key: 0 })) : (a(), m("span", Ke, F(l.label), 1))
                  ]),
                  default: o(({ row: p }) => [
                    l.component ? (a(), d(D(l.component), b({
                      key: 0,
                      modelValue: p[l.prop],
                      "onUpdate:modelValue": (C) => p[l.prop] = C
                    }, l.el), null, 16, ["modelValue", "onUpdate:modelValue"])) : (a(), m(E, { key: 1 }, [
                      f(F(p[l.prop]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1040))
              ], 64))), 256)),
              e.hasOperateColumn && e.columns.length > 0 ? (a(), d(y, {
                key: 0,
                label: "操作",
                align: "center",
                fixed: "right"
              }, {
                default: o(({ row: l }) => [
                  S("div", Ne, [
                    r(c, {
                      link: "",
                      type: "primary",
                      onClick: (p) => te(l)
                    }, {
                      default: o(() => [
                        f("查看")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    r(c, {
                      link: "",
                      type: "primary",
                      onClick: (p) => ee(l)
                    }, {
                      default: o(() => [
                        f("编辑")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    r(w, {
                      title: "确定要删除该数据吗?",
                      "confirm-button-type": "danger",
                      "confirm-button-text": "删除",
                      onConfirm: Z
                    }, {
                      reference: o(() => [
                        r(c, {
                          link: "",
                          type: "danger"
                        }, {
                          default: o(() => [
                            f("删除")
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
            [ae, N.value]
          ]),
          e.hasPagination && $.value > 0 ? (a(), d(le, b({
            key: 0,
            class: "paging-box",
            layout: "total, sizes, prev, pager, next, jumper",
            background: "",
            small: ""
          }, e.pagingAttr, {
            "current-page": k[P(z)],
            "page-size": k[P(T)],
            total: $.value,
            onSizeChange: M,
            onCurrentChange: Q
          }), null, 16, ["current-page", "page-size", "total"])) : B("", !0)
        ]),
        r(ne, {
          modelValue: i.visible,
          "onUpdate:modelValue": t[2] || (t[2] = (l) => i.visible = l),
          title: i.title,
          onClose: X
        }, he({
          default: o(() => [
            r(u, {
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
              S("span", $e, [
                r(c, {
                  onClick: t[0] || (t[0] = (l) => i.visible = !1)
                }, {
                  default: o(() => [
                    f("取消")
                  ]),
                  _: 1
                }),
                r(c, {
                  type: "primary",
                  onClick: t[1] || (t[1] = (l) => oe())
                }, {
                  default: o(() => [
                    f(" 保存 ")
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

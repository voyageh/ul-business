import { ElIcon as te, ElButton as le, ElFormItem as oe, ElTableColumn as ne, ElPopconfirm as ae, ElTable as ie, ElPagination as se, ElDialog as re, ElLoadingDirective as ce } from "element-plus/es";
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
import { defineComponent as de, useCssVars as ue, ref as v, reactive as K, resolveComponent as pe, openBlock as c, createElementBlock as g, createVNode as s, withCtx as l, unref as F, createTextVNode as p, createCommentVNode as S, createElementVNode as C, renderSlot as B, withDirectives as me, createBlock as m, mergeProps as h, Fragment as L, renderList as fe, normalizeProps as U, resolveDynamicComponent as P, toDisplayString as I, createSlots as _e, nextTick as ge } from "vue";
import { tableProps as be } from "./type.mjs";
import { Icon as w } from "@iconify/vue";
import { get as A } from "lodash";
const ye = { class: "ul-table" }, ve = {
  key: 0,
  class: "ul-table__search"
}, he = { class: "ul-table__content" }, ke = { class: "table-head" }, Ce = { key: 1 }, Ve = { key: 1 }, Ee = { class: "operate-box" }, De = { class: "dialog-footer" }, je = /* @__PURE__ */ de({
  name: "UlTable",
  __name: "table",
  props: be,
  setup(O) {
    const o = O;
    ue((e) => ({
      "67d2737d": e.pagingAlign
    }));
    const V = v(), j = v(!1), z = v([]), E = v(0), b = K({
      [o.pageKey]: 1,
      [o.sizeKey]: 10
    }), T = (e) => {
      const { label: t, component: a, el: r, ...d } = e;
      return d;
    }, f = async () => {
      var e, t;
      if (o.getList) {
        const a = (t = (e = V.value) == null ? void 0 : e.getValue) == null ? void 0 : t.call(e), r = await o.getList({
          ...b,
          ...a
        }), d = o.dataPath || "data", u = o.totalPath || "total";
        z.value = A(r, d), E.value = A(r, u);
      }
    };
    o.immediate && f();
    const R = () => {
      var e, t, a;
      (a = (t = (e = V.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || a.call(t), f();
    }, W = (e) => {
      b[o.sizeKey] = e, f();
    }, q = (e) => {
      b[o.pageKey] = e, f();
    }, i = K({
      visible: !1,
      title: "",
      disabled: !1,
      saveType: ""
    }), y = v(), x = () => {
      var e, t, a;
      (a = (t = (e = y.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || a.call(t);
    }, G = () => {
      if (o.onNew) {
        o.onNew();
        return;
      }
      i.title = "新增", i.visible = !0, i.disabled = !1, i.saveType = "new";
    }, N = async (e) => {
      let t = e;
      o.getDetail && (t = await o.getDetail(e)), ge(() => {
        var a, r;
        (r = (a = y.value) == null ? void 0 : a.setValue) == null || r.call(a, t);
      });
    }, H = async (e) => {
      o.deleteSumbit && o.deleteSumbit(e);
    }, J = async (e) => {
      if (o.onEdit) {
        o.onEdit(e);
        return;
      }
      i.title = "编辑", i.visible = !0, i.disabled = !1, i.saveType = "edit", N(e);
    }, M = async (e) => {
      if (o.onView) {
        o.onView(e);
        return;
      }
      i.title = "查看", i.visible = !0, i.disabled = !0, N(e);
    }, Q = async () => {
      var e, t, a;
      (a = (t = (e = y.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.validate) == null || a.call(t, async (r) => {
        var u, _;
        if (!r)
          return;
        let d = o.newSumbit;
        if (i.saveType === "edit" && (d = o.editSumbit), d) {
          const D = (_ = (u = y.value) == null ? void 0 : u.getValue) == null ? void 0 : _.call(u);
          await d(D) !== !1 && (i.visible = !1, f());
        }
      });
    };
    return (e, t) => {
      const a = te, r = le, d = oe, u = pe("ul-form"), _ = ne, D = ae, $ = ie, X = se, Y = re, Z = ce;
      return c(), g("div", ye, [
        e.searchForms.length > 0 ? (c(), g("div", ve, [
          s(u, {
            ref_key: "searchForm",
            ref: V,
            content: e.searchForms,
            inline: ""
          }, {
            final: l(() => [
              s(d, null, {
                default: l(() => [
                  s(r, {
                    type: "primary",
                    onClick: f
                  }, {
                    icon: l(() => [
                      s(a, null, {
                        default: l(() => [
                          s(F(w), { icon: "ep:search" })
                        ]),
                        _: 1
                      })
                    ]),
                    default: l(() => [
                      p(" 查询 ")
                    ]),
                    _: 1
                  }),
                  s(r, { onClick: R }, {
                    icon: l(() => [
                      s(a, null, {
                        default: l(() => [
                          s(F(w), { icon: "ep:refresh" })
                        ]),
                        _: 1
                      })
                    ]),
                    default: l(() => [
                      p(" 重置 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["content"])
        ])) : S("", !0),
        C("div", he, [
          C("div", ke, [
            s(r, {
              type: "primary",
              onClick: G
            }, {
              icon: l(() => [
                s(a, null, {
                  default: l(() => [
                    s(F(w), { icon: "ep:plus" })
                  ]),
                  _: 1
                })
              ]),
              default: l(() => [
                p(" 新增 ")
              ]),
              _: 1
            }),
            B(e.$slots, "head")
          ]),
          me((c(), m($, h({
            border: "",
            data: z.value,
            "element-loading-text": "正在努力加载..."
          }, e.$attrs), {
            default: l(() => [
              (c(!0), g(L, null, fe(e.columns, (n) => (c(), g(L, null, [
                n.component ? (c(), m(_, U(h({ key: 0 }, T(n))), {
                  header: l(() => [
                    n.label && typeof n.label == "function" ? (c(), m(P(n.label()), { key: 0 })) : (c(), g("span", Ce, I(n.label), 1))
                  ]),
                  default: l(({ row: k }) => [
                    (c(), m(P(n.component), h({
                      modelValue: k[n.prop],
                      "onUpdate:modelValue": (ee) => k[n.prop] = ee
                    }, n.el), null, 16, ["modelValue", "onUpdate:modelValue"]))
                  ]),
                  _: 2
                }, 1040)) : (c(), m(_, U(h({ key: 1 }, T(n))), {
                  header: l(() => [
                    n.label && typeof n.label == "function" ? (c(), m(P(n.label()), { key: 0 })) : (c(), g("span", Ve, I(n.label), 1))
                  ]),
                  _: 2
                }, 1040))
              ], 64))), 256)),
              e.hasOperateColumn && e.columns.length > 0 ? (c(), m(_, {
                key: 0,
                label: "操作",
                align: "center",
                width: e.opWidth,
                fixed: "right"
              }, {
                default: l(({ row: n }) => [
                  C("div", Ee, [
                    s(r, {
                      link: "",
                      type: "primary",
                      onClick: (k) => M(n)
                    }, {
                      default: l(() => [
                        p("查看")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    s(r, {
                      link: "",
                      type: "primary",
                      onClick: (k) => J(n)
                    }, {
                      default: l(() => [
                        p("编辑")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    s(D, {
                      title: "确定要删除该数据吗?",
                      "confirm-button-type": "danger",
                      "confirm-button-text": "删除",
                      onClick: H
                    }, {
                      reference: l(() => [
                        s(r, {
                          link: "",
                          type: "danger"
                        }, {
                          default: l(() => [
                            p("删除")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    B(e.$slots, "extraOp")
                  ])
                ]),
                _: 3
              }, 8, ["width"])) : S("", !0)
            ]),
            _: 3
          }, 16, ["data"])), [
            [Z, j.value]
          ]),
          e.hasPagination && E.value > 0 ? (c(), m(X, h({
            key: 0,
            class: "paging-box",
            layout: "total, sizes, prev, pager, next, jumper",
            background: "",
            small: ""
          }, e.pagingAttr, {
            "current-page": b[o.pageKey],
            "page-size": b[o.sizeKey],
            total: E.value,
            onSizeChange: W,
            onCurrentChange: q
          }), null, 16, ["current-page", "page-size", "total"])) : S("", !0)
        ]),
        s(Y, {
          modelValue: i.visible,
          "onUpdate:modelValue": t[2] || (t[2] = (n) => i.visible = n),
          title: i.title,
          onClose: x
        }, _e({
          default: l(() => [
            s(u, {
              ref_key: "dialogForm",
              ref: y,
              disabled: i.disabled,
              content: e.forms
            }, null, 8, ["disabled", "content"])
          ]),
          _: 2
        }, [
          i.disabled ? void 0 : {
            name: "footer",
            fn: l(() => [
              C("span", De, [
                s(r, {
                  onClick: t[0] || (t[0] = (n) => i.visible = !1)
                }, {
                  default: l(() => [
                    p("取消")
                  ]),
                  _: 1
                }),
                s(r, {
                  type: "primary",
                  onClick: t[1] || (t[1] = (n) => Q())
                }, {
                  default: l(() => [
                    p(" 保存 ")
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
  je as default
};

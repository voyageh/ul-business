import { ElIcon as ne, ElButton as ae, ElFormItem as se, ElTableColumn as ie, ElPopconfirm as re, ElTable as pe, ElPagination as ue, ElDialog as ce, ElLoadingDirective as de } from "element-plus/es";
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
import { defineComponent as me, useCssVars as fe, ref as C, reactive as L, resolveComponent as _e, openBlock as s, createElementBlock as m, createVNode as r, withCtx as o, unref as w, createTextVNode as f, createCommentVNode as N, createElementVNode as F, renderSlot as I, withDirectives as ge, createBlock as d, mergeProps as b, Fragment as V, renderList as O, normalizeProps as A, resolveDynamicComponent as E, toDisplayString as D, createSlots as be, nextTick as ye } from "vue";
import { tableProps as ve } from "./type.mjs";
import { Icon as $ } from "@iconify/vue";
import { get as j } from "lodash";
import ke from "element-plus/es/components/table/src/table/defaults";
const he = { class: "ul-table" }, Ce = {
  key: 0,
  class: "ul-table__search"
}, Ve = { class: "ul-table__content" }, Ee = { class: "table-head" }, De = { key: 1 }, Fe = { key: 1 }, Pe = { key: 1 }, Se = { class: "operate-box" }, Te = { class: "dialog-footer" }, Ge = /* @__PURE__ */ me({
  name: "UlTable",
  __name: "table",
  props: ve,
  setup(R) {
    const a = R;
    fe((e) => ({
      "6dea391e": e.pagingAlign
    }));
    const P = C(), W = C(!1), K = C([]), S = C(0), v = L({
      [a.pageKey]: 1,
      [a.sizeKey]: 10
    }), q = (e) => {
      const t = {};
      return Object.keys(ke).forEach((n) => {
        e[n] && (t[n] = e[n]);
      }), t;
    }, T = (e) => {
      const { label: t, component: n, el: u, children: _, ...c } = e;
      return c;
    }, y = async () => {
      var e, t;
      if (a.getList) {
        const n = (t = (e = P.value) == null ? void 0 : e.getValue) == null ? void 0 : t.call(e), u = await a.getList({
          ...v,
          ...n
        }), _ = a.dataPath || "data", c = a.totalPath || "total";
        K.value = j(u, _), S.value = j(u, c);
      }
    };
    a.immediate && y();
    const x = () => {
      var e, t, n;
      (n = (t = (e = P.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || n.call(t), y();
    }, G = (e) => {
      v[a.sizeKey] = e, y();
    }, H = (e) => {
      v[a.pageKey] = e, y();
    }, i = L({
      visible: !1,
      title: "",
      disabled: !1,
      saveType: ""
    }), k = C(), J = () => {
      var e, t, n;
      (n = (t = (e = k.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || n.call(t);
    }, M = () => {
      if (a.onNew) {
        a.onNew();
        return;
      }
      i.title = "新增", i.visible = !0, i.disabled = !1, i.saveType = "new";
    }, U = async (e) => {
      let t = e;
      a.getDetail && (t = await a.getDetail(e)), ye(() => {
        var n, u;
        (u = (n = k.value) == null ? void 0 : n.setValue) == null || u.call(n, t);
      });
    }, Q = async (e) => {
      a.deleteSumbit && a.deleteSumbit(e);
    }, X = async (e) => {
      if (a.onEdit) {
        a.onEdit(e);
        return;
      }
      i.title = "编辑", i.visible = !0, i.disabled = !1, i.saveType = "edit", U(e);
    }, Y = async (e) => {
      if (a.onView) {
        a.onView(e);
        return;
      }
      i.title = "查看", i.visible = !0, i.disabled = !0, U(e);
    }, Z = async () => {
      var e, t, n;
      (n = (t = (e = k.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.validate) == null || n.call(t, async (u) => {
        var c, g;
        if (!u)
          return;
        let _ = a.newSumbit;
        if (i.saveType === "edit" && (_ = a.editSumbit), _) {
          const z = (g = (c = k.value) == null ? void 0 : c.getValue) == null ? void 0 : g.call(c);
          await _(z) !== !1 && (i.visible = !1, y());
        }
      });
    };
    return (e, t) => {
      const n = ne, u = ae, _ = se, c = _e("ul-form"), g = ie, z = re, B = pe, ee = ue, te = ce, oe = de;
      return s(), m("div", he, [
        e.searchForms.length > 0 ? (s(), m("div", Ce, [
          r(c, {
            ref_key: "searchForm",
            ref: P,
            content: e.searchForms,
            inline: ""
          }, {
            final: o(() => [
              r(_, null, {
                default: o(() => [
                  r(u, {
                    type: "primary",
                    onClick: y
                  }, {
                    icon: o(() => [
                      r(n, null, {
                        default: o(() => [
                          r(w($), { icon: "ep:search" })
                        ]),
                        _: 1
                      })
                    ]),
                    default: o(() => [
                      f(" 查询 ")
                    ]),
                    _: 1
                  }),
                  r(u, { onClick: x }, {
                    icon: o(() => [
                      r(n, null, {
                        default: o(() => [
                          r(w($), { icon: "ep:refresh" })
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
        ])) : N("", !0),
        F("div", Ve, [
          F("div", Ee, [
            r(u, {
              type: "primary",
              onClick: M
            }, {
              icon: o(() => [
                r(n, null, {
                  default: o(() => [
                    r(w($), { icon: "ep:plus" })
                  ]),
                  _: 1
                })
              ]),
              default: o(() => [
                f(" 新增 ")
              ]),
              _: 1
            }),
            I(e.$slots, "head")
          ]),
          ge((s(), d(B, b({ border: "" }, q(e.$props), {
            data: K.value,
            "element-loading-text": "正在努力加载..."
          }), {
            default: o(() => [
              (s(!0), m(V, null, O(e.columns, (l) => (s(), m(V, null, [
                l.children ? (s(), d(g, A(b({ key: 0 }, T(l))), {
                  header: o(() => [
                    l.label && typeof l.label == "function" ? (s(), d(E(l.label()), { key: 0 })) : (s(), m("span", De, D(l.label), 1))
                  ]),
                  default: o(() => [
                    (s(!0), m(V, null, O(l.children, (p) => (s(), d(g, b({
                      key: p.prop
                    }, T(p)), {
                      header: o(() => [
                        p.label && typeof p.label == "function" ? (s(), d(E(p.label()), { key: 0 })) : (s(), m("span", Fe, D(p.label), 1))
                      ]),
                      default: o(({ row: h }) => [
                        p.component ? (s(), d(E(p.component), b({
                          key: 0,
                          modelValue: h[p.prop],
                          "onUpdate:modelValue": (le) => h[p.prop] = le
                        }, p.el), null, 16, ["modelValue", "onUpdate:modelValue"])) : (s(), m(V, { key: 1 }, [
                          f(D(h[p.prop]), 1)
                        ], 64))
                      ]),
                      _: 2
                    }, 1040))), 128))
                  ]),
                  _: 2
                }, 1040)) : (s(), d(g, A(b({ key: 1 }, T(l))), {
                  header: o(() => [
                    l.label && typeof l.label == "function" ? (s(), d(E(l.label()), { key: 0 })) : (s(), m("span", Pe, D(l.label), 1))
                  ]),
                  default: o(({ row: p }) => [
                    l.component ? (s(), d(E(l.component), b({
                      key: 0,
                      modelValue: p[l.prop],
                      "onUpdate:modelValue": (h) => p[l.prop] = h
                    }, l.el), null, 16, ["modelValue", "onUpdate:modelValue"])) : (s(), m(V, { key: 1 }, [
                      f(D(p[l.prop]), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1040))
              ], 64))), 256)),
              e.hasOperateColumn && e.columns.length > 0 ? (s(), d(g, {
                key: 0,
                label: "操作",
                align: "center",
                width: e.opWidth,
                fixed: "right"
              }, {
                default: o(({ row: l }) => [
                  F("div", Se, [
                    r(u, {
                      link: "",
                      type: "primary",
                      onClick: (p) => Y(l)
                    }, {
                      default: o(() => [
                        f("查看")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    r(u, {
                      link: "",
                      type: "primary",
                      onClick: (p) => X(l)
                    }, {
                      default: o(() => [
                        f("编辑")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    r(z, {
                      title: "确定要删除该数据吗?",
                      "confirm-button-type": "danger",
                      "confirm-button-text": "删除",
                      onClick: Q
                    }, {
                      reference: o(() => [
                        r(u, {
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
                    I(e.$slots, "extraOp")
                  ])
                ]),
                _: 3
              }, 8, ["width"])) : N("", !0)
            ]),
            _: 3
          }, 16, ["data"])), [
            [oe, W.value]
          ]),
          e.hasPagination && S.value > 0 ? (s(), d(ee, b({
            key: 0,
            class: "paging-box",
            layout: "total, sizes, prev, pager, next, jumper",
            background: "",
            small: ""
          }, e.pagingAttr, {
            "current-page": v[a.pageKey],
            "page-size": v[a.sizeKey],
            total: S.value,
            onSizeChange: G,
            onCurrentChange: H
          }), null, 16, ["current-page", "page-size", "total"])) : N("", !0)
        ]),
        r(te, {
          modelValue: i.visible,
          "onUpdate:modelValue": t[2] || (t[2] = (l) => i.visible = l),
          title: i.title,
          onClose: J
        }, be({
          default: o(() => [
            r(c, {
              ref_key: "dialogForm",
              ref: k,
              disabled: i.disabled,
              content: e.forms
            }, null, 8, ["disabled", "content"])
          ]),
          _: 2
        }, [
          i.disabled ? void 0 : {
            name: "footer",
            fn: o(() => [
              F("span", Te, [
                r(u, {
                  onClick: t[0] || (t[0] = (l) => i.visible = !1)
                }, {
                  default: o(() => [
                    f("取消")
                  ]),
                  _: 1
                }),
                r(u, {
                  type: "primary",
                  onClick: t[1] || (t[1] = (l) => Z())
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
  Ge as default
};

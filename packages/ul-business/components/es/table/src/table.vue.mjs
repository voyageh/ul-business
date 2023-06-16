import { defineComponent as U, useCssVars as Y, ref as y, reactive as K, resolveComponent as u, resolveDirective as Z, openBlock as c, createElementBlock as k, createVNode as i, withCtx as o, unref as w, createTextVNode as p, createCommentVNode as z, createElementVNode as C, withDirectives as ee, createBlock as g, mergeProps as V, Fragment as $, renderList as te, resolveDynamicComponent as le, normalizeProps as oe, renderSlot as ne, createSlots as ae, nextTick as ie } from "vue";
import { tableProps as se } from "./type.mjs";
import { Icon as P } from "@iconify/vue";
import { get as E } from "lodash";
const re = { class: "ul-table" }, ce = {
  key: 0,
  class: "ul-table__search"
}, de = { class: "ul-table__content" }, ue = { class: "table-head" }, pe = { class: "operate-box" }, me = { class: "dialog-footer" }, fe = U({ name: "UlTable" }), ye = /* @__PURE__ */ U({
  ...fe,
  props: se,
  setup(B) {
    const l = B;
    Y((e) => ({
      "2baa258c": e.pagingAlign
    }));
    const F = y(), L = y(!1), N = y([]), D = y(0), v = K({
      [l.pageKey]: 1,
      [l.sizeKey]: 10
    }), f = async () => {
      var e, t;
      if (l.getList) {
        const a = (t = (e = F.value) == null ? void 0 : e.getValue) == null ? void 0 : t.call(e), s = await l.getList({
          ...v,
          ...a
        }), m = l.dataPath || "data", d = l.totalPath || "total";
        N.value = E(s, m), D.value = E(s, d);
      }
    };
    l.immediate && f();
    const A = () => {
      var e, t, a;
      (a = (t = (e = F.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || a.call(t), f();
    }, O = (e) => {
      v[l.sizeKey] = e, f();
    }, j = (e) => {
      v[l.pageKey] = e, f();
    }, n = K({
      visible: !1,
      title: "",
      disabled: !1,
      saveType: ""
    }), b = y(), x = () => {
      var e, t, a;
      (a = (t = (e = b.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || a.call(t);
    }, I = () => {
      if (l.onNew) {
        l.onNew();
        return;
      }
      n.title = "新增", n.visible = !0, n.disabled = !1, n.saveType = "new";
    }, T = async (e) => {
      let t = e;
      l.getDetail && (t = await l.getDetail(e)), ie(() => {
        var a, s;
        (s = (a = b.value) == null ? void 0 : a.setValue) == null || s.call(a, t);
      });
    }, R = async (e) => {
      l.deleteSumbit && l.deleteSumbit(e);
    }, W = async (e) => {
      if (l.onEdit) {
        l.onEdit(e);
        return;
      }
      n.title = "编辑", n.visible = !0, n.disabled = !1, n.saveType = "edit", T(e);
    }, q = async (e) => {
      if (l.onView) {
        l.onView(e);
        return;
      }
      n.title = "查看", n.visible = !0, n.disabled = !0, T(e);
    }, G = async () => {
      var e, t, a;
      (a = (t = (e = b.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.validate) == null || a.call(t, async (s) => {
        var d, _;
        if (!s)
          return;
        let m = l.newSumbit;
        if (n.saveType === "edit" && (m = l.editSumbit), m) {
          const S = (_ = (d = b.value) == null ? void 0 : d.getValue) == null ? void 0 : _.call(d);
          await m(S), n.visible = !1, f();
        }
      });
    };
    return (e, t) => {
      const a = u("el-icon"), s = u("el-button"), m = u("el-form-item"), d = u("ul-form"), _ = u("el-table-column"), S = u("el-popconfirm"), H = u("el-table"), J = u("el-pagination"), M = u("el-dialog"), Q = Z("loading");
      return c(), k("div", re, [
        e.searchForms.length > 0 ? (c(), k("div", ce, [
          i(d, {
            ref_key: "searchForm",
            ref: F,
            content: e.searchForms,
            inline: ""
          }, {
            last: o(() => [
              i(m, null, {
                default: o(() => [
                  i(s, {
                    type: "primary",
                    onClick: f
                  }, {
                    icon: o(() => [
                      i(a, null, {
                        default: o(() => [
                          i(w(P), { icon: "ep:search" })
                        ]),
                        _: 1
                      })
                    ]),
                    default: o(() => [
                      p(" 查询 ")
                    ]),
                    _: 1
                  }),
                  i(s, { onClick: A }, {
                    icon: o(() => [
                      i(a, null, {
                        default: o(() => [
                          i(w(P), { icon: "ep:refresh" })
                        ]),
                        _: 1
                      })
                    ]),
                    default: o(() => [
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
        ])) : z("", !0),
        C("div", de, [
          C("div", ue, [
            i(s, {
              type: "primary",
              onClick: I
            }, {
              icon: o(() => [
                i(a, null, {
                  default: o(() => [
                    i(w(P), { icon: "ep:plus" })
                  ]),
                  _: 1
                })
              ]),
              default: o(() => [
                p(" 新增 ")
              ]),
              _: 1
            })
          ]),
          ee((c(), g(H, V({
            border: "",
            data: N.value,
            "element-loading-text": "正在努力加载..."
          }, e.$attrs), {
            default: o(() => [
              (c(!0), k($, null, te(e.columns, (r) => (c(), k($, null, [
                r.component ? (c(), g(_, {
                  key: 0,
                  label: r.label
                }, {
                  default: o(({ row: h }) => [
                    (c(), g(le(r.component), V({
                      modelValue: h[r.prop],
                      "onUpdate:modelValue": (X) => h[r.prop] = X
                    }, r.el), null, 16, ["modelValue", "onUpdate:modelValue"]))
                  ]),
                  _: 2
                }, 1032, ["label"])) : (c(), g(_, oe(V({ key: 1 }, r)), null, 16))
              ], 64))), 256)),
              e.hasOperateColumn && e.columns.length > 0 ? (c(), g(_, {
                key: 0,
                label: "操作",
                align: "center",
                width: e.opWidth,
                fixed: "right"
              }, {
                default: o(({ row: r }) => [
                  C("div", pe, [
                    i(s, {
                      link: "",
                      type: "primary",
                      onClick: (h) => q(r)
                    }, {
                      default: o(() => [
                        p("查看")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    i(s, {
                      link: "",
                      type: "primary",
                      onClick: (h) => W(r)
                    }, {
                      default: o(() => [
                        p("编辑")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    i(S, {
                      title: "确定要删除该数据吗?",
                      "confirm-button-type": "danger",
                      "confirm-button-text": "删除",
                      onClick: R
                    }, {
                      reference: o(() => [
                        i(s, {
                          link: "",
                          type: "danger"
                        }, {
                          default: o(() => [
                            p("删除")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    ne(e.$slots, "extraOp")
                  ])
                ]),
                _: 3
              }, 8, ["width"])) : z("", !0)
            ]),
            _: 3
          }, 16, ["data"])), [
            [Q, L.value]
          ]),
          e.hasPagination && D.value > 0 ? (c(), g(J, V({
            key: 0,
            class: "paging-box",
            layout: "total, sizes, prev, pager, next, jumper",
            background: "",
            small: ""
          }, e.pagingAttr, {
            "current-page": v[l.pageKey],
            "page-size": v[l.sizeKey],
            total: D.value,
            onSizeChange: O,
            onCurrentChange: j
          }), null, 16, ["current-page", "page-size", "total"])) : z("", !0)
        ]),
        i(M, {
          modelValue: n.visible,
          "onUpdate:modelValue": t[2] || (t[2] = (r) => n.visible = r),
          title: n.title,
          onClose: x
        }, ae({
          default: o(() => [
            i(d, {
              ref_key: "dialogForm",
              ref: b,
              disabled: n.disabled,
              content: e.forms
            }, null, 8, ["disabled", "content"])
          ]),
          _: 2
        }, [
          n.disabled ? void 0 : {
            name: "footer",
            fn: o(() => [
              C("span", me, [
                i(s, {
                  onClick: t[0] || (t[0] = (r) => n.visible = !1)
                }, {
                  default: o(() => [
                    p("取消")
                  ]),
                  _: 1
                }),
                i(s, {
                  type: "primary",
                  onClick: t[1] || (t[1] = (r) => G())
                }, {
                  default: o(() => [
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
  ye as default
};

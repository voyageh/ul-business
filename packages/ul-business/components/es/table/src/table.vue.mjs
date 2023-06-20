import { ElIcon as X, ElButton as Y, ElFormItem as Z, ElTableColumn as ee, ElPopconfirm as te, ElTable as le, ElPagination as oe, ElDialog as ne, ElLoadingDirective as ae } from "element-plus/es";
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
import { defineComponent as $, useCssVars as ie, ref as b, reactive as T, resolveComponent as se, openBlock as c, createElementBlock as h, createVNode as i, withCtx as o, unref as D, createTextVNode as u, createCommentVNode as S, createElementVNode as k, withDirectives as re, createBlock as _, mergeProps as C, Fragment as N, renderList as ce, resolveDynamicComponent as de, normalizeProps as ue, renderSlot as pe, createSlots as me, nextTick as fe } from "vue";
import { tableProps as _e } from "./type.mjs";
import { Icon as w } from "@iconify/vue";
import { get as K } from "lodash";
const ge = { class: "ul-table" }, ve = {
  key: 0,
  class: "ul-table__search"
}, be = { class: "ul-table__content" }, ye = { class: "table-head" }, he = { class: "operate-box" }, ke = { class: "dialog-footer" }, Ce = $({ name: "UlTable" }), Ie = /* @__PURE__ */ $({
  ...Ce,
  props: _e,
  setup(B) {
    const l = B;
    ie((e) => ({
      "2baa258c": e.pagingAlign
    }));
    const V = b(), L = b(!1), P = b([]), E = b(0), g = T({
      [l.pageKey]: 1,
      [l.sizeKey]: 10
    }), m = async () => {
      var e, t;
      if (l.getList) {
        const a = (t = (e = V.value) == null ? void 0 : e.getValue) == null ? void 0 : t.call(e), s = await l.getList({
          ...g,
          ...a
        }), p = l.dataPath || "data", d = l.totalPath || "total";
        P.value = K(s, p), E.value = K(s, d);
      }
    };
    l.immediate && m();
    const U = () => {
      var e, t, a;
      (a = (t = (e = V.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || a.call(t), m();
    }, I = (e) => {
      g[l.sizeKey] = e, m();
    }, A = (e) => {
      g[l.pageKey] = e, m();
    }, n = T({
      visible: !1,
      title: "",
      disabled: !1,
      saveType: ""
    }), v = b(), O = () => {
      var e, t, a;
      (a = (t = (e = v.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.resetFields) == null || a.call(t);
    }, j = () => {
      if (l.onNew) {
        l.onNew();
        return;
      }
      n.title = "新增", n.visible = !0, n.disabled = !1, n.saveType = "new";
    }, z = async (e) => {
      let t = e;
      l.getDetail && (t = await l.getDetail(e)), fe(() => {
        var a, s;
        (s = (a = v.value) == null ? void 0 : a.setValue) == null || s.call(a, t);
      });
    }, x = async (e) => {
      l.deleteSumbit && l.deleteSumbit(e);
    }, R = async (e) => {
      if (l.onEdit) {
        l.onEdit(e);
        return;
      }
      n.title = "编辑", n.visible = !0, n.disabled = !1, n.saveType = "edit", z(e);
    }, W = async (e) => {
      if (l.onView) {
        l.onView(e);
        return;
      }
      n.title = "查看", n.visible = !0, n.disabled = !0, z(e);
    }, q = async () => {
      var e, t, a;
      (a = (t = (e = v.value) == null ? void 0 : e.elFrom) == null ? void 0 : t.validate) == null || a.call(t, async (s) => {
        var d, f;
        if (!s)
          return;
        let p = l.newSumbit;
        if (n.saveType === "edit" && (p = l.editSumbit), p) {
          const F = (f = (d = v.value) == null ? void 0 : d.getValue) == null ? void 0 : f.call(d);
          await p(F), n.visible = !1, m();
        }
      });
    };
    return (e, t) => {
      const a = X, s = Y, p = Z, d = se("ul-form"), f = ee, F = te, G = le, H = oe, J = ne, M = ae;
      return c(), h("div", ge, [
        e.searchForms.length > 0 ? (c(), h("div", ve, [
          i(d, {
            ref_key: "searchForm",
            ref: V,
            content: e.searchForms,
            inline: ""
          }, {
            last: o(() => [
              i(p, null, {
                default: o(() => [
                  i(s, {
                    type: "primary",
                    onClick: m
                  }, {
                    icon: o(() => [
                      i(a, null, {
                        default: o(() => [
                          i(D(w), { icon: "ep:search" })
                        ]),
                        _: 1
                      })
                    ]),
                    default: o(() => [
                      u(" 查询 ")
                    ]),
                    _: 1
                  }),
                  i(s, { onClick: U }, {
                    icon: o(() => [
                      i(a, null, {
                        default: o(() => [
                          i(D(w), { icon: "ep:refresh" })
                        ]),
                        _: 1
                      })
                    ]),
                    default: o(() => [
                      u(" 重置 ")
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
        k("div", be, [
          k("div", ye, [
            i(s, {
              type: "primary",
              onClick: j
            }, {
              icon: o(() => [
                i(a, null, {
                  default: o(() => [
                    i(D(w), { icon: "ep:plus" })
                  ]),
                  _: 1
                })
              ]),
              default: o(() => [
                u(" 新增 ")
              ]),
              _: 1
            })
          ]),
          re((c(), _(G, C({
            border: "",
            data: P.value,
            "element-loading-text": "正在努力加载..."
          }, e.$attrs), {
            default: o(() => [
              (c(!0), h(N, null, ce(e.columns, (r) => (c(), h(N, null, [
                r.component ? (c(), _(f, {
                  key: 0,
                  label: r.label
                }, {
                  default: o(({ row: y }) => [
                    (c(), _(de(r.component), C({
                      modelValue: y[r.prop],
                      "onUpdate:modelValue": (Q) => y[r.prop] = Q
                    }, r.el), null, 16, ["modelValue", "onUpdate:modelValue"]))
                  ]),
                  _: 2
                }, 1032, ["label"])) : (c(), _(f, ue(C({ key: 1 }, r)), null, 16))
              ], 64))), 256)),
              e.hasOperateColumn && e.columns.length > 0 ? (c(), _(f, {
                key: 0,
                label: "操作",
                align: "center",
                width: e.opWidth,
                fixed: "right"
              }, {
                default: o(({ row: r }) => [
                  k("div", he, [
                    i(s, {
                      link: "",
                      type: "primary",
                      onClick: (y) => W(r)
                    }, {
                      default: o(() => [
                        u("查看")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    i(s, {
                      link: "",
                      type: "primary",
                      onClick: (y) => R(r)
                    }, {
                      default: o(() => [
                        u("编辑")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    i(F, {
                      title: "确定要删除该数据吗?",
                      "confirm-button-type": "danger",
                      "confirm-button-text": "删除",
                      onClick: x
                    }, {
                      reference: o(() => [
                        i(s, {
                          link: "",
                          type: "danger"
                        }, {
                          default: o(() => [
                            u("删除")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    pe(e.$slots, "extraOp")
                  ])
                ]),
                _: 3
              }, 8, ["width"])) : S("", !0)
            ]),
            _: 3
          }, 16, ["data"])), [
            [M, L.value]
          ]),
          e.hasPagination && E.value > 0 ? (c(), _(H, C({
            key: 0,
            class: "paging-box",
            layout: "total, sizes, prev, pager, next, jumper",
            background: "",
            small: ""
          }, e.pagingAttr, {
            "current-page": g[l.pageKey],
            "page-size": g[l.sizeKey],
            total: E.value,
            onSizeChange: I,
            onCurrentChange: A
          }), null, 16, ["current-page", "page-size", "total"])) : S("", !0)
        ]),
        i(J, {
          modelValue: n.visible,
          "onUpdate:modelValue": t[2] || (t[2] = (r) => n.visible = r),
          title: n.title,
          onClose: O
        }, me({
          default: o(() => [
            i(d, {
              ref_key: "dialogForm",
              ref: v,
              disabled: n.disabled,
              content: e.forms
            }, null, 8, ["disabled", "content"])
          ]),
          _: 2
        }, [
          n.disabled ? void 0 : {
            name: "footer",
            fn: o(() => [
              k("span", ke, [
                i(s, {
                  onClick: t[0] || (t[0] = (r) => n.visible = !1)
                }, {
                  default: o(() => [
                    u("取消")
                  ]),
                  _: 1
                }),
                i(s, {
                  type: "primary",
                  onClick: t[1] || (t[1] = (r) => q())
                }, {
                  default: o(() => [
                    u(" 保存 ")
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
  Ie as default
};

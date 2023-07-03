"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("element-plus/es");require("element-plus/es/components/base/style/css");require("element-plus/es/components/loading/style/css");require("element-plus/es/components/dialog/style/css");require("element-plus/es/components/pagination/style/css");require("element-plus/es/components/table/style/css");require("element-plus/es/components/popconfirm/style/css");require("element-plus/es/components/table-column/style/css");require("element-plus/es/components/form-item/style/css");require("element-plus/es/components/button/style/css");require("element-plus/es/components/icon/style/css");const e=require("vue"),R=require("./type.js"),N=require("@iconify/vue"),P=require("lodash"),W=require("element-plus/es/components/table/src/table/defaults"),G={class:"ul-table"},H={key:0,class:"ul-table__search"},J={class:"ul-table__content"},Q={class:"table-head"},X={key:1},Y={key:1},Z={key:1},ee={class:"operate-box"},te={class:"dialog-footer"},oe=e.defineComponent({name:"UlTable",__name:"table",props:R.tableProps,setup(D){const a=D;e.useCssVars(t=>({ac10425c:t.opWidth,c7bada74:t.pagingAlign}));const u=e.inject("table",{sizeKey:"pageSize",pageKey:"pageNo",dataPath:"data",totalPath:"total"}),_=a.pageKey??u.pageKey,h=a.sizeKey??u.sizeKey,C=e.ref(),V=e.ref(!1),x=e.ref([]),b=e.ref(0),k=e.reactive({[_]:1,[h]:10}),T=t=>{const o={};return Object.keys(W).forEach(n=>{t[n]&&(o[n]=t[n])}),o},v=t=>{const{label:o,component:n,el:i,children:p,...s}=t;return s},f=async()=>{var t,o;if(a.getList){V.value=!0;const n=(o=(t=C.value)==null?void 0:t.getValue)==null?void 0:o.call(t),i=await a.getList({...k,...n}),p=a.dataPath??(u==null?void 0:u.dataPath),s=a.totalPath??(u==null?void 0:u.totalPath);x.value=P.get(i,p),b.value=P.get(i,s),V.value=!1}};a.immediate&&f();const S=()=>{var t,o,n;(n=(o=(t=C.value)==null?void 0:t.elFrom)==null?void 0:o.resetFields)==null||n.call(o),f()},F=t=>{k[h]=t,f()},q=t=>{k[_]=t,f()},r=e.reactive({visible:!1,title:"",disabled:!1,saveType:""}),g=e.ref(),z=()=>{var t,o,n;(n=(o=(t=g.value)==null?void 0:t.elFrom)==null?void 0:o.resetFields)==null||n.call(o)},K=()=>{if(a.onNew){a.onNew();return}r.title="新增",r.visible=!0,r.disabled=!1,r.saveType="new"},w=async t=>{let o=t;a.getDetail&&(o=await a.getDetail(t)),e.nextTick(()=>{var n,i;(i=(n=g.value)==null?void 0:n.setValue)==null||i.call(n,o)})},$=async t=>{a.deleteSumbit&&a.deleteSumbit(t)},U=async t=>{if(a.onEdit){a.onEdit(t);return}r.title="编辑",r.visible=!0,r.disabled=!1,r.saveType="edit",w(t)},I=async t=>{if(a.onView){a.onView(t);return}r.title="查看",r.visible=!0,r.disabled=!0,w(t)},L=async()=>{var t,o,n;(n=(o=(t=g.value)==null?void 0:t.elFrom)==null?void 0:o.validate)==null||n.call(o,async i=>{var s,m;if(!i)return;let p=a.newSumbit;if(r.saveType==="edit"&&(p=a.editSumbit),p){const B=(m=(s=g.value)==null?void 0:s.getValue)==null?void 0:m.call(s);await p(B)!==!1&&(r.visible=!1,f())}})};return(t,o)=>{const n=d.ElIcon,i=d.ElButton,p=d.ElFormItem,s=e.resolveComponent("ul-form"),m=d.ElTableColumn,B=d.ElPopconfirm,E=d.ElTable,O=d.ElPagination,j=d.ElDialog,A=d.ElLoadingDirective;return e.openBlock(),e.createElementBlock("div",G,[t.searchForms.length>0?(e.openBlock(),e.createElementBlock("div",H,[e.createVNode(s,{ref_key:"searchForm",ref:C,content:t.searchForms,inline:""},{final:e.withCtx(()=>[e.createVNode(p,null,{default:e.withCtx(()=>[e.createVNode(i,{type:"primary",onClick:f},{icon:e.withCtx(()=>[e.createVNode(n,null,{default:e.withCtx(()=>[e.createVNode(e.unref(N.Icon),{icon:"ep:search"})]),_:1})]),default:e.withCtx(()=>[e.createTextVNode(" 查询 ")]),_:1}),e.createVNode(i,{onClick:S},{icon:e.withCtx(()=>[e.createVNode(n,null,{default:e.withCtx(()=>[e.createVNode(e.unref(N.Icon),{icon:"ep:refresh"})]),_:1})]),default:e.withCtx(()=>[e.createTextVNode(" 重置 ")]),_:1})]),_:1})]),_:1},8,["content"])])):e.createCommentVNode("",!0),e.createElementVNode("div",J,[e.createElementVNode("div",Q,[e.createVNode(i,{type:"primary",onClick:K},{icon:e.withCtx(()=>[e.createVNode(n,null,{default:e.withCtx(()=>[e.createVNode(e.unref(N.Icon),{icon:"ep:plus"})]),_:1})]),default:e.withCtx(()=>[e.createTextVNode(" 新增 ")]),_:1}),e.renderSlot(t.$slots,"head")]),e.withDirectives((e.openBlock(),e.createBlock(E,e.mergeProps({border:""},T(t.$props),{data:x.value,"element-loading-text":"正在努力加载..."}),{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.columns,l=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[l.children?(e.openBlock(),e.createBlock(m,e.normalizeProps(e.mergeProps({key:0},v(l))),{header:e.withCtx(()=>[l.label&&typeof l.label=="function"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(l.label()),{key:0})):(e.openBlock(),e.createElementBlock("span",X,e.toDisplayString(l.label),1))]),default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.children,c=>(e.openBlock(),e.createBlock(m,e.mergeProps({key:c.prop},v(c)),{header:e.withCtx(()=>[c.label&&typeof c.label=="function"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(c.label()),{key:0})):(e.openBlock(),e.createElementBlock("span",Y,e.toDisplayString(c.label),1))]),default:e.withCtx(({row:y})=>[c.component?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(c.component),e.mergeProps({key:0,modelValue:y[c.prop],"onUpdate:modelValue":M=>y[c.prop]=M},c.el),null,16,["modelValue","onUpdate:modelValue"])):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(y[c.prop]),1)],64))]),_:2},1040))),128))]),_:2},1040)):(e.openBlock(),e.createBlock(m,e.normalizeProps(e.mergeProps({key:1},v(l))),{header:e.withCtx(()=>[l.label&&typeof l.label=="function"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(l.label()),{key:0})):(e.openBlock(),e.createElementBlock("span",Z,e.toDisplayString(l.label),1))]),default:e.withCtx(({row:c})=>[l.component?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(l.component),e.mergeProps({key:0,modelValue:c[l.prop],"onUpdate:modelValue":y=>c[l.prop]=y},l.el),null,16,["modelValue","onUpdate:modelValue"])):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(c[l.prop]),1)],64))]),_:2},1040))],64))),256)),t.hasOperateColumn&&t.columns.length>0?(e.openBlock(),e.createBlock(m,{key:0,label:"操作",align:"center",fixed:"right"},{default:e.withCtx(({row:l})=>[e.createElementVNode("div",ee,[e.createVNode(i,{link:"",type:"primary",onClick:c=>I(l)},{default:e.withCtx(()=>[e.createTextVNode("查看")]),_:2},1032,["onClick"]),e.createVNode(i,{link:"",type:"primary",onClick:c=>U(l)},{default:e.withCtx(()=>[e.createTextVNode("编辑")]),_:2},1032,["onClick"]),e.createVNode(B,{title:"确定要删除该数据吗?","confirm-button-type":"danger","confirm-button-text":"删除",onConfirm:$},{reference:e.withCtx(()=>[e.createVNode(i,{link:"",type:"danger"},{default:e.withCtx(()=>[e.createTextVNode("删除")]),_:1})]),_:1}),e.renderSlot(t.$slots,"extraOp")])]),_:3})):e.createCommentVNode("",!0)]),_:3},16,["data"])),[[A,V.value]]),t.hasPagination&&b.value>0?(e.openBlock(),e.createBlock(O,e.mergeProps({key:0,class:"paging-box",layout:"total, sizes, prev, pager, next, jumper",background:"",small:""},t.pagingAttr,{"current-page":k[e.unref(_)],"page-size":k[e.unref(h)],total:b.value,onSizeChange:F,onCurrentChange:q}),null,16,["current-page","page-size","total"])):e.createCommentVNode("",!0)]),e.createVNode(j,{modelValue:r.visible,"onUpdate:modelValue":o[2]||(o[2]=l=>r.visible=l),title:r.title,onClose:z},e.createSlots({default:e.withCtx(()=>[e.createVNode(s,{ref_key:"dialogForm",ref:g,disabled:r.disabled,content:t.forms},null,8,["disabled","content"])]),_:2},[r.disabled?void 0:{name:"footer",fn:e.withCtx(()=>[e.createElementVNode("span",te,[e.createVNode(i,{onClick:o[0]||(o[0]=l=>r.visible=!1)},{default:e.withCtx(()=>[e.createTextVNode("取消")]),_:1}),e.createVNode(i,{type:"primary",onClick:o[1]||(o[1]=l=>L())},{default:e.withCtx(()=>[e.createTextVNode(" 保存 ")]),_:1})])]),key:"0"}]),1032,["modelValue","title"])])}}});exports.default=oe;
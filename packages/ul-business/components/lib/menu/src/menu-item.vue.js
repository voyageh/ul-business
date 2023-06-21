"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("element-plus/es");require("element-plus/es/components/base/style/css");require("element-plus/es/components/menu-item/style/css");require("element-plus/es/components/sub-menu/style/css");require("element-plus/es/components/icon/style/css");const e=require("vue"),p=require("./types/menu-item.js"),l=require("@iconify/vue"),_=e.defineComponent({name:"ul-menu-item",__name:"menu-item",props:p.default,setup(i){const u=i,t=e.computed(()=>u.parent+u.menu.path);return(n,h)=>{const r=o.ElIcon,c=e.resolveComponent("menu-item",!0),m=o.ElSubMenu,a=o.ElMenuItem;return n.menu.children&&n.menu.children.length>0?(e.openBlock(),e.createBlock(m,{key:0,index:t.value},{title:e.withCtx(()=>[e.createVNode(r,{size:20},{default:e.withCtx(()=>[e.createVNode(e.unref(l.Icon),{icon:n.menu.meta.icon},null,8,["icon"])]),_:1}),e.createElementVNode("span",null,e.toDisplayString(n.menu.name),1)]),default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.menu.children,(s,d)=>(e.openBlock(),e.createBlock(c,{key:d,menu:s,parent:t.value},null,8,["menu","parent"]))),128))]),_:1},8,["index"])):(e.openBlock(),e.createBlock(a,{key:1,index:t.value,id:t.value},{default:e.withCtx(()=>[e.createVNode(r,{size:20},{default:e.withCtx(()=>[e.createVNode(e.unref(l.Icon),{icon:n.menu.meta.icon},null,8,["icon"])]),_:1}),e.createTextVNode(" "+e.toDisplayString(n.menu.name),1)]),_:1},8,["index","id"]))}}});exports.default=_;
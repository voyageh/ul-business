"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("element-plus/es");require("element-plus/es/components/base/style/css");require("element-plus/es/components/menu-item/style/css");require("element-plus/es/components/sub-menu/style/css");require("element-plus/es/components/icon/style/css");const e=require("vue"),p=require("./types/menu-item.js"),i=require("@iconify/vue"),_=e.defineComponent({name:"ul-menu-item"}),f=e.defineComponent({..._,props:p.default,setup(c){const u=c,t=e.computed(()=>u.parent+u.menu.path);return(n,h)=>{const r=o.ElIcon,l=e.resolveComponent("menu-item",!0),m=o.ElSubMenu,a=o.ElMenuItem;return n.menu.children&&n.menu.children.length>0?(e.openBlock(),e.createBlock(m,{key:0,index:e.unref(t)},{title:e.withCtx(()=>[e.createVNode(r,{size:20},{default:e.withCtx(()=>[e.createVNode(e.unref(i.Icon),{icon:n.menu.meta.icon},null,8,["icon"])]),_:1}),e.createElementVNode("span",null,e.toDisplayString(n.menu.name),1)]),default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.menu.children,(d,s)=>(e.openBlock(),e.createBlock(l,{key:s,menu:d,parent:e.unref(t)},null,8,["menu","parent"]))),128))]),_:1},8,["index"])):(e.openBlock(),e.createBlock(a,{key:1,index:e.unref(t),id:e.unref(t)},{default:e.withCtx(()=>[e.createVNode(r,{size:20},{default:e.withCtx(()=>[e.createVNode(e.unref(i.Icon),{icon:n.menu.meta.icon},null,8,["icon"])]),_:1}),e.createTextVNode(" "+e.toDisplayString(n.menu.name),1)]),_:1},8,["index","id"]))}}});exports.default=f;

"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("element-plus/es");require("element-plus/es/components/base/style/css");require("element-plus/es/components/menu/style/css");const e=require("vue"),m=require("./types/menu.js"),i=e.defineComponent({name:"ul-menu"}),_=e.defineComponent({...i,props:m.default,setup(o){const t=o,r=e.computed(()=>({"--selected-bg-color":t.selectBgColor,"--menu-item-width":t.width}));return(u,a)=>{const l=e.resolveComponent("ul-menu-item"),c=s.ElMenu;return e.openBlock(),e.createBlock(c,e.mergeProps({class:"ul-menu"},t,{style:e.unref(r)}),{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(u.menus,n=>(e.openBlock(),e.createBlock(l,{key:n.id,menu:n},null,8,["menu"]))),128))]),_:1},16,["style"])}}});exports.default=_;

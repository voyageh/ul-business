import{a2 as o,_ as m,D as i,o as E,c as h,G as A,B as n,z as t,a as s,O as f}from"./chunks/framework.973da988.js";const{defineComponent:b}=o,_=b({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,openBlock:r,createBlock:u}=o;function c(D,d){const y=a("ul-form");return r(),u(y,{content:D.content},null,8,["content"])}const{defineComponent:F}=o,{ref:l}=o,{IFormItem:e}="ul-business";return{render:c,...F({setup(D,{expose:d}){d();const C={content:l([{id:"username",label:"用户名:",type:"el-input",rules:{required:!0,trigger:"blur",message:"请输入用户名"}},{id:"password",label:"密码:",type:"el-input",el:{type:"password"}}]),ref:l,IFormItem:e};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}})}}()}}),P=JSON.parse('{"title":"Form 表单","description":"","frontmatter":{},"headers":[],"relativePath":"component/form.md","filePath":"component/form.md"}'),B=t("h1",{id:"form-表单",tabindex:"-1"},[s("Form 表单 "),t("a",{class:"header-anchor",href:"#form-表单","aria-label":'Permalink to "Form 表单"'},"​")],-1),g=t("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),I=t("div",null,[s("使用 "),t("code",null,"size"),s("、"),t("code",null,"style"),s(" 属性来定义 Card 的样式。")],-1),v=t("div",{class:"language-vue"},[t("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"template"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"ul-form"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},":content"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"content"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},"></"),t("span",{style:{color:"#F07178"}},"ul-form"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"template"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"script"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#C792EA"}},"setup"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#C792EA"}},"lang"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"ts"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#A6ACCD"}},"ref"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"}"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"vue"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},";")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#A6ACCD"}},"IFormItem"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"}"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"ul-business"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},";")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#A6ACCD"}}," content "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#82AAFF"}},"ref"),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#FFCB6B"}},"IFormItem"),t("span",{style:{color:"#A6ACCD"}},"[]"),t("span",{style:{color:"#89DDFF"}},">"),t("span",{style:{color:"#A6ACCD"}},"([")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#F07178"}},"id"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"username"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#F07178"}},"label"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"用户名:"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#F07178"}},"type"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"el-input"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#F07178"}},"rules"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"      "),t("span",{style:{color:"#F07178"}},"required"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#FF9CAC"}},"true"),t("span",{style:{color:"#89DDFF"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"      "),t("span",{style:{color:"#F07178"}},"trigger"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"blur"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"      "),t("span",{style:{color:"#F07178"}},"message"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"请输入用户名"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#F07178"}},"id"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"password"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#F07178"}},"label"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"密码:"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#F07178"}},"type"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"el-input"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#F07178"}},"el"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"      "),t("span",{style:{color:"#F07178"}},"type"),t("span",{style:{color:"#89DDFF"}},":"),t("span",{style:{color:"#A6ACCD"}}," "),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"password"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}},",")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"    "),t("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"  "),t("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#A6ACCD"}},"])"),t("span",{style:{color:"#89DDFF"}},";")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"script"),t("span",{style:{color:"#89DDFF"}},">")])])])],-1),k=f('<h2 id="form-属性" tabindex="-1">Form 属性 <a class="header-anchor" href="#form-属性" aria-label="Permalink to &quot;Form 属性&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>具有 el-form 所有属性</p></div><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>labelWidth</td><td>菜单列表</td><td>string / number</td><td></td><td>&#39;auto&#39;</td></tr><tr><td>content</td><td>表单项的数组</td><td>IFormItem[]</td><td></td><td>[]</td></tr><tr><td>model-value / v-model</td><td>表单绑定的值（非必填）</td><td>object</td><td></td><td></td></tr></tbody></table><h2 id="iformitem-属性" tabindex="-1">IFormItem 属性 <a class="header-anchor" href="#iformitem-属性" aria-label="Permalink to &quot;IFormItem 属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>id</td><td>菜单列表</td><td>string/number</td><td></td><td>&#39;auto&#39;</td></tr><tr><td>label</td><td>表单项的数组</td><td>IFormItem[]</td><td></td><td></td></tr><tr><td>type</td><td>表单项类型，可以是全局组件或者为 row，为 row 配合 items 使用</td><td>string</td><td></td><td></td></tr><tr><td>component</td><td>表单项组件，可以是全局组件名称的字符串，也可以是 object</td><td>string/object</td><td></td><td></td></tr><tr><td>default</td><td>默认值，优先级低于 model-value</td><td>object</td><td></td><td></td></tr><tr><td>hide</td><td>表单项目是否显示，可以是布尔类型，也可以是个方法</td><td>boolean/function</td><td></td><td></td></tr><tr><td>str</td><td>当 disabled 为真，需要的 key，不传显示 id</td><td>string</td><td></td><td></td></tr><tr><td>forceDisabled</td><td>当 disabled 为真，是否显示原组件，否则会转成 span 显示</td><td>boolean</td><td></td><td></td></tr><tr><td>el</td><td>传给组件的属性</td><td>object</td><td></td><td></td></tr><tr><td>items</td><td>type=row 时使用</td><td>IFormItem[]</td><td></td><td></td></tr><tr><td>span</td><td>el-col 的 span</td><td>number</td><td></td><td></td></tr></tbody></table>',5);function x(a,r,u,c,F,l){const e=i("render-demo-0"),p=i("demo");return E(),h("div",null,[B,g,A(p,{customClass:"undefined",sourceCode:`<template>
  <ul-form :content="content"></ul-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IFormItem } from "ul-business";

const content = ref<IFormItem[]>([
  {
    id: "username",
    label: "用户名:",
    type: "el-input",
    rules: {
      required: true,
      trigger: "blur",
      message: "请输入用户名",
    },
  },
  {
    id: "password",
    label: "密码:",
    type: "el-input",
    el: {
      type: "password",
    },
  },
]);
<\/script>
`},{description:n(()=>[I]),highlight:n(()=>[v]),default:n(()=>[A(e)]),_:1}),k])}const q=m(_,[["render",x]]);export{P as __pageData,q as default};
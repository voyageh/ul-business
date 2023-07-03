import{_ as s,c as a,o as n,O as l}from"./chunks/framework.285fac2e.js";const D=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}'),p={name:"guide/index.md"},e=l(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="使用包管理器" tabindex="-1">使用包管理器 <a class="header-anchor" href="#使用包管理器" aria-label="Permalink to &quot;使用包管理器&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-atiFA" id="tab-l1MhwSK" checked="checked"><label for="tab-l1MhwSK">npm</label><input type="radio" name="group-atiFA" id="tab--YHeB5j"><label for="tab--YHeB5j">pnpm</label><input type="radio" name="group-atiFA" id="tab-L-7cZ1m"><label for="tab-L-7cZ1m">yarn</label></div><div class="blocks"><div class="language-sh active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ul-business</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ul-business</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ul-business</span></span></code></pre></div></div></div><h2 id="使用模版" tabindex="-1">使用模版 <a class="header-anchor" href="#使用模版" aria-label="Permalink to &quot;使用模版&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-iV0cX" id="tab-yGeW7rL" checked="checked"><label for="tab-yGeW7rL">npm</label></div><div class="blocks"><div class="language-sh active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">degit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zephyr-66/vue3-back</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">project-nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="文件目录" tabindex="-1">文件目录 <a class="header-anchor" href="#文件目录" aria-label="Permalink to &quot;文件目录&quot;">​</a></h4></div></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├── env #环境变量</span></span>
<span class="line"><span style="color:#A6ACCD;">├── index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">├── public</span></span>
<span class="line"><span style="color:#A6ACCD;">├── src</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── App.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── api  #接口</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── assets</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── global.scss   #全局样式</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── auto-components.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── auto-imports.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── components  #组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── base-layout.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── select</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── composables</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── useRequest.ts #请求函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pages  #页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── [...all].vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── index</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── index.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── curd.ts  #curd插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── http.ts  #axios插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── nprogress.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── rem.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── router  #路由</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── premission.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── store  #pinia</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── account.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── style.css</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── types  #类型定义</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── account.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── utils</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── index.ts  #工具函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── vite-env.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├── tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── tsconfig.node.json</span></span>
<span class="line"><span style="color:#A6ACCD;">└── vite.config.ts</span></span></code></pre></div>`,6),o=[e];function t(c,i,r,C,A,y){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{D as __pageData,u as default};

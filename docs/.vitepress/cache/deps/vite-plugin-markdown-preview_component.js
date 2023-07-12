import {
  createVNode,
  defineComponent,
  getCurrentInstance
} from "./chunk-SJ4LJHAM.js";

// node_modules/.pnpm/vite-plugin-markdown-preview@1.0.4/node_modules/vite-plugin-markdown-preview/component/index.js
import CodePreview from "/Users/zlf/Documents/ul-business/node_modules/.pnpm/vite-plugin-markdown-preview@1.0.4/node_modules/vite-plugin-markdown-preview/component/CodePreview.vue";
var MarkdownPreview = defineComponent({
  name: "MarkdownPreview",
  props: {
    code: { type: String, required: true },
    lang: { type: String, required: true },
    meta: { type: String, default: "" },
    component: { type: String, default: "CodePreview" }
  },
  setup(props, ctx) {
    const instance = getCurrentInstance();
    const Component = instance.appContext.app.component(props.component);
    const DemoBlock = Component ? Component : CodePreview;
    return () => createVNode(
      DemoBlock,
      {
        code: decodeURIComponent(props.code),
        lang: decodeURIComponent(props.lang),
        meta: decodeURIComponent(props.meta)
      },
      {
        default: ctx.slots.default,
        code: ctx.slots.code
      }
    );
  }
});
var component_default = MarkdownPreview;
export {
  component_default as default
};
//# sourceMappingURL=vite-plugin-markdown-preview_component.js.map

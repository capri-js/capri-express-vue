import { useSSRContext, resolveComponent, defineComponent, withAsyncContext, unref, withCtx, createTextVNode, ref, mergeProps, onMounted, createVNode, createSSRApp } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderSuspense, ssrRenderSlot, renderToString } from "vue/server-renderer";
import { createMemoryHistory, createRouter as createRouter$1 } from "vue-router";
const global = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AsyncData",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    function fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => resolve("loaded"), 500);
      });
    }
    const data = ([__temp, __restore] = withAsyncContext(() => fetchData()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(_attrs)}>${ssrInterpolate(unref(data))}</span>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/AsyncData.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(_attrs)}><h1>This page is completely static.</h1><section> An since it does not contain any interactive islands, no JavaScript is shipped to the browser. Async data: `);
      ssrRenderSuspense(_push, {
        fallback: () => {
          _push(`<span>Loading...</span>`);
        },
        default: () => {
          _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
        },
        _: 1
      });
      _push(`</section>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/About.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Counter.island",
  __ssrInlineRender: true,
  props: {
    start: null
  },
  setup(__props) {
    const { start = 0 } = __props;
    const count = ref(start);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ "data-testid": "counter" }, _attrs))} data-v-acb7c5e3><button data-v-acb7c5e3>-</button><span data-v-acb7c5e3>${ssrInterpolate(count.value)}</span><button data-v-acb7c5e3>+</button></div>`);
    };
  }
});
const Counter_island_vue_vue_type_style_index_0_scoped_acb7c5e3_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/Counter.island.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Counter_island_vue_unwrapped_Counter_island = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-acb7c5e3"]]);
const componentModule$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Counter_island_vue_unwrapped_Counter_island
}, Symbol.toStringTag, { value: "Module" }));
const { default: component$2, options: options$3 } = componentModule$2;
const __sfc__$3 = {
  __name: "Island",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const slots = Object.fromEntries(Object.entries(_ctx.$slots).map(([name, fn]) => [
        name,
        withCtx((_, _push2, _parent2, _scopeId) => {
          _push2(`<capri-slot style="display:contents" name="${name}">`);
          ssrRenderSlot(_ctx.$slots, name, {}, null, _push2, _parent2, _scopeId);
          _push2(`</capri-slot>`);
        })
      ]));
      _push(`<capri-island>`);
      _push(ssrRenderComponent(component$2, _attrs, slots, _parent));
      _push(`<script type="application/json" data-island="/src/Counter.island.vue">${JSON.stringify({ props: _attrs, options: options$3 })}<\/script>`);
      _push(`</capri-island>`);
    };
  }
};
__sfc__$3.__file = "/src/Counter.island.vue";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StaticContent.lagoon",
  __ssrInlineRender: true,
  setup(__props) {
    console.log(
      "Rendering StaticContent. This should only happen during build or in SPA mode."
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "box" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`This is static content inside an island. We call this a lagoon.`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/StaticContent.lagoon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __sfc__$2 = {
  __name: "Lagoon",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<capri-lagoon style="display:contents">`);
      _push(ssrRenderComponent(_sfc_main$4, _attrs, _ctx.$slots, _parent));
      _push(`</capri-lagoon>`);
    };
  }
};
__sfc__$2.__file = "/src/StaticContent.lagoon.vue";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Expandable.island",
  __ssrInlineRender: true,
  setup(__props) {
    const expanded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "box",
        "data-expanded": expanded.value
      }, _attrs))} data-v-74c689c6>`);
      _push(ssrRenderComponent(__sfc__$2, null, null, _parent));
      _push(`<button data-v-74c689c6>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push(`Title`);
      }, _push, _parent);
      _push(`</button><div class="expandable-content" data-v-74c689c6>`);
      _push(ssrRenderComponent(__sfc__$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` This a second lagoon. Below you see the body slot that was passed to the Expandable island: `);
          } else {
            return [
              createTextVNode(" This a second lagoon. Below you see the body slot that was passed to the Expandable island: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "body", {}, () => {
        _push(`Body`);
      }, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const Expandable_island_vue_vue_type_style_index_0_scoped_74c689c6_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/Expandable.island.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Expandable_island_vue_unwrapped_Expandable_island = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-74c689c6"]]);
const componentModule$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Expandable_island_vue_unwrapped_Expandable_island
}, Symbol.toStringTag, { value: "Module" }));
const { default: component$1, options: options$2 } = componentModule$1;
const __sfc__$1 = {
  __name: "Island",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const slots = Object.fromEntries(Object.entries(_ctx.$slots).map(([name, fn]) => [
        name,
        withCtx((_, _push2, _parent2, _scopeId) => {
          _push2(`<capri-slot style="display:contents" name="${name}">`);
          ssrRenderSlot(_ctx.$slots, name, {}, null, _push2, _parent2, _scopeId);
          _push2(`</capri-slot>`);
        })
      ]));
      _push(`<capri-island>`);
      _push(ssrRenderComponent(component$1, _attrs, slots, _parent));
      _push(`<script type="application/json" data-island="/src/Expandable.island.vue">${JSON.stringify({ props: _attrs, options: options$2 })}<\/script>`);
      _push(`</capri-island>`);
    };
  }
};
__sfc__$1.__file = "/src/Expandable.island.vue";
const options$1 = {
  media: "(max-width:500px)"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MediaQuery.island",
  __ssrInlineRender: true,
  setup(__props) {
    const content = ref("Resize your browser below 500px to hydrate this island.");
    onMounted(() => {
      content.value = "The island has been hydrated.";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "box" }, _attrs))}>${ssrInterpolate(content.value)}</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/MediaQuery.island.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const componentModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2,
  options: options$1
}, Symbol.toStringTag, { value: "Module" }));
const { default: component, options } = componentModule;
const __sfc__ = {
  __name: "Island",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const slots = Object.fromEntries(Object.entries(_ctx.$slots).map(([name, fn]) => [
        name,
        withCtx((_, _push2, _parent2, _scopeId) => {
          _push2(`<capri-slot style="display:contents" name="${name}">`);
          ssrRenderSlot(_ctx.$slots, name, {}, null, _push2, _parent2, _scopeId);
          _push2(`</capri-slot>`);
        })
      ]));
      _push(`<capri-island>`);
      _push(ssrRenderComponent(component, _attrs, slots, _parent));
      _push(`<script type="application/json" data-island="/src/MediaQuery.island.vue">${JSON.stringify({ props: _attrs, options })}<\/script>`);
      _push(`</capri-island>`);
    };
  }
};
__sfc__.__file = "/src/MediaQuery.island.vue";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ServerContent",
  __ssrInlineRender: true,
  setup(__props) {
    console.log(
      "Rendering ServerContent. This should only happen during build or in SPA mode."
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "box" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`Empty`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/ServerContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(_attrs)}><h1>Partial hydration with Vue and <i>Capri</i></h1><section>This page is static, but contains some dynamic parts.</section><section>Here is a simple counter: `);
      _push(ssrRenderComponent(__sfc__$3, null, null, _parent));
      _push(`</section><section> And here is another one, independent from the one above: `);
      _push(ssrRenderComponent(__sfc__$3, { start: 100 }, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(__sfc__$1, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Click to expand`);
          } else {
            return [
              createTextVNode("Click to expand")
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` The code for <code${_scopeId2}>ServerContent</code> won&#39;t show up in the client bundle. `);
                } else {
                  return [
                    createTextVNode(" The code for "),
                    createVNode("code", null, "ServerContent"),
                    createTextVNode(" won't show up in the client bundle. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, null, {
                default: withCtx(() => [
                  createTextVNode(" The code for "),
                  createVNode("code", null, "ServerContent"),
                  createTextVNode(" won't show up in the client bundle. ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(__sfc__, null, null, _parent));
      _push(ssrRenderComponent(_component_router_link, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Another page`);
          } else {
            return [
              createTextVNode("Another page")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const history = createMemoryHistory("/");
const routes = [
  { path: "/", name: "home", component: _sfc_main },
  { path: "/about", name: "about", component: _sfc_main$6 }
];
const createRouter = () => createRouter$1({ routes, history });
const render$1 = async (url) => {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  router.push(url);
  await router.isReady();
  const { matched } = router.currentRoute.value;
  if (matched.length) {
    const html = await renderToString(app);
    return {
      "#app": html
    };
  }
};
const renderModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  render: render$1
}, Symbol.toStringTag, { value: "Module" }));
class StaticRenderContext {
  constructor() {
    this.statusCode = 200;
    this.headers = {};
  }
  status(code) {
    this.statusCode = code;
  }
  getHeader(name) {
    return this.headers[name];
  }
  setHeader(name, value) {
    this.headers[name] = value;
  }
}
class Template {
  constructor(html) {
    this.html = html;
  }
  getIslands() {
    return [
      ...this.html.matchAll(/<script[^>]+data-island="(.+?)"[^>]*>([\s\S]+?)<\/script>/gi)
    ].map(([, island, json]) => ({ island, json }));
  }
  removeScripts(test) {
    this.html = this.html.replace(/<\s*script(.*?)>([\s\S]*?)<\s*\/\s*script\s*>\s*/gi, (match, attrs, text) => {
      if (test.src) {
        const [, src] = /\bsrc\s*=\s*"(.+?)"/.exec(attrs) ?? [];
        if (src && src.match(test.src))
          return "";
      }
      if (test.text && text.match(test.text)) {
        return "";
      }
      return match;
    });
  }
  insertMarkup(markup) {
    for (const [selector, insert] of Object.entries(markup)) {
      if (insert) {
        if (!selector.match(/^#?[\w]+$/)) {
          throw new Error(`Unsupported selector: ${selector}`);
        }
        if (selector.startsWith("#")) {
          this.html = this.html.replace(new RegExp(`\\bid\\s*=\\s*"${selector.slice(1)}"[^>]*>`), `$&${insert}`);
        } else {
          this.html = this.html.replace(new RegExp(`<\\s*/\\s*${selector}[^>]*>`), `${insert}$&`);
        }
      }
    }
  }
  toString() {
    return this.html;
  }
}
async function renderHtml(renderFn2, url, indexHtml, css2, context = new StaticRenderContext()) {
  const result = await renderFn2(url, context);
  if (!result)
    return;
  const template2 = new Template(indexHtml);
  template2.insertMarkup(await resolveMarkup(result));
  const head = css2.map((href) => `<link rel="stylesheet" href="${href}">`).join("");
  template2.insertMarkup({ head });
  const islands = template2.getIslands();
  if (!islands.length) {
    console.log("No islands found, removing hydration code");
    template2.removeScripts({
      src: /index-|-legacy|modulepreload-polyfill/,
      text: /__vite_is_modern_browser|"noModule"|_\$HY/
    });
  }
  return template2.toString();
}
async function resolveMarkup(markup) {
  const resolved = {};
  for (const [key, value] of Object.entries(markup)) {
    resolved[key] = await value;
  }
  return resolved;
}
const render = renderModule;
const renderFn = render.render ?? render.default;
const template = '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="icon" type="image/svg+xml" href="/assets/capri-ce1c56b3.svg" />\n    <script type="module" crossorigin src="/assets/index-c2924d2e.js"><\/script>\n  </head>\n  <body>\n    <div id="app"></div>\n    \n  </body>\n</html>\n';
const css = ["/assets/ssr-2ca376f0.css"];
async function ssr(url, context) {
  return renderHtml(renderFn, url, template, css, context);
}
export {
  ssr as default
};

import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { RenderFunction } from "@capri-js/vue/server";

import "./global.css";
import App from "./App.vue";
import createRouter from "./router.js";

export const render: RenderFunction = async (url) => {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  router.push(url);
  await router.isReady();
  const { matched } = router.currentRoute.value;
  if (matched.length) {
    const html = await renderToString(app);
    return {
      "#app": html,
    };
  }
};

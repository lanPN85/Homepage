// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import BlogFrame from "../../components/BlogFrame.vue";
import { Icon } from "@iconify/vue";

// @ts-ignore
import "./style.css";
// @ts-ignore
import "./overrides.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("BlogFrame", BlogFrame);
    app.component("Icon", Icon);
  },
} satisfies Theme;

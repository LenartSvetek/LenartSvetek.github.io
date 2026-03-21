import { createRootRouteWithContext, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
let context;
function getContext() {
  if (context) {
    return context;
  }
  const queryClient = new QueryClient();
  context = {
    queryClient
  };
  return context;
}
function TanStackQueryProvider({
  children
}) {
  const { queryClient } = getContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children });
}
const appCss = "/assets/styles-nG0looOs.css";
const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "TanStack Start Starter"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: { __html: THEME_INIT_SCRIPT } }),
      /* @__PURE__ */ jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]", children: [
      /* @__PURE__ */ jsx(TanStackQueryProvider, { children }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-DK4KOvQo.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router = createRouter({
    routeTree,
    context: getContext(),
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0
  });
  return router;
}
export {
  getRouter
};

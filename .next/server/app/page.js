const CHUNK_PUBLIC_PATH = "server/app/page.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_101e1c._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__adba9d._.js");
runtime.loadChunk("server/chunks/ssr/src_app_layout_tsx_3359c8._.js");
runtime.loadChunk("server/chunks/ssr/_b30aba._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_a2a0e1._.js");
runtime.loadChunk("server/chunks/ssr/_abf0ea._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { MODULE_0 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH).exports;

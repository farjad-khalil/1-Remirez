(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_4134fa._.js", {

"[project]/src/constants/constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// Data
__turbopack_esm__({
    "footer_contact": (()=>footer_contact),
    "footer_text": (()=>footer_text),
    "our_story_text": (()=>our_story_text),
    "testimonialsData": (()=>testimonialsData)
});
const our_story_text = {
    heading: "M. Ramirez Landscaping Inc.",
    description: ",Our company has its beginnings ten years ago. We were founded by owner, Mauricio Ramirez and have been growing rapidly each year with more employees, trucks, and more services for our clients. You can find our trucks mostly in the Garden City, Long Island area servicing gorgeous homes and gardens. We only offer the best in service for all our customers."
};
const testimonialsData = [
    {
        name: "Brook",
        image: "/assets/aboutus/person-1.png",
        rating: 5,
        title: "Best landscaping service in town!",
        review: "From sod installation to seasonal cleanup, they handle everything with great attention to detail. My lawn has never looked better, and I appreciate their dedication!",
        designation: "Happy Homeowner"
    },
    {
        name: "James R",
        image: "/assets/aboutus/person-2.png",
        rating: 5,
        title: "Absolutely transformed my backyard!",
        review: "The team did an amazing job designing and installing my garden. The flowers and greenery are perfectly placed, and my yard looks stunning! Highly recommend their services!",
        designation: "Happy Homeowner"
    },
    {
        name: "Alice K",
        image: "/assets/aboutus/person-3.png",
        rating: 5,
        title: "Excellent Work!",
        review: "They took care of my lawn and made it look perfect! Professional team with great dedication.",
        designation: "Satisfied Customer"
    },
    {
        name: "John D",
        image: "/assets/aboutus/person-1.png",
        rating: 5,
        title: "Very Professional",
        review: "The best landscaping team I’ve ever hired. They handled my garden with precision and care.",
        designation: "Homeowner"
    }
];
const footer_text = "For over 20 years we’ve been growing only by word of mouth and the testimonies of all our customers! We appreciate all our loyal patrons and offer them service with exceptional attention to detail for 100% customer satisfaction! Thank you Long Island!";
const footer_contact = {
    phone: "(516) 270-7024",
    mail: "mramirezlandscaper@gmail.com",
    url: "ramirez.net",
    location: "D block, H Road Nassur"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ components/aboutus/testimonials.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$__components$2f$Divider$2f$divider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/ components/Divider/divider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const Testimonial = ()=>{
    _s();
    const [startIndex, setStartIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [visibleCards, setVisibleCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const nextTestimonials = ()=>{
        if (startIndex + visibleCards < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonialsData"].length) {
            setStartIndex(startIndex + 1);
        }
    };
    const prevTestimonials = ()=>{
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonial.useEffect": ()=>{
            const updateVisibleCards = {
                "Testimonial.useEffect.updateVisibleCards": ()=>{
                    if (window.innerWidth < 768) {
                        setVisibleCards(1); // Show 1 card on screens < md (768px)
                    } else {
                        setVisibleCards(3); // Default to 3 cards on larger screens
                    }
                }
            }["Testimonial.useEffect.updateVisibleCards"];
            updateVisibleCards(); // Initial check
            window.addEventListener("resize", updateVisibleCards); // Listen for resize
            return ({
                "Testimonial.useEffect": ()=>window.removeEventListener("resize", updateVisibleCards)
            })["Testimonial.useEffect"]; // Cleanup
        }
    }["Testimonial.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$__components$2f$Divider$2f$divider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DividerLeft"], {
                t1: "What"
            }, void 0, false, {
                fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-6 overflow-hidden cursor-pointer",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonialsData"].slice(startIndex, startIndex + visibleCards).map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-6 relative w-[450px] rounded-lg shadow-lg transition-all duration-300 bg-[#f5f5f5] hover:bg-neonGreen group`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-28 h-28 rounded-full overflow-hidden mb-2 border-2 border-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: testimonial.image,
                                            alt: testimonial.name,
                                            width: 100,
                                            height: 100,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                            lineNumber: 50,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                        lineNumber: 49,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-2xl text-black group-hover:text-white",
                                        children: testimonial.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                        lineNumber: 59,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex text-[#f1ac18] text-2xl",
                                        children: [
                                            ...Array(testimonial.rating)
                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "★"
                                            }, i, false, {
                                                fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                                lineNumber: 65,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                        lineNumber: 63,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center font-bold text-neonGreen group-hover:text-white mb-2",
                                children: testimonial.title
                            }, void 0, false, {
                                fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-center text-gray-700 group-hover:text-white mb-4",
                                children: testimonial.review
                            }, void 0, false, {
                                fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                lineNumber: 76,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex mt-10 justify-between items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-lg font-bold text-black group-hover:text-white",
                                        children: testimonial.designation
                                    }, void 0, false, {
                                        fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-8xl text-neonGreen  group-hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                            fill: "#65991d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                            lineNumber: 85,
                                            columnNumber: 94
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                                lineNumber: 81,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex mt-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prevTestimonials,
                        disabled: startIndex === 0,
                        className: "px-4 py-2 bg-gray-300 text-neonGreen rounded disabled:opacity-50",
                        children: "◀ Prev"
                    }, void 0, false, {
                        fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: nextTestimonials,
                        disabled: startIndex + visibleCards >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonialsData"].length,
                        className: "px-4 py-2 bg-gray-300 text-neonGreen rounded disabled:opacity-50",
                        children: "Next ▶"
                    }, void 0, false, {
                        fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/ components/aboutus/testimonials.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ components/aboutus/testimonials.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
};
_s(Testimonial, "EuTNHsebJjUc+Q8sMx+8gOoCPzY=");
_c = Testimonial;
const __TURBOPACK__default__export__ = Testimonial;
var _c;
__turbopack_refresh__.register(_c, "Testimonial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/about/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_4134fa._.js.map
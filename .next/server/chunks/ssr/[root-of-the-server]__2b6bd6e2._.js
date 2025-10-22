module.exports = [
"[project]/.next-internal/server/app/projects/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        description: "Website thương mại điện tử hoàn chỉnh với giỏ hàng, thanh toán VNPay, quản lý đơn hàng và admin dashboard.",
        image: "/images/projects/ecommerce.jpg",
        tags: [
            "Next.js",
            "Node.js",
            "MongoDB",
            "VNPay"
        ],
        category: "popular",
        fullDescription: "Nền tảng thương mại điện tử đầy đủ tính năng được xây dựng với công nghệ hiện đại, tối ưu hóa trải nghiệm mua sắm trực tuyến. Hệ thống bao gồm storefront cho khách hàng và admin dashboard cho quản lý.",
        features: [
            "Giao diện người dùng responsive và thân thiện",
            "Giỏ hàng với tính năng lưu trữ session",
            "Tích hợp thanh toán VNPay an toàn",
            "Hệ thống quản lý sản phẩm và danh mục",
            "Quản lý đơn hàng và theo dõi trạng thái",
            "Admin dashboard với thống kê và báo cáo",
            "Tìm kiếm và lọc sản phẩm nâng cao",
            "Hệ thống đánh giá và review sản phẩm"
        ],
        images: [
            "/images/projects/ecommerce.jpg",
            "/images/projects/ecommerce-cart.jpg",
            "/images/projects/ecommerce-admin.jpg"
        ],
        challenges: [
            "Xử lý thanh toán an toàn và xác thực giao dịch",
            "Tối ưu hiệu suất với lượng sản phẩm lớn",
            "Quản lý state phức tạp của giỏ hàng"
        ],
        solutions: [
            "Tích hợp VNPay API với webhook verification",
            "Sử dụng MongoDB indexing và caching Redis",
            "Áp dụng Context API và localStorage"
        ],
        results: [
            "Xử lý 1000+ đơn hàng/tháng",
            "Tốc độ tải trang < 2 giây",
            "Tỷ lệ chuyển đổi tăng 35%"
        ],
        duration: "3 tháng",
        role: "Full-stack Developer",
        client: "Startup Thương mại điện tử"
    },
    {
        id: "car-rental-system",
        title: "Car Rental Management System",
        description: "Nền tảng thuê xe trực tuyến giúp người dùng dễ dàng đặt xe, quản lý đơn thuê và thanh toán nhanh chóng.",
        image: "/images/projects/car-rental.jpg",
        tags: [
            "Next.js",
            "Laravel",
            "MySQL"
        ],
        category: "latest",
        fullDescription: "Hệ thống quản lý thuê xe toàn diện cho phép người dùng tìm kiếm, đặt xe, quản lý lịch thuê và thanh toán trực tuyến. Ứng dụng hỗ trợ quản trị viên quản lý xe, khách hàng và báo cáo doanh thu theo thời gian thực.",
        features: [
            "Tìm kiếm xe theo loại, giá và tình trạng sẵn có",
            "Đặt xe trực tuyến và theo dõi trạng thái đơn thuê",
            "Tích hợp bản đồ định vị điểm nhận và trả xe",
            "Quản lý thông tin xe, khách hàng và hợp đồng thuê",
            "Thanh toán online qua thẻ hoặc ví điện tử",
            "Báo cáo doanh thu, lượt thuê và tỷ lệ sử dụng xe",
            "Hệ thống xác thực và phân quyền người dùng",
            "Thông báo tự động khi sắp đến hạn trả xe"
        ],
        images: [
            '/images/projects/car-rental.jpg',
            '/images/projects/car-rental-dashboard.jpg'
        ],
        challenges: [
            "Đồng bộ trạng thái xe thuê theo thời gian thực",
            "Tối ưu trải nghiệm tìm kiếm và đặt xe trên nhiều thiết bị",
            "Xử lý thanh toán và bảo mật thông tin người dùng"
        ],
        solutions: [
            "Sử dụng Laravel API kết hợp Next.js để tách biệt frontend/backend",
            "Dùng WebSocket/Pusher để cập nhật trạng thái xe real-time",
            "Thiết kế cơ sở dữ liệu tối ưu cho quản lý lịch thuê và hợp đồng"
        ],
        results: [
            "Tăng 35% tỷ lệ đặt xe trực tuyến",
            "Giảm 50% lỗi trùng lịch thuê",
            "Cải thiện 40% tốc độ xử lý giao dịch và phản hồi người dùng"
        ],
        duration: "5 tháng",
        role: "Full-stack Developer",
        client: "Công ty dịch vụ thuê xe cao cấp"
    },
    {
        id: "portfolio-website",
        title: "Portfolio Website",
        description: "Website portfolio cá nhân hiện đại với dark theme, animation mượt mà và tích hợp EmailJS.",
        image: "/images/projects/portfolio.jpg",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS"
        ],
        category: "popular",
        fullDescription: "Website portfolio cá nhân được thiết kế với phong cách hiện đại, tối ưu SEO và hiệu suất, giúp showcase các dự án và kỹ năng một cách chuyên nghiệp.",
        features: [
            "Design hiện đại với dark/light theme",
            "Animation và transitions mượt mà",
            "Tối ưu SEO với Next.js metadata",
            "Form liên hệ với EmailJS",
            "Responsive hoàn hảo mọi thiết bị",
            "Blog tích hợp với MDX",
            "Tối ưu hiệu suất với Next.js Image",
            "Google Analytics tracking"
        ],
        images: [
            "/images/projects/portfolio.jpg",
            "/images/projects/portfolio-projects.jpg",
            "/images/projects/portfolio-contact.jpg"
        ],
        videos: [
            "/videos/portfolio-demo.mp4"
        ],
        challenges: [
            "Tối ưu hiệu suất và Core Web Vitals",
            "Tạo animation mượt mà không ảnh hưởng performance",
            "SEO tối ưu cho portfolio"
        ],
        solutions: [
            "Sử dụng Next.js 15 với App Router",
            "CSS animations với GPU acceleration",
            "Structured data và Open Graph tags"
        ],
        results: [
            "Lighthouse score 98/100",
            "Page load time < 1 giây",
            "SEO score 100/100"
        ],
        duration: "1 tháng",
        role: "Full-stack Developer",
        client: "Personal Project"
    }
];
}),
"[project]/src/components/project/ProjectDetail.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/project/ProjectDetail.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/project/ProjectDetail.tsx <module evaluation>", "default");
}),
"[project]/src/components/project/ProjectDetail.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/project/ProjectDetail.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/project/ProjectDetail.tsx", "default");
}),
"[project]/src/components/project/ProjectDetail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetail.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetail.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/project/ProjectDetail.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project)=>({
            id: project.id
        }));
}
async function generateMetadata({ params }) {
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.id === params.id);
    if (!project) {
        return {
            title: 'Project Not Found'
        };
    }
    return {
        title: `${project.title} - DuyTDX Portfolio`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [
                project.image
            ]
        }
    };
}
function ProjectPage({ params }) {
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.id === params.id);
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$project$2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        project: project
    }, void 0, false, {
        fileName: "[project]/src/app/projects/[id]/page.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2b6bd6e2._.js.map
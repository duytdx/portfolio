(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "services",
    ()=>services
]);
const services = [
    {
        id: 'fullstack-web-development',
        title: 'Fullstack Web Development',
        description: 'Phát triển ứng dụng web toàn diện từ giao diện người dùng đến hệ thống backend, database và deployment.',
        icon: 'code-square',
        fullDescription: 'Dịch vụ phát triển web fullstack chuyên nghiệp, xử lý toàn bộ quy trình từ thiết kế giao diện, lập trình frontend, phát triển backend API, quản lý cơ sở dữ liệu đến triển khai và bảo trì hệ thống. Tôi đảm bảo mang đến sản phẩm hoàn chỉnh, tối ưu hiệu suất và dễ dàng mở rộng.',
        features: [
            'Phát triển Frontend với React, Next.js và Vue.js',
            'Xây dựng RESTful API với Node.js/Express hoặc Laravel',
            'Thiết kế và quản lý Database (MySQL, MongoDB)',
            'Responsive Design - tương thích mọi thiết bị',
            'Authentication & Authorization',
            'Tích hợp Payment Gateway và API bên thứ 3',
            'Performance Optimization & SEO',
            'Deployment với Docker và AWS'
        ],
        technologies: [
            'React',
            'Next.js',
            'TypeScript',
            'Node.js',
            'Express',
            'MongoDB',
            'MySQL'
        ]
    },
    {
        id: 'frontend-development',
        title: 'Frontend Development',
        description: 'Xây dựng giao diện web hiện đại, tương tác mượt mà với React, Next.js và Vue.js.',
        icon: 'palette',
        fullDescription: 'Chuyên phát triển giao diện người dùng (Frontend) với các framework hiện đại nhất. Tạo ra những trang web đẹp mắt, tương tác mượt mà, tối ưu hiệu suất và trải nghiệm người dùng tuyệt vời trên mọi thiết bị.',
        features: [
            'Single Page Application (SPA)',
            'Server-Side Rendering (SSR) với Next.js',
            'Component-based Architecture',
            'State Management (Redux, Context API)',
            'Responsive & Mobile-First Design',
            'Modern UI/UX với Tailwind CSS',
            'Performance Optimization',
            'Cross-browser Compatibility'
        ],
        technologies: [
            'React',
            'Next.js',
            'Vue.js',
            'TypeScript',
            'Tailwind CSS',
            'HTML/CSS'
        ]
    },
    {
        id: 'backend-api-development',
        title: 'Backend & API Development',
        description: 'Phát triển hệ thống backend mạnh mẽ, API RESTful và quản lý cơ sở dữ liệu hiệu quả.',
        icon: 'server',
        fullDescription: 'Xây dựng hệ thống backend vững chắc với Node.js, Express, Laravel và Spring Boot. Thiết kế RESTful API chuẩn, quản lý cơ sở dữ liệu hiệu quả, đảm bảo bảo mật và khả năng mở rộng cao cho ứng dụng của bạn.',
        features: [
            'RESTful API Design & Development',
            'Database Design & Optimization',
            'Authentication & JWT Token',
            'Role-based Access Control',
            'File Upload & Cloud Storage',
            'Real-time với WebSocket',
            'Microservices Architecture',
            'API Documentation với Swagger'
        ],
        technologies: [
            'Node.js',
            'Express',
            'Laravel',
            'Spring Boot',
            'MongoDB',
            'MySQL'
        ]
    },
    {
        id: 'web-application',
        title: 'Web Application Development',
        description: 'Phát triển ứng dụng web phức tạp: CRM, ERP, quản lý nội bộ và các hệ thống doanh nghiệp.',
        icon: 'rocket-takeoff',
        fullDescription: 'Chuyên phát triển các ứng dụng web quy mô lớn và phức tạp cho doanh nghiệp. Từ hệ thống quản lý nội bộ, CRM, ERP đến các nền tảng SaaS. Đảm bảo hiệu suất cao, bảo mật tốt và dễ dàng bảo trì.',
        features: [
            'Custom Business Logic',
            'Admin Dashboard & Analytics',
            'User Management System',
            'Real-time Notification',
            'Export/Import Data (Excel, PDF)',
            'Advanced Search & Filter',
            'Email & SMS Integration',
            'Multi-language Support'
        ],
        technologies: [
            'Next.js',
            'TypeScript',
            'Node.js',
            'MongoDB',
            'MySQL',
            'Docker'
        ]
    },
    {
        id: 'ecommerce-development',
        title: 'E-Commerce Development',
        description: 'Xây dựng website thương mại điện tử hoàn chỉnh với giỏ hàng, thanh toán và quản lý đơn hàng.',
        icon: 'cart-check',
        fullDescription: 'Phát triển hệ thống thương mại điện tử toàn diện với đầy đủ tính năng từ catalog sản phẩm, giỏ hàng, thanh toán online, quản lý đơn hàng, kho hàng đến các công cụ marketing và phân tích.',
        features: [
            'Product Catalog & Management',
            'Shopping Cart & Wishlist',
            'Payment Gateway Integration',
            'Order & Inventory Management',
            'Customer Account & Order History',
            'Coupon & Discount System',
            'Product Reviews & Ratings',
            'Admin Dashboard & Analytics'
        ],
        technologies: [
            'Next.js',
            'Node.js',
            'Express',
            'MongoDB',
            'MySQL',
            'Docker'
        ]
    },
    {
        id: 'api-integration',
        title: 'API Integration & Services',
        description: 'Tích hợp các API bên thứ ba: thanh toán, social media, maps, email và các dịch vụ khác.',
        icon: 'plugin',
        fullDescription: 'Dịch vụ tích hợp và kết nối các API bên thứ ba vào ứng dụng của bạn. Từ thanh toán online, social login, gửi email, SMS đến tích hợp Google Maps, Analytics và nhiều dịch vụ khác.',
        features: [
            'Payment Gateway (Stripe, PayPal, VNPay)',
            'Social Media Login (Google, Facebook)',
            'Email Service (SendGrid, Mailchimp)',
            'Cloud Storage (AWS S3, Cloudinary)',
            'Maps & Location Services',
            'SMS & Push Notifications',
            'Analytics & Tracking',
            'Custom API Development'
        ],
        technologies: [
            'Node.js',
            'Express',
            'TypeScript',
            'AWS',
            'Postman',
            'Git'
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/services/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ServiceDetailPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const serviceId = params.id;
    const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].find((s)=>s.id === serviceId);
    if (!service) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white mb-4",
                        children: "Không tìm thấy dịch vụ"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[id]/page.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/#services'),
                        className: "px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all",
                        children: "Quay lại trang chủ"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[id]/page.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[id]/page.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/services/[id]/page.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-900 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push('/#services'),
                            className: "mb-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "bi bi-arrow-left text-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Quay lại"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[id]/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-4xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-".concat(service.icon, " text-white")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[id]/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl md:text-5xl font-bold mb-2",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[id]/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-white/80",
                                            children: service.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[id]/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[id]/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/[id]/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/[id]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: [
                        service.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12 rounded-2xl overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: service.image,
                                alt: service.title,
                                width: 1200,
                                height: 600,
                                className: "w-full h-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[id]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[id]/page.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-6 text-white",
                                    children: "Mô tả chi tiết"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-gray-300 leading-relaxed",
                                    children: service.fullDescription
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[id]/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        service.features && service.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-6 text-white",
                                    children: "Tính năng chính"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: service.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-check-circle-fill text-blue-400 text-xl flex-shrink-0 mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-300",
                                                    children: feature
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/services/[id]/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[id]/page.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        service.technologies && service.technologies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-6 text-white",
                                    children: "Công nghệ sử dụng"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: service.technologies.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-xl text-blue-300 font-medium",
                                            children: tech
                                        }, index, false, {
                                            fileName: "[project]/src/app/services/[id]/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[id]/page.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "Bạn quan tâm đến dịch vụ này?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mb-6",
                                    children: "Hãy liên hệ với tôi để thảo luận về dự án của bạn"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-4 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push('/#contact'),
                                            className: "px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-envelope-fill"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                "Liên hệ ngay"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/[id]/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push('/#services'),
                                            className: "px-8 py-4 bg-gray-800 border border-gray-700 text-white rounded-xl font-semibold hover:border-blue-500 transition-all duration-300 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "bi bi-grid-3x3-gap-fill"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                "Xem dịch vụ khác"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/[id]/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[id]/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[id]/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/[id]/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/[id]/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/[id]/page.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ServiceDetailPage, "6tjUaGqXbeKCUQo6mHB9P8cv1X0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ServiceDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ServiceDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_18371332._.js.map
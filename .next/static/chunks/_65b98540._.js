(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider(param) {
    let { children } = param;
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('vi');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            // Load saved language from localStorage
            const savedLang = localStorage.getItem('language');
            if (savedLang && (savedLang === 'vi' || savedLang === 'en')) {
                setLanguage(savedLang);
            }
        }
    }["LanguageProvider.useEffect"], []);
    const handleSetLanguage = (lang)=>{
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage: handleSetLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/LanguageContext.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "T8U+jILKhQUm84ZTJi5WKkdeSBI=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
// Translations
const translations = {
    vi: {
        // Navigation
        'nav.home': 'Trang chủ',
        'nav.about': 'Giới thiệu',
        'nav.services': 'Dịch vụ',
        'nav.projects': 'Dự án',
        'nav.pricing': 'Bảng giá',
        'nav.process': 'Quy trình',
        'nav.contact': 'Liên hệ',
        // Hero Section
        'hero.greeting': 'XIN CHÀO',
        'hero.iam': 'TÔI LÀ',
        'hero.hireMe': 'THUÊ TÔI',
        'hero.getCV': 'TẢI CV',
        'hero.scrollDown': 'Cuộn xuống',
        // About Section
        'about.title': 'GIỚI THIỆU VỀ BẢN THÂN TÔI',
        'about.yearsExperience': 'Năm kinh nghiệm',
        'about.projectsCompleted': 'Dự án hoàn thành',
        'about.happyClients': 'Khách hàng hài lòng',
        'about.downloadCV': 'TẢI CV',
        'about.contactNow': 'LIÊN HỆ NGAY',
        'about.description': 'Với niềm đam mê sáng tạo và công nghệ, tôi luôn nỗ lực để mang đến những sản phẩm chất lượng cao nhất, đáp ứng mọi nhu cầu của khách hàng.',
        // Services Section
        'services.title': 'DỊCH VỤ CUNG CẤP',
        'services.subtitle': 'Dịch vụ chuyên nghiệp với chất lượng cao, đáp ứng mọi nhu cầu của bạn',
        'services.learnMore': 'Tìm hiểu thêm',
        // Skills Section
        'skills.title': 'KỸ NĂNG CHUYÊN MÔN',
        'skills.subtitle': 'Các công nghệ và công cụ tôi sử dụng để xây dựng các sản phẩm chất lượng',
        'skills.frontend': 'Phát triển Frontend',
        'skills.backend': 'Phát triển Backend',
        'skills.tools': 'Công cụ & DevOps',
        'skills.total': 'Kỹ năng',
        'skills.average': 'Trung bình',
        // Projects Section
        'projects.title': 'CÁC DỰ ÁN CHẤT LƯỢNG GẦN ĐÂY',
        'projects.all': 'TẤT CẢ',
        'projects.popular': 'PHỔ BIẾN',
        'projects.latest': 'MỚI NHẤT',
        'projects.following': 'THEO DÕI',
        'projects.upcoming': 'SẮP RA',
        'projects.noProjects': 'Không có dự án nào trong danh mục này.',
        // Newsletter Section
        'newsletter.title': 'NHẬN CẬP NHẬT TỪ MỌI NƠI',
        'newsletter.subtitle': 'Đăng ký để nhận thông tin cập nhật mới nhất về dự án và bài viết của tôi',
        'newsletter.placeholder': 'Nhập địa chỉ email của bạn',
        'newsletter.sending': 'ĐANG GỬI...',
        'newsletter.subscribe': 'ĐĂNG KÝ NGAY',
        'newsletter.success': 'Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm.',
        'newsletter.followMe': 'THEO DÕI TÔI',
        // Contact Section
        'contact.title': 'LIÊN HỆ VỚI TÔI',
        'contact.subtitle': 'Hãy kết nối với tôi để biến ý tưởng của bạn thành hiện thực',
        'contact.info': 'Thông tin liên hệ',
        'contact.email': 'Email của bạn',
        'contact.phone': 'Số điện thoại',
        'contact.address': 'Địa chỉ',
        'contact.social': 'Mạng xã hội',
        'contact.sendMessage': 'Gửi tin nhắn',
        'contact.yourName': 'Tên của bạn',
        'contact.namePlaceholder': 'Nguyễn Văn A',
        'contact.message': 'Tin nhắn',
        'contact.messagePlaceholder': 'Nhập tin nhắn của bạn...',
        'contact.send': 'Gửi tin nhắn',
        'contact.sending': 'Đang gửi...',
        'contact.success': 'Gửi tin nhắn thành công!',
        'contact.error': 'Có lỗi xảy ra. Vui lòng thử lại!',
        'contact.readyToStart': 'Sẵn sàng bắt đầu dự án của bạn?',
        'contact.readyDescription': 'Hãy để tôi giúp bạn biến ý tưởng thành hiện thực. Liên hệ ngay để được tư vấn miễn phí!',
        'contact.callNow': 'GỌI NGAY',
        'contact.sendEmail': 'GỬI EMAIL',
        // About Section Extra
        'about.whyChooseMe': 'Tại sao chọn tôi?',
        'about.benefit1': 'Code sạch, dễ maintain và scale',
        'about.benefit2': 'Giao tiếp rõ ràng, cập nhật tiến độ thường xuyên',
        'about.benefit3': 'Hỗ trợ sau khi hoàn thành dự án',
        'about.benefit4': 'Giá cả cạnh tranh, phù hợp với startup & SME',
        'about.viewServices': 'XEM DỊCH VỤ',
        // Process Section
        'process.startProject': 'Bắt đầu dự án của bạn ngay hôm nay!',
        'process.startDescription': 'Quy trình làm việc chuyên nghiệp, minh bạch và hiệu quả. Tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.',
        'process.freeConsultation': 'Tư vấn miễn phí',
        'process.viewPricing': 'Xem bảng giá',
        // Pricing Section
        'pricing.note': 'Giá trên chưa bao gồm chi phí domain và hosting. Có thể linh động theo yêu cầu cụ thể của dự án.',
        'pricing.needQuote': 'Cần báo giá chi tiết hoặc tư vấn thêm? Liên hệ ngay để được hỗ trợ miễn phí!',
        // Footer
        'footer.thanks': 'Cảm ơn bạn đã ghé thăm portfolio của tôi. Hãy liên hệ nếu bạn muốn hợp tác hoặc có câu hỏi!',
        'footer.quickLinks': 'Liên kết nhanh',
        'footer.contact': 'Liên hệ',
        'footer.copyright': 'Tất cả quyền được bảo lưu. Được tạo với ❤️ bằng Next.js'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.pricing': 'Pricing',
        'nav.process': 'Process',
        'nav.contact': 'Contact',
        // Hero Section
        'hero.greeting': 'HELLO',
        'hero.iam': 'I AM',
        'hero.hireMe': 'HIRE ME',
        'hero.getCV': 'GET CV',
        'hero.scrollDown': 'Scroll Down',
        // About Section
        'about.title': "LET'S INTRODUCE ABOUT MYSELF",
        'about.yearsExperience': 'Years Experience',
        'about.projectsCompleted': 'Projects Completed',
        'about.happyClients': 'Happy Clients',
        'about.downloadCV': 'DOWNLOAD CV',
        'about.contactNow': 'CONTACT NOW',
        'about.description': 'With a passion for creativity and technology, I always strive to deliver the highest quality products that meet all customer needs.',
        // Services Section
        'services.title': 'SERVICE OFFERS',
        'services.subtitle': 'Professional services with high quality, meeting all your needs',
        'services.learnMore': 'Learn More',
        // Skills Section
        'skills.title': 'PROFESSIONAL SKILLS',
        'skills.subtitle': 'Technologies and tools I use to build quality products',
        'skills.frontend': 'Frontend Development',
        'skills.backend': 'Backend Development',
        'skills.tools': 'Tools & DevOps',
        'skills.total': 'Skills',
        'skills.average': 'Average',
        // Projects Section
        'projects.title': 'QUALITY WORK RECENTLY DONE',
        'projects.all': 'ALL',
        'projects.popular': 'POPULAR',
        'projects.latest': 'LATEST',
        'projects.following': 'FOLLOWING',
        'projects.upcoming': 'UPCOMING',
        'projects.noProjects': 'No projects in this category.',
        // Newsletter Section
        'newsletter.title': 'GET UPDATE FROM ANYWHERE',
        'newsletter.subtitle': 'Subscribe to receive the latest updates about my projects and articles',
        'newsletter.placeholder': 'Enter your email address',
        'newsletter.sending': 'SENDING...',
        'newsletter.subscribe': 'GET STARTED',
        'newsletter.success': 'Thank you for subscribing! We will contact you soon.',
        'newsletter.followMe': 'FOLLOW ME',
        // Contact Section
        'contact.title': 'CONTACT ME',
        'contact.subtitle': "Let's connect to turn your ideas into reality",
        'contact.info': 'Contact Information',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.address': 'Address',
        'contact.social': 'Social Media',
        'contact.sendMessage': 'Send Message',
        'contact.yourName': 'Your Name',
        'contact.namePlaceholder': 'John Doe',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'Enter your message...',
        'contact.send': 'Send Message',
        'contact.sending': 'Sending...',
        'contact.success': 'Message sent successfully!',
        'contact.error': 'An error occurred. Please try again!',
        'contact.readyToStart': 'Ready to Start Your Project?',
        'contact.readyDescription': "Let me help turn your ideas into reality. Contact me now for a free consultation!",
        'contact.callNow': 'CALL NOW',
        'contact.sendEmail': 'SEND EMAIL',
        // About Section Extra
        'about.whyChooseMe': 'Why Choose Me?',
        'about.benefit1': 'Clean, maintainable, and scalable code',
        'about.benefit2': 'Clear communication, regular progress updates',
        'about.benefit3': 'Post-project support included',
        'about.benefit4': 'Competitive pricing for startups & SMEs',
        'about.viewServices': 'VIEW SERVICES',
        // Process Section
        'process.startProject': 'Start your project today!',
        'process.startDescription': 'Professional, transparent and efficient workflow. I am always ready to listen and support you.',
        'process.freeConsultation': 'Free Consultation',
        'process.viewPricing': 'View Pricing',
        // Pricing Section
        'pricing.note': 'Prices do not include domain and hosting costs. Can be flexible based on specific project requirements.',
        'pricing.needQuote': 'Need a detailed quote or consultation? Contact now for free support!',
        // Footer
        'footer.thanks': 'Thank you for visiting my portfolio. Feel free to contact me if you want to collaborate or have any questions!',
        'footer.quickLinks': 'Quick Links',
        'footer.contact': 'Contact',
        'footer.copyright': 'All rights reserved. Made with ❤️ using Next.js'
    }
};
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_65b98540._.js.map
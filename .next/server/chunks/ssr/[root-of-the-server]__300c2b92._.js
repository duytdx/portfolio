module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/contexts/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('vi');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load saved language from localStorage
        const savedLang = localStorage.getItem('language');
        if (savedLang && (savedLang === 'vi' || savedLang === 'en')) {
            setLanguage(savedLang);
        }
    }, []);
    const handleSetLanguage = (lang)=>{
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
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
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__300c2b92._.js.map
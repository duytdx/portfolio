import { Service } from '@/types';

// Danh sách dịch vụ
export const services: Service[] = [
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
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'MySQL'],
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
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
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
    technologies: ['Node.js', 'Express', 'Laravel', 'Spring Boot', 'MongoDB', 'MySQL'],
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
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'MySQL', 'Docker'],
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
    technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Docker'],
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
    technologies: ['Node.js', 'Express', 'TypeScript', 'AWS', 'Postman', 'Git'],
  },
];

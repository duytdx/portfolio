import { Project } from "@/types";

// Danh sách dự án thực tế
export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Website thương mại điện tử hoàn chỉnh với giỏ hàng, thanh toán VNPay, quản lý đơn hàng và admin dashboard.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "Node.js", "MongoDB", "VNPay"],
    category: "popular",
    fullDescription:
      "Nền tảng thương mại điện tử đầy đủ tính năng được xây dựng với công nghệ hiện đại, tối ưu hóa trải nghiệm mua sắm trực tuyến. Hệ thống bao gồm storefront cho khách hàng và admin dashboard cho quản lý.",
    features: [
      "Giao diện người dùng responsive và thân thiện",
      "Giỏ hàng với tính năng lưu trữ session",
      "Tích hợp thanh toán VNPay an toàn",
      "Hệ thống quản lý sản phẩm và danh mục",
      "Quản lý đơn hàng và theo dõi trạng thái",
      "Admin dashboard với thống kê và báo cáo",
      "Tìm kiếm và lọc sản phẩm nâng cao",
      "Hệ thống đánh giá và review sản phẩm",
    ],
    images: [
      "/images/projects/ecommerce.jpg",
      "/images/projects/ecommerce-cart.jpg",
      "/images/projects/ecommerce-admin.jpg",
    ],
    challenges: [
      "Xử lý thanh toán an toàn và xác thực giao dịch",
      "Tối ưu hiệu suất với lượng sản phẩm lớn",
      "Quản lý state phức tạp của giỏ hàng",
    ],
    solutions: [
      "Tích hợp VNPay API với webhook verification",
      "Sử dụng MongoDB indexing và caching Redis",
      "Áp dụng Context API và localStorage",
    ],
    results: [
      "Xử lý 1000+ đơn hàng/tháng",
      "Tốc độ tải trang < 2 giây",
      "Tỷ lệ chuyển đổi tăng 35%",
    ]
  },
  {
    id: "car-rental-system",
    title: "Car Rental Management System",
    description:
      "Nền tảng thuê xe trực tuyến giúp người dùng dễ dàng đặt xe, quản lý đơn thuê và thanh toán nhanh chóng.",
    image: "/images/projects/car-rental.jpg",
    tags: ["Next.js", "Laravel", "MySQL"],
    category: "latest",
    fullDescription:
      "Hệ thống quản lý thuê xe toàn diện cho phép người dùng tìm kiếm, đặt xe, quản lý lịch thuê và thanh toán trực tuyến. Ứng dụng hỗ trợ quản trị viên quản lý xe, khách hàng và báo cáo doanh thu theo thời gian thực.",
    features: [
      "Tìm kiếm xe theo loại, giá và tình trạng sẵn có",
      "Đặt xe trực tuyến và theo dõi trạng thái đơn thuê",
      "Tích hợp bản đồ định vị điểm nhận và trả xe",
      "Quản lý thông tin xe, khách hàng và hợp đồng thuê",
      "Thanh toán online qua thẻ hoặc ví điện tử",
      "Báo cáo doanh thu, lượt thuê và tỷ lệ sử dụng xe",
      "Hệ thống xác thực và phân quyền người dùng",
      "Thông báo tự động khi sắp đến hạn trả xe",
    ],
    images: [
    '/images/projects/car-rental.jpg',
    '/images/projects/car-rental-dashboard.jpg',
  ],
    challenges: [
      "Đồng bộ trạng thái xe thuê theo thời gian thực",
      "Tối ưu trải nghiệm tìm kiếm và đặt xe trên nhiều thiết bị",
      "Xử lý thanh toán và bảo mật thông tin người dùng",
    ],
    solutions: [
      "Sử dụng Laravel API kết hợp Next.js để tách biệt frontend/backend",
      "Dùng WebSocket/Pusher để cập nhật trạng thái xe real-time",
      "Thiết kế cơ sở dữ liệu tối ưu cho quản lý lịch thuê và hợp đồng",
    ],
    results: [
      "Tăng 35% tỷ lệ đặt xe trực tuyến",
      "Giảm 50% lỗi trùng lịch thuê",
      "Cải thiện 40% tốc độ xử lý giao dịch và phản hồi người dùng",
    ]
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Website portfolio cá nhân hiện đại với dark theme, animation mượt mà và tích hợp EmailJS.",
    image: "/images/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "popular",
    fullDescription:
      "Website portfolio cá nhân được thiết kế với phong cách hiện đại, tối ưu SEO và hiệu suất, giúp showcase các dự án và kỹ năng một cách chuyên nghiệp.",
    features: [
      "Design hiện đại với dark/light theme",
      "Animation và transitions mượt mà",
      "Tối ưu SEO với Next.js metadata",
      "Form liên hệ với EmailJS",
      "Responsive hoàn hảo mọi thiết bị",
      "Blog tích hợp với MDX",
      "Tối ưu hiệu suất với Next.js Image",
      "Google Analytics tracking",
    ],
    images: [
      "/images/projects/portfolio.jpg",
      "/images/projects/portfolio-projects.jpg",
      "/images/projects/portfolio-contact.jpg",
    ],
    videos: ["/videos/portfolio-demo.mp4"],
    challenges: [
      "Tối ưu hiệu suất và Core Web Vitals",
      "Tạo animation mượt mà không ảnh hưởng performance",
      "SEO tối ưu cho portfolio",
    ],
    solutions: [
      "Sử dụng Next.js 15 với App Router",
      "CSS animations với GPU acceleration",
      "Structured data và Open Graph tags",
    ],
    results: [
      "Lighthouse score 98/100",
      "Page load time < 1 giây",
      "SEO score 100/100",
    ]
  },
];

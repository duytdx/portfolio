// Bảng giá dịch vụ

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
  id: 'basic',
  name: 'Landing Page Cơ Bản',
  price: '800.000đ',
  duration: '3-5 ngày',
  description: 'Phù hợp cho cá nhân, shop nhỏ cần web giới thiệu đơn giản',
  features: [
    'Thiết kế responsive (mobile, tablet, desktop)',
    '3-5 sections (Hero, About, Services, Contact...)',
    'Form liên hệ hoặc nút chat Zalo/Facebook',
    'Tối ưu SEO cơ bản (title, meta, speed)',
    'Triển khai miễn phí lên Vercel hoặc hosting có sẵn',
    'Hỗ trợ chỉnh sửa 7 ngày sau bàn giao',
  ],
  cta: 'Liên hệ tư vấn',
},
{
  id: 'standard',
  name: 'Website Giới Thiệu',
  price: '2.500.000đ',
  duration: '7-10 ngày',
  description: 'Phù hợp cho startup, cửa hàng hoặc dịch vụ cá nhân cần website chuyên nghiệp',
  features: [
    'Tất cả tính năng gói Cơ Bản',
    '5-8 trang (Trang chủ, Dịch vụ, Giới thiệu, Liên hệ...)',
    'Tích hợp Google Maps, Fanpage, hoặc Zalo',
    'Blog tin tức cơ bản (thêm/sửa bài viết thủ công)',
    'Form gửi mail liên hệ thực tế',
    'Tối ưu SEO chuẩn Google',
    'Hỗ trợ 1 tháng sau bàn giao',
  ],
  popular: true,
  cta: 'Liên hệ tư vấn',
},
{
  id: 'premium',
  name: 'Website Quản Lý Nội Dung (CMS)',
  price: '5.000.000đ+',
  duration: '2-3 tuần',
  description: 'Dành cho doanh nghiệp nhỏ hoặc dự án cần quản lý dữ liệu động',
  features: [
    'Tất cả tính năng gói Giới Thiệu',
    'Trang quản trị Admin (CRUD nội dung, bài viết)',
    'Cấu trúc database cơ bản (MySQL hoặc MongoDB)',
    'Chức năng đăng nhập / phân quyền cơ bản',
    'Tích hợp API hoặc gửi dữ liệu qua form',
    'Triển khai lên server hoặc VPS riêng',
    'Hỗ trợ 3 tháng sau bàn giao',
  ],
  cta: 'Liên hệ tư vấn',
},
];

// Pricing data by language
export const pricingByLang = {
  vi: {
    title: 'BẢNG GIÁ DỊCH VỤ',
    subtitle: 'Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn',
    currency: 'đ',
    popular: 'PHỔ BIẾN NHẤT',
    from: 'Từ',
  },
  en: {
    title: 'PRICING PLANS',
    subtitle: 'Choose the package that fits your needs and budget',
    currency: '$',
    popular: 'MOST POPULAR',
    from: 'From',
  },
};

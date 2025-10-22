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
    name: 'Landing Page',
    price: '3.000.000',
    duration: '1-2 tuần',
    description: 'Phù hợp cho startup, cá nhân muốn có website giới thiệu',
    features: [
      'Thiết kế responsive (mobile, tablet, desktop)',
      '5-7 sections (Hero, About, Services, Contact...)',
      'Form liên hệ',
      'Tối ưu SEO cơ bản',
      'Tích hợp Google Analytics',
      'Deploy lên hosting',
      'Hỗ trợ 1 tháng sau bàn giao',
    ],
    cta: 'Bắt đầu ngay',
  },
  {
    id: 'professional',
    name: 'Business Website',
    price: '8.000.000',
    duration: '3-4 tuần',
    description: 'Dành cho doanh nghiệp vừa và nhỏ cần website chuyên nghiệp',
    features: [
      'Tất cả tính năng gói Landing Page',
      'Trang quản trị Admin Dashboard',
      'Quản lý nội dung động (CMS)',
      '10-15 pages',
      'Blog/News system',
      'Multi-language support',
      'Advanced SEO optimization',
      'Tích hợp API bên thứ 3',
      'Backup & Security',
      'Hỗ trợ 3 tháng sau bàn giao',
    ],
    popular: true,
    cta: 'Chọn gói này',
  },
  {
    id: 'enterprise',
    name: 'Full Web Application',
    price: '15.000.000+',
    duration: '6-8 tuần',
    description: 'Giải pháp toàn diện cho E-commerce, CRM, ERP',
    features: [
      'Tất cả tính năng gói Business',
      'Custom tính năng theo yêu cầu',
      'E-commerce/Booking system',
      'User authentication & authorization',
      'Payment gateway integration',
      'Real-time features (Chat, Notification)',
      'Advanced admin dashboard & analytics',
      'Database optimization',
      'Cloud deployment (AWS/VPS)',
      'Source code & documentation đầy đủ',
      'Hỗ trợ 6 tháng + maintenance',
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

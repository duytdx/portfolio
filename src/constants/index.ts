// Các hằng số sử dụng trong ứng dụng

export const SITE_CONFIG = {
  name: 'Portfolio',
  description: 'Portfolio cá nhân của tôi',
  url: 'https://yourportfolio.com',
  locale: 'vi',
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Trang chủ', href: '#home' },
  { id: 'about', label: 'Giới thiệu', href: '#about' },
  { id: 'services', label: 'Dịch vụ', href: '#services' },
  { id: 'projects', label: 'Dự án', href: '#projects' },
  { id: 'pricing', label: 'Bảng giá', href: '#pricing' },
  { id: 'process', label: 'Quy trình', href: '#process' },
  { id: 'contact', label: 'Liên hệ', href: '#contact' },
];

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

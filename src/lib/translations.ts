// Translations cho website - chỉ tiếng Việt
export const translations = {
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
  'about.whyChooseMe': 'Tại sao chọn tôi?',
  'about.benefit1': 'Chuyên nghiệp, tận tâm và luôn đặt chất lượng lên hàng đầu',
  'about.benefit2': 'Giao tiếp hiệu quả, cập nhật tiến độ thường xuyên',
  'about.benefit3': 'Sử dụng công nghệ hiện đại, code sạch và có thể mở rộng',
  'about.benefit4': 'Hỗ trợ tận tình, bảo hành chu đáo sau bàn giao',
  'about.yearsExperience': 'Năm kinh nghiệm',
  'about.projectsCompleted': 'Dự án hoàn thành',
  'about.happyClients': 'Khách hàng hài lòng',
  'about.downloadCV': 'TẢI CV',
  'about.contactNow': 'LIÊN HỆ NGAY',
  'about.viewServices': 'XEM DỊCH VỤ',
  
  // Services Section
  'services.title': 'DỊCH VỤ CUNG CẤP',
  'services.subtitle': 'Dịch vụ chuyên nghiệp với chất lượng cao, đáp ứng mọi nhu cầu của bạn',
  'services.learnMore': 'Tìm hiểu thêm',
  
  // Projects Section
  'projects.title': 'CÁC DỰ ÁN CHẤT LƯỢNG GẦN ĐÂY',
  'projects.all': 'TẤT CẢ',
  'projects.popular': 'PHỔ BIẾN',
  'projects.latest': 'MỚI NHẤT',
  'projects.following': 'THEO DÕI',
  'projects.upcoming': 'SẮP RA',
  'projects.noProjects': 'Không có dự án nào trong danh mục này.',
  
  // Pricing Section
  'pricing.title': 'BẢNG GIÁ DỊCH VỤ',
  'pricing.subtitle': 'Lựa chọn gói dịch vụ phù hợp với nhu cầu của bạn',
  'pricing.popular': 'PHỔ BIẾN',
  'pricing.getStarted': 'BẮT ĐẦU NGAY',
  'pricing.contactUs': 'LIÊN HỆ',
  'pricing.note': 'Lưu ý',
  'pricing.needQuote': 'Cần báo giá cụ thể? Liên hệ ngay để được tư vấn chi tiết!',
  
  // Process Section
  'process.title': 'QUY TRÌNH LÀM VIỆC',
  'process.subtitle': 'Quy trình làm việc chuyên nghiệp, đảm bảo chất lượng và tiến độ',
  'process.startProject': 'BẮT ĐẦU DỰ ÁN',
  'process.startDescription': 'Bạn đã sẵn sàng biến ý tưởng thành hiện thực?',
  'process.freeConsultation': 'TƯ VẤN MIỄN PHÍ',
  'process.viewPricing': 'XEM BẢNG GIÁ',
  
  // Skills Section
  'skills.title': 'KỸ NĂNG CHUYÊN MÔN',
  'skills.subtitle': 'Các công nghệ và kỹ năng tôi thành thạo',
  
  // Testimonials Section
  'testimonials.title': 'ĐÁNH GIÁ TỪ KHÁCH HÀNG',
  'testimonials.subtitle': 'Những phản hồi từ khách hàng đã sử dụng dịch vụ',
  
  // Contact Section
  'contact.title': 'LIÊN HỆ VỚI TÔI',
  'contact.subtitle': 'Hãy để lại thông tin, tôi sẽ liên hệ lại với bạn sớm nhất!',
  'contact.info': 'Thông tin liên hệ',
  'contact.email': 'Email',
  'contact.phone': 'Số điện thoại',
  'contact.social': 'Mạng xã hội',
  'contact.sendMessage': 'Gửi tin nhắn',
  'contact.yourName': 'Tên của bạn',
  'contact.namePlaceholder': 'Nguyễn Văn A',
  'contact.message': 'Tin nhắn',
  'contact.messagePlaceholder': 'Nội dung tin nhắn của bạn...',
  'contact.send': 'GỬI ĐI',
  'contact.sending': 'Đang gửi...',
  'contact.success': 'Tin nhắn đã được gửi thành công!',
  'contact.error': 'Có lỗi xảy ra, vui lòng thử lại sau.',
  
  // Footer
  'footer.rights': 'Bản quyền thuộc về',
  'footer.description': 'Full Stack Developer với niềm đam mê sáng tạo và công nghệ',
  'footer.quickLinks': 'Liên kết nhanh',
  'footer.followMe': 'Theo dõi tôi',
};

// Helper function to get translation
export function t(key: string): string {
  return (translations as Record<string, string>)[key] || key;
}

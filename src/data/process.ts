// Quy trình làm việc

export interface WorkflowStep {
  id: string;
  step: number;
  icon: string;
  title: string;
  description: string;
  duration: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'consultation',
    step: 1,
    icon: 'chat-dots',
    title: 'Tư vấn & Phân tích',
    description: 'Trao đổi chi tiết về dự án, yêu cầu, mục tiêu và ngân sách. Phân tích và đề xuất giải pháp phù hợp nhất.',
    duration: '1-2 ngày',
  },
  {
    id: 'proposal',
    step: 2,
    icon: 'file-earmark-text',
    title: 'Báo giá & Hợp đồng',
    description: 'Gửi báo giá chi tiết, timeline dự án và hợp đồng. Sau khi thống nhất, ký kết và thanh toán đặt cọc 30-50%.',
    duration: '1-2 ngày',
  },
  {
    id: 'design',
    step: 3,
    icon: 'palette',
    title: 'Thiết kế UI/UX',
    description: 'Thiết kế mockup, prototype giao diện. Review và chỉnh sửa theo feedback cho đến khi hài lòng.',
    duration: '3-7 ngày',
  },
  {
    id: 'development',
    step: 4,
    icon: 'code-slash',
    title: 'Phát triển',
    description: 'Coding frontend và backend theo thiết kế đã duyệt. Cập nhật tiến độ định kỳ, demo từng phần hoàn thành.',
    duration: '1-6 tuần',
  },
  {
    id: 'testing',
    step: 5,
    icon: 'bug',
    title: 'Testing & QA',
    description: 'Test toàn bộ tính năng, fix bugs, tối ưu performance. Bàn giao cho client test và góp ý.',
    duration: '3-5 ngày',
  },
  {
    id: 'deployment',
    step: 6,
    icon: 'rocket-takeoff',
    title: 'Deploy & Bàn giao',
    description: 'Deploy lên server/hosting, hướng dẫn sử dụng. Bàn giao source code, tài liệu. Thanh toán số tiền còn lại.',
    duration: '1-2 ngày',
  },
  {
    id: 'support',
    step: 7,
    icon: 'headset',
    title: 'Hỗ trợ & Bảo hành',
    description: 'Hỗ trợ sửa lỗi phát sinh, hướng dẫn thêm nếu cần. Bảo hành theo gói dịch vụ đã chọn.',
    duration: '1-6 tháng',
  },
];

// Workflow data by language
export const workflowByLang = {
  vi: {
    title: 'QUY TRÌNH LÀM VIỆC',
    subtitle: 'Quy trình làm việc chuyên nghiệp, minh bạch từ A đến Z',
  },
  en: {
    title: 'WORKFLOW PROCESS',
    subtitle: 'Professional and transparent workflow from A to Z',
  },
};

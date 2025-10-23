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
    id: "consultation",
    step: 1,
    icon: "chat-dots",
    title: "Trao đổi & Tư vấn",
    description:
      "Trao đổi nhanh qua Zalo hoặc Messenger để hiểu rõ yêu cầu, mục tiêu và phong cách website mong muốn.",
    duration: "0.5 - 1 ngày",
  },
  {
    id: "proposal",
    step: 2,
    icon: "file-earmark-text",
    title: "Báo giá & Xác nhận",
    description:
      "Gửi demo mẫu hoặc layout tham khảo kèm báo giá chi tiết. Khách xác nhận và chuyển cọc 30-50% để bắt đầu.",
    duration: "1 ngày",
  },
  {
    id: "design",
    step: 3,
    icon: "palette",
    title: "Thiết kế Giao diện",
    description:
      "Thiết kế giao diện trên Figma hoặc code trực tiếp. Gửi preview sớm để khách duyệt và góp ý.",
    duration: "2-3 ngày",
  },
  {
    id: "development",
    step: 4,
    icon: "code-slash",
    title: "Lập trình Website",
    description:
      "Xây dựng website hoàn chỉnh (frontend + backend nếu có). Gửi bản demo cho khách kiểm tra tiến độ.",
    duration: "3-7 ngày",
  },
  {
    id: "testing",
    step: 5,
    icon: "bug",
    title: "Kiểm thử & Chỉnh sửa",
    description:
      "Test toàn bộ tính năng, giao diện, tốc độ. Sửa lỗi và tinh chỉnh theo phản hồi của khách.",
    duration: "1-2 ngày",
  },
  {
    id: "deployment",
    step: 6,
    icon: "rocket-takeoff",
    title: "Bàn giao & Triển khai",
    description:
      "Upload website lên hosting hoặc Vercel, bàn giao file source code, hướng dẫn sử dụng và thanh toán phần còn lại.",
    duration: "0.5 - 1 ngày",
  },
  {
    id: "support",
    step: 7,
    icon: "headset",
    title: "Hỗ trợ Sau Bàn giao",
    description:
      "Hỗ trợ chỉnh sửa nhỏ, hướng dẫn thêm hoặc xử lý lỗi trong thời gian bảo hành tùy theo gói dịch vụ (7 ngày – 3 tháng).",
    duration: "7 ngày - 3 tháng",
  },
];

// Workflow data by language
export const workflowByLang = {
  vi: {
    title: "QUY TRÌNH LÀM VIỆC",
    subtitle: "Quy trình làm việc chuyên nghiệp, minh bạch từ A đến Z",
  },
  en: {
    title: "WORKFLOW PROCESS",
    subtitle: "Professional and transparent workflow from A to Z",
  },
};

import { Experience } from '@/types';

// Kinh nghiệm làm việc
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Công ty ABC',
    position: 'Senior Full Stack Developer',
    period: '2023 - Hiện tại',
    description: [
      'Phát triển và duy trì các ứng dụng web quy mô lớn',
      'Làm việc với team để thiết kế và implement các tính năng mới',
      'Review code và mentor junior developers',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
  },
  {
    id: '2',
    company: 'Công ty XYZ',
    position: 'Full Stack Developer',
    period: '2021 - 2023',
    description: [
      'Xây dựng các REST APIs và microservices',
      'Phát triển giao diện người dùng với React và Vue.js',
      'Tối ưu hóa hiệu suất ứng dụng',
    ],
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Docker'],
  },
];

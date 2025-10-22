import { ContactInfo, Stats } from '@/types';

// Thông tin cá nhân
export const personalInfo = {
  name: 'duytdx',
  title: 'Full Stack Developer',
  subtitle: 'JUNIOR FULL STACK DEVELOPER',
  bio: 'Mô tả ngắn về bản thân bạn. Điều gì khiến bạn đặc biệt và những gì bạn đam mê. Tôi đang phát triển kỹ năng trong việc phát triển website và ứng dụng web.',
  avatar: '/images/avatar.jpg',
  cvUrl: '/cv/resume.pdf',
};

// Thống kê
export const stats: Stats = {
  yearsExperience: 2,
  projectsCompleted: 20,
  happyClients: 15,
  awardsWon: 3,
};

// Thông tin liên hệ
export const contactInfo: ContactInfo = {
  email: 'khuongduy.works@gmail.com',
  phone: '+84 395 099 722',
  location: 'Hà Nội, Việt Nam',
  socialLinks: [
    {
      id: '1',
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61582067662362',
      icon: 'facebook',
    },
    {
      id: '2',
      name: 'Zalo',
      url: 'https://zalo.me/0395099722',
      icon: 'chat-dots-fill',
    },
    {
      id: '3',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/duy-tr%E1%BA%A7n-b06685364/',
      icon: 'linkedin',
    },
    {
      id: '4',
      name: 'Discord',
      url: 'https://discord.com/users/yourusername',
      icon: 'discord',
    },
  ],
};

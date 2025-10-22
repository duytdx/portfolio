import { ContactInfo, Stats } from '@/types';

type Language = 'vi' | 'en';

// Personal Info by Language
export const personalInfoByLang: Record<Language, {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  avatar: string;
  cvUrl: string;
}> = {
  vi: {
    name: 'duytdx',
    title: 'Full Stack Developer',
    subtitle: 'JUNIOR FULL STACK DEVELOPER',
    bio: 'Tôi chuyên phát triển website và ứng dụng web toàn diện với React, Next.js, Node.js và Laravel. Cam kết mang đến sản phẩm chất lượng cao, đúng deadline và giá cả hợp lý. Với 2 năm kinh nghiệm thực tế, tôi đã hoàn thành 20+ dự án cho các khách hàng cá nhân và doanh nghiệp nhỏ.',
    avatar: '/images/avatar.jpg',
    cvUrl: '/cv/resume.pdf',
  },
  en: {
    name: 'duytdx',
    title: 'Full Stack Developer',
    subtitle: 'JUNIOR FULL STACK DEVELOPER',
    bio: 'I specialize in developing comprehensive websites and web applications using React, Next.js, Node.js, and Laravel. Committed to delivering high-quality products on time and within budget. With 2 years of hands-on experience, I have completed 20+ projects for individual clients and small businesses.',
    avatar: '/images/avatar.jpg',
    cvUrl: '/cv/resume.pdf',
  },
};

// Stats (numbers are the same)
export const stats: Stats = {
  yearsExperience: 2,
  projectsCompleted: 20,
  happyClients: 15,
  awardsWon: 3,
};

// Contact Info by Language
export const contactInfoByLang: Record<Language, ContactInfo> = {
  vi: {
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
        url: 'https://discord.com/users/duytdx',
        icon: 'discord',
      },
    ],
  },
  en: {
    email: 'khuongduy.works@gmail.com',
    phone: '+84 395 099 722',
    location: 'Hanoi, Vietnam',
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
        url: 'https://discord.com/users/duytdx',
        icon: 'discord',
      },
    ],
  },
};

// Helper functions
export function getPersonalInfo(lang: Language) {
  return personalInfoByLang[lang];
}

export function getContactInfo(lang: Language) {
  return contactInfoByLang[lang];
}

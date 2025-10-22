// Định nghĩa các types cho dự án portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'all' | 'popular' | 'latest' | 'following' | 'upcoming';
  link?: string;
  github?: string;
  demo?: string;
  // Thông tin chi tiết cho trang project detail
  fullDescription?: string;
  features?: string[];
  images?: string[];
  videos?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  duration?: string;
  role?: string;
  client?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription?: string;
  features?: string[];
  technologies?: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  socialLinks: SocialLink[];
}

export interface Stats {
  yearsExperience: number;
  projectsCompleted: number;
  happyClients: number;
  awardsWon?: number;
}

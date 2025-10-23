'use client';

import React from 'react';
import { t } from '@/lib/translations';
import { getPersonalInfo, getContactInfo } from '@/data/personalData';

export default function HeroSection() {
  const personalInfo = getPersonalInfo('vi');
  const contactInfo = getContactInfo('vi');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block text-sm md:text-base uppercase tracking-widest text-gray-400 mb-4">
              {t('hero.greeting')}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white">
            {t('hero.iam')}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {personalInfo.name.toUpperCase()}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 uppercase tracking-wider mb-12">
            {personalInfo.subtitle || personalInfo.title}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {t('hero.hireMe')}
            </a>
            <a
              href={personalInfo.cvUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:!text-gray-900 transition-all duration-300"
            >
              {t('hero.getCV')}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            {contactInfo.socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-gray-500 text-white flex items-center justify-center hover:border-blue-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
                aria-label={link.name}
              >
                <i className={`bi bi-${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-sm mb-2">{t('hero.scrollDown')}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

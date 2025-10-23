'use client';

import React from 'react';
import Image from 'next/image';
import { t } from '@/lib/translations';
import { getPersonalInfo, stats } from '@/data/personalData';

export default function AboutSection() {
  const personalInfo = getPersonalInfo('vi');

  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            {/* Value Proposition */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('about.whyChooseMe')}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <i className="bi bi-check-circle-fill text-green-400 text-xl mt-1"></i>
                <span className="text-gray-300">
                  {t('about.benefit1')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="bi bi-check-circle-fill text-green-400 text-xl mt-1"></i>
                <span className="text-gray-300">
                  {t('about.benefit2')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="bi bi-check-circle-fill text-green-400 text-xl mt-1"></i>
                <span className="text-gray-300">
                  {t('about.benefit3')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="bi bi-check-circle-fill text-green-400 text-xl mt-1"></i>
                <span className="text-gray-300">
                  {t('about.benefit4')}
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg shadow-sm border border-gray-700">
                <div className="text-3xl font-bold text-blue-400">{stats.projectsCompleted}+</div>
                <div className="text-sm text-gray-400 mt-2 font-medium">{t('about.projectsCompleted')}</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg shadow-sm border border-gray-700">
                <div className="text-3xl font-bold text-green-400">{stats.happyClients}+</div>
                <div className="text-sm text-gray-400 mt-2 font-medium">{t('about.happyClients')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <i className="bi bi-eye"></i>
                {t('about.viewServices')}
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:!text-gray-900 transition-all duration-300 flex items-center gap-2"
              >
                <i className="bi bi-chat-dots"></i>
                {t('about.contactNow')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { skills } from '@/data/skills';
import Image from 'next/image';

export default function SkillsSection() {
  const { t } = useLanguage();

  const categories = {
    frontend: { color: 'from-blue-400 to-cyan-400' },
    backend: { color: 'from-purple-400 to-pink-400' },
    tools: { color: 'from-green-400 to-emerald-400' },
  };

  return (
    <section id="skills" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, { color }]) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === key
            );

            if (categorySkills.length === 0) return null;

            return (
              <div
                key={key}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Category Header */}
                <div className="mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {key === 'frontend' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      )}
                      {key === 'backend' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      )}
                      {key === 'tools' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t(`skills.${key}`)}</h3>
                </div>

                {/* Technology Logos Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-gray-500 hover:bg-gray-900/70 transition-all duration-300 group"
                    >
                      <div className="relative w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <span className="text-xs text-gray-300 text-center font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

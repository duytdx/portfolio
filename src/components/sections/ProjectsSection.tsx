'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { t } from '@/lib/translations';
import { projects } from '@/data/projects';

type FilterCategory = 'all' | 'popular' | 'latest' | 'following' | 'upcoming';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters: { value: FilterCategory }[] = [
    { value: 'all' },
    { value: 'popular' },
    { value: 'latest' },
    { value: 'following' },
    { value: 'upcoming' },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {t(`projects.${filter.value}`)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-blue-500/50 block"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-700 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-blue-500 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-purple-600 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show message if no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">{t('projects.noProjects')}</p>
          </div>
        )}
      </div>
    </section>
  );
}

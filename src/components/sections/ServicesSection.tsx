'use client';

import React from 'react';
import { t } from '@/lib/translations';
import { services } from '@/data/services';
import Link from 'next/link';

export default function ServicesSection() {

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('services.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-700 hover:border-blue-500 block"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`bi bi-${service.icon} text-white`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Read More Link */}
              <div className="mt-6">
                <span className="text-blue-400 font-semibold hover:text-purple-400 transition-colors inline-flex items-center gap-2">
                  {t('services.learnMore')}
                  <i className="bi bi-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { t } from '@/lib/translations';
import { workflowSteps, workflowByLang } from '@/data/process';

export default function ProcessSection() {
  const processT = workflowByLang['vi'];

  return (
    <section id="process" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {processT.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400">
            {processT.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {workflowSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex gap-6 md:gap-8 mb-8 last:mb-0"
            >
              {/* Timeline Line */}
              {index < workflowSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>
              )}

              {/* Step Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <i className={`bi bi-${step.icon} text-blue-400 text-xl`}></i>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full whitespace-nowrap">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              {t('process.startProject')}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              {t('process.startDescription')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <i className="bi bi-chat-dots-fill"></i>
                {t('process.freeConsultation')}
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 border-2 border-blue-500 text-white rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <i className="bi bi-currency-dollar"></i>
                {t('process.viewPricing')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

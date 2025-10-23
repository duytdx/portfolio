'use client';

import React from 'react';
import { t } from '@/lib/translations';
import { pricingPlans, pricingByLang } from '@/data/pricing';

export default function PricingSection() {
  const pricingT = pricingByLang['vi'];

  return (
    <section id="pricing" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {pricingT.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400">
            {pricingT.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20'
                  : 'border-gray-700 hover:border-blue-500'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    {pricingT.popular}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              
              {/* Duration */}
              <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                <i className="bi bi-clock"></i>
                {plan.duration}
              </p>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  {plan.price.includes('+') ? (
                    <>
                      <span className="text-gray-400 text-lg">{pricingT.from}</span>
                      <span className="text-4xl font-bold text-white">
                        {plan.price.replace('+', '')}
                      </span>
                      <span className="text-gray-400 text-lg">{pricingT.currency}+</span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 text-lg">{pricingT.currency}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <div className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <i className="bi bi-check-circle-fill text-green-400 text-lg flex-shrink-0 mt-0.5"></i>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl hover:scale-105'
                    : 'border-2 border-gray-600 text-white hover:border-blue-500 hover:bg-blue-500/10'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              <i className="bi bi-info-circle text-blue-400 mr-2"></i>
              {t('pricing.note')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('pricing.needQuote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

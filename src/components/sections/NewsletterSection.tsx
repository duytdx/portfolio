'use client';

import React, { useState } from 'react';
import { t } from '@/lib/translations';
import { getContactInfo } from '@/data/personalData';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const contactInfo = getContactInfo('vi');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setMessage(t('newsletter.success'));
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('newsletter.title')}
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            {t('newsletter.subtitle')}
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.placeholder')}
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 bg-white border-2 border-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 placeholder:text-gray-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 whitespace-nowrap"
            >
              {isSubmitting ? t('newsletter.sending') : t('newsletter.subscribe')}
            </button>
          </form>

          {/* Success Message */}
          {message && (
            <div className="bg-gray-800/90 backdrop-blur-lg rounded-lg px-6 py-3 inline-block mb-8 border border-gray-700">
              <p className="text-white">{message}</p>
            </div>
          )}

          {/* Social Links */}
          <div className="pt-8 border-t border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-white">{t('newsletter.followMe')}</h3>
            <div className="flex justify-center gap-4">
              {contactInfo.socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 text-gray-300"
                  aria-label={link.name}
                >
                  <i className={`bi bi-${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

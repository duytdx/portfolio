'use client';

import React, { useState, FormEvent } from 'react';
import { t } from '@/lib/translations';
import { getContactInfo } from '@/data/personalData';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const contactInfo = getContactInfo('vi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    
    try {
      // Thay thế các giá trị này bằng thông tin từ EmailJS của bạn
      await emailjs.sendForm(
        'service_gukuekt',      // Service ID từ EmailJS
        'template_ohrzcow',     // Template ID từ EmailJS
        form,
        'rnS8bD4-K6JWHqlHZ'       // Public Key từ EmailJS
      );
      
      setSubmitStatus('success');
      form.reset();
      
      // Reset status sau 5 giây
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // Reset status sau 5 giây
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className=''>
              <h3 className="text-2xl font-bold mb-8 text-white">{t('contact.info')}</h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1 font-medium">{t('contact.email')}</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg text-white hover:text-blue-400 transition-colors font-medium"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                {contactInfo.phone && (
                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1 font-medium">{t('contact.phone')}</p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-lg text-white hover:text-green-400 transition-colors font-medium"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Location */}
                {contactInfo.location && (
                  <div className="flex items-start gap-4 group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1 font-medium">Địa chỉ</p>
                      <p className="text-lg text-white font-medium">{contactInfo.location}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-700">
              <h4 className="font-bold mb-6 text-white text-lg">{t('contact.social')}</h4>
              <div className="flex flex-wrap gap-3">
                {contactInfo.socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 border border-gray-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 font-medium hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-2"
                  >
                    <i className={`bi bi-${link.icon} text-lg group-hover:scale-110 transition-transform`}></i>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-white">{t('contact.sendMessage')}</h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-300 flex items-center gap-3">
                <i className="bi bi-check-circle-fill text-xl"></i>
                <span>{t('contact.success')}</span>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-300 flex items-center gap-3">
                <i className="bi bi-exclamation-circle-fill text-xl"></i>
                <span>{t('contact.error')}</span>
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  {t('contact.yourName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder={t('contact.namePlaceholder')}
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t('contact.messagePlaceholder')}
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <i className="bi bi-hourglass-split animate-spin"></i>
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <i className="bi bi-send-fill"></i>
                    {t('contact.send')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

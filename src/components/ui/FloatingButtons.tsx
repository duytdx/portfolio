'use client';

import React, { useState } from 'react';
import { getContactInfo } from '@/data/personalData';

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const contactInfo = getContactInfo('vi');

  // Tìm link Zalo từ socialLinks
  const zaloLink = contactInfo.socialLinks.find(link => link.id === '2')?.url || 'https://zalo.me/0395099722';
  const phoneNumber = contactInfo.phone?.replace(/\s/g, '') || '+84395099722';

  const buttons = [
    {
      id: 'zalo',
      icon: 'bi-chat-dots-fill',
      label: 'Chat Zalo',
      href: zaloLink,
      gradient: 'from-[#0068FF] to-[#0095FF]',
      shadow: 'hover:shadow-[0_8px_30px_rgb(0,104,255,0.4)]',
    },
    {
      id: 'call',
      icon: 'bi-telephone-fill',
      label: 'Gọi ngay',
      href: `tel:${phoneNumber}`,
      gradient: 'from-green-500 to-emerald-500',
      shadow: 'hover:shadow-[0_8px_30px_rgb(34,197,94,0.4)]',
    },
    {
      id: 'message',
      icon: 'bi-envelope-fill',
      label: 'Liên hệ',
      href: '#contact',
      gradient: 'from-purple-500 to-pink-500',
      shadow: 'hover:shadow-[0_8px_30px_rgb(168,85,247,0.4)]',
    },
  ];

  return (
    <>
      {/* Backdrop overlay khi mở */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-4">
        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-[0_8px_30px_rgb(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgb(59,130,246,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center ${
            isOpen ? 'rotate-90 scale-110' : ''
          }`}
          aria-label="Toggle contact menu"
        >
          {/* Icon với animation */}
          <div className="relative w-8 h-8">
            <i
              className={`bi bi-chat-heart-fill absolute inset-0 flex items-center justify-center text-3xl transition-all duration-300 ${
                isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`}
            ></i>
            <i
              className={`bi bi-x-lg absolute inset-0 flex items-center justify-center text-3xl transition-all duration-300 ${
                isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
              }`}
            ></i>
          </div>

          {/* Ripple effect */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-30"></span>
              <span className="absolute inset-0 rounded-full bg-purple-400 animate-pulse opacity-20"></span>
            </>
          )}
        </button>

        {/* Action Buttons */}
        <div
          className={`flex flex-col-reverse gap-3 transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}
        >
          {buttons.map((button, index) => (
            <a
              key={button.id}
              href={button.href}
              target={button.id !== 'message' ? '_blank' : undefined}
              rel={button.id !== 'message' ? 'noopener noreferrer' : undefined}
              className={`group relative overflow-hidden transition-all duration-300 ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 75}ms` : '0ms',
              }}
              onClick={() => {
                if (button.id === 'message') {
                  setIsOpen(false);
                }
              }}
            >
              {/* Glow effect nền */}
              <div className={`absolute inset-0 bg-gradient-to-r ${button.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-full`}></div>
              
              {/* Button container */}
              <div
                className={`relative flex items-center bg-gradient-to-r ${button.gradient} text-white rounded-full shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02] pl-3 pr-5 py-3`}
              >
                {/* Icon */}
                <div className="w-11 h-11 flex items-center justify-center bg-white/15 backdrop-blur-sm rounded-full group-hover:bg-white/25 transition-all duration-300">
                  <i className={`${button.icon} text-xl group-hover:scale-110 transition-transform duration-300`}></i>
                </div>

                {/* Label */}
                <span className="ml-3 text-sm font-semibold whitespace-nowrap tracking-wide">
                  {button.label}
                </span>

                {/* Arrow icon */}
                <i className="bi bi-arrow-right ml-2 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

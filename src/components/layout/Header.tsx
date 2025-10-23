'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { t } from '@/lib/translations';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', href: '#home' },
    { id: 'about', href: '#about' },
    { id: 'services', href: '#services' },
    { id: 'projects', href: '#projects' },
    { id: 'pricing', href: '#pricing' },
    { id: 'process', href: '#process' },
    { id: 'contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-2xl border-b border-gray-200 text-gray-900'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            duytdx
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`font-semibold transition-colors hover:scale-105 inline-block ${
                    isScrolled
                      ? 'text-gray-900 hover:text-blue-600'
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {t(`nav.${item.id}`)}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-current transition-all ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-current transition-all ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-current transition-all ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden text-black  absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <ul className="py-4">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-gray-900 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(`nav.${item.id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { services } from '@/data/services';
import Image from 'next/image';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = params.id as string;

  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Không tìm thấy dịch vụ
          </h1>
          <button
            onClick={() => router.push('/#services')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-xl transition-all"
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4">
          <button
            onClick={() => router.push('/#services')}
            className="mb-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <i className="bi bi-arrow-left text-xl"></i>
            <span>Quay lại</span>
          </button>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-4xl">
              <i className={`bi bi-${service.icon} text-white`}></i>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{service.title}</h1>
              <p className="text-xl text-white/80">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Image (if exists) */}
          {service.image && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Full Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Mô tả chi tiết
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Features */}
          {service.features && service.features.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Tính năng chính
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
                  >
                    <i className="bi bi-check-circle-fill text-blue-400 text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Công nghệ sử dụng
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-xl text-blue-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bạn quan tâm đến dịch vụ này?
            </h3>
            <p className="text-gray-300 mb-6">
              Hãy liên hệ với tôi để thảo luận về dự án của bạn
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => router.push('/#contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <i className="bi bi-envelope-fill"></i>
                Liên hệ ngay
              </button>
              <button
                onClick={() => router.push('/#services')}
                className="px-8 py-4 bg-gray-800 border border-gray-700 text-white rounded-xl font-semibold hover:border-blue-500 transition-all duration-300 flex items-center gap-2"
              >
                <i className="bi bi-grid-3x3-gap-fill"></i>
                Xem dịch vụ khác
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

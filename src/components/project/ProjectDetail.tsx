'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedMedia, setSelectedMedia] = useState(0);

  const allMedia = [
    ...(project.images || [project.image]),
    ...(project.videos || []),
  ];

  const isVideo = (url: string) => url.endsWith('.mp4') || url.endsWith('.webm');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-4"
          >
            <i className="bi bi-arrow-left text-xl"></i>
            <span className="font-semibold">
              Quay lại dự án
            </span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {project.title}
              </h1>
              <p className="text-lg text-gray-300">
                {project.description}
              </p>
            </div>
            
            <div className="flex gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>Xem Demo</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  <i className="bi bi-github"></i>
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Media & Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Media Gallery */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-700">
              {/* Main Media Display */}
              <div className="aspect-video bg-gray-900 relative">
                {isVideo(allMedia[selectedMedia]) ? (
                  <video
                    key={selectedMedia}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  >
                    <source src={allMedia[selectedMedia]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={allMedia[selectedMedia]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Thumbnail Gallery */}
              {allMedia.length > 1 && (
                <div className="p-4 bg-gray-900/50 flex gap-3 overflow-x-auto">
                  {allMedia.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMedia(index)}
                      className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedMedia === index
                          ? 'border-blue-500 shadow-md'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      {isVideo(media) ? (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                          <i className="bi bi-play-circle text-white text-2xl"></i>
                        </div>
                      ) : (
                        <Image
                          src={media}
                          alt={`${project.title} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Full Description */}
            {project.fullDescription && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Mô tả chi tiết
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Tính năng chính
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20"
                    >
                      <i className="bi bi-check-circle-fill text-blue-400 text-xl flex-shrink-0 mt-0.5"></i>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            {(project.challenges || project.solutions) && (
              <div className="grid md:grid-cols-2 gap-6">
                {project.challenges && (
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-700">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Thách thức
                    </h2>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <i className="bi bi-exclamation-circle text-orange-400 text-xl flex-shrink-0 mt-0.5"></i>
                          <span className="text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.solutions && (
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-700">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Giải pháp
                    </h2>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <i className="bi bi-lightbulb text-green-400 text-xl flex-shrink-0 mt-0.5"></i>
                          <span className="text-gray-300">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">
                  Kết quả đạt được
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                        <i className="bi bi-trophy text-4xl mb-3 block"></i>
                        <p className="font-semibold">{result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Project Info */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">
                Công nghệ sử dụng
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">
                Bạn cần dự án tương tự?
              </h3>
              <p className="text-white/90 mb-4">
                Liên hệ với tôi để thảo luận về dự án của bạn
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-primary border backdrop-blur-sm text-gray-900 rounded-full font-semibold hover:bg-white hover:!text-black hover:shadow-lg transition-all"
              >
                <i className="bi bi-envelope"></i>
                <span>Liên hệ ngay</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import UnderlineText from './UnderlineText';

export default function ContactSection() {
    return (
        <div className="space-y-8">
            {/* Contact */}
            <div className="section" id="contact">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    <UnderlineText text="Contact" color="primary" />
                </h2>
                <div className="max-w-2xl mx-auto space-y-6">
                    <a
                        href="mailto:akiyun10@gmail.com"
                        className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📧</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500 mb-1">Email</p>
                            <p className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                akiyun10@gmail.com
                            </p>
                        </div>
                        <svg
                            className="w-6 h-6 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>

                    <a
                        href="https://github.com/bangmim/my-frontend-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                            <svg
                                className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500 mb-1">GitHub</p>
                            <p className="text-lg font-medium text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
                                github.com/bangmim
                            </p>
                        </div>
                        <svg
                            className="w-6 h-6 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* 마무리 메시지 */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 rounded-2xl text-center shadow-xl">
                <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-4">
                    실무 경험과 학업을 병행하며 성장하고 있습니다
                </p>
                <p className="text-lg md:text-xl opacity-90">
                    앞으로도 사용자에게 가치 있는 서비스를 만드는 개발자가 되겠습니다
                </p>
            </div>
        </div>
    );
}

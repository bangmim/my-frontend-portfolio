import React from 'react';
import UnderlineText from './UnderlineText';

export default function Home() {
    return (
        <section className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-8 py-12 md:py-20 animate-slide-up">
            {/* 프로필 이미지 */}

            {/* 메인 헤딩 */}
            <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-6 leading-tight">
                사용자 경험을 생각하는
                <br />
                <UnderlineText text="프론트엔드 개발자" color="primary" />
            </h1>

            {/* 서브 텍스트 */}
            <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-2xl mb-8">
                React Native와 React로 <span className="font-bold text-gray-900">4.8만 사용자가 쓰는 앱</span>을
                만듭니다.
                <br />
                협업하고, 문제를 해결하고, 함께 성장합니다.
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                    href="#projects"
                    className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 active:scale-95"
                >
                    프로젝트 보기
                </a>
                <a
                    href="#contact"
                    className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-50 transition-all duration-200 active:scale-95"
                >
                    연락하기
                </a>
            </div>

            {/* 키워드 섹션 */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <span className="text-4xl mb-3 block">🤝</span>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">협업</h3>
                    <p className="text-gray-600">디자이너, 기획자, 백엔드와 긴밀히 소통합니다</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <span className="text-4xl mb-3 block">🔧</span>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">문제 해결</h3>
                    <p className="text-gray-600">사용자 불편을 파악하고 기술로 해결합니다</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <span className="text-4xl mb-3 block">📚</span>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">성장</h3>
                    <p className="text-gray-600">코드 리뷰와 기술 공유로 함께 성장합니다</p>
                </div>
            </div>
        </section>
    );
}

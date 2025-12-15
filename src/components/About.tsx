import React from 'react';
import UnderlineText from './UnderlineText';
import SkillsAccordion from './SkillsAccordion';
import ProblemSection from './ProblemSection';

export default function About() {
    return (
        <div className="space-y-16 animate-slide-up">
            {/* 인사 */}
            <div className="section">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">안녕하세요.</h1>
                <p className="text-xl md:text-2xl text-gray-700">
                    프론트엔드 개발자 <UnderlineText text="박미현" color="primary" />
                    입니다.
                </p>
                <p className="text-lg text-gray-600 mt-3">React Native 앱 개발 및 웹 개발 (2023.10 ~ 현재)</p>
            </div>

            {/* 소개 */}
            <div className="section space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                    2023년 10월부터 약국 관리 모바일 앱을 개발하고 있습니다. 실시간 채팅, 커뮤니티, 약국관리 등 기능을
                    구현했으며, 비정상 종료율 감소 등 서비스 안정성을 높였습니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    디자이너, 기획자와 화면 흐름을 논의하고 백엔드 API를 연동합니다. Redux, Zustand, Context API 등
                    다양한 상태 관리 도구를 실무에 적용하며 프로젝트 특성에 맞는 기술을 선택합니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    한국방송통신대학교 컴퓨터과학과에서 실무와 이론을 병행하며 2026년 2월 졸업 예정입니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    코드 가독성과 재사용성을 중시하며, 리팩토링을 통해 코드 품질을 개선합니다.
                </p>
            </div>
            {/* 학습 배경 / 경력 */}
            <div className="section">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 교육 */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">교육</h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-gray-900 pl-4">
                                <p className="font-bold text-gray-900 mb-1">한국방송통신대학교 컴퓨터과학과</p>
                                <p className="text-gray-600 mb-2">2026년 2월 졸업 예정</p>
                                <p className="text-sm text-gray-500">컴퓨터과학 기초 이론 및 알고리즘, 자료구조 학습</p>
                            </div>
                            <div className="border-l-4 border-gray-400 pl-4">
                                <p className="font-bold text-gray-900 mb-1">코리아IT아카데미학원</p>
                                <p className="text-gray-600 mb-2">프론트엔드 개발 과정 수료</p>
                                <p className="text-sm text-gray-500">HTML, CSS, JavaScript, React 기반 웹 개발</p>
                            </div>
                        </div>
                    </div>

                    {/* 경력 */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">경력</h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-gray-900 pl-4">
                                <p className="font-bold text-gray-900 mb-1">React Native 앱 개발</p>
                                <p className="text-gray-600 mb-2">2023.10 ~ 현재 (재직 중)</p>
                                <p className="text-sm text-gray-500">약국 관리 모바일 앱 개발 및 유지보수</p>
                            </div>
                        </div>
                    </div>
                    {/* 자격 */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">자격증</h3>
                        <div className="border-l-4 border-gray-900 pl-4">
                            <p className="font-bold text-gray-900 mb-1">SQL개발자(SQLD자격)</p>
                            <p className="text-gray-600 mb-2">2023.04 취득</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 핵심 역량 */}
            <div className="section">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">기술 스택 및 경험</h2>
                <p className="text-gray-600 mb-6">각 항목을 클릭하면 상세 내용을 확인할 수 있습니다</p>
                <SkillsAccordion />
            </div>

            {/* 개발 프로세스 */}
            <ProblemSection />
        </div>
    );
}

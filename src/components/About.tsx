import React from 'react';

export default function About() {
    const skills = [
        {
            icon: '📱',
            name: 'React Native',
            desc: '실무 앱 개발 및 유지보수 ',
        },
        {
            icon: '⚛️',
            name: 'React',
            desc: '웹 기반 관리자 페이지 개발 경험',
        },
        {
            icon: '🔷',
            name: 'TypeScript / JavaScript',
            desc: '타입 안정성을 고려한 개발',
        },
        {
            icon: '🔄',
            name: 'Redux / Zustand',
            desc: '전역 상태 관리 (Context API 병행)',
        },
        {
            icon: '💬',
            name: 'WebSocket (STOMP)',
            desc: '실시간 채팅 기능 개발 경험',
        },
        {
            icon: '🎨',
            name: 'HTML / CSS / Tailwind',
            desc: '반응형 UI 구현',
        },
        {
            icon: '🔧',
            name: 'Git / 앱 스토어',
            desc: 'iOS/Android 배포 및 버전 관리',
        },
        {
            icon: <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" className="w-6 h-6" />,
            name: 'Figma',
            desc: '디자인 협업 및 프로토타이핑',
        },
    ];

    return (
        <div className="space-y-16 animate-slide-up">
            {/* 인사 */}
            <div className="section">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">안녕하세요.</h1>
                <p className="text-xl md:text-2xl text-gray-700">
                    프론트엔드 개발자 <span className="font-bold text-gray-900">박미현</span>입니다.
                </p>
                <p className="text-lg text-gray-600 mt-3">React Native 앱 개발 및 웹 개발 (2023.10 ~ 현재)</p>
            </div>

            {/* 소개 */}
            <div className="section space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                    2023년 10월부터 현재까지 48,000여명이 이용하는 모바일 앱을 개발하고 유지보수하고 있습니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    실무에서는 디자인/기획자와 화면 흐름과 UX를 논의하고, 백엔드에서 제공하는 API를 바탕으로 실시간
                    채팅, 커뮤니티 등 기능을 구현해 왔습니다. Redux, Context API, Zustand 등 여러 상태 관리 도구를
                    실제 서비스에 적용해 보며 상황에 맞게 기술을 선택하고 운영하는 경험을 쌓고 있습니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    한국방송통신대학교에서 컴퓨터과학을 공부하며 개발 실무와 이론을 병행하고 있으며, 더 나은 개발자가
                    되기 위해 꾸준히 학습하고 있습니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    개발할 때는 코드 가독성과 재사용성을 중요하게 생각하며, 리팩토링을 통해 지속적으로 코드 품질을
                    개선하려고 노력합니다. 동료들과는 진행 상황과 고민 지점을 자주 공유하면서, 혼자 해결하기보다 함께
                    더 나은 방법을 찾는 협업 방식을 지향합니다.
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
                                <p className="text-gray-600 mb-2">재학 중 (4학년)</p>
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

            {/* 기술 스택 */}
            <div className="section">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">기술 스택 및 경험</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <span className="text-2xl mt-0.5">{skill.icon}</span>
                            <div>
                                <p className="text-lg font-semibold text-gray-900">{skill.name}</p>
                                <p className="text-sm text-gray-600 mt-1">{skill.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

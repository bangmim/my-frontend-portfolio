import React, { useState, useRef } from 'react';

interface Skill {
    title: string;
    description: string;
    icon: string | JSX.Element;
    details: string[];
}

const skills: Skill[] = [
    {
        title: 'React Native 앱 개발',
        description: '프로덕션 앱 개발 및 운영 (iOS/Android)',
        icon: '📱',
        details: [
            'TypeScript 도입으로 비정상 종료율 감소, 안정성 향상',
            'iOS/Android 크로스 플랫폼 개발 및 앱 스토어 배포',
            '본인인증, 커뮤니티, 실시간 채팅 등 핵심 기능 개발',
            'Firebase Analytics, Crashlytics로 성능 모니터링',
        ],
    },
    {
        title: '상태 관리 아키텍처',
        description: 'Redux, Zustand, Context API 실무 적용',
        icon: '🔄',
        details: [
            'Redux로 중복 모달 로직 단일화 → 개발 생산성 개선',
            'Zustand로 전역 네비게이션 구현 (iOS의 복잡한 제스처 이슈 해결)',
            'Context API로 테마, 인증 상태 관리 및 Provider 패턴 적용',
            '프로젝트 특성에 맞는 상태 관리 도구 선택',
        ],
    },
    {
        title: '실시간 통신 시스템',
        description: 'WebSocket 기반 채팅 및 알림 구현',
        icon: '💬',
        details: [
            'STOMP.js로 실시간 1:1 채팅 및 커뮤니티 댓글 알림 구현',
            '메시지 큐, 재전송 로직으로 네트워크 불안정 시 유실 방지',
            'Singleton 패턴으로 WebSocket 연결 상태 관리',
            '읽음 처리, 채팅방 목록 동기화로 사용자 경험 개선',
        ],
    },
    {
        title: 'UI/UX 개발 및 최적화',
        description: 'React 웹 개발 및 반응형 디자인 구현',
        icon: '🎨',
        details: [
            'React 기반 사내 CMS(관리자 페이지) 신규 화면 개발',
            'TailwindCSS로 빠른 UI 개발 및 일관된 디자인 시스템 구축',
            'Animated API로 이질적인 로딩 UI 통일, 사용자 경험 향상',
            'Figma 기반 디자이너 협업 및 컴포넌트 재사용성 고려',
        ],
    },
];

interface SkillItemProps {
    skill: Skill;
    isOpen: boolean;
    onClick: () => void;
}

const SkillItem = ({ skill, isOpen, onClick }: SkillItemProps) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <li className="border-b border-gray-200 last:border-b-0">
            <button
                className="relative flex gap-3 items-center w-full py-5 text-left hover:bg-gray-50 transition-colors duration-200 px-4"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className={`text-2xl transition-all duration-200 ${isOpen ? 'scale-110' : ''}`}>
                    {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                </span>
                <div className="flex-1">
                    <h3
                        className={`font-semibold text-lg transition-colors duration-200 ${
                            isOpen ? 'text-blue-600' : 'text-gray-900'
                        }`}
                    >
                        {skill.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-0.5">{skill.description}</p>
                </div>
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div
                ref={contentRef}
                className="transition-all duration-300 ease-in-out overflow-hidden"
                style={
                    isOpen ? { maxHeight: contentRef?.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0 }
                }
            >
                <div className="px-4 pb-5 pl-16">
                    <ul className="space-y-2">
                        {skill.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <span className="text-blue-600 mt-1">✓</span>
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default function SkillsAccordion() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <ul>
                {skills.map((skill, index) => (
                    <SkillItem
                        key={skill.title}
                        skill={skill}
                        isOpen={selectedIndex === index}
                        onClick={() => setSelectedIndex(selectedIndex === index ? -1 : index)}
                    />
                ))}
            </ul>
        </div>
    );
}

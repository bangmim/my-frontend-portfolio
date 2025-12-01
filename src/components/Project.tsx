import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

interface Skill {
    name: string;
    icon: string | JSX.Element;
}

interface ProjectData {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    skills: Skill[];
    highlights?: string[];
    review: string;
    link?: string;
    video?: string;
    metricsImages?: string[];
}

export const resolvePublicUrl = (path: string) => {
    if (!path) return path;
    if (path.startsWith('http')) return path;
    const base = process.env.PUBLIC_URL || '';
    return `${base}${path}`;
};
export default function Project() {
    const [previewSrc, setPreviewSrc] = useState<string | null>(null);

    useEffect(() => {
        if (!previewSrc) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setPreviewSrc(null);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [previewSrc]);

    const projects: ProjectData[] = [
        {
            id: 1,
            title: `"약매니저" 앱 프로젝트`,
            subtitle: 'React Native 앱 개발 및 유지보수 (2023.10 ~ 현재)',
            image: 'https://bangmim.github.io/my-frontend-portfolio/img/pmh.jpg',
            description:
                '약국 및 의료기관을 위한 종합 관리 앱입니다. 2023년 10월부터 현재까지 개발 및 유지보수를 담당하고 있으며, 현재 48,000명의 사용자가 이용하고 있습니다.',
            skills: [
                { name: 'React Native', icon: '📱' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'iOS / Android', icon: '📲' },
                { name: 'Redux', icon: '🔄' },
                { name: 'Context API', icon: '⚙️' },
                { name: 'Zustand', icon: '🐻' },
                { name: 'Stomp.js (WebSocket)', icon: '💬' },
                { name: 'Tailwind CSS', icon: '🎨' },
                { name: 'REST API', icon: '🔌' },
                { name: 'Firebase', icon: '🔥' },
                {
                    name: 'Figma',
                    icon: (
                        <img
                            src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                            alt="Figma"
                            className="w-6 h-6"
                        />
                    ),
                },
            ],
            highlights: [
                '커뮤니티 기능 개발',
                '코드 품질 개선 및 리팩토링',
                '실시간 채팅 기능 개발',
                '약매니저 사내 CMS 신규 개발',
            ],
            review: '입사 직후 본인인증 도입 및 대규모 리뉴얼이 있었으며, 커뮤니티 기능 개발과 함께 기존 코드를 분석했습니다.\n\n리뉴얼 초기 발생한 불안정 이슈를 겪으며 배포 전 품질 검증(QA)과 방어적 코딩의 중요성을 절감했습니다. 이를 위해 TypeScript 도입을 통한 타입 안정성 확보와 불필요한 의존성 정리에 집중했고, 그 결과 비정상 종료율을 줄이며 안정적인 서비스를 구축할 수 있었습니다.\n\n기능적으로는 중복된 모달을 Redux로 단일화해 DX를 개선했고, 이질적인 로딩 UI는 Animated 공통 컴포넌트로 통일했습니다. 단발성 이벤트 페이지는 WebView를 연동 및 동적 라우팅으로 유연성을 확보했으며, 복잡한 iOS 제스처는 Zustand 전역 네비게이션으로 해결했습니다.\n\n실시간 채팅의 유실 문제는 큐·재전송·Singleton 전략으로 신뢰성을 높였고, 사내 CMS는 TailwindCSS로 생산성을 높이고 Google OAuth와 Host 감지 기반 진입점을 적용해 보안과 접근 편의성을 동시에 강화했습니다.',
            metricsImages: ['/img/crashImage1.png', '/img/crashImage2.png'],
        },
    ];

    const learningProjects = [
        {
            title: 'ChatApp - 실시간 1:1 채팅 앱',
            description: '개인 사이드 프로젝트',
            skills: 'React Native (TypeScript), Firebase Authentication, Firestore, Storage, React Navigation',
            link: 'https://github.com/bangmim/react-native-chatapp-firebase',
            video: '/video/chatapp.mp4',
            review: '텍스트, 이미지, 음성 메시지를 전송할 수 있는 실시간 1:1 채팅 앱입니다. Firebase Authentication · Firestore · Storage를 기반으로 별도 서버 없이 구현했으며, onSnapshot을 활용한 실시간 메시지 수신, 사용자별 마지막 읽은 시점을 기준으로 한 안 읽은 메시지 수 계산, 이미지/음성 업로드 및 권한 처리(카메라/갤러리/마이크) 등을 설계·구현했습니다. 이 과정에서 Firebase 보안 규칙 설계, 멀티미디어 파일 경로 설계, 안드로이드/iOS 권한 체계 차이에 대한 대응 등을 경험했습니다.',
        },
        {
            title: '자동차 사고 다발 지역 조회',
            description: '그룹 프로젝트 (4인, 조장)',
            skills: 'React, Recharts, Kakao Map API, 공공데이터 API',
            link: 'https://bangmim.github.io/projectIT/',
            review: '4인 그룹 프로젝트의 조장을 맡아 팀원들과 역할을 분담하고 일정을 관리했습니다. 공공데이터 포털의 교통사고 데이터를 활용하여 Recharts로 시각화하고, Kakao Map API를 연동하여 지역별 사고 다발 지역을 지도에 표시했습니다. 협업과 외부 API 연동 경험을 쌓을 수 있었습니다.',
        },
    ];

    return (
        <div className="animate-slide-up">
            {/* 이미지 프리뷰 라이트박스 */}
            {previewSrc && (
                <div
                    className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
                    onClick={() => setPreviewSrc(null)}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={previewSrc}
                            alt="미리보기"
                            className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-md shadow-2xl cursor-zoom-out"
                            onClick={() => setPreviewSrc(null)}
                        />
                    </div>
                </div>
            )}

            {/* 실무 프로젝트 */}
            <div className="section pt-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">실무 프로젝트</h2>
                <div className="space-y-0">
                    {projects.map((project) => (
                        <div key={project.id} className="section">
                            {/* 헤더 */}
                            <div className="mb-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
                                <h3 className="text-xl text-gray-600 font-medium">{project.subtitle}</h3>
                            </div>

                            {/* 설명 */}
                            <div className="mb-4">
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">{project.description}</p>

                                {/* 주요 기능 */}
                                {project.highlights && (
                                    <div className="mt-6">
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                            주요 개발 기능
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-700">
                                                    <span className="text-gray-900 mt-1">•</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* 지표/스크린샷 */}
                            {project.metricsImages && project.metricsImages.length > 0 && (
                                <div className="mt-4">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                        지표 스크린샷
                                    </h4>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        {project.metricsImages.map((src, idx) => (
                                            <div
                                                key={idx}
                                                className="border border-gray-200 bg-white flex-1 cursor-zoom-in hover:shadow-md transition-shadow"
                                                role="button"
                                                tabIndex={0}
                                                onClick={() => setPreviewSrc(resolvePublicUrl(src))}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        e.preventDefault();
                                                        setPreviewSrc(resolvePublicUrl(src));
                                                    }
                                                }}
                                            >
                                                <img
                                                    src={resolvePublicUrl(src)}
                                                    alt="프로젝트 지표 스크린샷"
                                                    className="w-full h-auto object-contain"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* 기술 스택 */}
                            <div className="my-4">
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors duration-200"
                                        >
                                            {typeof skill.icon === 'string' ? (
                                                <span className="text-lg">{skill.icon}</span>
                                            ) : (
                                                <span className="flex items-center">{skill.icon}</span>
                                            )}
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 프로젝트 회고 */}
                            <div className="p-6 bg-blue-50 border-l-4 border-blue-600">
                                <h4 className="text-blue-900 font-semibold mb-2 flex items-center gap-2">
                                    <span>💭</span>
                                    핵심 기여 및 성과
                                </h4>
                                <p className="text-gray-800 leading-relaxed whitespace-pre-line">{project.review}</p>
                            </div>

                            {/* 비디오 */}
                            {project.video && (
                                <div className="mt-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">구현 영상</h4>
                                    <div className="overflow-hidden">
                                        <ReactPlayer
                                            url={resolvePublicUrl(project.video)}
                                            width="100%"
                                            height="400px"
                                            playing={false}
                                            muted={false}
                                            controls={true}
                                            loop={true}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* 링크 */}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-minimal inline-flex items-center gap-2 mt-6"
                                >
                                    <span>프로젝트 보기</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* 학습 프로젝트 */}
            <div className="section border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">개인 학습 프로젝트</h2>
                <p className="text-gray-600 mb-6 text-base">프론트엔드 개발 학습 과정에서 진행한 프로젝트입니다.</p>
                <div className="space-y-6">
                    {learningProjects.map((project, index) => (
                        <div
                            key={index}
                            className="p-6 border-l-4 border-gray-400 hover:border-gray-900 transition-colors duration-200 bg-gray-50"
                        >
                            <h3 className="font-bold text-gray-900 mb-2 text-xl">{project.title}</h3>
                            <p className="text-sm text-blue-600 font-medium mb-3">{project.description}</p>
                            <p className="text-sm text-gray-600 mb-4">{project.skills}</p>
                            {project.review && (
                                <div className="mb-4 p-4 bg-white border-l-2 border-gray-300">
                                    <h4 className="text-base font-semibold text-gray-700 mb-2">역할 및 경험</h4>
                                    <p className="text-base text-gray-700 leading-relaxed">{project.review}</p>
                                </div>
                            )}
                            {'video' in project && project.video && (
                                <div className="mt-4">
                                    <h4 className="text-base font-semibold text-gray-700 mb-2 text-center">
                                        구현 영상
                                    </h4>
                                    <div className="overflow-hidden">
                                        <ReactPlayer
                                            url={resolvePublicUrl(project.video)}
                                            width="100%"
                                            height="260px"
                                            playing={false}
                                            muted={false}
                                            controls={true}
                                            loop={true}
                                        />
                                    </div>
                                </div>
                            )}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium"
                            >
                                프로젝트 보기 →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {/* Contact */}
            <div className="section">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">Contact</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                        <span className="text-2xl">📧</span>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Email</p>
                            <a
                                href="mailto:akiyun10@gmail.com"
                                className="text-lg hover:text-gray-900 transition-colors"
                            >
                                akiyun10@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <svg
                            className="w-8 h-8 text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">View Source Code</p>
                            <a
                                href="https://github.com/bangmim/my-frontend-portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg hover:text-gray-900 transition-colors"
                            >
                                github.com/bangmim/pmh
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 마무리 메시지 */}
            <div className="section bg-gray-900 text-white p-8">
                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                    실무 경험과 학업을 병행하며 성장하고 있습니다.
                    <br />
                    앞으로도 사용자에게 가치 있는 서비스를 만드는 개발자가 되겠습니다.
                </p>
            </div>
        </div>
    );
}

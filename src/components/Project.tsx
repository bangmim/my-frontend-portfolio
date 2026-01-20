import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import UnderlineText from "./UnderlineText";
import ContactSection from "./ContactSection";

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
  if (path.startsWith("http")) return path;
  const base = process.env.PUBLIC_URL || "";
  return `${base}${path}`;
};

export default function Project() {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!previewSrc) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewSrc(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [previewSrc]);

  const projects: ProjectData[] = [
    {
      id: 1,
      title: `"약매니저" 앱 프로젝트`,
      subtitle: "React Native 앱 개발 및 유지보수 (2023.10 ~ 현재)",
      image: "https://bangmim.github.io/my-frontend-portfolio/img/pmh.jpg",
      description:
        "약매니저는 약국과 의료기관에서 의약품 계수·주문·재고 관리와 커뮤니티를 한 번에 사용할 수 있는 종합 업무 앱입니다. 2023년 10월부터 프론트엔드 개발과 유지보수를 맡아, 현재 약 4만 8천 명의 사용자가 사용하는 서비스를 운영하고 있습니다.",
      skills: [
        { name: "React Native", icon: "📱" },
        { name: "TypeScript", icon: "🔷" },
        { name: "iOS / Android", icon: "📲" },
        { name: "Redux", icon: "🔄" },
        { name: "Context API", icon: "⚙️" },
        { name: "Zustand", icon: "🐻" },
        { name: "Stomp.js (WebSocket)", icon: "💬" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "REST API", icon: "🔌" },
        { name: "Firebase", icon: "🔥" },
        {
          name: "Figma",
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
        "실시간 채팅 · 커뮤니티 화면 개발 및 UX 개선",
        "Redux · Context API · Zustand, TypeScript를 활용한 상태 관리 및 리팩토링",
        "약매니저 사내 CMS(관리자 페이지) 신규 화면 개발",
        "릴리즈 대응과 운영 이슈 해결 지원",
      ],
      review:
        "입사 직후 본인인증 도입 및 대규모 리뉴얼이 있었으며, 커뮤니티 기능 개발과 함께 기존 코드를 분석했습니다.\n\n리뉴얼 초기 발생한 불안정 이슈를 겪으며 배포 전 품질 검증(QA)과 방어적 코딩의 중요성을 절감했습니다. 이를 위해 TypeScript 도입을 통한 타입 안정성 확보와 불필요한 의존성 정리에 집중했고, 그 결과 비정상 종료율을 줄이며 안정적인 서비스를 구축할 수 있었습니다.\n\n기능적으로는 중복된 모달을 Redux로 단일화해 DX를 개선했고, 이질적인 로딩 UI는 Animated 공통 컴포넌트로 통일했습니다. 단발성 이벤트 페이지는 WebView를 연동 및 동적 라우팅으로 유연성을 확보했으며, 복잡한 iOS 제스처는 Zustand 전역 네비게이션으로 해결했습니다.\n\n실시간 채팅의 유실 문제는 큐·재전송·Singleton 전략으로 신뢰성을 높였고, 사내 CMS는 TailwindCSS로 생산성을 높이고 Google OAuth와 Host 감지 기반 진입점을 적용해 보안과 접근 편의성을 동시에 강화했습니다.",
      metricsImages: ["/img/crashImage1.png", "/img/crashImage2.png"],
    },
  ];

  const sideProjects = [
    {
      title: "뉴로스 - 뉴스 리딩 앱",
      subtitle: "2025.11 ~ 현재 · 스위프 팀 프로젝트 · 프론트엔드 리드 개발 (PM 1명, 백엔드 2명, 프론트엔드 2명, 디자이너 2명)",
      image: "/img/neurous-icon.png",
      description:
        "뉴로스는 사용자가 기사를 읽고 퀴즈를 풀며 학습하는 뉴스 리딩 앱입니다. 스위프를 통해 진행한 팀 프로젝트로, 프로젝트 초기 아이디어 기획과 앱 이름 선정을 주도했으며, 프론트엔드 리드 개발자로서 전반적인 앱 버전 관리, 레이아웃 관리, 서버 연동 등을 담당했습니다. iOS와 Android 모두 앱스토어에 정식 출시되었으며, 지속적인 버전 업데이트를 진행하고 있습니다.",
      skills: [
        { name: "React Native", icon: "📱" },
        { name: "TypeScript", icon: "🔷" },
        { name: "iOS / Android", icon: "📲" },
        { name: "Zustand", icon: "🐻" },
        { name: "TanStack Query", icon: "🔄" },
        { name: "React Navigation", icon: "🧭" },
        { name: "Firebase Auth", icon: "🔥" },
        { name: "소셜 로그인", icon: "🔐" },
        { name: "Google Mobile Ads", icon: "📢" },
        { name: "Axios", icon: "🌐" },
      ],
      highlights: [
        "프론트엔드 리드 개발자로서 앱 버전 관리 및 배포 프로세스 구축",
        "전역 상태 관리 시스템 설계 및 구현 (Zustand 기반 모달, 인증, 포인트 시스템)",
        "서버 API 연동 아키텍처 설계 및 TanStack Query를 활용한 데이터 페칭 최적화",
        "크로스 플랫폼 레이아웃 관리 및 iOS/Android 네이티브 모듈 연동",
        "소셜 로그인 (Google, Kakao, Naver, Apple) 통합 및 인증 플로우 구현",
        "온보딩 플로우, 미션 시스템, 캐릭터 레벨업, 퀴즈 시스템 등 핵심 기능 개발",
      ],
      review:
        "스위프를 통해 진행한 7명 규모의 팀 프로젝트에서 프로젝트 초기 아이디어 기획과 앱 이름 선정을 주도했으며, 프론트엔드 리드 개발자로서 기술적 의사결정과 코드 리뷰를 담당했습니다. 프로젝트 초기부터 앱스토어 배포까지 전 과정을 경험하며, 버전 관리 전략과 배포 프로세스를 수립했습니다.\n\n전역 상태 관리를 위해 Zustand를 도입하여 모달, 인증, 포인트, 경험치 등 다양한 상태를 효율적으로 관리했습니다. 특히 전역 모달 시스템을 구축하여 어디서든 일관된 UI/UX로 모달을 표시할 수 있도록 했고, TanStack Query를 활용해 서버 상태를 캐싱하고 자동 리패칭하는 구조를 설계했습니다.\n\n서버 연동 부분에서는 Axios 인스턴스를 중앙화하고, 타입 안전성을 보장하기 위해 TypeScript로 API 응답 타입을 엄격하게 정의했습니다. 또한 네비게이션 구조를 체계적으로 설계하여 온보딩, 메인 탭, 전체 화면 스택 등 복잡한 화면 전환을 효율적으로 관리했습니다.\n\n팀 내 React Native가 처음인 동료 개발자를 위해 매주 정기적으로 컨디션 체크를 진행했습니다. 기술적 어려움, 작업 진행 상황, 필요한 도움 등을 확인하며 멘토링 역할을 수행했습니다. 이를 통해 팀 전체의 개발 속도와 코드 품질을 유지할 수 있었습니다.\n\n디자이너의 요구사항에 따라 AsyncStorage를 활용하여 사용자 경험을 최적화했습니다. 온보딩 과정에서 사용자가 중간에 앱을 종료했다가 다시 진입할 경우, 이탈한 페이지부터 이어서 진행할 수 있도록 구현했습니다. 온보딩 진행 상태를 AsyncStorage에 저장하고, 앱 재시작 시 저장된 상태를 확인하여 적절한 화면으로 라우팅하는 로직을 설계하여 사용자 이탈을 줄이고 완료율을 높일 수 있었습니다.",
      iosLink: "https://apps.apple.com/kr/app/뉴로스-neurous/id6757225558?l=en-GB",
      androidLink: "https://play.google.com/store/apps/details?id=io.neurous.app",
      link: undefined,
    },
    {
      title: "딱,가계부 - 가계부 관리 앱",
      subtitle: "2025.10 ~ 2026.01 · 1인 개발 (기획, 디자인, 개발, 배포)",
      image: "/img/moneylog-icon.png",
      description:
        "Supabase 클라우드 DB 기반 가계부 앱으로, Android 스토어에 정식 출시 완료했습니다.",
      skills: [
        { name: "React Native", icon: "📱" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Supabase", icon: "🗄️" },
        { name: "Figma", icon: "🎨" },
        { name: "GitHub Actions", icon: "⚙️" },
        { name: "Google Mobile Ads", icon: "📢" },
      ],
      highlights: [
        "클라우드 기반 데이터 관리 시스템 전환 (SQLite → Supabase)",
        "GitHub Actions를 활용한 인프라 자동화",
        "안드로이드 최신 환경 대응",
        "효율적인 디자인 리소스 제작",
      ],
      review:
        "1인 개발 프로젝트로 기획부터 디자인, 개발, 배포까지 전 과정을 혼자 진행했습니다. 초기에는 SQLite로 시작했지만, 사용자가 기기를 변경하거나 앱을 삭제하면 데이터가 사라지는 문제를 인지하고 클라우드 기반 솔루션으로 전환하기로 결정했습니다.\n\nSupabase 도입 과정에서 무료 플랜의 제약사항을 직접 경험하게 되었습니다. 장기간 사용하지 않으면 인스턴스가 정지되는 문제를 발견했고, 이를 해결하기 위해 GitHub Actions를 활용한 자동화 스크립트를 구현했습니다. 매일 정해진 시간에 간단한 쿼리를 전송하여 인스턴스를 활성 상태로 유지하는 방식으로, 추가 비용 없이 문제를 해결할 수 있었습니다.\n\n안드로이드 최신 환경 대응에서 16KB 페이지 사이즈 호환성 문제로 앱이 빌드되지 않는 상황을 겪었습니다. React Native 공식 문서와 GitHub 이슈를 분석하며 해결책을 찾았고, 의존성 패키지 버전 업그레이드와 gradle 설정 수정을 통해 해결했습니다. 이 경험을 통해 최신 기술 스택의 호환성 문제를 스스로 해결하는 능력을 키울 수 있었습니다.\n\n디자인 리소스 제작에서는 개발자로서 디자인 도구에 익숙하지 않았지만, AI 도구를 활용하여 초안을 빠르게 생성하고 Figma로 정밀하게 가공하는 워크플로우를 구축했습니다. 스토어 등록에 필요한 다양한 해상도의 이미지를 체계적으로 관리하며, 개발 외 영역에서도 효율적으로 작업할 수 있는 방법을 배웠습니다.",
      link: "https://play.google.com/store/apps/details?id=com.simplemoneylog&hl=ko",
    },
  ];

  const learningProjects = [
    {
      title: "Movie Release Reminder - 영화 개봉일 리마인더 앱",
      description:
        "React Native 네이티브 모듈과 로컬 알림을 활용한 개인 사이드 프로젝트",
      skills:
        "React Native (TypeScript), TMDB API, React Navigation, TanStack Query, iOS/Android 캘린더 네이티브 모듈, 로컬 푸시 알림",
      video: "https://www.youtube.com/shorts/esW5zpTkxvs",
      review:
        "TMDB API를 활용해 최신 영화 정보를 조회하고, 관심 있는 영화의 개봉일을 기기 캘린더에 추가하거나 로컬 푸시 알림으로 받아볼 수 있는 앱입니다.\n\niOS(EventKit, Swift)와 Android(Calendar Provider, Kotlin) 네이티브 모듈을 직접 구현해 React Native와 브릿지로 연결했고, TanStack Query를 사용해 서버 상태를 캐싱·리패칭하며 API 호출 흐름을 정리했습니다.\n\n이 과정에서 플랫폼별 권한 처리, 캘린더/알림 스케줄링, 네이티브 모듈의 에러 처리 패턴을 학습하며 크로스 플랫폼 환경에서의 사용자 경험과 안정성을 함께 고려하는 방법을 익혔습니다.",
    },
    {
      title: "YouTube Music 홈 화면 클론",
      description: "React Native UI/애니메이션 학습 프로젝트",
      skills:
        "React Native (TypeScript), Animated API, react-native-linear-gradient, Font Awesome, Safe Area",
      link: "https://github.com/bangmim/react-native-youtubemusic-clone",
      video: "https://www.youtube.com/shorts/vHIRL9L9Tlk",
      review:
        "React Native UI/애니메이션 온라인 강의 예제를 기반으로 YouTube Music 홈 화면을 클론한 프로젝트입니다.\n\nReact Native로 YouTube Music의 홈 화면 인터랙션을 클론한 프로젝트입니다. 스크롤 위치에 따라 상단 헤더가 자연스럽게 숨겨졌다가 다시 나타나는 애니메이션, 카테고리 탭이 상단에 고정(sticky)되면서 배경과 스타일이 바뀌는 효과, 미니 플레이어와 풀스크린 플레이어 간 전환 애니메이션을 구현하는 데 집중했습니다. 또한 그라데이션 배경, Safe Area 처리, 아이콘 시스템(Font Awesome) 적용, @faker-js/faker를 사용한 더미 데이터 생성 등 실제 서비스에 가까운 UI 구조를 설계하면서 React Native에서의 레이아웃과 애니메이션 패턴을 정리할 수 있었습니다.",
    },
    {
      title: "ChatApp - 실시간 1:1 채팅 앱",
      description: "개인 사이드 프로젝트",
      skills:
        "React Native (TypeScript), Firebase Authentication, Firestore, Storage, React Navigation",
      link: "https://github.com/bangmim/react-native-chatapp-firebase",
      video: "https://youtu.be/cbqwafX-eoA",
      review:
        "React Native + Firebase 온라인 강의를 기반으로, 실시간 1:1 채팅 앱을 따라 구현한 프로젝트입니다.\n\n텍스트, 이미지, 음성 메시지를 전송할 수 있는 실시간 1:1 채팅 앱입니다. Firebase Authentication · Firestore · Storage를 기반으로 별도 서버 없이 구현했으며, onSnapshot을 활용한 실시간 메시지 수신, 사용자별 마지막 읽은 시점을 기준으로 한 안 읽은 메시지 수 계산, 이미지/음성 업로드 및 권한 처리(카메라/갤러리/마이크) 등을 설계·구현했습니다. 이 과정에서 Firebase 보안 규칙 설계, 멀티미디어 파일 경로 설계, 안드로이드/iOS 권한 체계 차이에 대한 대응 등을 경험했습니다.",
    },
    {
      title: "자동차 사고 다발 지역 조회",
      description: "그룹 프로젝트 (4인, 조장)",
      skills: "React, Recharts, Kakao Map API, 공공데이터 API",
      link: "https://bangmim.github.io/projectIT/",
      review:
        "4인 그룹 프로젝트의 조장을 맡아 팀원들과 역할을 분담하고 일정을 관리했습니다. 공공데이터 포털의 교통사고 데이터를 활용하여 Recharts로 시각화하고, Kakao Map API를 연동하여 지역별 사고 다발 지역을 지도에 표시했습니다. 협업과 외부 API 연동 경험을 쌓을 수 있었습니다.",
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
      <div className="section pt-0" id="projects">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          <UnderlineText text="실무 프로젝트" color="primary" />
        </h2>
        <p className="text-center text-gray-600 mb-12">
          현재 48,000명이 사용하는 서비스를 개발하고 있습니다
        </p>
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1"
            >
              {/* 헤더 */}
              <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-medium">
                  {project.subtitle}
                </h3>
              </div>

              {/* 설명 */}
              <div className="mb-4">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* 주요 기능 */}
                {project.highlights && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      주요 개발 기능
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-700"
                        >
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
                          if (e.key === "Enter" || e.key === " ") {
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
                      {typeof skill.icon === "string" ? (
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
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {project.review}
                </p>
              </div>

              {/* 비디오 */}
              {project.video && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                    구현 영상
                  </h4>
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
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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

      {/* 사이드 프로젝트 (출시) */}
      <div className="section border-t-2 border-gray-200 pt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          <UnderlineText text="사이드 프로젝트" color="accent" />
        </h2>
        <p className="text-gray-600 mb-12 text-base text-center">
          실제 서비스 출시를 목표로 출시 완료한 프로젝트입니다
        </p>
        <div className="space-y-8">
          {sideProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1"
            >
              {/* 헤더 */}
              <div className="mb-4 flex items-start gap-4">
                {project.image && (
                  <img
                    src={resolvePublicUrl(project.image)}
                    alt={project.title}
                    className="w-20 h-20 rounded-xl object-cover shadow-md flex-shrink-0"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-2xl">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-base text-blue-700 font-semibold mb-2 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      {project.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* 설명 */}
              {project.description && (
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>
              )}

              {/* 주요 기능 */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mt-6 mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    주요 개발 기능
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-gray-900 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 기술 스택 */}
              {project.skills &&
                Array.isArray(project.skills) &&
                project.skills.length > 0 && (
                  <div className="my-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors duration-200 rounded-lg"
                        >
                          {typeof skill.icon === "string" ? (
                            <span className="text-lg">{skill.icon}</span>
                          ) : (
                            <span className="flex items-center">
                              {skill.icon}
                            </span>
                          )}
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* 프로젝트 회고 */}
              {"review" in project && project.review && (
                <div className="p-6 bg-blue-50 border-l-4 border-blue-600 mt-6">
                  <h4 className="text-blue-900 font-semibold mb-2 flex items-center gap-2">
                    <span>💭</span>
                    핵심 기여 및 성과
                  </h4>
                  <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                    {project.review}
                  </p>
                </div>
              )}

              {/* 링크 */}
              {("iosLink" in project && project.iosLink) || ("androidLink" in project && project.androidLink) ? (
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.iosLink && (
                    <a
                      href={project.iosLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.64-.67-2.79-1.14-4.24-1.71C2.58 15.25.3 13.06 2.1 10.38c.32-.5.71-.97 1.15-1.38 3.12-2.97 6.23-5.95 9.35-8.93 1.12-1.07 2.19-.96 3.25.09 1.05 1.04 2.1 2.08 3.15 3.12.4.4.41 1.03.02 1.43-.39.4-.99.41-1.39.02-.96-.96-1.92-1.92-2.88-2.88-.68-.65-1.35-.65-2.03 0-2.6 2.48-5.2 4.96-7.8 7.44-.65.62-.7 1.23-.15 1.98 1.1 1.5 2.28 2.95 3.57 4.3.65.68 1.33.66 2.03.05 1.1-.95 2.2-1.9 3.3-2.85.45-.39 1.03-.38 1.48.05.45.43.45 1.01.01 1.44-.9.9-1.8 1.8-2.7 2.7-.65.65-1.33.65-1.98 0-1.1-1.1-2.2-2.2-3.3-3.3-.45-.45-1.03-.45-1.48 0-.45.45-.45 1.03 0 1.48.96.96 1.92 1.92 2.88 2.88.68.65 1.35.65 2.03 0 2.6-2.48 5.2-4.96 7.8-7.44.65-.62.7-1.23.15-1.98-1.1-1.5-2.28-2.95-3.57-4.3-.65-.68-1.33-.66-2.03-.05-1.1.95-2.2 1.9-3.3 2.85-.45.39-1.03.38-1.48-.05-.45-.43-.45-1.01-.01-1.44.9-.9 1.8-1.8 2.7-2.7.65-.65 1.33-.65 1.98 0 1.1 1.1 2.2 2.2 3.3 3.3.45.45 1.03.45 1.48 0 .45-.45.45-1.03 0-1.48-.96-.96-1.92-1.92-2.88-2.88-.68-.65-1.35-.65-2.03 0-3.12 2.97-6.23 5.95-9.35 8.93-.4.38-.41.99-.02 1.39.39.4.99.41 1.39.02.96-.96 1.92-1.92 2.88-2.88.68-.65 1.35-.65 2.03 0 2.6 2.48 5.2 4.96 7.8 7.44.65.62.7 1.23.15 1.98-1.1 1.5-2.28 2.95-3.57 4.3-.65.68-1.33.66-2.03.05z"/>
                      </svg>
                      <span>App Store에서 보기</span>
                    </a>
                  )}
                  {project.androidLink && (
                    <a
                      href={project.androidLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L14.54,17.15L16.81,19.42L20.16,15.19C21.16,14.5 21.75,13.31 21.75,12C21.75,10.69 21.16,9.5 20.16,8.81L16.81,4.58L14.54,6.85L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <span>Google Play에서 보기</span>
                    </a>
                  )}
                </div>
              ) : project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L14.54,17.15L16.81,19.42L20.16,15.19C21.16,14.5 21.75,13.31 21.75,12C21.75,10.69 21.16,9.5 20.16,8.81L16.81,4.58L14.54,6.85L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Google Play에서 보기</span>
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* 학습 프로젝트 */}
      <div className="section border-t-2 border-gray-200 pt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          <UnderlineText text="개인 학습 프로젝트" color="secondary" />
        </h2>
        <p className="text-gray-600 mb-12 text-base text-center">
          프론트엔드 개발 학습 과정에서 진행한 프로젝트입니다
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 border-l-4 border-gray-400 hover:border-blue-500 transition-all duration-300 bg-white hover:shadow-lg rounded-r-lg h-full flex flex-col group transform hover:-translate-y-1"
            >
              <h3 className="font-bold text-gray-900 mb-2 text-xl group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-blue-600 font-medium mb-3">
                {project.description}
              </p>
              <p className="text-sm text-gray-600 mb-4 font-medium">
                {project.skills}
              </p>
              {project.review && (
                <div className="mb-4 p-4 bg-white border-l-2 border-gray-300">
                  <h4 className="text-base font-semibold text-gray-700 mb-2">
                    역할 및 경험
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {project.review}
                  </p>
                </div>
              )}
              {"video" in project && project.video && (
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  프로젝트 보기 →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Contact */}
      <ContactSection />
    </div>
  );
}

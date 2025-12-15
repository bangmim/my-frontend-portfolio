import React, { useEffect, useState } from 'react';
import Home from './Home';
import About from './About';
import Project from './Project';
import { resolvePublicUrl } from './Project';

export default function Layout() {
    const [activePath, setActivePath] = useState<string>(window.location.hash || '#home');

    // 최초 로드 시 항상 맨 위로 이동하고 해시를 #home으로 맞춤
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        if (!window.location.hash) {
            window.history.replaceState(null, '', '#home');
        }
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            setActivePath(window.location.hash || '#home');
        };
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // 스크롤 위치에 따라 활성 탭 업데이트 (중앙 근처 섹션 기준)
    useEffect(() => {
        const sectionIds = ['home', 'about', 'project'];

        const updateActiveByScroll = () => {
            const centerY = window.innerHeight * 0.4; // 화면 상단 고정 네비 고려하여 살짝 위쪽
            let current: string | null = null;

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= centerY && rect.bottom >= centerY) {
                    current = `#${id}`;
                    break;
                }
            }

            // 중앙에 걸친 섹션이 없으면, 가장 위쪽에 가까운 섹션 사용
            if (!current) {
                let bestId: string | null = null;
                let bestDist = Number.POSITIVE_INFINITY;
                for (const id of sectionIds) {
                    const el = document.getElementById(id);
                    if (!el) continue;
                    const rect = el.getBoundingClientRect();
                    const dist = Math.abs(rect.top - 80); // 고정 헤더 보정
                    if (dist < bestDist) {
                        bestDist = dist;
                        bestId = id;
                    }
                }
                if (bestId) current = `#${bestId}`;
            }

            const currentHash = window.location.hash || '#home';
            if (current && current !== currentHash) {
                setActivePath(current);
                window.history.replaceState(null, '', current);
            }
        };

        // rAF로 스크롤 핸들러 최적화
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(() => {
                    updateActiveByScroll();
                    ticking = false;
                });
            }
        };

        updateActiveByScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    const isActive = (path: string) => {
        return activePath === path;
    };

    const navItems = [
        { path: '#home', label: 'Home' },
        { path: '#about', label: 'About' },
        { path: '#project', label: 'Project' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* 모바일 네비게이션 */}
            <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                <ul className="flex justify-center items-center h-16 px-4">
                    {navItems.map((item) => (
                        <li key={item.path} className="flex-1">
                            <a
                                href={item.path}
                                className={`
                                    block text-center py-2 transition-all duration-200
                                    ${
                                        isActive(item.path)
                                            ? 'text-gray-900 font-semibold border-b-2 border-gray-900'
                                            : 'text-gray-500 hover:text-gray-900'
                                    }
                                `}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 데스크톱 사이드바 */}
            <aside className="hidden md:block fixed top-0 left-0 bottom-0 w-80 bg-white border-r border-gray-200 z-50">
                <div className="flex flex-col items-center pt-16 px-8">
                    {/* 프로필 */}
                    <div className="w-36 h-36 rounded-full overflow-hidden mb-6 transition-all duration-300">
                        <img
                            src={resolvePublicUrl('/img/pmh.png')}
                            alt="박미현"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 mb-2">박미현</h1>
                    <p className="text-lg text-gray-600 font-medium mb-1">Frontend Developer</p>
                    <p className="text-sm text-gray-500 mb-6">2023.10 - Present</p>

                    {/* 네비게이션 */}
                    <nav className="w-full">
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <a
                                        href={item.path}
                                        className={`
                                            block px-6 py-3 text-center font-medium transition-all duration-200 rounded-lg
                                            ${
                                                isActive(item.path)
                                                    ? 'bg-gray-900 text-white shadow-md'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* 메인 컨텐츠 */}
            <main className="pt-20 md:pt-12 md:ml-80 px-4 md:px-8 pb-12">
                <div className="max-w-6xl mx-auto animate-fade-in">
                    <section id="home" className="scroll-mt-24 md:scroll-mt-16 mb-16">
                        <Home />
                    </section>
                    <section id="about" className="scroll-mt-24 md:scroll-mt-16 mb-16">
                        <About />
                    </section>
                    <section id="project" className="scroll-mt-24 md:scroll-mt-16">
                        <Project />
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="md:ml-80 py-6 px-4 md:px-8 border-t border-gray-200">
                <div className="max-w-6xl mx-auto text-center text-sm text-gray-600">
                    © 2025 Mihyun Park.{' '}
                    <a
                        href="https://github.com/bangmim/pmh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:underline"
                    >
                        [View Source Code on GitHub]
                    </a>
                </div>
            </footer>
        </div>
    );
}

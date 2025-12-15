import React from 'react';

const Arrow = ({ extraStyle = '' }: { extraStyle?: string }) => {
    return (
        <svg
            className={`shrink-0 w-12 text-white opacity-70 ${extraStyle}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
    );
};

interface StepProps {
    emoji: string;
    text: string;
}

const Step = ({ emoji, text }: StepProps) => {
    return (
        <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
            <span className="text-4xl">{emoji}</span>
            <h3 className="font-bold text-white">{text}</h3>
        </div>
    );
};

export default function ProblemSection() {
    return (
        <section className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-8 py-16 md:py-32 text-center">
                <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
                    어떻게 개발할까요?
                </h2>
                <p className="max-w-xl break-keep mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20">
                    사용자의 문제를 정확히 이해하고, 최적의 기술로 해결하며, 지속적으로 개선합니다.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
                    <Step emoji="🔍" text="문제 분석 및 요구사항 파악" />
                    <Arrow extraStyle="max-md:-scale-x-100 md:-rotate-90" />
                    <Step emoji="💡" text="최적의 기술 스택 선택" />
                    <Arrow extraStyle="md:-scale-x-100 md:-rotate-90" />
                    <Step emoji="✨" text="구현 및 지속적 개선" />
                </div>
            </div>
        </section>
    );
}

// components/Article/ArticleModal.tsx
"use client";

import { useEffect } from "react";
import { Article } from "./ArticleDetails";

interface ArticleModalProps {
    article: Article | null;
    onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
    useEffect(() => {
        if (article) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [article]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    if (!article) return null;

    return (
        <div
            className="fixed inset-0 z-999 flex items-start sm:items-center sm:justify-center bg-black/50 backdrop-blur-sm px-0 sm:px-4"
            onClick={onClose}
        >
            {/* Modal panel */}
            <div
                className="relative bg-white w-full sm:max-w-3xl max-h-dvh sm:max-h-[88vh] overflow-hidden flex flex-col shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Hero image */}
                <div className="relative w-full h-[200px] sm:h-[300px] shrink-0">
                    <img
                        src={article.image}
                        alt={article.heading}
                        className="w-full h-full object-cover"
                    />

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-black bg-white transition-colors shadow-md"
                        aria-label="Close article"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="overflow-y-auto flex-1 px-5 sm:px-10 py-7">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium text-[#248A3A] bg-[#248A3A]/10 px-2.5 py-1 rounded-full">
                            {article.updatedAt}
                        </span>
                        <span className="text-xs text-gray-400">{article.author}</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#0f1a14] leading-snug mb-3">
                        {article.heading}
                    </h2>

                    {/* Subheading */}
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed border-l-2 border-[#248A3A] pl-4 mb-7 italic">
                        {article.subheading}
                    </p>

                    {/* Divider */}
                    <div className="w-10 h-[2px] bg-[#248A3A] mb-7" />

                    {/* Paragraphs */}
                    <div className="flex flex-col gap-5 pb-6">
                        {article.paragraphs.map((p, i) => (
                            <p key={i} className="text-sm sm:text-[15px] text-gray-700 leading-[1.85]">
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
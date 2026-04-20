'use client'

import Image from "next/image";
import { useState } from "react";

const reviews = [
    {
        id: 1,
        name: "Daniel K.",
        image: "/commentor1.png",
        source: "Google",
        comment:
            "I honestly thought my account was gone for good after multiple failed attempts on my own. Insiq stepped in, handled everything professionally, and kept me updated throughout the process. I was surprised at how quickly they were able to resolve it. Definitely worth it.",
    },
    {
        id: 2,
        name: "Sarah M.",
        image: '/commentor2.jpg',
        source: "Google",
        comment:
            "Very responsive team from start to finish. They explained every step clearly and made sure I understood what was happening. I never felt left in the dark, which really helped ease my anxiety about the situation.",
    },
    {
        id: 3,
        name: "Chinedu A.",
        image: "/commentor3.jpg",
        source: "Trustpilot",
        comment:
            "After weeks of trying to recover my funds myself with no success, I decided to give Insiq a try. They handled the case efficiently and managed to recover everything. I only wish I had reached out sooner.",
    },
    {
        id: 4,
        name: "Michael T.",
        image: "commentor4.jpg",
        source: "Google",
        comment:
            "Professional and discreet service. I was worried about sharing sensitive information, but they handled everything securely and with care. The whole process felt very structured and trustworthy.",
    },
    {
        id: 5,
        name: "Aisha B.",
        image: "/commentor5.png",
        source: "Google",
        comment:
            "They actually deliver on what they promise. The team was supportive, patient, and very knowledgeable. I felt confident working with them and would recommend their services to anyone in a similar situation.",
    },
    {
        id: 6,
        name: "David O.",
        image: undefined,
        source: "Reddit",
        comment:
            "I came across Insiq through an online recommendation and decided to give it a shot. I was skeptical at first, but they proved to be reliable and professional. The results spoke for themselves.",
    },
    {
        id: 7,
        name: "James L.",
        image: "/commentor6.png",
        source: "Google",
        comment:
            "Fast, reliable, and very professional service. The team handled everything smoothly and kept communication consistent. I'm really satisfied with how everything turned out.",
    },
    {
        id: 8,
        name: "Fatima S.",
        image: undefined,
        source: "Trustpilot",
        comment:
            "Communication was excellent throughout the entire process. They guided me step by step and were always available to answer questions. It made a stressful situation much easier to handle.",
    },
    {
        id: 9,
        name: "Emeka N.",
        image: undefined,
        source: "Google",
        comment:
            "Recovered my hacked account within a few days. I had already lost hope, but they came through. The process was smooth and well-organized.",
    },
    {
        id: 10,
        name: "Chris W.",
        image: undefined,
        source: "Google",
        comment:
            "Straightforward process and an honest team. No unnecessary delays or confusion. They did exactly what they said they would do.",
    },
    {
        id: 11,
        name: "Zainab H.",
        image: "/stack3.jpg",
        source: "Trustpilot",
        comment:
            "Very smooth experience from start to finish. The support team was friendly and professional, and I felt reassured throughout the entire process.",
    },
    {
        id: 12,
        name: "Brian C.",
        image: undefined,
        source: "Google",
        comment:
            "They clearly know what they're doing. I had tried other options before with no success, but Insiq delivered results where others couldn't.",
    },
    {
        id: 13,
        name: "Ibrahim U.",
        image: "/stack2.jpg",
        source: "Reddit",
        comment:
            "I was skeptical at first, but after seeing the results, I can confidently say this is a legit service. They handled my case professionally and delivered as promised.",
    },
    {
        id: 14,
        name: "Sophia R.",
        image: 'commentor7.png',
        source: "Google",
        comment:
            "Very helpful support team and quick turnaround time. They made the entire process feel simple and manageable.",
    },
    {
        id: 15,
        name: "Kelvin P.",
        image: "/commentor8.png",
        source: "Trustpilot",
        comment:
            "They handled my case with urgency and care. I appreciated how seriously they took my situation and how quickly they acted.",
    },
    {
        id: 16,
        name: "Grace E.",
        image: undefined,
        source: "Google",
        comment:
            "Clear communication, professional approach, and real results. It's rare to find a service that actually delivers like this.",
    },
    {
        id: 17,
        name: "Victor D.",
        image: "/commentor9.png",
        source: "Google",
        comment:
            "Highly professional team. Everything was handled efficiently and with attention to detail. I would definitely use their services again if needed.",
    },
    {
        id: 18,
        name: "Linda J.",
        image: undefined,
        source: "Trustpilot",
        comment:
            "They made a very stressful situation much easier to deal with. The support and reassurance they provided really stood out.",
    },
    {
        id: 19,
        name: "Tunde F.",
        image: undefined,
        source: "Google",
        comment:
            "Quick response, excellent service, and great communication. I'm very satisfied with the outcome.",
    },
    {
        id: 20,
        name: "Amanda K.",
        image: 'commentor10.png',
        source: "Google",
        comment:
            "Very reliable and professional. They handled everything smoothly and delivered results. I'd recommend them to anyone needing recovery help.",
    },
];

const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-indigo-400",
];

export default function Services() {
    const [visibleCount, setVisibleCount] = useState(6);

    const loadMore = () => {
        if (visibleCount === 6) {
            setVisibleCount(12);
        } else if (visibleCount === 12) {
            setVisibleCount(20);
        }
    };

    const displayedReviews = reviews.slice(0, visibleCount);
    const hasMore = visibleCount < reviews.length;

    return (
        <section
            id="reviews"
            className="flex justify-center flex-col py-20"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            {/* Heading */}
            <div className="w-full flex flex-col items-center text-center max-w-[600px] mx-auto gap-4 mb-14">
                <div className="sm:text-5xl text-3xl font-medium">
                    Verified Client Reviews
                </div>
                <div>
                    Hear from our happy clients about their experience working with Insiq Recovery Services.
                </div>

                <div className="flex gap-4 items-center bg-[#f7f7f7] px-4 py-2 rounded-lg">
                    <img src="/google_logo.svg" alt="" className="w-16" />
                    <div className="font-medium">Excellent</div>

                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                                key={i}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-yellow-400"
                            >
                                <path d="M12 17.27L18.18 21 16.54 13.97 
                  22 9.24l-7.19-.61L12 2 9.19 
                  8.63 2 9.24l5.46 4.73L5.82 
                  21z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-[1100px] mx-auto px-4">
                {displayedReviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm transition"
                    >
                        {/* Top Row */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                {review.image ? (
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src={
                                                review.image.startsWith("/")
                                                    ? review.image
                                                    : `/${review.image}`
                                            }
                                            alt={review.name}
                                            fill
                                            sizes="40px"
                                            className="object-cover rounded-full border border-gray-200"
                                            quality={60}
                                        />
                                    </div>

                                ) : (
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold ${colors[review.id % colors.length]
                                            }`}
                                    >
                                        {review.name.charAt(0)}
                                    </div>
                                )}

                                <div className="text-sm font-medium">
                                    {review.name}
                                </div>
                            </div>

                            {/* Google badge */}
                            <img
                                src="/google_logo.svg"
                                alt="google"
                                className="w-10 h-10"
                            />
                        </div>

                        {/* Stars */}
                        <div className="flex items-center gap-1 mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-4 h-4 text-yellow-400"
                                >
                                    <path d="M12 17.27L18.18 21 16.54 13.97 
                    22 9.24l-7.19-.61L12 2 9.19 
                    8.63 2 9.24l5.46 4.73L5.82 
                    21z" />
                                </svg>
                            ))}
                        </div>

                        {/* Comment */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {review.comment}
                        </p>
                    </div>
                ))}
            </div>

            {/* Show More Button */}
            {hasMore && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={loadMore}
                        className="px-8 py-3 bg-[#248A3A] text-white rounded-lg font-medium 
                                   hover:bg-[#1a6b2d] transition-colors duration-200 
                                   focus:outline-none focus:ring-2 focus:ring-[#248A3A] focus:ring-offset-2"
                    >
                        Show More Reviews
                    </button>
                </div>
            )}
        </section>
    );
}
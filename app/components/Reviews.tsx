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
            "I booked a home massage and was impressed by the professionalism. Very relaxing experience, worth every minute.",
    },
    {
        id: 2,
        name: "James K.",
        image: '/commentor2.jpg',
        source: "Google",
        comment:
            "Didn’t expect such quality at home. The therapist was skilled, punctual, and made the session incredibly soothing.",
    },
    {
        id: 3,
        name: "Linda T.",
        image: null,
        source: "Google",
        comment:
            "I felt completely relaxed after the session. Everything was handled professionally, and the atmosphere was calming throughout.",
    },
    {
        id: 4,
        name: "Marcus D.",
        image: null,
        source: "Google",
        comment:
            "Great service from start to finish. The massage helped ease my stress and tension more than expected.",
    },
    {
        id: 5,
        name: "Priya N.",
        image: "commentor4.jpg",
        source: "Google",
        comment:
            "What stood out most was the communication and professionalism. The massage itself was deeply relaxing and refreshing.",
    },
    {
        id: 6,
        name: "Daniel O.",
        image: "/commentor6.png",
        source: "Google",
        comment:
            "I didn’t realize how much I needed this. The session was calming, and the therapist was highly professional.",
    },
    {
        id: 7,
        name: "Sarah M.",
        image: null,
        source: "Google",
        comment:
            "Very responsive and professional team. The massage was relaxing, and the entire process felt smooth and well-organized.",
    },
    {
        id: 8,
        name: "Chinedu A.",
        image: "/commentor3.jpg",
        source: "Trustpilot",
        comment:
            "After a stressful week, this service was exactly what I needed. Professional, relaxing, and very convenient at home.",
    },
    {
        id: 9,
        name: "Michael T.",
        image: null,
        source: "Google",
        comment:
            "Professional and discreet service. I felt comfortable throughout, and the massage helped me completely unwind.",
    },
    {
        id: 10,
        name: "Aisha B.",
        image: null,
        source: "Google",
        comment:
            "They truly deliver quality service. The therapist was patient, skilled, and made the entire experience enjoyable and relaxing.",
    },
    {
        id: 11,
        name: "David O.",
        image: undefined,
        source: "Reddit",
        comment:
            "I was skeptical at first, but the service exceeded expectations. Very professional, and the results spoke for themselves.",
    },
    {
        id: 12,
        name: "James L.",
        image: null,
        source: "Google",
        comment:
            "Fast booking and excellent service. The massage was relaxing, and everything was handled professionally from start to finish.",
    },
    {
        id: 13,
        name: "Fatima S.",
        image: undefined,
        source: "Trustpilot",
        comment:
            "Communication was excellent, and the therapist was amazing. The session made a stressful day much easier to handle.",
    },
    {
        id: 14,
        name: "Emeka N.",
        image: undefined,
        source: "Google",
        comment:
            "Booked a session at home and it was perfect. The massage was relaxing, and everything felt well-organized.",
    },
    {
        id: 15,
        name: "Chris W.",
        image: undefined,
        source: "Google",
        comment:
            "Straightforward booking and honest service. The massage was great, and the therapist knew exactly what they were doing.",
    },
    {
        id: 16,
        name: "Zainab H.",
        image: "/stack3.jpg",
        source: "Trustpilot",
        comment:
            "Very smooth experience overall. The therapist was friendly, professional, and made the session incredibly relaxing.",
    },
    {
        id: 17,
        name: "Brian C.",
        image: undefined,
        source: "Google",
        comment:
            "They clearly know their craft. The massage relieved tension I’d been dealing with for days.",
    },
    {
        id: 18,
        name: "Ibrahim U.",
        image: "/stack2.jpg",
        source: "Reddit",
        comment:
            "I was unsure at first, but the experience was excellent. Professional service and a deeply relaxing massage session.",
    },
    {
        id: 19,
        name: "Sophia R.",
        image: 'commentor7.png',
        source: "Google",
        comment:
            "Very helpful and professional team. The massage was relaxing, and the whole process felt simple and stress-free.",
    },
    {
        id: 20,
        name: "Kelvin P.",
        image: "/commentor8.png",
        source: "Trustpilot",
        comment:
            "They handled everything with care. The massage was soothing, and I appreciated the attention to detail.",
    },
    {
        id: 21,
        name: "Grace E.",
        image: undefined,
        source: "Google",
        comment:
            "Clear communication and great service. The massage was relaxing, and the results were exactly what I needed.",
    },
    {
        id: 22,
        name: "Victor D.",
        image: "/commentor9.png",
        source: "Google",
        comment:
            "Highly professional team. The massage session was well-executed, and I felt completely relaxed afterward.",
    },
    {
        id: 23,
        name: "Linda J.",
        image: undefined,
        source: "Trustpilot",
        comment:
            "They made a stressful day much better. The massage was calming, and the support was excellent throughout.",
    },
    {
        id: 24,
        name: "Tunde F.",
        image: undefined,
        source: "Google",
        comment:
            "Quick response and excellent service. The massage was relaxing, and I’m very satisfied with the experience.",
    },
    {
        id: 25,
        name: "Amanda K.",
        image: 'commentor10.png',
        source: "Google",
        comment:
            "Very reliable and professional. The massage was soothing, and the entire experience felt smooth and well-managed.",
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
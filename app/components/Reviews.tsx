"use client";

import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Daniel K.",
    image: "/commentor1.png",
    source: "Google",
    comment:
      "I had lost a significant amount to a fraudulent investment platform and didn't know where to turn. I was assigned to Jovy William and honestly Mr. William exceeded every expectation. He took on my case personally, walked me through the entire recovery process, and never made me feel like just another client. Within weeks, my funds were fully recovered. Truly outstanding service.",
  },
  {
    id: 2,
    name: "Sarah M.",
    image: "/commentor2.jpg",
    source: "Google",
    comment:
      "After my crypto wallet was compromised, I was connected with HD Moore and I'm so glad I was. Mr. Moore was thorough, patient, and incredibly professional throughout the whole process. He kept me informed at every stage and made sure I understood exactly what was being done. In the end, every asset was recovered. I cannot thank him and the Insiq team enough.",
  },
  {
    id: 4,
    name: "Michael T.",
    image: "commentor4.jpg",
    source: "Google",
    comment:
      "I was assigned to Jovy William after reporting my case and it turned out to be the best thing that happened through this whole ordeal. Mr. William handled everything with professionalism and discretion. I was initially nervous about sharing sensitive financial details, but he made the process feel completely secure. He recovered my assets and kept everything structured and transparent from start to finish.",
  },
  {
    id: 5,
    name: "Aisha B.",
    image: "/commentor5.png",
    source: "Google",
    comment:
      "I was connected with HD Moore after submitting my case and Mr. Moore was simply exceptional. As someone who had already lost hope after falling victim to an online scam, his calm and confident approach reassured me from day one. He delivered results I genuinely didn't think were possible anymore. Patient, knowledgeable, and incredibly effective. Insiq and Mr. Moore have my highest recommendation.",
  },
  {
    id: 6,
    name: "David O.",
    image: undefined,
    source: "Reddit",
    comment:
      "I came across Insiq through an online recommendation after losing access to my trading account. I was skeptical at first, but they proved to be reliable and professional. The recovery was completed faster than I expected and the results spoke for themselves.",
  },
  {
    id: 7,
    name: "James L.",
    image: "/commentor6.png",
    source: "Google",
    comment:
      "Fast, reliable, and very professional service. The team handled my account recovery smoothly and kept communication consistent throughout. I'm really satisfied with how everything turned out and would not hesitate to recommend Insiq.",
  },
  {
    id: 8,
    name: "Fatima S.",
    image: undefined,
    source: "Trustpilot",
    comment:
      "Communication was excellent throughout the entire process. The Insiq team guided me step by step through recovering my hacked social media and email accounts, and were always available to answer my questions. It made a very stressful situation much easier to handle.",
  },
  {
    id: 9,
    name: "Emeka N.",
    image: undefined,
    source: "Google",
    comment:
      "Recovered my hacked account within a few days. I had already lost hope after trying multiple approaches on my own, but Insiq came through. The process was smooth, well-organized, and completely professional.",
  },
  {
    id: 10,
    name: "Chris W.",
    image: undefined,
    source: "Google",
    comment:
      "Straightforward process and an honest team. No unnecessary delays or confusion. They recovered my funds exactly as promised and kept me informed the whole way through. Refreshingly reliable.",
  },
  {
    id: 11,
    name: "Zainab H.",
    image: "/stack3.jpg",
    source: "Trustpilot",
    comment:
      "Very smooth experience from start to finish. After losing access to my investment account, Insiq stepped in and handled everything with care and precision. The support team was friendly, professional, and I felt reassured throughout the entire process.",
  },
  {
    id: 12,
    name: "Brian C.",
    image: undefined,
    source: "Google",
    comment:
      "They clearly know what they're doing. I had tried other recovery options before with no success, but Insiq delivered results where others couldn't. My stolen crypto was recovered and I finally have peace of mind.",
  },
  {
    id: 13,
    name: "Ibrahim U.",
    image: "/stack2.jpg",
    source: "Reddit",
    comment:
      "I was skeptical at first, but after seeing the results, I can confidently say Insiq is a legitimate and highly capable recovery service. They handled my case professionally, recovered my locked funds, and delivered exactly as promised.",
  },
  {
    id: 14,
    name: "Sophia R.",
    image: "commentor7.png",
    source: "Google",
    comment:
      "Very helpful support team and quick turnaround time. They recovered my compromised account and ensured my assets were fully restored. They made the entire process feel simple and completely manageable.",
  },
  {
    id: 15,
    name: "Kelvin P.",
    image: "/commentor8.png",
    source: "Trustpilot",
    comment:
      "They handled my asset recovery case with urgency and genuine care. I appreciated how seriously they took my situation and how quickly they acted to secure and return my funds. Exceptional service.",
  },
  {
    id: 16,
    name: "Grace E.",
    image: undefined,
    source: "Google",
    comment:
      "Clear communication, professional approach, and real results. Insiq recovered my funds from a scam broker I had given up on. It's rare to find a recovery service that actually delivers, and these guys absolutely do.",
  },
  {
    id: 17,
    name: "Victor D.",
    image: "/commentor9.png",
    source: "Google",
    comment:
      "Highly professional team. My account and remaining assets were recovered efficiently and with great attention to detail. Every update was communicated clearly, and the outcome exceeded my expectations. I would definitely use Insiq again if needed.",
  },
  {
    id: 18,
    name: "Linda J.",
    image: undefined,
    source: "Trustpilot",
    comment:
      "After being scammed out of a large sum, I wasn't sure who to trust. Insiq made a very stressful situation much easier to deal with. The support, transparency, and reassurance they provided throughout the recovery process really stood out.",
  },
  {
    id: 19,
    name: "Tunde F.",
    image: undefined,
    source: "Google",
    comment:
      "Quick response, excellent service, and great communication from the very first contact. My stolen funds were recovered and the whole experience was handled with professionalism. Very satisfied with the outcome.",
  },
  {
    id: 20,
    name: "Amanda K.",
    image: "commentor10.png",
    source: "Google",
    comment:
      "Very reliable and professional. Insiq handled my account recovery smoothly, kept me updated at every stage, and delivered real results. I'd recommend them without hesitation to anyone dealing with fraud or account loss.",
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
          Hear from our happy clients about their experience working with Insiq
          Recovery Services.
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
                <path
                  d="M12 17.27L18.18 21 16.54 13.97 
                  22 9.24l-7.19-.61L12 2 9.19 
                  8.63 2 9.24l5.46 4.73L5.82 
                  21z"
                />
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
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                      colors[review.id % colors.length]
                    }`}
                  >
                    {review.name.charAt(0)}
                  </div>
                )}

                <div className="text-sm font-medium">{review.name}</div>
              </div>

              {/* Google badge */}
              <img src="/google_logo.svg" alt="google" className="w-10 h-10" />
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
                  <path
                    d="M12 17.27L18.18 21 16.54 13.97 
                    22 9.24l-7.19-.61L12 2 9.19 
                    8.63 2 9.24l5.46 4.73L5.82 
                    21z"
                  />
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

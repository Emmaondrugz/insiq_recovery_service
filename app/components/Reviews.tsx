const reviews = [
    {
        id: 1,
        name: "Daniel K.",
        image: "/stack1.jpg",
        source: "Google",
        comment:
            "I honestly thought my account was gone for good. Insiq handled everything professionally and got it back faster than I expected.",
    },
    {
        id: 2,
        name: "Sarah M.",
        image: null,
        source: "Google",
        comment:
            "Very responsive team. They kept me updated the whole time and explained each step clearly.",
    },
    {
        id: 3,
        name: "Chinedu A.",
        image: "/stack2.jpg",
        source: "Trustpilot",
        comment:
            "Recovered my funds after weeks of trying on my own. Worth every penny.",
    },
    {
        id: 4,
        name: "Michael T.",
        image: null,
        source: "Google",
        comment:
            "Professional and discreet. I felt safe sharing sensitive details with them.",
    },
    {
        id: 5,
        name: "Aisha B.",
        image: "/stack3.jpg",
        source: "Google",
        comment:
            "They actually deliver on what they promise. Highly recommended.",
    },
    {
        id: 6,
        name: "David O.",
        image: null,
        source: "Reddit",
        comment:
            "Saw them recommended online and decided to try. Glad I did.",
    },
    {
        id: 7,
        name: "James L.",
        image: "/stack1.jpg",
        source: "Google",
        comment:
            "Fast, reliable, and very professional service.",
    },
    {
        id: 8,
        name: "Fatima S.",
        image: null,
        source: "Trustpilot",
        comment:
            "Communication was top-notch. They guided me through everything.",
    },
    {
        id: 9,
        name: "Emeka N.",
        image: "/stack2.jpg",
        source: "Google",
        comment:
            "Recovered my hacked account within days. Still impressed.",
    },
    {
        id: 10,
        name: "Chris W.",
        image: null,
        source: "Google",
        comment:
            "Straightforward process and honest team.",
    },
    {
        id: 11,
        name: "Zainab H.",
        image: "/stack3.jpg",
        source: "Trustpilot",
        comment:
            "Very smooth experience from start to finish.",
    },
    {
        id: 12,
        name: "Brian C.",
        image: null,
        source: "Google",
        comment:
            "They know what they’re doing. Got results where others failed.",
    },
    {
        id: 13,
        name: "Ibrahim U.",
        image: "/stack1.jpg",
        source: "Reddit",
        comment:
            "Legit service. I was skeptical at first but they proved me wrong.",
    },
    {
        id: 14,
        name: "Sophia R.",
        image: null,
        source: "Google",
        comment:
            "Very helpful support team and quick turnaround.",
    },
    {
        id: 15,
        name: "Kelvin P.",
        image: "/stack2.jpg",
        source: "Trustpilot",
        comment:
            "They handled my case with urgency and care.",
    },
    {
        id: 16,
        name: "Grace E.",
        image: null,
        source: "Google",
        comment:
            "Clear communication and real results. Can’t ask for more.",
    },
    {
        id: 17,
        name: "Victor D.",
        image: "/stack3.jpg",
        source: "Google",
        comment:
            "Highly professional team. Would use again if needed.",
    },
    {
        id: 18,
        name: "Linda J.",
        image: null,
        source: "Trustpilot",
        comment:
            "They made a stressful situation much easier to deal with.",
    },
    {
        id: 19,
        name: "Tunde F.",
        image: "/stack1.jpg",
        source: "Google",
        comment:
            "Quick response and excellent service.",
    },
    {
        id: 20,
        name: "Amanda K.",
        image: null,
        source: "Google",
        comment:
            "Very reliable. I’d recommend them to anyone needing recovery help.",
    },
];

export default function Services() {
    return (
        <div
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
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
                    >
                        {/* Top Row */}
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />

                                <div className="text-sm font-medium">
                                    {review.name}
                                </div>
                            </div>

                            {/* Google badge */}
                            <img
                                src="/google_logo.svg"
                                alt="google"
                                className="w-5 h-5"
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
        </div>
    );
}
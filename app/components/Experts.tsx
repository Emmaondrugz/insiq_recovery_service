import Image from "next/image";

const experts = [
    {
        name: "Marcus Reed",
        position: "Lead Recovery Specialist",
        badge: "Senior",
        image: "/worker1.png",
    },
    {
        name: "Sofia Anderson",
        position: "Digital Forensics Expert",
        badge: "Expert",
        image: "/worker2.png",
    },
    {
        name: "James Whitfield",
        position: "Cyber Threat Analyst",
        badge: "Senior",
        image: "/worker3.png",
    },
    {
        name: "J Cooper",
        position: "Asset Recovery Advisor",
        badge: "Expert",
        image: "/worker4.png",
    },
];

export default function Experts() {
    return (
        <div
            className="flex justify-center flex-col bg-white py-20"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            {/* Header */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1100px] mx-auto gap-6 mb-14 px-6">
                <div className="sm:text-5xl text-3xl font-semibold leading-tight shrink-0 text-[#0f1a14] tracking-tight">
                    The Experts Behind <br /> Our Services
                </div>
                <div className="text-sm md:text-base text-[#6b7d72] max-w-xs md:max-w-[400px] leading-relaxed">
                    Meet our security team that has recovered more than 20 million assets
                    and helped more than 36,500 clients worldwide.
                </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto w-full px-6">
                {experts.map((expert) => (
                    <div
                        key={expert.name}
                        className="group bg-white border border-[#e4ede7] rounded-[20px] overflow-hidden"
                    >
                        {/* Image */}
                        <div className="relative w-full overflow-hidden bg-[#e8f2eb]" style={{ aspectRatio: "4/3.5" }}>
                            <Image
                                src={expert.image}
                                alt={expert.name}
                                fill
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Body */}
                        <div className="px-5 pt-5 pb-5 bg-[#f9f9f9] mb-2 mx-2 rounded-b-lg">
                            <p className="text-[17px] font-semibold text-[#0f1a14] tracking-tight mb-1">
                                {expert.name}
                            </p>
                            <p className="text-[12.5px] font-medium text-gray-600 mb-4">
                                {expert.position}
                            </p>
                            <button
                                className="flex items-center justify-center gap-2 w-full py-2.5
                            border border-[#d1eada] rounded-[10px]
                            text-[13px] font-semibold
                           transition-all duration-200
                           bg-[#248A3A]  text-white"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                Reach Out
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
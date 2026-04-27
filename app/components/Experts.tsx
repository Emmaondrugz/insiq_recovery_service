import Image from "next/image";

const experts = [
    {
        name: "Jovy William",
        position: "Financial Fraud Analyst",
        badge: "Expert",
        image: "/Expert5.png",
        bio: "Specialises in identifying fraudulent financial activity and coordinating recovery.",
    },
    {
        name: "Marcus Reed",
        position: "Lead Recovery Specialist",
        badge: "Senior",
        image: "/team2.jpg",
        bio: "Has over 12 years of experience leading complex asset recovery operations.",
    },
    {
        name: "Sofia Donavan",
        position: "Digital Forensics Expert",
        badge: "Expert",
        image: "/team4.jpg",
        bio: "Specialises in tracing digital footprints left by cybercriminals.",
    },
    {
        name: "Isac Carpie",
        position: "Cybersecurity Expert",
        badge: "Expert",
        image: "/Expert6.jpg",
        bio: "Tracks and analyses encrypted transaction trails to identify threat actors.",
    },
    {
        name: "James Whitfield",
        position: "Cyber Threat Analyst",
        badge: "Senior",
        image: "/team1.jpg",
        bio: "Monitors and analyses emerging cyber threats across banking and crypto platforms.",
    },
    {
        name: "J Cooper",
        position: "Asset Recovery Advisor",
        badge: "Expert",
        image: "/team3.jpg",
        bio: "Brings a sharp legal and financial background to every case.",
    },
];

export default function Experts() {
    return (
        <section
            id="experts"
            className="flex justify-center flex-col py-20"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            {/* Header */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1100px] mx-auto gap-6 mb-14 ">
                <div className="sm:text-5xl text-3xl font-semibold leading-tight shrink-0 text-[#0f1a14] tracking-tight">
                    The Experts Behind <br /> Our Services
                </div>
                <div className="text-sm md:text-base text-[#6b7d72] max-w-xs md:max-w-[400px] leading-relaxed">
                    Meet our security team that has recovered more than 20 million assets
                    and helped more than 36,500 clients worldwide.
                </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto w-full sm:px-6">
                {experts.map((expert) => (
                    <div
                        key={expert.name}
                        className="group bg-white max-w-[400px] w-full overflow-hidden"
                    >
                        <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden bg-[#e8f2eb]" style={{ aspectRatio: "4/3.5" }}>
                            <Image
                                src={expert.image}
                                alt={expert.name}
                                sizes="100"
                                quality={60}
                                fill
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Text below image */}
                        <div className="px-4 py-3">
                            <p className="text-[17px] font-semibold text-[#0f1a14] tracking-tight mb-0.5">
                                {expert.name}
                            </p>
                            <p className="text-[12.5px] font-normal text-gray-500 mb-2">
                                {expert.position}
                            </p>
                            <p className="text-[13px] text-black leading-relaxed line-clamp-3">
                                {expert.bio}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
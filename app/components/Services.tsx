const services = [
    {
        step: "Step 01",
        num: "01",
        title: "Open Your Case",
        body: "Tell us what happened, the best number to reach you on, and when you want us to call.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
    {
        step: "Step 02",
        num: "02",
        title: "Pay And Sign In Securely",
        body: "Use Stripe checkout, then create or claim your secure case login with Google or an email sign-in link.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        step: "Step 03",
        num: "03",
        title: "Get Dedicated Help",
        body: "Use your case workspace to send messages, upload screenshots, schedule a video session, or escalate, and final resolution tracking",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <div className="flex justify-center flex-col py-20" style={{ fontFamily: "'Poppins', sans-serif" }}>

            {/* Existing heading block — unchanged */}
            <div className="w-full flex flex-col items-center text-center max-w-[600px] mx-auto gap-4 mb-14">
                <div className="sm:text-5xl text-3xl font-medium">
                    Open Your Case <br /> And Get Human Support
                </div>
                <div>
                    Start with a callback-first case and open a secure workspace for messages, screenshots, video sessions, and escalation work.
                </div>
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto w-full">
                {services.map((s) => (
                    <div
                        key={s.num}
                        className="relative bg-white rounded-2xl p-9 border border-[#e4ede7] overflow-hidden
                         transition-all duration-300 hover:-translate-y-1.5
                         hover:shadow-[0_20px_48px_rgba(36,138,58,0.12)] hover:border-[#b6d9bf]
                         group"
                    >
                        {/* Top accent bar on hover */}
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-[#248A3A] to-[#5dba72] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Icon */}
                        <div className="w-13 h-13 rounded-[14px] bg-[#248A3A] flex items-center justify-center mb-6" style={{ width: 52, height: 52 }}>
                            {s.icon}
                        </div>

                        <h3 className="text-[19px] font-semibold text-[#0f1a14] mb-3 leading-snug tracking-tight">
                            {s.title}
                        </h3>
                        <p className="text-[14.5px] relative z-2 text-[#6b7d72] leading-relaxed">
                            {s.body}
                        </p>

                        {/* Ghost number */}
                        <span className="absolute z-0 top-6 right-6 text-[64px] font-bold text-[#f0f6f2] leading-none select-none pointer-events-none">
                            {s.num}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
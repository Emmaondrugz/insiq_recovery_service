const blogs = [
    {
        image: '/guide_image1.avif',
        name: 'INSTAGRAM RECOVERY',
        heading: 'How To Recover Hacked Instagram Account',
        body: 'recovery paths for lockouts, 2FA challenges, and evidence-backed escalation when self-serve fails.'
    },
    {
        image: '/guide_image2.avif',
        name: 'LEGAL ESCALATION',
        heading: 'Small Claims Court for Hacked or Disabled Facebook Accounts',
        body: 'When Meta support stalls: documentation, evidence, and realistic expectations for small claims court.'
    },
    {
        image: '/guide_image3.avif',
        name: 'BUSINESS RECOVERY',
        heading: 'Recover a Facebook Business Page or Business Manager',
        body: 'Practical steps for stolen admin access, Business Manager lockouts, and agency handover disputes.'
    },
]


export default function Blogs() {
    return (
        <div className="flex justify-center flex-col py-20" style={{ fontFamily: "'Poppins', sans-serif" }}>

            {/* Existing heading block — unchanged */}
            <div className="w-full flex flex-col items-center text-center max-w-[600px] mx-auto gap-4 mb-14">
                <div className="sm:text-5xl text-3xl font-medium">
                    Practical Recovery Guides
                </div>
                <div>
                    Containment-first playbooks for hacked and disabled accounts, including common Meta recovery failure modes: email changed, attacker-enabled 2FA, disabled accounts, and business asset takeovers.
                </div>
            </div>

            {/* Guide boxes container */}
            <div className="flex justify-center flex-wrap gap-5">
                {blogs.map((b) => (
                    <div className="max-w-[350px] flex flex-col min-h-[450px] h-auto pb-20 w-full">
                        <div className="h-[250px] w-full">
                            <img src={b.image} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4 py-5 px-2 bg-white grow">
                            <div className="font-medium text-sm text-gray-500">
                                {b.name}
                            </div>
                            <div className="font-medium text-2xl">
                                {b.heading}
                            </div>
                            <div className="text-sm">
                                {b.body}
                            </div>

                            <a href="" className="underline">Read more</a>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}
'use client'

import Image from "next/image"
import Link from "next/link"

export default function Contact() {
    const handleSendMail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value
        const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value
        const email = (form.elements.namedItem("email") as HTMLInputElement).value

        const recipient = "insiqrecovery@gmail.com"
        const subject = encodeURIComponent(`Recovery Request from ${firstName} ${lastName}`)
        const body = encodeURIComponent(
            `Hello Insiq Recovery Services,\n\nMy name is ${firstName} ${lastName} and I would like to reach out regarding account recovery.\n\nMy email address is: ${email}\n\nPlease get back to me at your earliest convenience.\n\nThank you.`
        )

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

        if (isMobile) {
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
        } else {
            window.open(`https://mail.google.com/mail/?view=cm&to=${recipient}&su=${subject}&body=${body}`, "_blank")
        }
    }

    return (
        <div className="w-full pt-1 sm:pt-0">
            <div className="w-full mx-auto">
                {/* Form container */}
                <div className="w-full flex lg:justify-between relative justify-center sm:items-center min-h-screen">

                    {/* Back button */}
                    <Link
                        href="/"
                        className="absolute top-4 left-1 z-50 sm:left-4 justify-center rounded-full p-4 flex items-center gap-2 text-sm text-black"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="currentColor" className="mr-2">
                            <path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" />
                        </svg>
                        <div className="h-6 w-[2px] bg-black"></div>
                        <img src="/insiq.png" alt="logo" className="w-11" />
                        <div className="text-xs md:text-base hidden sm:flex font-medium">
                            Insiq Recovery Services
                        </div>
                    </Link>

                    {/* Form content */}
                    <div className="lg:w-[40%] sm:mx-6 h-full sm:h-[500px] flex flex-col sm:items-center md:items-start w-full relative pt-28 px-4 sm:p-3">
                        {/* heading */}
                        <div className="max-w-[400px] flex flex-col gap-3">
                            <p className="sm:text-4xl text-2xl">Reach Out To Us</p>
                            <p className="sm:text-base text-sm">Send a direct request for urgent account recovery, business security issues, or related.</p>
                        </div>

                        {/* form inputs */}
                        <form onSubmit={handleSendMail} className="flex flex-col gap-4 mt-5 sm:mt-10 w-full max-w-[400px]">

                            {/* First Name */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    name="firstName"
                                    type="text"
                                    placeholder="John"
                                    required
                                    className="border border-gray-300 rounded-md px-4 py-2 text-base outline-none focus:border-[#248A3A] transition-colors"
                                />
                            </div>

                            {/* Last Name */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    name="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    required
                                    className="border border-gray-300 rounded-md px-4 py-2 text-base outline-none focus:border-[#248A3A] transition-colors"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="john.doe@example.com"
                                    required
                                    className="border border-gray-300 rounded-md px-4 py-2 text-base outline-none focus:border-[#248A3A] transition-colors"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-2 flex items-center justify-center gap-3 bg-[#248A3A] text-white text-base font-medium rounded-md px-4 py-2.5 shadow-sm transition-colors hover:bg-[#1a6b2c]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18px" height="18px">
                                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
                                    <path fill="#fff" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
                                    <polygon fill="#fff" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
                                    <path fill="#fff" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" />
                                    <path fill="#4caf50" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z" />
                                </svg>
                                Send Mail
                            </button>

                        </form>
                    </div>

                    {/* Form Image */}
                    <div className="lg:flex hidden w-[60%] relative h-screen">
                        <Image
                            src={'/form.jpg'}
                            alt="profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();

    const handleSectionNav = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        if (pathname === "/") {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push(`/#${sectionId}`);
        }
    };

    return (
        <footer className="w-full border-t border-gray-100 bg-white mt-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-20 py-14">

                {/* Top row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

                    {/* Brand block */}
                    <div className="flex flex-col gap-4 max-w-sm">
                        <div className="flex items-center gap-2.5">
                            <img src="/insiq.png" alt="logo" className="w-12 md:w-14" />
                            <div className="h-5 w-[1.5px] bg-gray-300" />
                            <span className="text-sm font-medium text-[#0f1a14]">Insiq Recovery Services</span>
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#248A3A]">
                            Account &amp; Asset Recovery
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Launch your case and collaborate in a secure space for messages, files, and real-time assistance.
                        </p>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Navigate</span>
                            <Link href="/" className="text-sm text-gray-600 hover:text-[#248A3A] transition-colors">Home</Link>
                            <Link href="/Articles" className="text-sm text-gray-600 hover:text-[#248A3A] transition-colors">Articles</Link>
                            <a href="#experts" onClick={(e) => handleSectionNav(e, "experts")} className="text-sm text-gray-600 hover:text-[#248A3A] transition-colors cursor-pointer">Experts</a>
                            <a href="#reviews" onClick={(e) => handleSectionNav(e, "reviews")} className="text-sm text-gray-600 hover:text-[#248A3A] transition-colors cursor-pointer">Reviews</a>
                            <Link href="/Contact-us" className="text-sm text-gray-600 hover:text-[#248A3A] transition-colors">Contact Us</Link>
                        </div>
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-gray-400">
                        © 2024 Insiq Recovery Services. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-400">
                        Secure &middot; Confidential &middot; Professional
                    </p>
                </div>
            </div>
        </footer>
    );
}
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleSectionNav = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();

        if (pathname === "/") {
            // Already on home — just scroll
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        } else {
            // On another page — go home, then scroll after navigation
            router.push(`/#${sectionId}`);
        }

        setMenuOpen(false);
    };

    return (
        <>
            <div className="flex justify-between py-4 items-center relative z-100 bg-transparent">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/insiq.png" alt="logo" className="w-12 md:w-16" />
                    <div className="h-6 w-[2px] bg-black"></div>
                    <div className="text-xs md:text-base font-medium">
                        Insiq Recovery Services
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex justify-between gap-8 xl:gap-20 items-center">
                    <div className="flex gap-4 xl:gap-5 items-center">
                        <Link href="/" className="text-sm xl:text-base hover:text-[#248A3A] transition-colors">Home</Link>
                        <Link href="/Articles" className="text-sm xl:text-base hover:text-[#248A3A] transition-colors">Articles</Link>
                        <a href="#experts" onClick={(e) => handleSectionNav(e, "experts")} className="text-sm xl:text-base hover:text-[#248A3A] transition-colors cursor-pointer">Experts</a>
                        <a href="#reviews" onClick={(e) => handleSectionNav(e, "reviews")} className="text-sm xl:text-base hover:text-[#248A3A] transition-colors cursor-pointer">Reviews</a>
                        <Link href="/Contact-us" className="text-sm xl:text-base hover:text-[#248A3A] transition-colors">Contact-us</Link>
                    </div>

                    <a href="https://wa.me/15073807317"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center sm:text-base text-sm shadow-xs justify-center px-8 py-2.5 gap-2 bg-[#248A3A] text-white rounded hover:bg-[#1a6b2d] transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff">
                            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
                        </svg>
                        Get Immediate Help
                    </a>
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span className="w-6 h-0.5 bg-black transition-all duration-300"></span>
                    <span className="w-6 h-0.5 bg-black transition-all duration-300"></span>
                </button>
            </div>

            {/* Mobile Side Nav */}
            <div className={`fixed top-0 left-0 h-full w-full bg-white z-50 lg:hidden transform transition-transform duration-300 ease-out shadow-2xl ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="pt-17 px-2">
                    <nav className="space-y-1">
                        <div className="my-4 border-t border-gray-100"></div>

                        <Link href="/" onClick={() => setMenuOpen(false)} className="block py-3 px-4 text-black text-lg font-normal">
                            Home
                        </Link>

                        <Link href="/Articles" onClick={() => setMenuOpen(false)} className="block py-3 px-4 text-black text-lg font-normal">
                            Articles
                        </Link>

                        <a href="#experts" onClick={(e) => handleSectionNav(e, "experts")} className="block py-3 px-4 text-black text-lg font-normal">
                            Experts
                        </a>

                        <a href="#reviews" onClick={(e) => handleSectionNav(e, "reviews")} className="block py-3 px-4 text-black text-lg font-normal">
                            Reviews
                        </a>

                        <Link href="/Contact-us" onClick={() => setMenuOpen(false)} className="block py-3 px-4 text-black text-lg font-normal">
                            Contact Us
                        </Link>
                    </nav>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <a href="https://wa.me/15073807317"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center sm:text-base text-sm shadow-xs justify-center px-8 py-2.5 gap-2 bg-[#248A3A] text-white rounded hover:bg-[#1a6b2d] transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff">
                                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
                            </svg>
                            Get Immediate Help
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50">
                    <p className="text-xs text-gray-500 text-center">© 2024 Insiq Recovery Services</p>
                </div>
            </div>
        </>
    );
}
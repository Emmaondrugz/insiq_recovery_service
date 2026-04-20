// Articles/page.tsx  (or wherever Articles lives)
'use client'
import { useState } from "react";
import Header from "../components/Header";
import Heading from "../components/Article/Heading";
import ArticleModal from "../components/Article/ArticleModal";
import { articles, Article } from '../components/Article/ArticleDetails';
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

export default function Articles() {
    const [selected, setSelected] = useState<Article | null>(null);

    return (
        <div className="w-full">
            <div className="w-full mx-auto">

                <div className="w-full px-4">
                    <Header />
                </div>

                <div className="w-full lg:px-20 px-4">
                    <Heading />

                    <div className="flex justify-center mt-5 flex-wrap gap-5">
                        {articles.map((a) => (
                            <div
                                key={a.id}
                                onClick={() => setSelected(a)}
                                className="lg:max-w-[438px] max-w-full flex flex-col min-h-[450px] h-auto pb-20 w-full cursor-pointer group"
                            >
                                <div className="h-[250px] w-full overflow-hidden">
                                    <img
                                        src={a.image}
                                        alt={a.heading}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col gap-4 py-5 px-2 bg-white grow">
                                    <div className="font-medium text-sm text-gray-500">
                                        {a.updatedAt}
                                    </div>
                                    <div className="font-medium text-2xl">
                                        {a.heading}
                                    </div>
                                    <div className="text-sm">
                                        {a.subheading}
                                    </div>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setSelected(a); }}
                                        className="underline text-left text-sm cursor-pointer hover:text-[#248A3A] transition-colors w-fit"
                                    >
                                        Read more
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ArticleModal article={selected} onClose={() => setSelected(null)} />
            <BackToTop />
            <Footer />
        </div>
    );
}
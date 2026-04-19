'use client'
import Header from "../components/Header";
import Heading from "../components/Article/Heading";
import { articles } from '../components/Article/ArticleDetails'

export default function Articles() {
    return (
        <div className="w-full">
            {/* Constrained wrapper for the whole page */}
            <div className="w-full mx-auto">

                {/* Hero section: background image covers Header + Hero only */}
                <div className="w-full px-4">
                    <Header />
                </div>

                <div className="w-full lg:px-20 px-4">
                    <Heading />

                    {/* blogs container */}
                    <div className="flex justify-center mt-5 flex-wrap gap-5">
                        {articles.map((a) => (
                            <div className="lg:max-w-[438px] max-w-full flex flex-col min-h-[450px] h-auto pb-20 w-full">
                                <div className="h-[250px] w-full">
                                    <img src={a.image} alt="" className="w-full h-full object-cover" />
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

                                    <a href="" className="underline">Read more</a>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>
        </div >
    );
}

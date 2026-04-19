export default function Whyus() {
    return (
        <div className="flex justify-center py-20" style={{ fontFamily: "'Poppins', sans-serif" }}>

            <div className="flex max-w-[1100px] md:flex-row flex-col-reverse w-full justify-between gap-14">
                {/* congress man image */}
                <div className="flex flex-col gap-5  p-2 rounded-lg">
                    <img src="/congressman.avif" alt="" className="max-w-[400px] rounded-lg" />
                    <div className="p-5">
                        <div className="text-xl font-medium">Alan Grayson</div>
                        <div className="underline">Former Congressman
                            Orlando, Florida</div>
                    </div>
                </div>

                {/* Existing heading block — unchanged */}
                <div className="w-full flex flex-col items-center text-left max-w-[600px] mx-auto gap-4">
                    <div className="sm:text-5xl text-3xl font-medium">
                        Why Our clients Trust Us
                    </div>
                    <div className="border-l pl-5">
                        "Insiq security services gave me immediate expert assistance, spent a great deal of time pinning down the problem, and provided a high level of professionalism and service that most companies today can't even dream of. And Hacked.com did what was needed to help me to keep in touch with my 160,000+ friends on Facebook. I'm grateful, and I wish that Facebook would put Hacked.com in charge of its customer service.”
                    </div>
                </div>
            </div>

        </div>
    )
}
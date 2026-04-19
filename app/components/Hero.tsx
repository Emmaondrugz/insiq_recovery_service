// import ProfileStack from "./ui/ProfileStack";

import ProfileStack from "./ui/ProfileStack";

export default function Hero() {
    return (
        <div className="flex justify-top sm:pt-20 pt-5 lg:pt-8 flex-col items-center h-full pb-20"
        >
            <div className="relative">
                <div className="flex w-fit pr-3 gap-3 items-center border py-1 pl-1 rounded-full border-gray-400">
                    <div className="flex items-center justify-center sm:w-6 sm:h-6 w-5 h-5 p-1 bg-[#248A3A] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480.5-880t155 31.5q72.5 31.5 127 86t86 127Q880-563 880-480.5T848.5-325q-31.5 73-86 127.5t-127 86Q563-80 480.5-80T325-111.5ZM480-162q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" /></svg>
                    </div>


                    <div className="sm:text-base text-xs">
                        Account & Asset Recovery
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5 max-w-[450] md:max-w-[800px] text-center justify-center items-center mt-5">
                <div className="md:text-6xl lg:text-7xl text-4xl font-medium">
                    Get Started now with Expert Support
                </div>
                <div className="md:text-lg max-w-[600px]">
                    Launch your case and collaborate in a secure space for messages, files, and real-time assistance.
                </div>

                <button className="flex items-center sm:text-base text-sm shadow-xs justify-center px-8 py-2.5 gap-2 bg-[#248A3A] text-white rounded hover:bg-[#1a6b2d] transition-colors">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff">
                            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
                        </svg>
                    </div>
                    Get Immediate Help - $29
                </button>
            </div>

            <div className="mt-10 lg:w-[900px] shadow-md w-full md:h-[370px] relative ">
                <img
                    src="new_hero.avif"
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                />

                <div className="absolute bottom-3 right-3">
                    <ProfileStack
                        images={[
                            "/stack1.jpg",
                            "/stack2.jpg",
                            "/stack3.jpg",
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
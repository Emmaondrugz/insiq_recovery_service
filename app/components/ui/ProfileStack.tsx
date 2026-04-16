import Image from "next/image";

type Props = {
    images: (string | null)[];
    text?: string;
};

const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
];

export default function ProfileStack({
    images,
    text = "Trusted by 20K+ clients",
}: Props) {
    return (
        <div className="flex items-center w-fit bg-white rounded-lg p-3 gap-4">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
                {images.slice(0, 3).map((img, index) => (
                    <div
                        key={index}
                        className="relative sm:w-10 w-8 sm:h-10 h-8 rounded-full border-2 border-white overflow-hidden"
                    >
                        {img ? (
                            <Image
                                src={img}
                                alt="profile"
                                fill
                                sizes="40px"
                                className="object-cover blur-[0.3px]"
                                quality={60} // 👈 reduces sharpness + size
                            />
                        ) : (
                            <div
                                className={`w-full h-full flex items-center justify-center text-white text-xs font-semibold ${colors[index % colors.length]}`}
                            >
                                {String.fromCharCode(65 + index)}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Text + Rating */}
            <div className="flex flex-col">
                <span className="sm:text-sm text-xs font-medium">{text}</span>

                {/* Stars */}
                <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                            key={i}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-yellow-500"
                        >
                            <path d="M12 17.27L18.18 21 16.54 13.97 
              22 9.24l-7.19-.61L12 2 9.19 
              8.63 2 9.24l5.46 4.73L5.82 
              21z" />
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    );
}
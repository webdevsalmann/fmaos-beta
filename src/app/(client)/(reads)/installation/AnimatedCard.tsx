import Image from "next/image"
import FadeUp from "@/components/animations/fade/tsx/FadeUp"
import ZoomIn from "@/components/animations/zoom/tsx/ZoomIn"

export default function AnimatedCard() {
    return (
        <div className="w-full aspect-video rounded-md overflow-y-scroll bg-gradient-to-b from-blue-500 to-violet-500">
            <div className="size-full min-h-full flex-center bg-gradient-to-b from-blue-500 to-indigo-700">
                <div className="text-center text-lg md:text-xl font-medium text-white animate-bounce">
                    Scroll To See Animation
                </div>
            </div>
            <div className="size-full min-h-full flex-center bg-gradient-to-b from-indigo-700 to-violet-500">
                <ZoomIn>
                    <FadeUp>
                        <div className="w-20 sm:w-28 md:w-36 aspect-square bg-white overflow-hidden rounded-md md:rounded-lg">
                            <Image
                                className="my-0 size-full object-center object-cover"
                                src="/images/common/flower.jpg"
                                width={100}
                                height={100}
                                alt="Unsplash Image"
                            />
                        </div>
                    </FadeUp>
                </ZoomIn>
            </div>
        </div>
    )
}

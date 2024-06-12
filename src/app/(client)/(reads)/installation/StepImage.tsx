import Image from "next/image";

export default function StepImage({ imageName }: { imageName: string }) {
    return (
        <Image
            className="object-cover aspect-video w-full rounded-md border"
            src={`/images/installation/${imageName}.png`}
            width={160 * 3}
            height={90 * 3}
            alt={`installation ${imageName}`}
        />
    )
}

import React from "react";
import AnimationContent from "@/components/layouts/animationcontent/AnimationContent";
import ConfigBar from "@/components/layouts/configbar/ConfigBar";

export default function AnimationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex w-full">
            <AnimationContent>
                {children}
            </AnimationContent>
            <ConfigBar />
        </div>
    )
}
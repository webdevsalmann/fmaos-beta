import React from "react";
import ConfigBar from "@/components/layouts/configbar/ConfigBar";
import PaginationButton from "@/components/layouts/maincontent/PaginationButton";

export default function AnimationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex w-full">
            <main className="p-base w-full">
                <article className="w-full max-w-full apply-prose">
                    {children}
                    <PaginationButton />
                </article>
            </main>
            <ConfigBar />
        </div>
    )
}
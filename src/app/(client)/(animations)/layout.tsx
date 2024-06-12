import ConfigBar from "@/components/layouts/configbar/ConfigBar";
import PaginationButton from "@/components/layouts/maincontent/PaginationButton";
import React from "react";

export default function AnimationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex w-full">
            <main className="p-base w-full">
                <article className="prose w-full max-w-full prose-slate dark:prose-invert prose-pre:my-0">
                    {children}
                    <PaginationButton />
                </article>
            </main>
            <ConfigBar />
        </div>
    )
}
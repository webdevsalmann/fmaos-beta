import PaginationButton from "@/components/layouts/maincontent/PaginationButton";
import React from "react";

export default function ReadsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="p-base size-full">
            <article className="size-full prose  prose-slate dark:prose-invert prose-pre:my-0">
                {children}
                <PaginationButton />
            </article>
        </main>
    )
}
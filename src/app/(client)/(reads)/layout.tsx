import { ReactNode } from "react";
import PaginationButton from "@/components/layouts/maincontent/PaginationButton";

export default function ReadsLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <main className="p-base size-full">
            <article className="size-full apply-prose">
                {children}
                <PaginationButton />
            </article>
        </main>
    )
}
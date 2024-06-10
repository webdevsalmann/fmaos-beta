import React from "react";

export default function ReadsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="p-base w-full">
            {children}
        </main>
    )
}
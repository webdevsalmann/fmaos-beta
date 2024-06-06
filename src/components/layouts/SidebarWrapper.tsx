"use client"
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { SidebarClose, SidebarOpen } from "lucide-react";

export default function SidebarWrapper({ children, className }: { children: ReactNode; className?: string }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div
            className={cn("bg-background z-50", "absolute top-0 left-0 bottom-0 ", (sidebarOpen ? "p-base w-3/4 border-r" : "p-0 w-0"), "sm:relative sm:inset-auto sm:p-base sm:w-64 sm:min-w-64 sm:max-w-fit", className)}
        >
            <Button className={cn("absolute top-base right-base z-40 sm:hidden", !sidebarOpen && "-right-14")} variant="secondary" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ?
                    <SidebarClose className="size-4 pointer-events-none" />
                    :
                    <SidebarOpen className="size-4 pointer-events-none" />
                }
            </Button>
            {children}
        </div>
    )
}
"use client"
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { SidebarClose, SidebarOpen } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SidebarWrapper({ children, className }: { children: ReactNode; className?: string }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div
            className={cn(
                "bg-background z-50",
                "absolute top-0 left-0 bottom-0 ",
                (sidebarOpen ? "p-base w-3/4 sm:w-1/2 md:w-1/3 border-r" : "p-0 w-0"), "lg:relative lg:inset-auto lg:p-base lg:w-64 lg:min-w-64 lg:max-w-fit",
                className)}
        >
            <Button className={cn("absolute top-base z-40 lg:hidden", (sidebarOpen ? "right-base" : "-right-14"))} variant="secondary" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ?
                    <SidebarClose className="size-4 pointer-events-none" />
                    :
                    <SidebarOpen className="size-4 pointer-events-none" />
                }
            </Button>
            <div className="sticky top-0">
                <ScrollArea className="h-[calc(100vh_-_5rem)]">

                    {children}

                    <div className="absolute inset-0 bottom-auto w-full h-base bg-gradient-to-b from-background to-transparent pointer-events-none" />
                    <div className="absolute inset-0 top-auto w-full h-base bg-gradient-to-t from-background to-transparent pointer-events-none" />
                </ScrollArea>
            </div>
        </div >
    )
}
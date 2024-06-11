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
                "absolute bg-background z-50",
                (sidebarOpen ? "w-3/4 sm:w-1/2 md:w-1/3 border-r" : "w-0"),
                "lg:relative lg:w-64 lg:min-w-64 lg:max-w-fit lg:border-r",
                className)}
        >
            <div className="relative w-full">
                <div className={cn(
                    "relative w-full h-full p-base",
                    "lg:fixed lg:inset-0 lg:w-64",
                )}>
                    <div className="relative">
                        <Button className={cn("absolute top-base z-40 lg:hidden", (sidebarOpen ? "right-base" : "-right-14"))} variant="secondary" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            {sidebarOpen ?
                                <SidebarClose className="size-4 pointer-events-none" />
                                :
                                <SidebarOpen className="size-4 pointer-events-none" />
                            }
                        </Button>
                        <ScrollArea className="relative h-[calc(100vh_-_2rem)]">

                            {children}

                            <div className="absolute inset-0 bottom-auto w-full h-xl bg-gradient-to-b from-background to-transparent pointer-events-none" />
                            <div className="absolute inset-0 top-auto w-full h-xl bg-gradient-to-t from-background to-transparent pointer-events-none" />
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </div >
    )
}
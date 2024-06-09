import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function ControllerWrapper({ className, children }: { className?: string; children: ReactNode }) {
    return (
        <div className={cn("relative hidden p-4 border-l", "md:block md:w-1/3", className)}>
            <div className="relative top-base p-2 w-full rounded-md border">
                {/* <ScrollArea className="h-[calc(100vh_-_100px)]"> */}
                <div className="divide-y">
                    <div className="mb-2 text-lg font-semibold capitalize">
                        Animation Controller
                    </div>
                    {children}
                </div>
                {/* <div className="absolute inset-0 bottom-auto w-full h-base bg-gradient-to-b from-background to-transparent pointer-events-none" />
                    <div className="absolute inset-0 top-auto w-full h-base bg-gradient-to-t from-background to-transparent pointer-events-none" /> */}
                {/* </ScrollArea> */}
            </div>
        </div>
    )
}

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function ControlWrapper({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn("p-2", className)}>
            {children}
        </div>
    )
}

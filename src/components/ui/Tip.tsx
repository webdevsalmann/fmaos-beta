import { ReactNode } from "react"
import { Tooltip, TooltipContent, TooltipTrigger, } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";

export default function Tip({ children, toolTip, className }: {
    children: ReactNode;
    toolTip: ReactNode
    className?: string
}) {
    return (
        <div className={cn(className)}>
            <Tooltip>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    {toolTip}
                </TooltipContent>
            </Tooltip>
        </div>
    )
}

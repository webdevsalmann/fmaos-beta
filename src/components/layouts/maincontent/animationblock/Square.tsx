import { cn } from "@/lib/utils"

export default function Square({ className }: { className?: string }) {
    return (
        <div className={cn("w-20 sm:w-28 md:w-36 aspect-square bg-white rounded-2xl sm:rounded-3xl transition-all", className)} />
    )
}

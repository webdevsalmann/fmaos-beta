"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, Divide } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import websiteDatas from "@/lib/consts/WebsiteDatas";

let paginationPaths = websiteDatas.map(item => item.href.substring(1));
const index = paginationPaths.indexOf("introduction");
if (index !== -1) {
    paginationPaths.splice(index + 1, 0, "installation");
}

export default function PaginationButton() {
    const pathname = usePathname();
    const pageName = pathname.split("/")[1];
    const currentIndex = paginationPaths.indexOf(pageName);
    const PageInclude = paginationPaths.includes(pageName);
    const previousPath = PageInclude ? (currentIndex > 0 ? `/${paginationPaths[currentIndex - 1]}` : null) : null;
    const nextPath = PageInclude ? (currentIndex < paginationPaths.length - 1 ? `/${paginationPaths[currentIndex + 1]}` : null) : null;
    
    return (
        <div className="mt-base flex-between">
            {previousPath ? (
                <Link className={cn(buttonVariants({ variant: "outline" }), "p-8 flex items-center capitalize no-underline")} href={previousPath}>
                    <ArrowLeft className="mr-2 size-5 inline stroke-2 select-none" />
                    {paginationPaths[currentIndex - 1]}
                </Link>
            ) : <div></div>}

            {nextPath ? (
                <Link className={cn(buttonVariants({ variant: "outline" }), "p-8 flex items-center capitalize no-underline")} href={nextPath}>
                    {paginationPaths[currentIndex + 1]}
                    <ArrowRight className="ml-2 size-5 inline stroke-2 select-none" />
                </Link>
            ):<div></div>}
        </div>
    );
}

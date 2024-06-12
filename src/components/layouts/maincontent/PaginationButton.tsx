"use client"
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { paginationDatas } from "@/lib/consts/paginationDatas";
import { cn } from "@/lib/utils";

export default function PaginationButton() {
    const pathname = usePathname();
    const pageName = pathname.split("/")[1];
    const currentIndex = paginationDatas.indexOf(pageName);
    const PageInclude = paginationDatas.includes(pageName);
    const previousPath = PageInclude ? (currentIndex > 0 ? `/${paginationDatas[currentIndex - 1]}` : null) : null;
    const nextPath = PageInclude ? (currentIndex < paginationDatas.length - 1 ? `/${paginationDatas[currentIndex + 1]}` : null) : null;

    return (
        <div className="mt-base flex-between">
            {previousPath && (
                <Link className={cn(buttonVariants({ variant: "outline" }), "p-8 flex items-center capitalize no-underline")} href={previousPath}>
                    <ArrowLeft className="mr-2 size-5 inline stroke-2 select-none" />
                    {paginationDatas[currentIndex - 1]}
                </Link>
            )}

            {nextPath && (
                <Link className={cn(buttonVariants({ variant: "outline" }), "p-8 flex items-center capitalize no-underline")} href={nextPath}>
                    {paginationDatas[currentIndex + 1]}
                    <ArrowRight className="ml-2 size-5 inline stroke-2 select-none" />
                </Link>
            )}
        </div>
    );
}

"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FolderDown } from "lucide-react";
import { useFileManagement } from "@/components/providers/FileManagementContext";

export default function DownloadFolderButton() {
    const { downloadableFiles } = useFileManagement();

    return (
        <Link className={cn(buttonVariants({ variant: "outline", size: "icon" }), "relative")} href="/download-folder">
            {downloadableFiles.length > 0 && (
                <div className="absolute -top-2.5 -right-2.5 size-5 bg-yellow-500 text-black text-xs flex-center rounded-full">{downloadableFiles.length}</div>
            )}

            <FolderDown className="size-[1.2rem]" />
            <span className="sr-only">Download Folder</span>
        </Link>
    )
}

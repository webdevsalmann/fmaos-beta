"use client"

import { Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Tip from "@/components/ui/Tip";
import { cn, handleDownloadFile, } from "@/lib/utils";

interface DownloadFileButtonProps {
    filePath: string;
    className?: string;
}

const DownloadFileButton: React.FC<DownloadFileButtonProps> = ({ className, filePath }) => {
    return (
        <Tip toolTip={(<p className='my-0'>Copy to clipboard</p>)}>
            <div className={cn(buttonVariants({ variant: "outline", size: "icon" }),
                "size-6 sm:size-8", className)}
                onClick={() => handleDownloadFile({ filePath })}
                tabIndex={0}>
                <span className='sr-only'>Download</span>
                <Download className='size-3 sm:size-4 pointer-events-none' />
            </div>
        </Tip>
    );
};

export default DownloadFileButton;

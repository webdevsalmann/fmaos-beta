"use client"
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn, handleDownloadFile, } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface DownloadFileButtonProps {
    filePath: string;
    className?: string;
}

const DownloadFileButton: React.FC<DownloadFileButtonProps> = ({ className, filePath }) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    className={cn("size-6 sm:size-8", className)}
                    variant="outline"
                    size='icon'
                    onClick={() => handleDownloadFile({ filePath })}>
                    <span className='sr-only'>Download</span>
                    <Download className='size-3 sm:size-4 pointer-events-none' />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p className='my-0'>Download this file</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default DownloadFileButton;

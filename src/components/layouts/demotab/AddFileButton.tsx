"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileMinus2, FilePlus2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useFileManagement } from "@/components/providers/FileManagementContext";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface DownloadFileButtonProps {
    filePath: string;
    className?: string;
}

const AddFileButton: React.FC<DownloadFileButtonProps> = ({ filePath, className }) => {
    const { downloadableFiles, addFile, removeFile } = useFileManagement();
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleAddFile = () => {
        if (!downloadableFiles.some(file => file === filePath)) {
            addFile(filePath);
        }
    };

    const handleRemoveFile = () => {
        removeFile(filePath);
        setDialogOpen(false);
    };

    const isFileInFolder = downloadableFiles.some(file => file === filePath);

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    className={cn("size-6 sm:size-8", className)}
                    variant={isFileInFolder ? "secondary" : "outline"}
                    size='icon'
                    onClick={!isFileInFolder ? handleAddFile : () => setDialogOpen(true)}
                >
                    {isFileInFolder ?
                        <FileMinus2 className='size-3 sm:size-4 pointer-events-none' />
                        :
                        <FilePlus2 className='size-3 sm:size-4 pointer-events-none' />
                    }
                    <span className='sr-only'>{isFileInFolder ? 'Remove from folder' : 'Add to folder'}</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p className='my-0'>{isFileInFolder ? 'Remove from folder' : 'Add to folder'}</p>
            </TooltipContent>

            {isDialogOpen && (
                <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                    <AlertDialogTrigger asChild>
                        <div />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                You want to remove this file from the folder?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setDialogOpen(false)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={handleRemoveFile}>Yes Remove</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </Tooltip>
    );
};

export default AddFileButton;

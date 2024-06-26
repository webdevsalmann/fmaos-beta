"use client"

import { FileMinus2, FilePlus2 } from "lucide-react";
import { useFileManagement } from "@/components/providers/FileManagementContext";
import { buttonVariants } from "@/components/ui/button";
import ConfirmationAlertDialog from "@/components/ui/ConfirmationAlertDialog";
import Tip from "@/components/ui/Tip";
import { cn } from "@/lib/utils";

interface DownloadFileButtonProps {
    filePath: string;
    className?: string;
}

const AddFileButton: React.FC<DownloadFileButtonProps> = ({ filePath, className }) => {
    const { downloadableFiles, addFile, removeFile } = useFileManagement();

    const handleAddFile = () => {
        if (!downloadableFiles.some(file => file === filePath)) {
            addFile(filePath);
        }
    };

    const isFileInFolder = downloadableFiles.some(file => file === filePath);
    return (

        <Tip toolTip={(<p className='my-0'>{isFileInFolder ? 'Remove from folder' : 'Add to folder'}</p>)}>
            <div className={cn(buttonVariants({ variant: "outline", size: "icon" }),
                "size-6 sm:size-8", isFileInFolder && "bg-muted", className)}
                onClick={handleAddFile}
                tabIndex={0}
            >
                {isFileInFolder
                    ? <ConfirmationAlertDialog onClick={() => removeFile(filePath)}>
                        <FileMinus2 className='size-3 sm:size-4 pointer-events-none' />
                    </ConfirmationAlertDialog>
                    : <FilePlus2 className='size-3 sm:size-4 pointer-events-none' />
                }
                <span className='sr-only'>{isFileInFolder ? 'Remove from folder' : 'Add to folder'}</span>
            </div>
        </Tip>
    );
};

export default AddFileButton;

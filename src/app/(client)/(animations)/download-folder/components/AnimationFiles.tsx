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
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { FileMinus2 } from "lucide-react";
import { useState } from "react";

export default function AnimationFiles() {
    const { downloadableFiles, removeFile } = useFileManagement();
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [fileToRemove, setFileToRemove] = useState<string | null>(null);

    const openRemoveDialog = (filePath: string) => {
        setFileToRemove(filePath);
        setDialogOpen(true);
    };

    const handleRemoveFile = () => {
        if (fileToRemove) {
            removeFile(fileToRemove);
            setDialogOpen(false);
            setFileToRemove(null);
        }
    };
    return (
        <>
            <section>
                <h2>Selected animation files</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-base">
                    {downloadableFiles.map((item) => {
                        const fileName = item.substring(item.lastIndexOf("/") + 1);
                        const fileExt = item.substring(item.lastIndexOf(".") + 1);
                        return (
                            <div className={cn("relative px-4 py-2 bg-muted rounded")} key={fileName}>
                                <div
                                    className={cn(
                                        "break-words",
                                        fileExt === "jsx" ? "text-yellow-600 dark:text-yellow-400" : "text-blue-600 dark:text-blue-400"
                                    )}
                                >{fileName}</div>
                                <div className="absolute top-2 right-2">
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                className="size-6 hover:bg-background/50"
                                                variant="outline"
                                                size="icon"
                                                onClick={() => openRemoveDialog(item)}
                                            >
                                                <FileMinus2 className="size-3 pointer-events-none" />
                                                <span className="sr-only">Remove from folder</span>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="my-0">Remove from folder</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <RemoveFileDialog isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} handleRemoveFile={handleRemoveFile} />
        </>
    )
}

function RemoveFileDialog({
    isDialogOpen,
    setDialogOpen,
    handleRemoveFile,
}: {
    isDialogOpen: boolean;
    setDialogOpen: (isOpen: boolean) => void;
    handleRemoveFile: () => void;
}) {
    return (
        <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <AlertDialogTrigger asChild>
                <div />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>Do you really want to remove this file from the folder?</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setDialogOpen(false)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={handleRemoveFile}>
                        Yes Remove
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

import { FileMinus2 } from "lucide-react";
import { useFileManagement } from "@/components/providers/FileManagementContext";
import ConfirmationAlertDialog from "@/components/ui/ConfirmationAlertDialog";
import { buttonVariants } from "@/components/ui/button";
import Tip from "@/components/ui/Tip";
import { cn } from "@/lib/utils";

export default function AnimationFiles() {
    const { downloadableFiles, removeFile } = useFileManagement();
    return (
        <>
            <section>
                <h2>Selected animation files</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-base">
                    {downloadableFiles.map((filePath) => {
                        const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
                        const fileExt = filePath.substring(filePath.lastIndexOf(".") + 1);
                        return (
                            <div className={cn("relative px-4 py-2 bg-muted rounded")} key={fileName}>
                                <div className={cn(
                                    "break-words",
                                    fileExt === "jsx" ? "text-yellow-600 dark:text-yellow-400" : "text-blue-600 dark:text-blue-400"
                                )}
                                >{fileName}</div>
                                
                                <Tip className="absolute top-2 right-2" toolTip={(<p className='my-0'>Remove from folder</p>)}>
                                    <ConfirmationAlertDialog onClick={() => removeFile(filePath)}>
                                        <div className={cn(buttonVariants({ variant: "outline", size: "icon" }),
                                            "size-6 hover:bg-background/50")}>
                                            <FileMinus2 className="size-3 pointer-events-none" />
                                            <span className="sr-only">Remove from folder</span>
                                        </div>
                                    </ConfirmationAlertDialog>
                                </Tip>
                            </div>
                        );
                    })}
                </div>
            </section >
        </>
    )
}
"use client"
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import getCodeFile from "@/components/helpers/getCodeFile";

interface DownloadFileButtonProps {
    filePath: string;
    className?: string;
}

const DownloadFileButton: React.FC<DownloadFileButtonProps> = ({ filePath, className }) => {
    const lastIndex = filePath.lastIndexOf('/');
    const fileName = filePath.substring(lastIndex + 1);

    const handleDownload = async () => {
        try {
            const fileContent = await getCodeFile(filePath); // Await here
            
            // Create a Blob from the file content
            const blob = new Blob([fileContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            
            document.body.appendChild(link);
            link.click();
            
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };
    


    return (
        <>
            <Button className={cn("size-6 sm:size-8", className)} variant="outline" size='icon' onClick={handleDownload}>
                <Download className='size-3 sm:size-4 pointer-events-none' />
            </Button>
        </>
    );
};

export default DownloadFileButton;

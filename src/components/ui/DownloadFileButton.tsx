import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadFileButtonProps {
    filePath: string;
    className?: string;
}

const DownloadFileButton: React.FC<DownloadFileButtonProps> = ({ className, filePath }) => {
    const lastIndex = filePath.lastIndexOf('/');
    const fileName = filePath.substring(lastIndex + 1);

    const handleDownload = async () => {
        const response = await fetch('/api/download', { method: "POST", body: JSON.stringify(filePath) });
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }

    return (
        <>
            <Button className={cn("size-6 sm:size-8", className)} variant="outline" size='icon' onClick={handleDownload}>
                <Download className='size-3 sm:size-4 pointer-events-none' />
            </Button>
        </>
    );
};

export default DownloadFileButton;

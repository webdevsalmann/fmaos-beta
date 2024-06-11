import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from '@/components/ui/use-toast';
import getCodeFile from "@/components/helpers/getCodeFile";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      toast({
        title: "Code copied to clipboard!",
      })
    })
    .catch((error) => {
      toast({
        title: "Failed to copy code, Please try again",
        variant: "destructive"
      })
      console.error('Failed to copy code: ', error);
    });
};

export const handleDownloadFile = async ({
  filePath,
  file,
}: {
  filePath?: string;
  file?: { name: "FmaosConfigProvider.jsx" | "FmaosConfigProvider.tsx"; content: string };
}) => {
  try {
    let content: string;
    let fileName: string;
    let fileType: string;

    if (filePath) {
      fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
      content = await getCodeFile(filePath);
      fileType = filePath.split(".").pop() || "txt"; // Fallback to "txt" if undefined
    } else if (file) {
      content = file.content;
      fileName = file.name;
      fileType = file.name.split(".").pop() || "txt"; // Fallback to "txt" if undefined
    } else {
      throw new Error("No file or filePath provided");
    }

    const blob = new Blob([content], { type: fileType === "jsx" ? "text/javascript" : "text/typescript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};